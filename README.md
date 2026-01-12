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

**Test Commands:**
```bash
# 1. Prepare Agent Environment (Only the first time)
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Mac/Linux:
# source venv/bin/activate
pip install flask

# 2. Start the agent server (in a new terminal)
python simple_agent/agent_server.py

# 2. Run the visualization (requires Docker)
cd autoppia_iwa
python -m autoppia_iwa.entrypoints.technical_test_agent.run_visualization
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
