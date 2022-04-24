import { useEffect } from "react";
import SpeechRecognition ,{ useSpeechRecognition }from "react-speech-recognition";

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