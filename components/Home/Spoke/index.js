import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";
import getOpenAiResponse from "../../../services/openAiService/openAiScene";

function Dictaphone() {
  const {
    transcript,
    listening,
    // resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [mounted, setMounted] = useState(false);
  const { speak, voices } = useSpeechSynthesis();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn&apos;t support speech recognition.</span>;
  }

  useEffect(() => {
    let timerId = null;

    const handleGetOpenAiResponse = async () => {
      if (!transcript) return;

      const text = await getOpenAiResponse(transcript);

      // Find a male voice
      const maleVoice = voices.find(
        (voice) => voice.name === "Google UK English Male"
      );
      console.log("question --> ", transcript, " answere --> ", text);
      speak({ text, voice: maleVoice });
    };

    if (mounted) {
      clearTimeout(timerId);
      timerId = setTimeout(handleGetOpenAiResponse, 2000);
    } else {
      setMounted(true);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [transcript, mounted, voices]);

  return (
    <div>
      <p className="text-white">Microphone: {listening ? "on" : "off"}</p>
      <button
        className="text-white"
        type="button"
        onClick={SpeechRecognition.startListening}
      >
        Start
      </button>
      {/* <button
        className="text-white"
        type="button"
        onClick={SpeechRecognition.stopListening}
      >
        Stop
      </button>
      <button className="text-white" type="button" onClick={resetTranscript}>
        Reset
      </button> */}
      <p className="text-white">{transcript}</p>
    </div>
  );
}

function DictaphoneWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <Dictaphone /> : null;
}

export default DictaphoneWrapper;
