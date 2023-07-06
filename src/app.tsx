import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'hoc/layout/layout';
import Welcome from 'features/welcomePage/container/welcome';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/welcome' element={<Welcome />} />
			</Routes>
		</Layout>
	);
};

export default App;
