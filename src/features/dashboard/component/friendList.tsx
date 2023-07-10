import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { PlusIcon } from 'shared/components/icons/icons';
import { IState, IUserInterface } from 'shared/interface/state';

import AddFriendPopup from './addFriendPopup';
import FriendListPopup from './friendListPopup';

const FriendList: React.FC = () => {
	const { userList, userData } = useSelector((state: IState) => state.splitData);
	const [action, setAction] = useState('');
	const [friendList, setFriendList] = useState<IUserInterface[]>([]);

	useEffect(() => {
		const tempUsers = [...userList];
		tempUsers.forEach((user, index) => {
			if (user.id === userData.id) {
				tempUsers.splice(index, 1);
			}
		});
		setFriendList(tempUsers);
	}, [userData.id, userList]);
	return (
		<div className='mt--40 flex'>
			<div className='width--full text--right'>
				<button onClick={() => setAction('addFriend')} className='add-frind--btn'>
					<span className='mr--10'>
						<PlusIcon className='plus-icon' />
					</span>
					Add Friend
				</button>
			</div>
			<div className='width--full text--right'>
				<button onClick={() => setAction('friendList')} className='user-list--btn'>
					Friend list
				</button>
			</div>

			{action === 'addFriend' && <AddFriendPopup setAction={setAction} />}
			{action === 'friendList' && <FriendListPopup list={friendList} setAction={setAction} />}
		</div>
	);
};

export default FriendList;
