import React, {Component} from 'react';
import {connect} from 'react-redux';
import Die from '../components/dice/die';

class Dice extends Component {
  render() {
    let dice = [];
    for(let i = 0; i < 5; i++) {
      dice.push(<Die key={i}/>);
    }
    return (
      <div className="diceWrap">
        {dice}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return state;
}

export default connect(mapStateToProps)(Dice);
