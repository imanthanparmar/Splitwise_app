import React from 'react';
import { PlusIcon } from 'shared/components/icons/icons';
import Button from 'shared/form/button';
import { IGroupDataInterface } from 'shared/interface/state';

interface IProps {
	groupDetails: IGroupDataInterface;
	setAction: (action: string) => void;
}
const GroupDetailsHeader: React.FC<IProps> = (props) => {
	const { groupDetails, setAction } = props;
	return (
		<div className='group-title p--20'>
			<h3>{groupDetails.name}</h3>
			<Button onClick={() => setAction('addExpense')} className='btn--green'>
				<span className='mr--10'>
					<PlusIcon className='plus-icon' />
				</span>
				Add Expense
			</Button>
		</div>
	);
};

export default GroupDetailsHeader;
