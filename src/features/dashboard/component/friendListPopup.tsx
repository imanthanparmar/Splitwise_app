import React from 'react';
import { IUserInterface } from 'shared/interface/state';

import CustomModal from 'shared/modal/modal';

interface IProps {
	setAction: (action: string) => void;
	list: IUserInterface[];
}
const FriendListPopup: React.FC<IProps> = (props) => {
	const { setAction, list } = props;

	return (
		<CustomModal show={true} handleClose={() => setAction('')}>
			<h5 className='no--margin'>Friend list</h5>
			<div className='mt--30'>
				{list.map((user: IUserInterface) => {
					return <h5 className='p--10'>{user.name}</h5>;
				})}
			</div>
		</CustomModal>
	);
};

export default FriendListPopup;
