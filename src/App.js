// h2 for page title

import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer, Navbar } from './layout';
import FixedPlugin from './layout/navbar/FixedPlugin';
import { AppRoutes } from './routes';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
	return (
		<StrictMode>
			<Router>
				<ScrollToTop>
					<Navbar />
					<AppRoutes />
					<Footer />
					<FixedPlugin />
				</ScrollToTop>
			</Router>
		</StrictMode>
	);
};

export default App;
