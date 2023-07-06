import React, { useCallback } from 'react';
import '../style/welcome.scss';
import MoneySplit from 'assets/images/splitmoney.png';
import { useSelector } from 'react-redux';
import { IState } from 'shared/interface/state';

const Welcome: React.FC = () => {
	const { splitData } = useSelector((state: IState) => state);
	console.log('splitData :>> ', splitData);

	const handleOnClick = useCallback(() => {
		localStorage.setItem('groupData', JSON.stringify(splitData.groupData));
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
