import { useEffect, useState } from "react";


let recognition:any = null


if ("webkitSpeechRecognition" in window){
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-UK";
}

const useSpeechRecognition = () => {
    const[text, setText] = useState("");
    const[isListening, setIsListening] = useState(false);
    

    useEffect(() => {
        recognition.onresult = (event:SpeechRecognitionEvent) => {
            console.log("Onresult event: ", event)
            setTimeout(function(){
                setText(event.results[0][0].transcript);
                recognition.stop();
                setIsListening(false);
            },10000)
        }

    }, [] );

    const startListening = () => {
        setIsListening(true)
        recognition.start()
    }

    const stopListening = () => {
        setIsListening(false)
        recognition.stop()
    }

    return{
        text,
        isListening,
        startListening,
        stopListening
    }
    
};


export default useSpeechRecognition;