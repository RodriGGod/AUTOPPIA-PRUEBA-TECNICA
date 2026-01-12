"""
Simple Agent Server - Flask Implementation
==========================================

Este servidor implementa el endpoint /solve_task que recibe un Task
y devuelve un array de acciones para completar el formulario de contacto.

Uso:
    python agent_server.py

El servidor se ejecutará en http://127.0.0.1:7000
"""

from flask import Flask, request, jsonify
import logging
import re

# Configurar logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

def detect_task_type(prompt):
    """Detecta el tipo de tarea basado en el prompt."""
    prompt_lower = prompt.lower()
    if any(keyword in prompt_lower for keyword in ['fill', 'completar', 'form', 'contact']):
        return 'FORM_FILLING'
    return 'UNKNOWN'

def extract_form_fields(prompt):
    """
    Extrae campos y valores del prompt usando heurísticas.
    Soporta formatos: "subject equal to 'Value'", "message contains 'Value'"
    """
    fields = {}
    
    
    # Patrones de extracción
    # 1. Matches quoted values: subject equal to 'Value'
    # 2. Matches unquoted single words, BUT ensures they don't start with a quote
    patterns = [
        r"(\w+)\s+(?:equal to|equals|is|contains)\s+['\"]([^'\"]+)['\"]",
        r"(\w+)\s+(?:equal to|equals|is|contains)\s+(?!['\"])([^\s]+)"
    ]
    
    for pattern in patterns:
        matches = re.findall(pattern, prompt, re.IGNORECASE)
        for key, value in matches:
            # Only set if not already present or if the new value is longer/more specific
            # But in this case, patterns are ordered by specificity (quoted first)
            if key.lower() not in fields:
                fields[key.lower()] = value
            
    return fields

def get_field_selector(field_name):
    """Devuelve un selector heurístico basado en el nombre del campo."""
    # Mapeo de campos conocidos a sus placeholders (Mejora: esto podría ser dinámico o configurado)
    known_placeholders = {
        "name": "Your name",
        "email": "you@example.com",
        "subject": "What do you need?",
        "message": "What scene do you need?"
    }
    
    placeholder = known_placeholders.get(field_name, field_name.capitalize())
    
    return {
        "type": "attributeValueSelector",
        "attribute": "placeholder",
        "value": placeholder
    }

def generate_form_actions(url, fields):
    """Genera una secuencia de acciones robusta para completar formularios."""
    actions = []
    
    # 1. Navegación inicial
    actions.append({"type": "NavigateAction", "url": url})
    # Reducimos espera inicial al mínimo necesario para carga de DOM
    actions.append({"type": "WaitAction", "time_seconds": 1.5})
    
    # 2. Asegurar visibilidad (Scroll) - Eliminamos espera posterior innecesaria
    actions.append({"type": "ScrollAction", "down": True, "value": None})
    
    # 3. Campos identidad (Defaults si no están en el prompt)
    identity_fields = {
        "name": "Agent Smith",
        "email": "agent@example.com"
    }
    
    # Fusionar campos: identidad < prompt
    final_fields = identity_fields.copy()
    final_fields.update(fields)
    
    # Orden lógico de llenado
    priority_order = ["name", "email", "subject", "message"]
    sorted_field_keys = sorted(final_fields.keys(), key=lambda k: priority_order.index(k) if k in priority_order else 99)
    
    for key in sorted_field_keys:
        value = final_fields[key]
        selector = get_field_selector(key)
        
        # Eliminamos ClickAction explícito y esperas intermedias
        # TypeAction debería manejar el foco automáticamente en la mayoría de runners
        actions.append({"type": "TypeAction", "text": value, "selector": selector})

    # 4. Submit
    submit_selector = {
        "type": "xpathSelector",
        "value": "//section[@id='contact']//button[@type='submit']"
    }
    
    actions.append({"type": "ClickAction", "selector": submit_selector})
    # Espera suficiente para que el evento se registre y la prueba verifique, pero no excesiva
    actions.append({"type": "WaitAction", "time_seconds": 2.0})
    
    return actions

@app.route('/solve_task', methods=['POST'])
def solve_task():
    """
    Endpoint inteligente que analiza el task y decide la estrategia.
    """
    try:
        task = request.get_json()
        if not task:
            return jsonify({"error": "No task provided"}), 400
        
        task_id = task.get('id')
        task_url = task.get('url')
        prompt = task.get('prompt', '')
        
        logger.info(f"Processing Task: {task_id} | Type detection...")
        
        # 1. Detectar tipo de tarea
        task_type = detect_task_type(prompt)
        logger.info(f"Detected Task Type: {task_type}")
        
        actions = []
        
        if task_type == 'FORM_FILLING':
            # 2. Manejar estructura de formulario
            fields = extract_form_fields(prompt)
            logger.info(f"Extracted Fields: {fields}")
            actions = generate_form_actions(task_url, fields)
            
        else:
            # Fallback a comportamiento default o simple navegación
            logger.warning("Unrecognized task type, defaulting to navigation")
            actions = [
                {"type": "NavigateAction", "url": task_url},
                {"type": "WaitAction", "time_seconds": 2.0}
            ]
            
        return jsonify({"actions": actions})
        
    except Exception as e:
        logger.error(f"Error processing task: {str(e)}")
        # Retry logic: En caso de error fatal, devolver al menos una espera para no romper el cliente
        return jsonify({"actions": [{"type": "WaitAction", "time_seconds": 1.0}]}), 500


@app.route('/health', methods=['GET'])
def health():
    """Endpoint de salud para verificar que el servidor está corriendo."""
    return jsonify({"status": "ok", "message": "Agent server is running"})


if __name__ == '__main__':
    print("=" * 60)
    print("🤖 Simple Agent Server Auttopia")
    print("=" * 60)
    print("📍 Running on: http://127.0.0.1:7000")
    print("📝 Endpoint: POST /solve_task")
    print("=" * 60)
    print("    en http://localhost:8000?seed=42\n")
    
    app.run(host='127.0.0.1', port=7000, debug=True)
