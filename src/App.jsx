import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("Press Start and speak...");
  const [recording, setRecording] = useState(false);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.start();
      setRecording(true);
      setText("Recording...");
    } catch (error) {
      setText("Microphone access denied.");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();

    mediaRecorderRef.current.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, {
        type: "audio/wav",
      });

      await sendToDeepgram(audioBlob);
    };

    setRecording(false);
  };

  const sendToDeepgram = async (audioBlob) => {
    try {
      setText("Transcribing...");

      const response = await fetch(
        "https://api.deepgram.com/v1/listen",
        {
          method: "POST",
          headers: {
            Authorization: `Token ${import.meta.env.VITE_DEEPGRAM_KEY}`,
            "Content-Type": "audio/wav",
          },
          body: audioBlob,
        }
      );
      const result = await response.json();
      const transcript =
        result.results.channels[0].alternatives[0].transcript;

      setText(transcript || "No speech detected.");
    } catch (error) {
      setText("Error during transcription.");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Smart Voice-to-Text Assistant</h1>

      <textarea value={text} readOnly rows="10" />

      <div className="buttons">
        <button onClick={startRecording} disabled={recording}>
          Start Recording
        </button>

        <button onClick={stopRecording} disabled={!recording}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default App;
