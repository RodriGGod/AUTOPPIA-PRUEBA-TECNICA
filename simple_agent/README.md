# 🤖 Simple Agent - README

Este es tu agente simple que resuelve el task del formulario de contacto.

## 📁 Estructura del Proyecto

```
simple_agent/
├── agent_server.py    # Servidor Flask con el endpoint /solve_task
└── README.md          # Este archivo
```

---

## 🚀 Cómo Ejecutar

### 1️⃣ Instalar dependencias

```bash
pip install flask
```

### 2️⃣ Iniciar el servidor del agente

```bash
cd d:/DEVELOPER/Curro/Auttopia/simple_agent
python agent_server.py
```

Deberías ver:
```
🤖 Simple Agent Server
Running on: http://127.0.0.1:7000
```

### 3️⃣ Inspeccionar el formulario (IMPORTANTE)

Antes de ejecutar el test, necesitas saber los IDs reales de los campos del formulario:

1. Asegúrate de que el servidor web esté corriendo:
   ```bash
   cd d:/DEVELOPER/Curro/Auttopia/autoppia_webs_demo
   ./scripts/setup.sh --demo=autocinema --web_port=8000
   ```

2. Abre tu navegador en: `http://localhost:8000?seed=42`

3. Presiona `F12` para abrir DevTools

4. Busca los IDs de:
   - Campo "subject" (input para el asunto)
   - Campo "message" (textarea para el mensaje)
   - Botón "submit" (botón de envío)

5. Actualiza estos IDs en `agent_server.py` en las líneas marcadas con `⚠️ CAMBIAR`

### 4️⃣ Ejecutar el test

Una vez que tu servidor esté corriendo y hayas actualizado los IDs:

```bash
cd d:/DEVELOPER/Curro/Auttopia/autoppia_iwa
python -m autoppia_iwa.entrypoints.technical_test_agent.test_contact_task
```

---

## 📝 Formato del Request

Tu servidor recibirá un POST a `/solve_task` con este JSON:

```json
{
  "id": "uuid-del-task",
  "url": "http://localhost:8000?seed=42",
  "prompt": "Fill the contact form with a subject equal to 'Job Position' and message contains 'I am the best developer'",
  "tests": [
    {
      "type": "CheckEventTest",
      "event_name": "CONTACT",
      "event_criteria": {
        "subject": {"operator": "equals", "value": "Job Position"},
        "message": {"operator": "contains", "value": "I am the best developer"}
      }
    }
  ]
}
```

---

## 📤 Formato del Response

Tu servidor debe devolver:

```json
{
  "actions": [
    {
      "type": "NavigateAction",
      "url": "http://localhost:8000?seed=42"
    },
    {
      "type": "WaitAction",
      "time_seconds": 1.5
    },
    {
      "type": "ClickAction",
      "selector": {
        "type": "attributeValueSelector",
        "attribute": "id",
        "value": "subject"
      }
    },
    {
      "type": "TypeAction",
      "text": "Job Position",
      "selector": {
        "type": "attributeValueSelector",
        "attribute": "id",
        "value": "subject"
      }
    }
  ]
}
```

---

## ✅ Criterios de Éxito

El test pasará si:

1. ✅ El campo "subject" contiene exactamente: `"Job Position"`
2. ✅ El campo "message" contiene: `"I am the best developer"`
3. ✅ Se dispara el evento `CONTACT` con estos valores

---

## 🐛 Troubleshooting

### Error: "Connection refused"
- **Causa**: El servidor no está corriendo
- **Solución**: Ejecuta `python agent_server.py`

### Error: "Selector not found"
- **Causa**: Los IDs del formulario son incorrectos
- **Solución**: Inspecciona el HTML real y actualiza los IDs en `agent_server.py`

### Error: "Test failed - wrong values"
- **Causa**: El texto no es exacto
- **Solución**: Verifica que uses exactamente:
  - Subject: `"Job Position"` (con mayúsculas)
  - Message: `"I am the best developer"`

### Error: "Seed mismatch"
- **Causa**: Estás modificando la URL del task
- **Solución**: Usa `task_url` directamente sin modificarlo
