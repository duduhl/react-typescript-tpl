import * as types from '../constants/actionType';
import { Store } from '../types/index';
import { Action } from '../actions/index';
import update from 'immutability-helper';
import { number } from 'prop-types';

let initState: Store = {
	num: 0
}

export default function (state: Store = initState, action: Action): Store {
	switch (action.type) {
		case types.ADD:
			return update<Store, any>(state, { num: { $set: state.num + 1 } })
		case types.SUBTRACT:
			return update<Store, any>(state, { num: { $set: state.num - 1 } })
		default:
			return state;
	}
}