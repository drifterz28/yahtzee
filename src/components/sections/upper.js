import React, { Component} from 'react';
import {connect} from 'react-redux';
import Section from './scoreSection';

const sectionLabels = ['Ones', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes'];

class UpperSection extends Component {
  addUppers(dice, number) {
    var total = dice.reduce(function(a, b) {
      b = (b !== number) ? 0 : b;
      return a + b;
    }, 0);
    return total;
  }
  addPoints = (label) => {
    const {dice} = this.props.dice;
    const number = sectionLabels.indexOf(label);
    let points = this.addUppers(dice, number + 1);
    let newDispatch = {};
    newDispatch[label] = points;
    this.setState(newDispatch);
    console.log('add points', points);
  }
  render() {
    return (
      <section className="lower">
        {sectionLabels.map((label, i) => {
          const labelScore = this.state && this.state[label];
          return <Section label={label} score={labelScore} key={i} addPoints={this.addPoints}/>
        })}

        <div className="sectionLabel lowerScore">
          <div className="label">
            Upper Subtotal
          </div>
          <div className="scoreBox"></div>
          <div className="scoreBox"></div>
        </div>
        <div className="sectionLabel lowerScore">
          <div className="label">
            Bonus
          </div>
          <div className="scoreBox"></div>
          <div className="scoreBox"></div>
        </div>
        <div className="sectionLabel lowerScore">
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
  console.log(state)
  return state;
}

export default connect(mapStateToProps)(UpperSection);
