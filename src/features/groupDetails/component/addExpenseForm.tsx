import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, FormikValues } from 'formik';
import { useParams } from 'react-router-dom';
import Select from 'react-select';

import CustomModal from 'shared/modal/modal';
import Button from 'shared/form/button';
import { IExpenseInterface, IGroupDataInterface, IState } from 'shared/interface/state';
import { reactSelectStyles } from 'shared/constants/constants';
import { isEmpty, size } from 'lodash';
import * as actionTypes from 'store/actionTypes';
import { createAction } from 'shared/util/utility';

interface IProps {
	setAction: (action: string) => void;
}

interface IUserOptions {
	id: number;
	label: string;
	value: string;
}

const AddExpenseForm: React.FC<IProps> = (props) => {
	const { setAction } = props;
	const { groupData } = useSelector((state: IState) => state.splitData);
	const [groupDetails, setGroupDetails] = useState<IGroupDataInterface>({} as IGroupDataInterface);
	const [userOptions, setUserOption] = useState<IUserOptions[]>([]);
	const [remainingOptions, setRemainingOptions] = useState<IUserOptions[]>([]);
	const [loading, setLoading] = useState(false);
	const params = useParams();
	const dispatch = useDispatch();

	const handleSunmit = useCallback(
		(values: FormikValues) => {
			setLoading(true);
			const tempUserList = [...groupDetails.users];
			let tempGroupDetails = { ...groupDetails };
			const tempGroupData = [...groupData];
			let peopleInvolved: any = [];
			const expenseList = [...groupDetails.expenses];
			const tempuserArr = [...[values.paidBy], ...values.peopleInvolved];
			tempUserList.map((item) => {
				tempuserArr.forEach((data) => {
					if (data.id === item.id) {
						peopleInvolved.push(item);
					}
				});
			});
			peopleInvolved = peopleInvolved.map((item: any) => {
				return {
					...item,
					ownedAmount:
						item.id !== values.paidBy.id
							? item.ownedAmount + values.amount / size(tempuserArr)
							: item.ownedAmount,
					paidAmount:
						item.id === values.paidBy.id
							? item.paidAmount + (values.amount / size(tempuserArr)) * (size(tempuserArr) - 1)
							: item.paidAmount
				};
			});
			const expense = {
				id: Date.now(),
				title: values.title,
				amount: values.amount,
				peopleInvolved: peopleInvolved,
				paidBy: peopleInvolved.filter((item: any) => item.id === values.paidBy.id)[0]
			};
			expenseList.push(expense as IExpenseInterface);
			tempGroupDetails = {
				...tempGroupDetails,
				expenses: expenseList,
				totalGroupExpense: Number(tempGroupDetails.totalGroupExpense) + Number(values.amount)
			};
			tempGroupData.forEach((item, index) => {
				if (item.id === tempGroupDetails.id) {
					tempGroupData.splice(index, 1, tempGroupDetails);
				}
			});
			dispatch(createAction(actionTypes.UPDATE_SPLIT_DATA, { groupData: tempGroupData }));
			localStorage.setItem('groupData', JSON.stringify(tempGroupData));
			setAction('');
			setLoading(false);
		},
		[groupData, groupDetails]
	);

	const handleOnChange = useCallback(
		(selectedUser: IUserOptions) => {
			const tempArray = [...userOptions];
			tempArray.forEach((item, index) => {
				if (selectedUser.id === item.id) {
					tempArray.splice(index, 1);
				}
			});
			setRemainingOptions(tempArray);
		},
		[userOptions]
	);

	useEffect(() => {
		if (!isEmpty(groupDetails)) {
			const options = groupDetails.users.map((item) => {
				return {
					id: item.id,
					label: item.name,
					value: item.name
				};
			});
			setUserOption(options);
		}
	}, [groupDetails]);

	useEffect(() => {
		groupData.forEach((item) => {
			if (item.id === Number(params.id)) {
				setGroupDetails(item);
			}
		});
	}, [groupData, params.id]);

	return (
		<CustomModal show={true} handleClose={() => setAction('')}>
			<h5 className='no--margin'>Add Expense</h5>
			{!isEmpty(userOptions) && (
				<Formik
					initialValues={{
						title: '',
						paidBy: {} as IUserOptions,
						peopleInvolved: [] as IUserOptions[],
						amount: 0
					}}
					onSubmit={handleSunmit}
				>
					{({ setFieldValue, handleSubmit, dirty, values }) => {
						return (
							<form onSubmit={handleSubmit} className='position--relative mt--30'>
								<div className='width--full flex flex--column'>
									<label>Title:</label>
									<input
										name='title'
										onChange={({ target }) => setFieldValue('title', target.value.trimStart())}
										placeholder='Title'
										type='text'
										className='mt--10'
									/>
								</div>
								<div className='width--full flex flex--column mt--20'>
									<label>Amount:</label>
									<input
										name='amount'
										onChange={({ target }) => setFieldValue('amount', target.value)}
										placeholder='Amount'
										type='number'
										className='mt--10'
									/>
								</div>
								<div className='width--full flex flex--column mt--20'>
									<label>Paid by:</label>
									<Select
										placeholder='Select'
										styles={reactSelectStyles as any}
										name={'paidBy'}
										options={userOptions}
										onChange={(selectedOption: any) => {
											handleOnChange(selectedOption);
											setFieldValue('paidBy', selectedOption);
										}}
										classNamePrefix='select'
										isMulti={false}
										className={`form-field background-white no-padding width--206px cursor--pointer pointer-events--auto`}
										isSearchable={false}
									/>
								</div>
								<div className='width--full flex flex--column mt--20'>
									<label>People involved:</label>
									<Select
										placeholder='Select'
										styles={reactSelectStyles as any}
										name={'peopleInvolved'}
										options={remainingOptions}
										onChange={(selectedOption: any) => {
											setFieldValue('peopleInvolved', selectedOption);
										}}
										classNamePrefix='select'
										isMulti={true}
										className={`form-field background-white no-padding width--206px pointer-events--auto ${
											!isEmpty(values.paidBy) ? 'cursor--pointer' : 'cursor-not--allowed'
										} `}
										isSearchable={true}
										isDisabled={isEmpty(values.paidBy)}
									/>
								</div>
								<Button type='submit' loading={loading} disabled={!dirty} className='mt--20 submit-btn'>
									Submit
								</Button>
							</form>
						);
					}}
				</Formik>
			)}
		</CustomModal>
	);
};

export default AddExpenseForm;
