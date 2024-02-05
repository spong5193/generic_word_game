import React, { useState } from "react";
import './Input.scss';
const Input = (props) => { 
  const [word, setWord] = useState("");
  return (
    <div id="Input">
      <div className="cursor" onKeyPress={() => props.onKeyPress}>
        {/* 
        <input type="text" id="lname" name="lname" value={props.word} onChange={props.onKeyPress}/>
        */}
        <span>
          {props.word}
        </span>
        <div className="blink">
        </div>
        <i></i>
      </div>
    </div>
  );
}
export default Input;