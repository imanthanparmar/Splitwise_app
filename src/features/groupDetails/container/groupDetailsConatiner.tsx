import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'shared/interface/state';

const GroupDetailsContainer: React.FC = () => {
	const { groupData } = useSelector((state: IState) => state.splitData);
	return (
		<div className='container'>
			<h1>Hiiii</h1>
		</div>
	);
};

export default GroupDetailsContainer;
