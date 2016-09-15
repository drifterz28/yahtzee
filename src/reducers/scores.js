import {UPDATE_SCORES} from '../constants';

const initialState = {
  Ones: null,
	Twos: null,
	Threes: null,
	Fours: null,
	Fives: null,
	Sixes: null,
	'3 of a Kind': null,
	'4 of a Kind': null,
	'Full House': null,
	'Small Straight': null,
	'Large Straight': null,
	Yahtzee: null,
	Chance: null
};

function update(state = initialState, action) {
	console.log('action', action);
	switch (action.type) {
		case UPDATE_SCORES:
			return Object.assign({}, state, action.scores);
		default:
			return state;
  }
}

export default update;
