import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'hoc/layout/layout';
import Welcome from 'features/welcomePage/container/welcome';
import DashboardContainer from 'features/dashboard/container/dashboard';
import GroupDetailsContainer from 'features/groupDetails/container/groupDetailsConatiner';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/welcome' element={<Welcome />} />
				<Route path='/dashboard' element={<DashboardContainer />} />
				<Route path='/groupDetails/:id' element={<GroupDetailsContainer />} />
			</Routes>
		</Layout>
	);
};

export default App;
