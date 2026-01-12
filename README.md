# Auttopia Prueba Técnica

Este repositorio contiene la solución a la prueba técnica de Auttopia.

## Instrucciones de Instalación y Configuración

Siga los siguientes pasos para inicializar el proyecto correctamente.

### 1. Clonar el repositorio

```bash
git clone https://github.com/RodriGGod/AUTOPPIA-PRUEBA-TECNICA.git
cd AUTOPPIA-PRUEBA-TECNICA
```

### 2. Configurar Variables de Entorno

El proyecto requiere ciertas claves de API para funcionar (por ejemplo, OpenAI). 
Debe crear un archivo `.env` en la carpeta `autoppia_iwa` (y en cualquier otro subdirectorio que lo requiera) siguiendo el formato del proyecto.

**Nota:** El archivo `.env` no se incluye en el repositorio por seguridad.

Ejemplo de contenido para `autoppia_iwa/.env`:
```env
OPENAI_API_KEY=tu_clave_api_aqui
# Otras variables necesarias...
```

### 3. Instalar Dependencias

Navegue a los directorios del proyecto e instale las dependencias necesarias.

#### Para los proyectos Web (Frontends)
Cada demo web (ubicada en `autoppia_webs_demo/web_*`) es un proyecto independiente que requiere Node.js.

Ejemplo para `web_1_autocinema`:
```bash
cd autoppia_webs_demo/web_1_autocinema
npm install
# Repetir para otras webs si es necesario (web_2_autobooks, etc.)
```

#### Para el Core y Servidores (Python)
Tanto `autoppia_iwa` como el `webs_server` son proyectos en Python.

Para `autoppia_iwa`:
```bash
cd autoppia_iwa
pip install -r requirements.txt
```

Para `webs_server`:
```bash
cd autoppia_webs_demo/webs_server
pip install -r requirements.txt
```

### 4. Ejecutar el Proyecto

Una vez configurado, puede iniciar los servicios con los scripts proporcionados o manualmente:

```bash
# Ejemplo para iniciar el entorno
npm run dev
```

## Ejecución de Pruebas (Parte 2: Simple Agent) - Entorno Windows + Docker

Para validar el Agente Simple en un entorno Windows, utilizamos un contenedor Docker que simula el entorno de evaluación Linux.

### Prerrequisitos
1.  **Webs y Backend desplegados** en el Host (Windows):
    ```powershell
    cd autoppia_webs_demo
    ./scripts/setup.sh --demo=autocinema --web_port=8000
    ```
2.  **Agente Corriendo** en el Host (Windows):
    ```powershell
    python simple_agent/agent_server.py
    ```

### Pasos Manuales para el Test

1. **Iniciar el Contenedor de Pruebas**:
   Ejecuta esto en PowerShell para entrar al entorno Linux aislado:
   ```powershell
   docker run --rm -it --network host -v ${PWD}:/app -w /app python:3.11 bash
   ```

2. **Ejecutar la Validación (Dentro del Contenedor)**:
   Copia y pega el siguiente bloque en la terminal del contenedor:
   ```bash
   # 1. Crear entorno aislado (fuera del volumen montado)
   python -m venv /tmp/venv_clean
   source /tmp/venv_clean/bin/activate
   
   # 2. Instalar dependencias
   pip install --upgrade pip
   pip install -r autoppia_iwa/requirements.txt
   pip install -e autoppia_iwa/
   playwright install chromium
   
   # 3. Instalar librerías de sistema para navegador
   apt-get update && apt-get install -y libnss3 libnspr4 libdbus-1-3 libatk1.0-0 libatk-bridge2.0-0 libatspi2.0-0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libdrm2 libxkbcommon0 libasound2
   
   # 4. Lanzar Test (conectando al Host)
   AGENT_HOST=host.docker.internal python autoppia_iwa/autoppia_iwa/entrypoints/technical_test_agent/test_contact_task.py
   ```

El resultado esperado es un **Score: 1.0**.
