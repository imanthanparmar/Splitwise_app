import { IGroupDataInterface, IUserInterface } from 'shared/interface/state';

const FIRST_LEVEL_BREADCRUMBS = [{ name: 'home', link: '/' }];

const NUMBER_REGEX = /[0-9]*\.?[0-9]*$/;
const PASSWORD_VALIDATOR_REGEX = /^(?=.{8,})(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+*!=]).*$/;
const EMAIL_VALIDATOR_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const DATE_AND_TIME_REGEX = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])*$/;

enum HASHTAG {
	'hashtag' = 'Hashtag Name',
	'slug' = 'Slug',
	'is_active' = 'Status',
	'is_sponsored_by' = 'Sponsored by',
	'priority' = 'Priority',
	'meta_title' = 'Meta Title',
	'meta_description' = 'Meta Description'
}

const GROUP_DATA: IGroupDataInterface[] = [
	{
		id: 1,
		name: 'Goa trip',
		users: [
			{
				id: 1,
				name: 'Manthan',
				paidAmount: 0,
				ownedAmount: 0,
				borrowedAmount: 0
			},
			{
				id: 2,
				name: 'Vikas',
				paidAmount: 0,
				ownedAmount: 0,
				borrowedAmount: 0
			},
			{
				id: 3,
				name: 'Milan',
				paidAmount: 0,
				ownedAmount: 0,
				borrowedAmount: 0
			},
			{
				id: 4,
				name: 'Rahul',
				paidAmount: 0,
				ownedAmount: 0,
				borrowedAmount: 0
			},
			{
				id: 5,
				name: 'Mihir',
				paidAmount: 0,
				ownedAmount: 0,
				borrowedAmount: 0
			}
		]
	}
];

const USER_PROFILE_DETAILS: IUserInterface = {
	id: 1,
	name: 'Manthan',
	paidAmount: 0,
	ownedAmount: 0,
	borrowedAmount: 0
};

export {
	FIRST_LEVEL_BREADCRUMBS,
	NUMBER_REGEX,
	PASSWORD_VALIDATOR_REGEX,
	EMAIL_VALIDATOR_REGEX,
	DATE_AND_TIME_REGEX,
	HASHTAG,
	USER_PROFILE_DETAILS,
	GROUP_DATA
};
