import React, {Component} from 'react';
import {connect} from 'react-redux';
import Die from '../components/dice/die';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Dice extends Component {
  roll() {
    let {turn, holds} = this.props.dice;
    turn++;
    const diceRoll = this.rollDice();
    this.props.dispatch({
      'type': 'ROLL_DICE',
      'turn': turn,
      'dice': diceRoll,
      'holds': holds
    });
  }
  rollDice() {
    let {dice, holds} = this.props.dice;
    for(var i = 0; i < 5; i++) {
  		if(!holds[i]) {
  			var ranNum = getRandomIntInclusive(1, 6);
  			dice[i] = ranNum;
  		}
  	}
    return dice;
  }
  play() {
    console.log('play the points');
  }
  render() {
    const {turn, dice, holds} = this.props.dice;
    let die = [];
    for(let i = 0; i < 5; i++) {
      const number = dice[i];
      const isHold = holds[i];
      die.push(<Die key={i} index={i} number={number} isHold={isHold}/>);
    }
    return (
      <div className="diceWrap">
        {turn > 0 && turn < 3 && <div><button onClick={this.roll.bind(this)}>Roll {turn}</button></div>}
        {turn > 0 ? die : <button onClick={this.roll.bind(this)} className="playBtn">Play</button>}
        {turn > 0 && <div><button onClick={this.play.bind(this)}>Play</button></div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return state;
}

export default connect(mapStateToProps)(Dice);
