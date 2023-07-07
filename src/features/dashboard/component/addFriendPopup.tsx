import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, FormikValues } from 'formik';

import Button from 'shared/form/button';
import { IState, IUserInterface } from 'shared/interface/state';
import CustomModal from 'shared/modal/modal';
import { createAction } from 'shared/util/utility';
import * as actionTypes from 'store/actionTypes';

interface IProps {
	setAction: (action: string) => void;
}
const AddFriendPopup: React.FC<IProps> = (props) => {
	const { setAction } = props;
	const { userList } = useSelector((state: IState) => state.splitData);
	const [list, setList] = useState<IUserInterface[]>([]);
	const dispatch = useDispatch();

	const handleSubmit = useCallback(
		(values: FormikValues) => {
			const tempList = [...list];
			tempList.push({
				id: Date.now(),
				name: values.name,
				paidAmount: 0,
				ownedAmount: 0,
				borrowedAmount: 0
			});
			dispatch(createAction(actionTypes.UPDATE_SPLIT_DATA, { userList: tempList }));
			localStorage.setItem('userList', JSON.stringify(tempList));
			setList(tempList);
			setAction('');
		},
		[list]
	);

	useEffect(() => {
		setList(userList);
	}, [userList]);

	return (
		<CustomModal show={true} handleClose={() => setAction('')}>
			<h5 className='no--margin'>Add Friend</h5>
			<Formik
				initialValues={{
					name: ''
				}}
				onSubmit={handleSubmit}
			>
				{({ setFieldValue, handleSubmit, dirty }) => {
					return (
						<form onSubmit={handleSubmit} className='position--relative mt--30'>
							<div className='width--full flex flex--column'>
								<label>Name</label>
								<input
									name='name'
									onChange={({ target }) => setFieldValue('name', target.value)}
									placeholder='Name'
									type='text'
									className='mt--10'
								/>
							</div>
							<Button type='submit' disabled={!dirty} className='mt--20 submit-btn'>
								Submit
							</Button>
						</form>
					);
				}}
			</Formik>
		</CustomModal>
	);
};

export default AddFriendPopup;
