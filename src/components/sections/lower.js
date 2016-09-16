import React, { Component} from 'react';
import {connect} from 'react-redux';
import Section from './scoreSection';

class LowerSection extends Component {
  addDice(dice) {
    return dice.reduce(function(a, b) {
      return a + b;
    }, 0);;
  }
  threeOfaKind(dice) {
    if([...new Set(dice)].length <= 3) {
      return this.addDice(dice);
    }
  }
  fourOfaKind(dice) {
    if([...new Set(dice)].length <= 2) {
      console.log('4')
      return this.addDice(dice);
    }
  }
  getCountAndUnique(dice) {
    return dice.reduce(function(prev, cur) {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {});
  }
  addPoints = (number) => {
    const {dice} = this.props.dice;
    let {lower} = this.props;
    // will need to work on how points are added.
    // will use maxPoints for most items except
    // match 3, 4 and chance
    let points = 0;
    // clear unlocked points
    lower = lower.map((section) => {
      if(!section.isLocked) {
        section.points = null;
      }
      return section;
    });
    console.log(this.getCountAndUnique(dice))
    switch(lower[number].label) {
    case '3 of a Kind':
      points = this.threeOfaKind(dice);
      break;
    case '4 of a Kind':
      points = this.fourOfaKind(dice);
      break;
    case 'Chance':
      points = this.addDice(dice);
      break;
    case 'Full House':
      if([...new Set(dice)].length === 2) {
        console.log('full');
        points = lower[number].maxPoints;
      }
      break;
    case 'Small Straight':
      break;
    case 'Large Straight':
      break;
    case 'Yahtzee':
      if([...new Set(dice)].length === 1) {
        points = lower[number].maxPoints;
      }
      break;
    }

    lower[number].points = points;
    console.log(lower)
    this.props.dispatch({
      type: 'UPDATE_LOWER',
      lower
    });

    console.log('add points', points);
  }
  render() {
    const {lower, scores} = this.props
    return (
      <section className="lower">
        {lower.map((section, i) => {
          return <Section key={i} addPoints={this.addPoints} index={i} section={section}/>
        })}
        <div className="sectionLabel upperScore">
          <div className="label">
            Lower Total
          </div>
          <div className="scoreBox">{scores.lowerScore}</div>
          <div className="scoreBox"></div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(LowerSection);
