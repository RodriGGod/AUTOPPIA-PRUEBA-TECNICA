# README - Part 2: Agent Implementation & Testing Journey

## Overview
This document chronicles the step-by-step process we followed to build, debug, and validate the **Simple Agent** for the Auttopia technical test. 

## 🚀 The Agent: Setup & Logic

### Step 0: Prerequisites & Installation (Local Host)
Before starting, ensure the agent's dependencies are installed **in a local virtual environment** on your Windows machine (Host).

**Installation Commands:**
```bash
# 1. Create a virtual environment (Recommended)
python -m venv venv

# 2. Activate the virtual environment
# Windows:
.\venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# 3. Install Flask (The only dependency for the agent)
pip install flask
```

### 🤖 How the Agent Works (Junior Dev Version)
Imagine the agent is a little robot waiter 🤖.
1.  **It listens:** You tell it "Hey, fill this contact form for Alice" (The Prompt).
2.  **It thinks:** It looks for keywords like "subject='Help'" to understand what to write.
3.  **It acts:** It goes to the webpage, finds the box that looks like "Subject", types "Help", and hits the "Send" button for you.
It's basically automating what a human would do with a keyboard and mouse!

### ⚙️ Main Methods (The Brains)
Under the hood, `agent_server.py` relies on these key functions:

*   **`detect_task_type(prompt)`**: The **Decision Maker**. It looks at your text to decide if you want to fill a form (`FORM_FILLING`) or if it should just ignore you (`UNKNOWN`).
*   **`extract_form_fields(prompt)`**: The **Parser**. It uses "Regex" (text patterns) to pull out specific data like `name='Bond'` or `email='007@mi6.uk'` from your sentence.
*   **`get_field_selector(field_name)`**: The **Navigator**. It guesses where to type. If you say "email", it looks for an input field on the website that expects an email address.
*   **`generate_form_actions(url, fields)`**: The **Director**. It creates the step-by-step movie script: "Go to URL" -> "Wait a sec" -> "Type Name" -> "Click Submit".

---

## 🧪 Testing Workflow (The Complete Guide)
This is the **exact process** to verify the agent. We use a standardized Docker container to avoid Windows compatibility headaches (like missing Linux libraries for Playwright).

### 1. Start Services on Host (Windows)
Open two PowerShell terminals to run the Web and the Agent:

```powershell
# Terminal 1: Start the Web App
cd autoppia_webs_demo
./scripts/setup.sh --demo=autocinema --web_port=8000

# Terminal 2: Start the Agent
python simple_agent/agent_server.py
```

> **💡 Junior Dev Tip: Why `0.0.0.0`?**
> The agent starts on `0.0.0.0:7000`. 
> *   **`0.0.0.0` (Host):** Means "I'm open to talk to everyone" (including Docker), not just `localhost`.
> *   **`7000` (Port):** Is the specific "door" number to knock on.

### 2. Enter the Docker Testing Lab
In a third terminal, launch the container that mimics the grading environment:

```powershell
docker run --rm -it --network host -v ${PWD}:/app -w /app python:3.11 bash
```

### 3. Initialize Environment INSIDE Docker
Once inside the container (`root@...:/app#`), run these commands one by one. This setup solves all the dependency issues we encountered:

```bash
# A. Create an isolated venv (Crucial to avoid Windows file locking issues)
python -m venv /tmp/venv_clean
source /tmp/venv_clean/bin/activate

# B. Install Python Dependencies
pip install --upgrade pip
pip install -r autoppia_iwa/requirements.txt
pip install -e autoppia_iwa/

# C. Install Playwright & Browsers
playwright install chromium

# D. Install System Dependencies (The "Headaches" Solved)
# These libraries are required for Chromium to run in this specific Debian/Ubuntu container
apt-get update && apt-get install -y libnss3 libnspr4 libdbus-1-3 libatk1.0-0 libatk-bridge2.0-0 libatspi2.0-0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libdrm2 libxkbcommon0 libasound2
```

### 4. Run the Test
Finally, execute the verification script pointing to your host agent:

```bash
# We use host.docker.internal so Docker can "see" your Windows agent
AGENT_HOST=host.docker.internal python autoppia_iwa/autoppia_iwa/entrypoints/technical_test_agent/test_contact_task.py
```

**Expected Output:**
> "Technical Test Agent (Contact Form) | 100.00% (1/1) | Passed" 

---

## 📜 The Context: Why did we do this? (The Journey)

### Challenge 1: Windows vs Linux
We started developing locally, but the test runner expects a Linux environment. By using Docker (Step 2 above), we created a reproducible "clean room" for testing.

### Challenge 2: Dependency Hell
The Docker container was missing low-level libraries for the browser (`libgbm`, `libasound`, etc.). We identified and installed them manually (Step 3D) to ensure Playwright could launch the browser.

### Challenge 3: Connectivity
The Docker container is isolated. The agent is on Windows. We used `AGENT_HOST=host.docker.internal` (Step 4) to build a bridge between them.

## 🏗️ Final Architecture
1.  **Host Machine**: Runs `agent_server.py` (Port 7000) and the `web_8` demo (Port 8000).
2.  **Docker Container**: Behaves as the "Evaluator".
3.  **Flow**: Docker requests solution -> Host Agent replies -> Docker executes & validates.
