import React, { Component} from 'react';
import {connect} from 'react-redux';
import Section from './scoreSection';

class LowerSection extends Component {
  addLower(dice, number) {
    var total = dice.reduce(function(a, b) {
      b = (b !== number) ? 0 : b;
      return a + b;
    }, 0);
    return total;
  }
  addPoints = (number) => {
    const {dice} = this.props.dice;
    let {lower} = this.props;
    // will need to work on how points are added.
    // will use maxPoints for most items except
    // match 3, 4 and chance
    let points = this.addUppers(dice, number + 1);
    lower = lower.map((section) => {
      if(!section.isLocked) {
        section.points = null;
      }
      return section;
    });
    lower[number].points = points;
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
