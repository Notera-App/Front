import { useSpeechSynthesis } from "react-speech-kit";
import { AiTwotoneSound } from "react-icons/ai";
import { Button } from "react-bootstrap";

export const TextToVoice = ({ title, content }) => {
  const { speak } = useSpeechSynthesis();
  const { voices } = useSpeechSynthesis();
  let textF = title + "\n";
  console.log(content);
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
          voice: voices[0],
        })
      }
    >
      <AiTwotoneSound />
    </Button>
  );
};
