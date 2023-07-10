import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BackButtonIcon } from 'shared/components/icons/icons';
import Button from 'shared/form/button';
import ExpenseDetails from '../component/expenseDetails';
import '../style/expenseDetails.scss';
import Confetti from '../component/confetti';
import { IExpenseInterface, IState } from 'shared/interface/state';
import { useSelector } from 'react-redux';

const ExpenseDetailsContainer: React.FC = () => {
	const navigate = useNavigate();
	const params = useParams();
	const [expenseDetail, setExpenseDetaial] = useState({} as IExpenseInterface);
	const { groupData } = useSelector((state: IState) => state.splitData);

	useEffect(() => {
		groupData.forEach((item) => {
			if (item.id === Number(params.groupId)) {
				item.expenses.forEach((expense) => {
					if (expense.id === Number(params.expenseId)) {
						setExpenseDetaial(expense);
					}
				});
			}
		});
	}, [groupData, params.expenseId, params.groupId]);
	return (
		<div className='container'>
			<div className='back--btn-wrapper'>
				<Button onClick={() => navigate(`/groupDetails/${params.groupId}`)} className='back--btn'>
					<span className='mr--10'>
						<BackButtonIcon className='plus-icon' />
					</span>
					Back
				</Button>
			</div>
			<ExpenseDetails />
			{expenseDetail.isSettledUp && <Confetti />}
		</div>
	);
};

export default ExpenseDetailsContainer;
