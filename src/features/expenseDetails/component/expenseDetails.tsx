import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import * as actionTypes from 'store/actionTypes';
import Button from 'shared/form/button';
import { IExpenseInterface, IGroupDataInterface, IState } from 'shared/interface/state';
import { createAction } from 'shared/util/utility';

const ExpenseDetails: React.FC = () => {
	const [expenseDetail, setExpenseDetaial] = useState({} as IExpenseInterface);
	const [groupDetails, setGroupDetails] = useState({} as IGroupDataInterface);
	const [isSettledUp, setIsSettledUp] = useState(false);
	const { groupData } = useSelector((state: IState) => state.splitData);
	const params = useParams();
	const dispatch = useDispatch();

	const handleSettledUp = useCallback(() => {
		const tempGroupData = [...groupData];
		let tempGroupDetails = { ...groupDetails };
		let tempExpenseDetail = { ...expenseDetail };
		const tempExpenseArr = [...groupDetails.expenses];
		tempExpenseDetail = {
			...tempExpenseDetail,
			isSettledUp: true
		};
		tempExpenseArr.forEach((item, index) => {
			if (item.id === tempExpenseDetail.id) {
				tempExpenseArr.splice(index, 1, tempExpenseDetail);
			}
		});
		tempGroupDetails = {
			...tempGroupDetails,
			expenses: tempExpenseArr
		};
		tempGroupData.forEach((item, index) => {
			if (item.id === tempGroupDetails.id) {
				tempGroupData.splice(index, 1, tempGroupDetails);
			}
		});
		dispatch(createAction(actionTypes.UPDATE_SPLIT_DATA, { groupData: tempGroupData }));
		localStorage.setItem('groupData', JSON.stringify(tempGroupData));
	}, [expenseDetail, groupData, groupDetails]);

	useEffect(() => {
		groupData.forEach((item) => {
			if (item.id === Number(params.groupId)) {
				setGroupDetails(item);
				item.expenses.forEach((expense) => {
					if (expense.id === Number(params.expenseId)) {
						setExpenseDetaial(expense);
						setIsSettledUp(expense.isSettledUp);
					}
				});
			}
		});
	}, [groupData, params.expenseId, params.groupId]);

	return (
		<div className='p--20'>
			{!isEmpty(expenseDetail) && !isSettledUp && (
				<div>
					<h3 className='text--center'>{expenseDetail.title}</h3>
					<div className='mt--40 p--20 expense-details'>
						<p>
							Bill amount: <span className='text--green'>{expenseDetail.amount} &#x20B9;</span>
						</p>
						<p className='mt--20'>Bill paid by: {expenseDetail.paidBy.name}</p>
						{expenseDetail.peopleInvolved.map((item) => {
							if (expenseDetail.paidBy.id !== item.id) {
								console.log('item :>> ', item);
								return (
									<p className='mt--20'>
										<span className='font--medium'>{expenseDetail.paidBy.name} </span>
										owned
										<span className='text--red'> {item.ownedAmount.toFixed(2)} &#x20B9; </span>
										from
										<span className='font--medium'> {item.name}.</span>
									</p>
								);
							}
						})}
						<div className='flex justify-content--center'>
							<Button onClick={handleSettledUp} className='btn--green mt--20'>
								Settle up
							</Button>
						</div>
					</div>
				</div>
			)}
			{!isEmpty(expenseDetail) && isSettledUp && (
				<h5 className='text--center'>You are all settled up &#x1F604;</h5>
			)}
		</div>
	);
};

export default ExpenseDetails;
