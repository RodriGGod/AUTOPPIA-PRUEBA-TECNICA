# Guía de Verificación - Prueba Técnica Autoppia

Este documento detalla los pasos paso a paso para verificar que las 3 partes de la prueba técnica funcionan correctamente.

## 📋 Prerrequisitos Críticos

1. **Docker Desktop**: Debe estar instalado y **corriendo**. Los scripts de setup fallarán si Docker no está activo.
2. **Puertos**: Asegúrate de que los puertos 8000, 8100, 8090 y 7000 estén libres.

---

## 🏗️ Parte 1: React - Nueva Sección en Dashboard

**Objetivo:** Verificar la nueva sección "Trending Destinations" en Autolodge.

1. **Iniciar la web de Autolodge:**
   Desde la raíz del proyecto (`Auttopia`):
   ```bash
   cd autoppia_webs_demo
   ./scripts/setup.sh --demo=autolodge --web_port=8000
   ```
   *Espera a que termine la instalación y despliegue (puede tardar unos minutos).*

2. **Verificación Visual:**
   - Abre tu navegador en `http://localhost:8000`.
   - Haz scroll hacia abajo en la página principal.
   - Debes ver una nueva sección con título **"Trending Destinations"**.
   - **Funcionalidad:**
     - El carrusel debe moverse automáticamente cada 3 segundos.
     - Al pasar el mouse por encima, el movimiento debe detenerse.
     - Haz clic en las flechas izquierda/derecha para navegar manualmente.

3. **Verificación de Eventos:**
   - Abre la consola de desarrollador del navegador (F12).
   - Haz clic en cualquiera de las tarjetas de los hoteles en la sección "Trending Destinations".
   - En la consola, busca un log que empiece por `📦 Logging Event:`.
   - Verifica que el `event_name` sea `TRENDING_DESTINATION_CLICKED`.

---

## 🤖 Parte 2: Simple Agent

**Objetivo:** Comprobar que el agente (servidor Flask) resuelve la tarea específica del formulario de contacto.

1. **Desplegar AutoCinema y Backend (si no se hizo en el paso anterior):**
   *Nota: Esta parte usa `autocinema`, no `autolodge`. Hay que reiniciar el entorno.*
   ```bash
   cd autoppia_webs_demo
   ./scripts/setup.sh --demo=autocinema --web_port=8000
   ```
   *Esto levantará el frontend en puerto 8000 y el backend en 8090.*

2. **Arrancar el Agente:**
   Abre una **nueva terminal** en la raíz (`Auttopia`):
   ```bash
   python simple_agent/agent_server.py
   ```
   *Verás: `📍 Running on: http://127.0.0.1:7000`*

3. **Ejecutar el Test de Validación:**
   Abre una **tercera terminal** en la raíz (`Auttopia`):
   *Importante: Definimos el puerto 8000 explícitamente para asegurar la conexión.*
   ```bash
   cd autoppia_iwa
   # En PowerShell:
   $env:DEMO_WEBS_STARTING_PORT=8000; python -m autoppia_iwa.entrypoints.technical_test_agent.test_contact_task
   # O en Bash:
   DEMO_WEBS_STARTING_PORT=8000 python -m autoppia_iwa.entrypoints.technical_test_agent.test_contact_task
   ```

**✅ Resultado Esperado:**
Verás un mensaje final verde indicando éxito:
```
🎉 SUCCESS! The agent successfully completed the contact form task.
Final Score: 1.0
```

---

## 📊 Parte 3: Benchmark Completo

**Objetivo:** Ejecutar el benchmark completo para evaluar el agente frente a múltiples tareas.

*Requiere que los pasos 1 y 2 de la Parte 2 estén corriendo (Web Autocinema y Agente).*

1. **Ejecutar Benchmark:**
   En la terminal de `autoppia_iwa`:
   ```bash
   # En PowerShell:
   $env:DEMO_WEBS_STARTING_PORT=8000; python -m autoppia_iwa.entrypoints.technical_test_agent.run_benchmark
   # O en Bash:
   DEMO_WEBS_STARTING_PORT=8000 python -m autoppia_iwa.entrypoints.technical_test_agent.run_benchmark
   ```

**Resultados Esperados:**
- El benchmark iterará por varias tareas (`LOGIN`, `FILM_DETAIL`, etc.).
- **Es normal** que la mayoría fallen (`❌ FAILED`), ya que es un "Simple Agent" diseñado específicamente para el formulario.
- La tarea de **CONTACT** debe aparecer como `✅ PASSED`.

---

## 🆘 Solución de Problemas Comunes

- **Error "Docker daemon not running":** Abre Docker Desktop y espera a que el icono deje de parpadear antes de ejecutar `setup.sh`.
- **Error de conexión (Connection refused):** Si el test falla conectando al puerto 8090, es probable que el contenedor `webs_server` no haya levantado bien. Ejecuta `docker ps` para verificar.
- **Error de puertos en uso:** Si `setup.sh` se queja de puertos, mata los procesos de node/python anteriores o reinicia la terminal.
