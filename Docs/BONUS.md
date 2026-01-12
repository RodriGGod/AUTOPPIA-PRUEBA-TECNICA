# Bonus Task: Improvements & Learning

Here is a summary of the cool improvements we made to our agent and what we learned about the system!

## 1. Making the Agent Smarter

We added some features so the agent isn't just a simple script, but acts more like a real user.

### **1. Guessing what to do (Task Detection)**
Before, our agent tried to fill a form for *everything*, even if asked to "Logout".
*   **What we did:** We added a check (`detect_task_type`). It looks at the text instructions.
*   **How it works:** If it sees the word "contact", it says "Aha! A form!". If not, it assumes it's just navigation. This stops it from clicking wildly on pages it doesn't understand.

### **2. Reading any form field (Dynamic Forms)**
Hardcoding fields like `name` or `email` is bad because if the form changes, the code breaks.
*   **What we did:** We used **Regular Expressions** (Regex) in `extract_form_fields`.
*   **How it works:** It's like a smart highlighter that looks for patterns like `field='value'`. So if the instruction says `budget='500'`, our agent automatically knows to look for a "budget" field and type "500", without us touching the code!

### **3. Not crashing on errors (Retry Logic)**
Sometimes the internet is slow or things go wrong. We don't want our server to die.
*   **What we did:** We wrapped our code in a `try...except` block.
*   **How it works:** It's like a safety net. If an error happens, instead of crashing the whole program, the agent just says "Oops, I'll wait a bit" (`WaitAction`). This keeps the agent alive to try again later.

---

## 2. Understanding the "Dynamic Mode"

### **What is it?**
When running the benchmark, you might see `?seed=42` at the end of the URL. That's Dynamic Mode!
It basically tells the website: "Hey, build yourself differently this time."

### **Why use it?**
Imagine if you took a test and the answers were always "A, C, B". You would just memorize the pattern, right? You wouldn't learn the subject.
*   **The Problem:** If websites never changed, we could just cheat by saying "Click at pixel 100, 200".
*   **The Solution:** Dynamic mode moves buttons around and changes text every time. This forces our agent to actually **read** the page and look for "Submit" or "Name", rather than just clicking blindly on a spot. It proves our agent is truly smart!
