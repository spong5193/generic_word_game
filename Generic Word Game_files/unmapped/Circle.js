import React from "react";
import './Circle.scss';
const Circle = (props) => { 
  return (
    <div id="Circle" 
       className={props.position}   
       onClick={() => props.letterClick(props.letter)}>
      <div className="middle">{props.letter}</div>
    </div>
  );
}
export default Circle;