import React, { Component} from 'react';
import {connect} from 'react-redux';
import Section from './scoreSection';

class LowerSection extends Component {
  render() {
    const sectionLabels = ['3 of a Kind', '4 of a Kind', 'Full House', 'Small Straight', 'Large Straight', 'Yahtzee', 'Chance'];
    return (
      <section className="lower">
        {sectionLabels.map((label, i) => {
          return <Section label={label} key={i}/>
        })}
        <div className="secionLabel upperScore">
          <div className="label">
            Lower Total
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

export default connect(null)(LowerSection);
