import React from 'react';
import "./style.css";

function Resume() {
    return (
       <div className="resume" >
      <a href="https://drive.google.com/file/d/1g5LLfOvZyY_z2YyL4zvLfXwM3qxFSi4u/view?usp=sharing">
  <img src={process.env.PUBLIC_URL + "/image/downloadresume.png"}></img>
  </a>
  </div>
    );
  }
  
  export default Resume;
  