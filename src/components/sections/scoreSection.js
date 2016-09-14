import React, { Component} from 'react';

const Section = ({label, i}) => {
  return (
    <div className="secionLabel">
      <div className="label">
        {label}
      </div>
      <div className="scoreBox"></div>
      <div className="scoreBox"></div>
    </div>
  );
}

export default Section;
