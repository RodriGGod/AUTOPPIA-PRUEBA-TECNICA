# Technical Test - Autoppia

This repository contains the solution to the technical test for the AI Agent Engineer position at Autoppia.

## 📋 Description
The goal of this test is to demonstrate skills in creating and evaluating Web AI Agents. The project is divided into three main parts:

1.  **Part 1 - React & Frontend (Web Development):** Implementation of a new interactive section ("Trending Destinations") in the `web_8_autolodge` dashboard, ensuring visual coherence and correct event tracking (Analytics).
2.  **Part 2 - "Simple" Agent (AI Engineering):** Development of a Python agent capable of receiving a task in natural language ("Fill out the form..."), navigating to the target URL, and interacting with the DOM to successfully complete and submit a contact form.
3.  **Part 3 - Benchmarking (Evaluation):** Execution of a battery of standardized tests (Benchmark) to measure the agent's performance. It validates that the agent is effective in its specialty (forms) and robust against unknown tasks (controlled failure).

## 🚀 Installation and Cloning

To clone this repository:

```bash
git clone https://github.com/RodriGGod/AUTOPPIA-PRUEBA-TECNICA.git
cd AUTOPPIA-PRUEBA-TECNICA
```

## ⚙️ Prerequisites

Before running the tests, ensure you have the following:

- **Docker Desktop**: Required for Parts 2 and 3. **Docker Desktop must be running** before executing any Docker-related commands.
- **Python 3.8+**: For the agent and benchmark scripts.
- **Node.js and npm**: For Part 1 (React web application).

---

## 🛠️ Running the Tests

The repository is documented in detail by parts in the `Docs/` folder. Below is a summary of the necessary commands to start each test.

### 🔹 [Part 1: React - New Section in Dashboard](Docs/README_PART1.md)
Implementation of a "Trending Destinations" section (Carousel) in the hotel booking platform (`autolodge`). This new feature is interactive, visually coherent with the existing design, and sends telemetry events when interacting with it.

**Initialization and Test Commands:**
```bash
# 1. Navigate to the specific web project directory
cd autoppia_webs_demo/web_8_autolodge

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

**How to Test:**
1.  Open the browser at `http://localhost:3000`.
2.  Scroll down the main Dashboard until you find the **"Trending Destinations"** section.
3.  Interact with the carousel (Hover, click on the cards).
4.  *Verification:* Check in the browser console or terminal that the `SELECT_DESTINATION` event is triggered with the correct data (source: 'dashboard', section: 'trending_carousel').

### 🔹 [Part 2: Agent Implementation](Docs/README_PART2.md)
Creation and visualization of the "Simple Agent" solving the contact form.

> ⚠️ **Important:** Make sure **Docker Desktop is running** before executing the testing steps.

**Step 1: Prepare the Agent Environment (First time only)**
```bash
# 1. Navigate to the agent directory
cd simple_agent

# 2. Create a virtual environment
python -m venv venv

# 3. Activate the virtual environment
# Windows:
.\venv\Scripts\activate
# Mac/Linux:
# source venv/bin/activate

# 4. Install dependencies
pip install flask
```

**Step 2: Start Required Services (2 terminals)**
```bash
# Terminal 1: Start the Web App (from project root)
cd autoppia_webs_demo
./scripts/setup.sh --demo=autocinema --web_port=8000

# Terminal 2: Start the Agent Server (from project root)
python simple_agent/agent_server.py
```

**Step 3: Test the Agent in Docker Environment**
```bash
# Navigate back to project root (if you're in simple_agent directory)
cd ..

# Terminal 3: Launch Docker container (from project root)
docker run --rm -it --network host -v ${PWD}:/app -w /app python:3.11 bash

# Inside Docker, run these commands:
# A. Create isolated environment
python -m venv /tmp/venv_clean
source /tmp/venv_clean/bin/activate

# B. Install Python dependencies
pip install --upgrade pip
pip install -r autoppia_iwa/requirements.txt
pip install -e autoppia_iwa/

# C. Install Playwright & browsers
playwright install chromium

# D. Install system dependencies
apt-get update && apt-get install -y libnss3 libnspr4 libdbus-1-3 libatk1.0-0 libatk-bridge2.0-0 libatspi2.0-0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libdrm2 libxkbcommon0 libasound2

# E. Run the contact task test
AGENT_HOST=host.docker.internal python autoppia_iwa/autoppia_iwa/entrypoints/technical_test_agent/test_contact_task.py
```

**Expected Result:**
```
Technical Test Agent (Contact Form) | 100.00% (1/1) | Passed
```


> [See complete Part 2 documentation](Docs/README_PART2.md)

### 🔹 [Part 3: Full Benchmark](Docs/README_PART3.md)
Evaluation of the agent's performance against multiple use cases.

> ⚙️ **Note:** Before running the benchmark, make sure to configure the necessary environment variables in `autoppia_iwa/.env`:
> - **LLM API Key**: `OPENAI_API_KEY` or `CHUTES_API_KEY` (required to generate dynamic tasks)
> - **Ports**: `DEMO_WEBS_STARTING_PORT=8000` and `AGENT_PORT=7000`
> 
> See full details in [README_PART3.md](Docs/README_PART3.md).

**Benchmark Commands:**
```bash
# Run benchmark setting the starting port
cd autoppia_iwa
# PowerShell:
$env:DEMO_WEBS_STARTING_PORT=8000; python -m autoppia_iwa.entrypoints.technical_test_agent.run_benchmark
# Bash:
DEMO_WEBS_STARTING_PORT=8000 python -m autoppia_iwa.entrypoints.technical_test_agent.run_benchmark
```
> [See complete Part 3 documentation](Docs/README_PART3.md)

### ✨ [Bonus: Improvements and Analysis](Docs/BONUS.md)
Explanation of the implemented improvements (task detection, dynamic forms) and analysis of the benchmark's "Dynamic Mode".

> [Read about Agent improvements](Docs/BONUS.md)

---

**Author:** Rodrigo Blanco
