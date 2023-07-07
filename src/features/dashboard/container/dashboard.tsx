import React from 'react';

import '../style/dashboard.scss';
import ProfileSideNav from '../component/profileSidenav';
import GroupListContainer from '../component/groupListContainer';

const DashboardContainer: React.FC = () => {
	return (
		<div className='height--full-viewport dashboard-container container'>
			<div className='dashboard-content'>
				<ProfileSideNav />
				<GroupListContainer />
			</div>
		</div>
	);
};

export default DashboardContainer;
