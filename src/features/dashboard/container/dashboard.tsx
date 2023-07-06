import React from 'react';
import { useSelector } from 'react-redux';

import { IState } from 'shared/interface/state';
import MoneySplit from 'assets/images/splitmoney.png';

const DashboardContainer: React.FC = () => {
	const { splitData } = useSelector((state: IState) => state);
	console.log('splitData', splitData);
	return (
		<div>
			<div className='flex ml--20 mt--20'>
				<img src={MoneySplit} alt='' className='mr--20' />
				<h1 className='text--center'>Split wise</h1>
			</div>
		</div>
	);
};

export default DashboardContainer;
