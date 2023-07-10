import { isEmpty } from 'lodash';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteIcon } from 'shared/components/icons/icons';
import { IGroupDataInterface, IState } from 'shared/interface/state';
import { createAction } from 'shared/util/utility';
import * as actionTypes from 'store/actionTypes';

interface IProps {
	groupDetails: IGroupDataInterface;
}

const ExpenseList: React.FC<IProps> = (props) => {
	const { groupDetails } = props;
	const { groupData } = useSelector((state: IState) => state.splitData);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleDeleteExpense = useCallback(
		(id: number) => {
			const tempGroupData = [...groupData];
			let tempGroupDetails = { ...groupDetails };
			const expenseList = [...groupDetails.expenses];
			expenseList.forEach((item, index) => {
				if (item.id === id) {
					tempGroupDetails = {
						...tempGroupDetails,
						totalGroupExpense: Number(tempGroupDetails.totalGroupExpense) - Number(item.amount)
					};
					expenseList.splice(index, 1);
				}
			});
			tempGroupDetails = {
				...tempGroupDetails,
				expenses: expenseList
			};
			tempGroupData.forEach((item, index) => {
				if (item.id === tempGroupDetails.id) {
					tempGroupData.splice(index, 1, tempGroupDetails);
				}
			});
			dispatch(createAction(actionTypes.UPDATE_SPLIT_DATA, { groupData: tempGroupData }));
			localStorage.setItem('groupData', JSON.stringify(tempGroupData));
		},
		[groupData, groupDetails]
	);
	return (
		<div className='expense-list--container'>
			{!isEmpty(groupDetails.expenses) &&
				groupDetails.expenses.map((item) => {
					return (
						<div
							className='expense-list cursor--pointer'
							onClick={() => navigate(`/expenseDetails/${groupDetails.id}/${item.id}`)}
						>
							<h5 className='font--regular'>{item.title}</h5>
							<div className='flex'>
								{!item.isSettledUp && <p>Total amount: {item.amount} &#x20B9;</p>}
								{item.isSettledUp && <p>Settled up.</p>}
								<span className='ml--10' onClick={() => handleDeleteExpense(item.id)}>
									<DeleteIcon />
								</span>
							</div>
						</div>
					);
				})}
			{isEmpty(groupDetails.expenses) && <h4 className='text--center'>No expenses</h4>}
		</div>
	);
};

export default ExpenseList;
