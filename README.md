# Prueba Técnica - Autoppia

Este repositorio contiene la solución a la prueba técnica para el puesto de AI Agent Engineer en Autoppia.

## 📋 Descripción
El objetivo de la prueba es demostrar habilidades en la creación y evaluación de Agentes de IA Web. El proyecto se divide en tres partes principales:

1.  **Parte 1 - React & Frontend (Web Development):** Implementación de una nueva sección interactiva ("Trending Destinations") en el dashboard de `web_8_autolodge`, asegurando coherencia visual y el envío correcto de eventos (Analytics).
2.  **Parte 2 - Agente "Simple" (AI Engineering):** Desarrollo de un agente en Python capaz de recibir una tarea en lenguaje natural ("Rellena el formulario..."), navegar a la URL objetivo, e interactuar con el DOM para completar y enviar un formulario de contacto con éxito.
3.  **Parte 3 - Benchmarking (Evaluation):** Ejecución de una batería de pruebas estandarizadas (Benchmark) para medir el rendimiento del agente. Se valida que el agente sea eficaz en su especialidad (formularios) y robusto ante tareas desconocidas (fallo controlado).

## 🚀 Instalación y Clonado

Para clonar este repositorio:

```bash
git clone https://github.com/RodriGGod/AUTOPPIA-PRUEBA-TECNICA.git
cd AUTOPPIA-PRUEBA-TECNICA
```

---

## 🛠️ Ejecución de las Pruebas

El repositorio está documentado detalladamente por partes en la carpeta `Docs/`. A continuación, un resumen de los comandos necesarios para iniciar cada prueba.

### 🔹 [Part 1: React - New Section in Dashboard](Docs/README_PART1.md)
Implementación de una sección de "Destinos en Tendencia" (Carrusel) en la plataforma de reservas de hotel (`autolodge`). Esta nueva feature es interactiva, visualmente coherente con el diseño existente y envía eventos de telemetría al interactuar con ella.

**Comandos de Inicialización y Prueba:**
```bash
# 1. Navegar al directorio del proyecto web específico
cd autoppia_webs_demo/web_8_autolodge

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

**Cómo Probarlo:**
1.  Abrir el navegador en `http://localhost:3000`.
2.  Hacer scroll en el Dashboard principal hasta encontrar la sección **"Trending Destinations"**.
3.  Interactuar con el carrusel (Pasar el ratón, hacer click en las tarjetas).
4.  *Verificación:* Comprobar en la consola del navegador o terminal que se dispara el evento `SELECT_DESTINATION` con los datos correctos (source: 'dashboard', section: 'trending_carousel').

### 🔹 [Parte 2: Implementación del Agente](Docs/README_PART2.md)
Creación y visualización del "Simple Agent" resolviendo el formulario de contacto.

**Comandos de Prueba:**
```bash
# 1. Preparar Entorno del Agente (Solo la primera vez)
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Mac/Linux:
# source venv/bin/activate
pip install flask

# 2. Iniciar el servidor del agente (en una terminal nueva)
python simple_agent/agent_server.py

# 2. Ejecutar la visualización (requiere Docker)
cd autoppia_iwa
python -m autoppia_iwa.entrypoints.technical_test_agent.run_visualization
```
> [Ver documentación completa de la Parte 2](Docs/README_PART2.md)

### 🔹 [Parte 3: Benchmark Completo](Docs/README_PART3.md)
Evaluación del rendimiento del agente frente a múltiples casos de uso.

**Comandos de Benchmark:**
```bash
# Ejecutar benchmark estableciendo el puerto de inicio
cd autoppia_iwa
# PowerShell:
$env:DEMO_WEBS_STARTING_PORT=8000; python -m autoppia_iwa.entrypoints.technical_test_agent.run_benchmark
# Bash:
DEMO_WEBS_STARTING_PORT=8000 python -m autoppia_iwa.entrypoints.technical_test_agent.run_benchmark
```
> [Ver documentación completa de la Parte 3](Docs/README_PART3.md)

### ✨ [Bonus: Mejoras y Análisis](Docs/BONUS.md)
Explicación de las mejoras implementadas (detección de tareas, formularios dinámicos) y análisis del "Modo Dinámico" del benchmark.

> [Leer sobre las mejoras del Agente](Docs/BONUS.md)

---

**Autor:** Rodrigo Blanco
