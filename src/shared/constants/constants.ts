import { CSSProperties } from 'react';
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

const reactSelectStyles = {
	option: (base: CSSProperties, state: any) => ({
		...base,
		// borderBottom: '1px solid #e7e7e7',
		color: state.isSelected ? 'white' : state.isFocused ? '' : '#272A30',
		padding: 8,
		backgroundColor: state.isSelected ? '#081d34' : state.isFocused ? '' : '',
		':active': {
			backgroundColor: '#081d34',
			color: 'white'
		},
		':hover': {
			backgroundColor: '#081d34',
			color: 'white'
		},
		':focus': {
			backgroundColor: '#081d34',
			outline: 0,
			color: 'white'
		},
		cursor: 'pointer'
	}),
	menu: (base: CSSProperties) => ({
		...base,
		zIndex: 3,
		marginTop: 4,
		border: '1px solid #D4D6D9',
		borderRadius: 8
	}),
	menuList: (base: CSSProperties) => ({
		...base,
		padding: 0,
		backgroundColor: '#ffffff !important'
	}),
	clearIndicator: (base: CSSProperties) => ({
		...base,
		cursor: 'pointer'
	}),
	dropdownIndicator: (base: CSSProperties, state: any) => ({
		...base,
		cursor: 'pointer',
		transition: 'all 0.2s ease',
		transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
		color: '#081D34'
	}),
	indicatorSeparator: () => ({
		width: '0'
	}),
	control: () => ({
		// none of react-selects styles are passed to <View />
		display: 'flex',
		width: '100%',
		minHeight: '34px !important',
		border: '1px solid #EDEEEF',
		padding: '0px !important',
		borderRadius: '8px'
	}),
	singleValue: (base: CSSProperties, state: any) => {
		const opacity = state.isDisabled ? 0.5 : 1;
		const transition = 'opacity 300ms';
		return { ...base, opacity: opacity, transition: transition };
	}
};

const USER_LIST: IUserInterface[] = [
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
];

const GROUP_DATA: IGroupDataInterface[] = [
	{
		id: 1,
		name: 'Goa trip',
		totalGroupExpense: 0,
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
		],
		expenses: []
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
	GROUP_DATA,
	USER_LIST,
	reactSelectStyles
};
