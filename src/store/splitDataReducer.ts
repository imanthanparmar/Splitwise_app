import { GROUP_DATA, USER_PROFILE_DETAILS } from 'shared/constants/constants';
import { IAction, ISpliData } from 'shared/interface/state';

import * as actionTypes from 'store/actionTypes';

const splitDataReducer = (
	state: ISpliData = {
		groupData: GROUP_DATA,
		userData: USER_PROFILE_DETAILS
	},
	action: IAction
): ISpliData => {
	switch (action.type) {
		case actionTypes.UPDATE_SPLIT_DATA:
			return { ...state, ...action.payload };

		default:
			return state;
	}
};

export default splitDataReducer;
