import React from 'react';

import '../style/dashboard.scss';
import ProfileSideNav from '../component/profileSidenav';

const DashboardContainer: React.FC = () => {
	return (
		<div className='height--full-viewport dashboard-container'>
			<div className='dashboard-content'>
				<ProfileSideNav />
				<div className='p--20'>Hiiiiii</div>
			</div>
		</div>
	);
};

export default DashboardContainer;
