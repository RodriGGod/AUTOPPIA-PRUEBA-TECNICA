# Part 3: Running the Full Benchmark

In this section, we test our agent against a battery of varied tasks to evaluate its behavior.

## 1. Environment Configuration
For the benchmark to generate dynamic tasks (like "Register with user X"), it needs access to an LLM.
*   **Action:** Configure the `OPENAI_API_KEY` variable in the `.env` file within `autoppia_iwa`.
*   **Why:** Without this, the benchmark cannot "invent" the tests.

## 2. How Does the Benchmark Work? (Simple Explanation)
Imagine the Benchmark is an **Examiner** and our Agent is a **Student**.

1.  **The Examiner (Benchmark)** uses Artificial Intelligence to create a question or task, for example: *"Please login with user 'pepe' and password '1234'"*.
2.  It sends this task to the **Student (Our Agent)**.
3.  The Agent attempts to solve it and returns a list of actions (e.g., "Navigate to /login", "Type 'pepe'", "Click enter").
4.  The Examiner checks if those actions actually completed the task on the test website.

## 3. Execution and Results Analysis

Run the benchmark with the following command:
```powershell
$env:DEMO_WEBS_STARTING_PORT=8000; python -m autoppia_iwa.entrypoints.technical_test_agent.run_benchmark
```

### What Happened?
Upon completion, we observe two types of results:
1.  **Contact Tasks:** The agent attempts to solve them (and passes or generates logical actions) because it is programmed to detect and fill out contact forms.
2.  **Other Tasks (Login, Search Movie, etc.):** The agent **FAILS** (Failed).

### Why is this Expected Behavior?
This is exactly what we expected. Our agent is a **"Simple Agent"**, specifically designed for a single mission: **Filling out the Contact Form**.

We haven't programmed it to know how to Login, nor to search for movies, nor to view details. Therefore, when the benchmark asks for those things, the agent gets confused or doesn't know what to do, resulting in a failure. This demonstrates that we have a **specialized** agent and not a general-purpose one.
