import {ROLL_DICE, UPDATE_HOLDS} from '../constants';

const initialState = {
  turn: 0,
  dice: [0,0,0,0,0],
	holds: [false, false, false, false, false]
};

function update(state = initialState, action) {
	let newState = {};
	switch (action.type) {
		case ROLL_DICE:
			newState = {
				turn: action.turn,
				dice: action.dice,
				holds: action.holds
			};
			return Object.assign({}, state, newState);
		case UPDATE_HOLDS:
			newState.holds = action.holds;
			return Object.assign({}, state, newState);
		default:
			return state;
  }
}

export default update;
