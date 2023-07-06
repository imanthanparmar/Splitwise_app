import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { IState } from 'shared/interface/state';
import MoneySplit from 'assets/images/splitmoney.png';

import '../style/welcome.scss';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
	const { splitData } = useSelector((state: IState) => state);
	const navigate = useNavigate();
	const handleOnClick = useCallback(() => {
		localStorage.setItem('groupData', JSON.stringify(splitData.groupData));
		navigate('/dashboard');
	}, [splitData.groupData]);

	return (
		<div className='height--full-viewport width--full'>
			<div className='flex align-items--center pt--20 justify-content--center'>
				<img src={MoneySplit} alt='' className='mr--20' />
				<h1 className='text--center'>Split wise</h1>
			</div>
			<div className='welcome-conatiner'>
				<button onClick={handleOnClick} className='welcome-btn'>
					Get started
				</button>
			</div>
		</div>
	);
};

export default Welcome;
