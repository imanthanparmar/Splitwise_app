import { isEmpty } from 'lodash';
import React from 'react';
import { IGroupDataInterface } from 'shared/interface/state';

interface IProps {
	groupDetails: IGroupDataInterface;
}

const ExpenseList: React.FC<IProps> = (props) => {
	const { groupDetails } = props;
	return (
		<div className='expense-list--container'>
			{!isEmpty(groupDetails.expenses) &&
				groupDetails.expenses.map((item) => {
					return <h1>Expense</h1>;
				})}
			{isEmpty(groupDetails.expenses) && <h4 className='text--center'>No expenses</h4>}
		</div>
	);
};

export default ExpenseList;
