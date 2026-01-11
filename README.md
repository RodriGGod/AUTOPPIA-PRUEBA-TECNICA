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

Para el proyecto Node.js (`autoppia_iwa`):

```bash
cd autoppia_iwa
npm install
```

Para el servidor Python (si aplica):

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
