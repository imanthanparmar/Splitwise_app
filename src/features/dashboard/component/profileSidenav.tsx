import React from 'react';

import MoneySplit from 'assets/images/splitmoney.png';
import Avatar from 'assets/images/avatar.png';
import { useSelector } from 'react-redux';
import { IState } from 'shared/interface/state';
import FriendList from './friendList';

const ProfileSideNav: React.FC = () => {
	const { userData } = useSelector((state: IState) => state.splitData);
	return (
		<div className='p--20 user-sidenav'>
			<div className='pb--20'>
				<div className='flex'>
					<img src={MoneySplit} alt='' className='mr--20' />
					<h1 className='text--center'>Split wise</h1>
				</div>
				<div className='flex align-items--center mt--40 text--center'>
					<img src={Avatar} alt='' className='avatar-img' />
					<h3 className='ml--20'>{userData.name} &#128075;</h3>
				</div>
			</div>
			<FriendList />
		</div>
	);
};

export default ProfileSideNav;
