import "../styles/Dashboard.css";
import Navbar from "./Navbar.tsx";
import NavbarTop from "./NavbarTop.tsx";
import BarChart from "./BarChart.tsx";
import { FaArrowRight } from "react-icons/fa";
import JobStatsCard from "./JobStatsCard.tsx";
import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { JobOpening, ApplicantSummary } from "./ApplicantSummary.tsx";
import { ImPlay3 } from "react-icons/im";
import { useCountdown } from "../hooks/useCountdown.ts";
import { useState } from "react";
import useSpeechRecognition from "../hooks/useSpeechRegocnition.ts";
import { ChatCompletionRunner } from "openai/lib/ChatCompletionRunner.mjs";
import { getFunctions, httpsCallable } from "firebase/functions";

function Dashboard() {
  const date = new Date();
  const textDisplay = [
    "Your interview will start when the play button is pressed",
    "1. Tell us about yourself",
    "2. What are some of experiences that make you suitable for this position",
    "3. What made you apply for this position in Hilti",
  ]
  const initialTime = 10 * 1000
  const time = useCountdown(initialTime, () => console.log("Done"))
  console.log("Time: ",time)
  //const count2 = count
  const [count2, setCount2] = useState(0);

  const {
    text,
    startListening,
    stopListening,
    isListening,
  } = useSpeechRecognition();

  if(time === 0 && count2 <= 2){
    setTimeout(function(){
      setCount2(count2 + 1);
      console.log("Test: ", count2)
    },1500)
  }

  


  return (
    <>
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="page-contents">
        <NavbarTop />

        <div className="greeting">
          <p className="greeting-title">Digital Interview</p>
          <p className="greeting-desc">
            The digital interview will start once the play button is pressed
          </p>
          <p className="greeting-desc">
            The total time for this interview is 2 minutes 30 seconds (30 sec for each question)
          </p>
        </div>
        <main>
          <section className="section-btn-actions">
            <div className="text-display-div">
              <p className="text-display">{textDisplay[count2]}</p>
            </div>
          </section>

          <section className="section-job-statistics">
            <div className="btn-section" onClick={startListening}>
              <ImPlay3 size={50} className="btn-play-icon" />
            </div>
          </section>
        </main>
        <section>
          <div className="timer-div">
              <p className="timer-text">Time remaining for question : {(time % (1000 * 60 * 60 * 24)) / (1000)} seconds</p>
          </div>
        </section>
        <section>
          <div className="timer-div">
              <p className="timer-text">Text: {text}</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
