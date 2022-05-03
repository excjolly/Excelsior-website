import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Blogs from '../components/Blogs/Blogs';
import Home from '../components/Home/Home';
import BlogDetail from '../components/Blogs/BlogDetails';
import Program from '../components/programs/Programs';
import ProgramsDetails from '../components/programs/ProgramDetails';
import Scholarship from '../components/Scholarship/Scholarship';
import Quiz from '../components/Scholarship/Quiz';
import Contact from '../components/contact/Contact';
import Aboutus from '../components/About/Aboutus';
import Data from '../components/About/Data';
import Program_DB_Master from '../assets/static/Program_DB_Master';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/home' />} />
			<Route path='/home' element={<Home />} />
			<Route path='/blogs' element={<Blogs />} />
			<Route path='/scholarship' element={<Scholarship />} />
			<Route path='/blog-details' element={<BlogDetail />} />
			<Route path='/programs' element={<Program />} />
			<Route path='/scholarship/quiz' element={<Quiz />} />
			<Route path='/contact' element={<Contact />} />
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
