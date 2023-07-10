import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IState } from 'shared/interface/state';

const GroupList: React.FC = () => {
	const { groupData } = useSelector((state: IState) => state.splitData);
	const navigate = useNavigate();
	return (
		<div className='pb--20 pt--20'>
			{groupData.map((item) => {
				return (
					<div
						onClick={() => navigate(`/groupDetails/${item.id}`)}
						className='group-list--container cursor--pointer'
					>
						<h5 className='font--regular'>{item.name}</h5>
						<p>Total expense: {item.totalGroupExpense} &#x20B9;</p>
					</div>
				);
			})}
		</div>
	);
};

export default GroupList;
