# 🎙️ VerbaFlow: Agentic AI Voice Assistant

**VerbaFlow** is a multimodal AI agent designed to revolutionize how students and professionals capture information. It records audio (lectures, meetings, discussions), transcribes mixed languages (English/Hindi/Hinglish) in real-time, and uses cognitive processing to generate summaries, mind maps, and quizzes instantly.

Built with **Python**, **Streamlit**, and **Google Gemini 2.0 Flash**.

---

## 🚀 Key Features

* **🗣️ Native Audio Agent:** Records directly within the browser—no external file uploads needed.
* **🧠 Multilingual Transcription:** Expertly handles **English, Hindi, and Hinglish** (code-switching) with automatic speaker identification.
* **⚡ Smart Cognitive Actions:**
* **Summarize:** Condenses hour-long lectures into key bullet points.
* **Mind Maps:** visualizes connections between concepts using Mermaid.js diagrams.
* **Quiz Generator:** Automatically creates test questions to check your understanding.
* **Action Items:** Extracts tasks and deadlines from meeting notes.


* **💬 Chat with Audio:** A RAG-style chat interface to ask specific questions about the recording (e.g., *"What was the deadline mentioned?"*).
* **📄 Export Options:** One-click download for professional PDF and Word (.docx) reports.

---

## 🛠️ Tech Stack

* **Frontend:** Streamlit (Custom Dark Mode UI)
* **AI Brain:** Google Gemini 1.5 Flash / 2.0 Flash (via `google-generativeai`)
* **Visualization:** Streamlit-Mermaid (for dynamic flowcharts)
* **Document Handling:** `fpdf` (PDF generation), `python-docx` (Word generation)

---

## 📥 Installation & Setup

Follow these steps to run VerbaFlow on your local machine.

### **1. Clone the Repository**

```bash
git clone https://github.com/sampmathew/VerbaFlow-Agentic-AI-Voice-Assistant
cd verbaflow

```

### **2. Create a Virtual Environment (Optional but Recommended)**

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate

```

### **3. Install Dependencies**

```bash
pip install streamlit google-generativeai fpdf python-docx streamlit-mermaid

```

*Note: Ensure you have `Streamlit >= 1.40` for audio recording support.*

### **4. Get Your API Key**

You need a free Google Gemini API key to power the agent.

1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Click **Get API Key**.
3. Copy the key (you will enter it in the app sidebar).

---

## ▶️ Usage Guide

1. **Run the Application:**
```bash
streamlit run agent.py

```


2. **Authenticate:**
* The app will open in your browser.
* Enter your **Gemini API Key** in the sidebar.


3. **Record & Transcribe:**
* Click the **Microphone** icon to start recording a lecture or meeting.
* Click **Transcribe** to let the agent listen and identify speakers.


4. **Generate Insights:**
* Use the buttons to **Summarize**, **Explain**, or create a **Mind Map**.
* Chat with the agent at the bottom to find specific details.


5. **Download:**
* Export your structured notes as a PDF or Word document.



---

## 👥 Meet the Team

This project was built collaboratively with distinct roles in AI architecture, backend logic, and user experience.

| Member | Role | Contribution |
| --- | --- | --- |
| **Varkey P Mathew** | **Lead Architect** | Designed the `TranscriptionAgent` class structure, integrated the Gemini API, and managed the end-to-end data flow between the AI and the frontend. |
| **Arvindsundaram S** | **AI Backend Lead** | Engineered the prompt logic for summarization, quiz generation, and Mermaid.js visualization. Tuned the model for "Hinglish" (mixed Hindi-English) accuracy. |
| **Noora Syarajudeen** | **UI/UX Designer** | Crafted the "Standout" dark-mode interface, designed the intuitive button layout, and implemented the professional document export styling (PDF/Docx). |

---

## 📚 Applications

VerbaFlow is versatile and can be used in various scenarios:

* **🎓 Education:** Students can record lectures and instantly get a study guide, quiz, and visual mind map of the topic.
* **🏢 Corporate Meetings:** Automates minutes-of-meeting (MoM) creation by identifying speakers and extracting "Action Items" and deadlines.
* **♿ Accessibility:** Assists individuals with hearing impairments by providing real-time, structured transcripts of conversations.
* **🗞️ Journalism:** Helps reporters quickly transcribe interviews and extract key quotes or themes.

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

*Built with ❤️ by the VerbaFlow Team.*
