---

# Smart Voice-to-Text Productivity Assistant

A cross-platform desktop application that converts speech into text using AI, designed to improve productivity for students and professionals. The application follows a clean MVC-based architecture and gradually evolves into an agent-assisted AI system by performing multi-step tasks such as transcription and summarization.

---

## 📌 Project Overview

Typing notes continuously can be inefficient during lectures, meetings, or brainstorming sessions. This project addresses that problem by enabling users to **capture voice input**, **convert it into accurate text**, and **process it further into structured notes**.

The system is built as a **desktop application** using Tauri and focuses on simplicity, usability, and real-world applicability.

---

## 🚀 Features

### Current Features (Implemented)

* Desktop application (Windows / macOS / Linux)
* Microphone access and audio recording
* AI-powered speech-to-text transcription (Deepgram API)
* Clean and minimal user interface
* MVC (Model–View–Controller) architecture
* Local data persistence (SQLite)

### Planned Enhancements

* Multi-language speech recognition (English, Hindi, Tamil, etc.)
* AI-based text summarization into short notes
* Agent-like workflow for multi-step task execution
* UI enhancements for improved usability
* Business-ready presentation and documentation

---

## 🧠 Agentic AI Perspective

Although not a fully autonomous agent, the system demonstrates **agent-assisted behavior**:

1. Observes user input (speech)
2. Processes audio into text
3. Applies reasoning (summarization / language handling)
4. Produces structured output

This task-oriented, multi-step execution aligns with the fundamentals of **agentic AI systems**.

---

## 🏗️ Architecture

The application follows the **MVC design pattern**:

* **Model**
  Handles transcription data, AI responses, and local storage.

* **View**
  React-based user interface for interaction and real-time display.

* **Controller**
  Manages microphone input, recording flow, API communication, and state transitions.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, HTML, CSS, JavaScript
* **Desktop Framework:** Tauri
* **AI Service:** Deepgram Speech-to-Text API
* **Database:** SQLite
* **Version Control:** Git & GitHub

---

## 📂 Project Setup

### Prerequisites

* Node.js (v18+ recommended)
* npm
* Rust (required for Tauri)

### Installation

```bash
git clone <repository-url>
cd smart-voice-to-text
npm install
```

### Run the Application

```bash
npm run tauri dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```
VITE_DEEPGRAM_KEY=your_deepgram_api_key
```

> Note: Do not commit the `.env` file to the repository.

---

## 👥 Team Contributions

* **Varkey P Mathew**
  Architecture setup, Tauri configuration, Controller logic, audio handling

* **Noora**
  Frontend development, UI design, View layer implementation

* **Arvind Sundaram**
  AI integration, Model layer development, SQLite configuration

---

## 📈 Project Status

* **Level 1:** Completed
* **Level 2:** Completed
* **Level 3:** In Progress

---

## 🔮 Future Scope

* Support for additional languages
* Cloud-based user profiles
* Export summarized notes (PDF / text)
* Real-time transcription enhancements
* Monetization through subscription-based model

---

## 📄 License

This project is developed for academic and educational purposes.

---
