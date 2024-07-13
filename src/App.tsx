import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      Jessica Randall 
      London, United Kingdom 
      "Front-end developer and avid reader." 
      
      GitHub 
      Frontend 
      Mentor LinkedIn 
      Twitter 
      Instagram

      <div className="text-[11px] text-center">
        Challenge by{" "}
        <a className="text-[#3e52a3]" href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a className="text-[#3e52a3]" href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;
