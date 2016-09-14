import {UPDATE_DICE} from '../constants';

const initialState = {
  turn: 0,
  dice: [0,0,0,0,0]
};

function update(state = initialState, action) {

	switch (action.type) {
		case UPDATE_DICE:
			return Object.assign({}, state, action.json);
		default:
			return state;
  }
}

export default update;
