import React from 'react';
import { PlusIcon } from 'shared/components/icons/icons';
import Button from 'shared/form/button';
import CustomModal from 'shared/modal/modal';

interface IProps {
	setAction: (action: string) => void;
	action: string;
}

const GroupListHeader: React.FC<IProps> = (props) => {
	const { action, setAction } = props;
	return (
		<div className='flex justify-content--between'>
			<h4 className='no--margin'>Groups</h4>
			<Button onClick={() => setAction('addGroup')} className='add-group--btn'>
				<span className='mr--10'>
					<PlusIcon className='plus-icon' />
				</span>
				Add Group
			</Button>
			{action === 'addGroup' && (
				<CustomModal handleClose={() => setAction('')} show={true}>
					<h3>Add group</h3>
				</CustomModal>
			)}
		</div>
	);
};

export default GroupListHeader;
