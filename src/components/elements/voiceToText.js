import { useEffect } from "react";
import SpeechRecognition ,{ useSpeechRecognition }from "react-speech-recognition";

//Componente encargado de convertir la voz del usuario en texto legible.
const SpeechtoText = () => {
    const {transcript, resetTranscript } = useSpeechRecognition()

    useEffect(()=>{
        SpeechRecognition.startListening({continuous: true})
        console.log("listening start")
    },[])
    return(
        <div>
            <form>
                <textarea value={transcript}> </textarea>
            </form>
        </div>      
        
    )
       
}


export default SpeechtoText;
