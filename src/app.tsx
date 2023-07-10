import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'hoc/layout/layout';
import DashboardContainer from 'features/dashboard/container/dashboard';
import GroupDetailsContainer from 'features/groupDetails/container/groupDetailsConatiner';
import ExpenseDetailsContainer from 'features/expenseDetails/container/expenseDetailsContainer';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<DashboardContainer />} />
				<Route path='/dashboard' element={<DashboardContainer />} />
				<Route path='/groupDetails/:id' element={<GroupDetailsContainer />} />
				<Route path='/expenseDetails/:groupId/:expenseId' element={<ExpenseDetailsContainer />} />
				<Route path='*' element={<Navigate replace to='/dashboard' />} />
			</Routes>
		</Layout>
	);
};

export default App;
