import { GROUP_DATA, USER_LIST, USER_PROFILE_DETAILS } from 'shared/constants/constants';
import { IAction, ISpliData } from 'shared/interface/state';

import * as actionTypes from 'store/actionTypes';

const splitDataReducer = (
	state: ISpliData = {
		groupData: JSON.parse(localStorage.getItem('groupData') as string) || GROUP_DATA,
		userData: JSON.parse(localStorage.getItem('userDetails') as string) || USER_PROFILE_DETAILS,
		userList: JSON.parse(localStorage.getItem('userList') as string) || USER_LIST
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
