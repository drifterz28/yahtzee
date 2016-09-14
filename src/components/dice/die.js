import React, {Component} from 'react'
import styles from './dice.scss';

export default class Dice extends Component {
  render() {
    return (
      <div className={`dice`} >
    		<div className="dot"></div>
    		<div className="dot"></div>
    		<div className="dot"></div>
    		<div className="dot"></div>
    		<div className="dot"></div>
    		<div className="dot"></div>
    	</div>
    );
  }
};
