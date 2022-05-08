import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Blogs from '../components/Blogs/Blogs';
import Home from '../components/Home/Home';
import BlogDetail from '../components/Blogs/BlogDetails';
import Programs from '../components/programs/Programs';
import ProgramsDetails from '../components/programs/ProgramDetails';
import Scholarship from '../components/Scholarship/Scholarship';
import Quiz from '../components/Scholarship/Quiz';
import Contact from '../components/contact/Contact';
import Aboutus from '../components/About/Aboutus';
import Data from '../components/About/Data';
import Program_DB_Master from '../assets/static/Program_DB_Master';
import Termofuse from '../components/Termsofuse';
import PrivacPolicy from '../components/PrivacyPolicy';
import Disclaimer from '../components/Disclaimer';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/home' />} />
			<Route path='/home' element={<Home />} />
			<Route path='/blogs' element={<Blogs />} />
			<Route path='/scholarship' element={<Scholarship />} />
			<Route path='/blog-details/:id' element={<BlogDetail />} />
			<Route path='/programs' element={<Programs />} />
			<Route path='/scholarship/:id' element={<Quiz />} />
			<Route path='/contact' element={<Contact />} />
			<Route path="/terms-of-use" element={<Termofuse/>}/>
			<Route path="/disclaimer" element={<Disclaimer/>}/>
			<Route path="/privacy-policy" element={<PrivacPolicy/>}/>
			{Program_DB_Master.map((e, i) => (
				<Route
					path={e.pathname}
					element={<ProgramsDetails programData={e} />}
					key={i}
				/>
			))}
			<Route path='/aboutus' element={<Aboutus />} />
			<Route path='/data' element={<Data />} />
		</Routes>
	);
};

export default AppRoutes;
