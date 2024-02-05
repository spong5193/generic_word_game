import React, { useState } from "react";
import './FoundList.scss';
const FoundList = (props) => { 
  const [open, setOpen] = useState(props.open || false);
  const foundList = props.words.map((word) =>
    <li key={word}>{word}</li>
  );
  const bigFoundList = props.words.concat().sort().map((word) =>
    <li key={word}>{word}</li>
  );
  const caret = open ? "∧" : "∨"
  return (
    <div id="FoundList">
      { open ? 
      <div className="big-box">
        {!props.open &&
          <div className="caret" onClick={() => setOpen(!open)}>
            <p>{caret}</p>
          </div>
        }
        <div className="big-list">
          <ul>
            <div className="wrap">
              {bigFoundList}
            </div>
          </ul>
        </div>
      </div>
      :
      <div className="box">
        <div className="list">
          <ul>
          {foundList}
          </ul>
        </div>
        <div className="caret" onClick={() => setOpen(!open)}>
          <p>{caret}</p>
        </div>
      </div>
      }
    </div>
  );
}
export default FoundList;