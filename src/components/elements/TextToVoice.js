import { useSpeechSynthesis } from "react-speech-kit";
import { AiTwotoneSound } from "react-icons/ai";
import { Button } from "react-bootstrap";

export const TextToVoice = ({ title, content }) => {
  const { speak } = useSpeechSynthesis();
  const { voices } = useSpeechSynthesis();
  const voice = voices.filter((voice) => voice.lang === "es-ES")[0];

  let textF = title + "\n";
  content?.forEach((element) => {
    if (element.type === "title" || element.type === "text") {
      textF = textF + element.value + "\n";
    }
  });

  return (
    <Button
      className="icon-button"
      title="Convertir en Audio"
      onClick={() =>
        speak({
          text: textF,
          voice: voice,
        })
      }
    >
      <AiTwotoneSound />
    </Button>
  );
};
