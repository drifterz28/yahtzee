import React, { Component} from 'react';
import {connect} from 'react-redux';
import Section from './scoreSection';

class UpperSection extends Component {
  render() {
    const sectionLabels = ['Ones', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes'];
    return (
      <section className="lower">
        {sectionLabels.map((label, i) => {
          return <Section label={label} key={i}/>
        })}
        <div className="secionLabel lowerScore">
          <div className="label">
            Upper Subtotal
          </div>
          <div className="scoreBox"></div>
          <div className="scoreBox"></div>
        </div>
        <div className="secionLabel lowerScore">
          <div className="label">
            Bonus
          </div>
          <div className="scoreBox"></div>
          <div className="scoreBox"></div>
        </div>
        <div className="secionLabel lowerScore">
          <div className="label">
            Upper Total
          </div>
          <div className="scoreBox"></div>
          <div className="scoreBox"></div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(null)(UpperSection);
