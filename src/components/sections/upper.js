import React, { Component} from 'react';
import {connect} from 'react-redux';
import Section from './scoreSection';

class UpperSection extends Component {
  addUppers(dice, number) {
    var total = dice.reduce(function(a, b) {
      b = (b !== number) ? 0 : b;
      return a + b;
    }, 0);
    return total;
  }
  clearSections(sections) {
    return sections.map((sec) => {
      if(!sec.isLocked) {
        sec.points = null;
      }
      return sec;
    });
  }
  addPoints = (number) => {
    // will need to add Yahtzee check and give +50 points on
    // top of the score and make display
    const {dice} = this.props.dice;
    let {upper, lower} = this.props;

    if(upper[number].isLocked) {
      return;
    }

    let points = this.addUppers(dice, number + 1);
    upper = this.clearSections(upper);
    lower = this.clearSections(lower);

    upper[number].points = points;

    this.props.dispatch({
      type: 'UPDATE_LOWER',
      lower
    });

    this.props.dispatch({
      type: 'UPDATE_UPPER',
      upper
    });
  }
  render() {
    const {upper, scores} = this.props;
    return (
      <section className="lower">
        {upper.map((section, i) => {
          return <Section key={i} index={i} addPoints={this.addPoints} section={section}/>
        })}

        <div className="sectionLabel lowerScore">
          <div className="label">
            Upper Subtotal
          </div>
          <div className="scoreBox">{scores.upperScore}</div>
          <div className="scoreBox"></div>
        </div>
        <div className="sectionLabel lowerScore">
          <div className="label">
            Bonus
          </div>
          <div className="scoreBox">{scores.upperBonus}</div>
          <div className="scoreBox"></div>
        </div>
        <div className="sectionLabel lowerScore">
          <div className="label">
            Upper Total
          </div>
          <div className="scoreBox">{scores.upperBonus + scores.upperScore}</div>
          <div className="scoreBox"></div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(UpperSection);
