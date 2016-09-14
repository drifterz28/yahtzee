import {RECEIVE_CHART} from '../constants';

const initialState = {}

function update(state = initialState, action) {

	switch (action.type) {

	case RECEIVE_CHART:
			return Object.assign({}, state, action.json.npmPackage)
		default:
			return state
  }
}

module.exports = update;
