# README - Part 2: Agent Implementation & Testing Journey

## Overview
This document chronicles the step-by-step process we followed to build, debug, and validate the **Simple Agent** for the Auttopia technical test. It details the challenges effectively solved and the final robust architecture we established.

## 🚀 The Journey: From Setup to Success

### Step 1: Initial Development in Virtual Environment
We began the implementation by setting up a standard **Python virtual environment** locally. This allowed us to develop the core logic of the agent (parsing and action generation) in a contained space. However, as we moved to the validation phase using the `autoppia_iwa` harness on Windows, we encountered significant compatibility issues with the complex dependency chain.

### Step 2: Creating an "Environment within an Environment"
To guarantee a successful test execution, we decided to build a **Dockerized environment** inside our project structure.
*   **Why**: The local virtual environment couldn't reliably isolate the system-level differences between Windows and the Linux-based expectations of the test runner. A container provides a reproducible "laboratory" that behaves exactly the same way every time.

### Step 3: Installing Chromium & Linux Dependencies
Configuring this Docker environment required specific adjustments to support the *autocinema* behavior:
1.  **Installing Linux System Dependencies**: We manually added libraries like `libnss3`, `libdrm2`, `libgbm1`, and `libasound2` to the `Dockerfile`.
    *   **Why**: The "slim" Python images are too minimal to run a browser. These libraries are required by the browser engine to render the page in headless mode.
2.  **Installing Chromium**: We explicitly ran `playwright install chromium`.
    *   **Why**: The test validator uses Playwright to drive the browser. We needed to ensure the specific Chromium binary matching the library version was present and executable within the container.

### Step 4: Networking & Connectivity
A critical challenge was allowing this isolated "environment within an environment" to communicate with the outside world (our Host).
*   **The Adjustment**: We configured the Docker runs to use `host.docker.internal`.
*   **Why**: The Agent Server (`localhost:7000`) and Web App (`localhost:8000`) live on the generic Windows Host. This networking bridge allows the Docker container to "see" and interact with them as if it were local.

### Step 5: Automating the Workflow (`run_tests.ps1`)
To bring all these steps together, we created the `run_tests.ps1` script.
*   **Why**: To abstract away the complexity of building the image, mapping the ports, and setting environment variables. It turns a multi-step manual process into a single command.

## 🏗️ Final Architecture
1.  **Host Machine**: Runs `agent_server.py` (Port 7000) and the `web_8` demo (Port 8000).
2.  **Docker Container**: A specialized environment verifying the logic.
3.  **Flow**:
    *   Docker Test requests solution from Host Agent.
    *   Host Agent parses specific fields using regex (e.g., `subject`, `message`) and maps them to selectors.
    *   Docker Test executes the actions to verify the contact form submission.

## ✅ Result
By moving from a simple local virtual environment to a robust, containerized testing suite, we ensured that the **Simple Agent** works flawlessly. We solved the cross-platform dependency issues and established a professional implementation capable of passing the strict validation criteria.
