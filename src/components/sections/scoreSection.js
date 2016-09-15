import React, { Component} from 'react';

const Section = ({label, i, score, addPoints}) => {
  const addPintsEvent = () => {
    addPoints(label);
  }
  return (
    <div className="sectionLabel">
      <div className="label">
        {label}
      </div>
      <div onClick={addPintsEvent} className="scoreBox">{score}</div>
      <div className="scoreBox"></div>
    </div>
  );
}

export default Section;
