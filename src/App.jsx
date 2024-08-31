import React, { useState } from "react";
import { ReactTyped, Typed } from "react-typed";

const App = () => {
  const [speed, setspeed]=useState(100)

  // spd function which changes the typedspeed
  const spdfuc=(e)=>{
    
   setspeed(Number(e.target.value))
  

  }

  return (
    <div>
      <input type="number" value={speed} onChange={spdfuc} />
      <h1>
        {"I am a "}

        <ReactTyped strings={["Frontend Developer","Backend Developer","Full Stack Developer"]} 
         typeSpeed={speed}
         backSpeed={50}
         loop
         showCursor
         cursorChar=" | "

         />
      </h1>
    </div>
  );
};

export default App;
