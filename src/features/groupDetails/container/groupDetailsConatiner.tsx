import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IGroupDataInterface, IState } from 'shared/interface/state';

import '../style/groupDetails.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'shared/form/button';
import { BackButtonIcon } from 'shared/components/icons/icons';
import { isEmpty } from 'lodash';
import AddExpenseForm from '../component/addExpenseForm';
import GroupDetailsHeader from '../component/groupDetailsHeader';
import ExpenseList from '../component/expenseList';

const GroupDetailsContainer: React.FC = () => {
	const { groupData } = useSelector((state: IState) => state.splitData);
	const [groupDetails, setGroupDetails] = useState<IGroupDataInterface>({} as IGroupDataInterface);
	const [action, setAction] = useState('');
	const params = useParams();
	const navigate = useNavigate();
	const { id } = params;

	useEffect(() => {
		groupData.forEach((item) => {
			if (item.id === Number(id)) {
				setGroupDetails(item);
			}
		});
	}, [groupData, id]);

	return (
		<div className='container'>
			<div className='back--btn-wrapper'>
				<Button onClick={() => navigate('/dashboard')} className='back--btn'>
					<span className='mr--10'>
						<BackButtonIcon className='plus-icon' />
					</span>
					Back
				</Button>
			</div>
			{!isEmpty(groupDetails) && <GroupDetailsHeader groupDetails={groupDetails} setAction={setAction} />}
			{!isEmpty(groupDetails) && <ExpenseList groupDetails={groupDetails} />}
			{action === 'addExpense' && <AddExpenseForm setAction={setAction} />}
		</div>
	);
};

export default GroupDetailsContainer;
