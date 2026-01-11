# Implementación Parte 2: Agente Simple

Este documento describe la implementación de un agente simple capaz de resolver una tarea específica de formulario en el entorno de Autoppia.

## 🚀 Guía de Ejecución Definitiva

Sigue estos pasos para reproducir el éxito (Score 1.0) en la prueba técnica.

### 1. Estado del Entorno (Docker)
Para que el test funcione, deben estar corriendo 3 contenedores:
1.  **Frontend**: `web_1_autocinema-web-1` (Puerto 8000)
2.  **Backend**: `webs_server-app-1` (Puerto 8090)
3.  **Base de Datos**: `webs_server-db-1` (Puerto 5432/5437)

Verifícalo con:
```powershell
docker ps
```
> **Nota**: Si `webs_server-app-1` se reiniciaba constantemente, fue debido a un error de formato de línea (CRLF) en `run_api.sh`. Fue corregido reconstruyendo el contenedor.

### 2. Iniciar el Agente
En una terminal dedicada:
```powershell
cd simple_agent
python agent_server.py
```
El agente inicia en `http://127.0.0.1:7000`.

### 3. Ejecutar el Test
En una terminal separada (PowerShell), configura correctamente el `PYTHONPATH` y lanza el test:

```powershell
cd autoppia_iwa
$env:PYTHONPATH = "$PWD"; python -m autoppia_iwa.entrypoints.technical_test_agent.test_contact_task
```

**Resultado Esperado:**
```text
Final Score: 1.0
Success: ✅ YES
```

---

## 🛠️ Detalles de Implementación y Retos Superados

### Arquitectura del Agente
El agente es un servidor Flask que recibe tareas y devuelve una secuencia de acciones JSON predefinidas ("hardcoded") para este escenario.

### Retos Clave y Soluciones

#### 1. Ambulguedad en Botones (Evento Incorrecto)
*   **Problema**: El agente pulsaba el botón "Search library" en lugar de "Send request" porque ambos eran `type="submit"`. Esto generaba eventos `SEARCH_FILM` y fallaba el test.
*   **Solución**: Implementamos un **Selector XPath Específico** que busca el botón *dentro* de la sección de contacto:
    ```json
    {
        "type": "ClickAction",
        "selector": {
            "type": "xpathSelector",
            "value": "//section[@id='contact']//button[@type='submit']"
        }
    }
    ```

#### 2. Campos Requeridos Ocultos
*   **Problema**: El prompt solo pedía "Subject" y "Message", pero el formulario validaba internamente "Name" y "Email".
*   **Solución**: El agente rellena proactivamente `Name` y `Email` con valores dummy antes de completar la tarea.

#### 3. Sincronización (Race Conditions)
*   **Problema**: El formulario a veces se enviaba antes de que React procesara el estado de los inputs.
*   **Solución**: Añadimos **`WaitAction` de 0.5 segundos** después de cada escritura (`TypeAction`) y una espera final de 5 segundos para asegurar la persistencia del evento.

#### 4. Fallos del Backend (Infraestructura)
*   **Problema**: El script `setup.sh` fallaba en Windows y el backend crasheaba por finales de línea CRLF.
*   **Solución**: Levantamiento manual de contenedores con `docker compose` y corrección de `run_api.sh` a formato LF.

---

## 🆘 Recuperación de Desastres (Cómo levantar el entorno si todo se rompe)

Si necesitas reiniciar todo desde cero en Windows/PowerShell:

```powershell
# 1. Copiar datos iniciales (ajusta la ruta de destino si quieres)
Copy-Item -Path "autoppia_webs_demo\webs_server\initial_data\*" -Destination "C:\temp\webs_data" -Recurse -Force

# 2. Levantar Backend (webs_server)
cd autoppia_webs_demo\webs_server
"WEB_PORT=8090`nPOSTGRES_PORT=5437`nWEBS_DATA_PATH=C:/temp/webs_data`nENABLE_DYNAMIC_V2_DB_MODE=false" | Set-Content -Encoding Ascii .env
docker compose down; docker compose up -d --build

# 3. Levantar Frontend (AutoCinema)
cd ..\web_1_autocinema
"WEB_PORT=8000`nNEXT_PUBLIC_API_URL=http://localhost:8090" | Set-Content -Encoding Ascii .env
docker compose down; docker compose up -d
```
