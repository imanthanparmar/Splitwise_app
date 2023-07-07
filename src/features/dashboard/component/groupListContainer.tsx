import React, { useState } from 'react';
import GroupListHeader from './groupListHeader';
import GroupList from './groupList';

const GroupListContainer: React.FC = () => {
	const [action, setAction] = useState('');
	return (
		<div className='p--20'>
			<GroupListHeader setAction={setAction} action={action} />
			<GroupList />
		</div>
	);
};

export default GroupListContainer;
