import React from "react";
import './Hive.scss';
import Circle from './Circle.js';
const Hive = (props) => { 
  return (
    <div id="Hive">
      <div className="hex-row">
        <Circle letter={props.letters[1]} letterClick={props.letterClick}/>
        <Circle letter={props.letters[2]} letterClick={props.letterClick}/>
      </div>
      <div className="hex-row even">
        <Circle letter={props.letters[3]} letterClick={props.letterClick}/>
        <Circle position="center" letter={props.letters[0]} letterClick={props.letterClick}/>
        <Circle letter={props.letters[4]} letterClick={props.letterClick}/>
      </div>
      <div className="hex-row">
        <Circle letter={props.letters[5]} letterClick={props.letterClick}/>
        <Circle letter={props.letters[6]} letterClick={props.letterClick}/>
      </div>
    </div>
  );
}
export default Hive;