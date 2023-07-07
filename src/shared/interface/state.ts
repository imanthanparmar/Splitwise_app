import { IAuthState } from 'features/auth/interface/auth';

export interface IState {
	loading: ILoadingState;
	auth: IAuthState;
	splitData: ISpliData;
}

export interface ILoadingState {
	api: {
		[key: string]: boolean;
	};
}

export interface IAction {
	type: string;
	payload: any;
}

export interface ISpliData {
	groupData: IGroupDataInterface[];
	userData: IUserInterface;
	userList: IUserInterface[];
}

export interface IGroupDataInterface {
	id: number;
	name: string;
	users: IUserInterface[];
}

export interface IUserInterface {
	id: number;
	name: string;
	paidAmount: number;
	ownedAmount: number;
	borrowedAmount: number;
}
