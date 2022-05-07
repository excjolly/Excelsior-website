import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { Link as ScrollLink } from 'react-scroll';
import ProgramHeader from './ProgramHeader';
import KeyHighlights from './KeyHighlights';
import Curriculum from './Curriculum';
import OverView from './OverView';
import Admission from './Admission';
import Pricing from './Pricing';
import LearningExperience from './LearningExperience';
import Projects from './Projects';
import Mentors from './Mentors';
import Review from './Review';
import Blogs from './Blogs';
import SpeakWithExpert from './SpeakWithExpert';
import FAQ from './FAQ';
import HtmlHead from '../HtmlHead';
import { Carousel } from 'antd';

const ProgramDetails = ({ programData }) => {
	useEffect(() => {
		const header = document.getElementById('myHeader');
		const sticky = header.offsetTop;
		const scrollCallBack = window.addEventListener('scroll', () => {
			if (window.pageYOffset > sticky) {
				header.classList.add('sticky');
			} else {
				header.classList.remove('sticky');
			}
		});
		return () => {
			window.removeEventListener('scroll', scrollCallBack);
		};
	}, []);

	return (
		<>
			<HtmlHead
				title='Excelsior | Aim Higher'
				desc='Learn Specialization in Data Science for Finance and IT in Best Data Science course in Delhi NCR and Bangalore'
				kw='Specialization in Data Science for Finance, Specialization in Data Science for IT, Finance Data Science, Data Science for IT, Deep Learning, Python programming, Machine Learning, Data Analytics, Financial Analytics '
			/>
			<div className='container mt-4'>
				<h1 className='Banner_Heading'>EXCELSIOR</h1>
				<p className='mb-4 '>We don't just train, We make careers</p>
			</div>
			<div className='programDetails'>
				{programData.length != 0 ? (
					<>
						<ProgramHeader programData={programData} />
						<KeyHighlights highlight={programData.highlight} />
						<div className='program_details container'>
							<div className='program_details_navbar container px-4' id='myHeader'>
								<ScrollLink
									className='program_details_navbar_link'
									offset={-180}
									to='overview'
									smooth={true}
									spy={true}
								>
									<div className='program_details_navlink_text'>Overview</div>
								</ScrollLink>
								<ScrollLink
									activeClass='active'
									className='program_details_navbar_link'
									to='curriculum'
									offset={-180}
									smooth={true}
									spy={true}
								>
									<div className='program_details_navlink_text'>Curriculum</div>
								</ScrollLink>
								<ScrollLink
									className='program_details_navbar_link'
									to='admission'
									smooth={true}
									offset={-180}
									spy={true}
								>
									<div className='program_details_navlink_text'>
										Admission Procedure
									</div>
								</ScrollLink>
								<ScrollLink
									className='program_details_navbar_link'
									to='fee'
									spy={true}
									smooth={true}
									offset={-180}
								>
									<div className='program_details_navlink_text'>Fee</div>
								</ScrollLink>
								<ScrollLink
									className='program_details_navbar_link'
									to='LearningExperience'
									spy={true}
									smooth={true}
									offset={-180}
								>
									<div className='program_details_navlink_text'>
										Learning Experience
									</div>
								</ScrollLink>
								<ScrollLink
									className='program_details_navbar_link'
									to='Projects'
									smooth={true}
									offset={-180}
									spy={true}
								>
									<div className='program_details_navlink_text'>Projects</div>
								</ScrollLink>
								<ScrollLink
									className='program_details_navbar_link'
									to='Mentors'
									smooth={true}
									offset={-180}
									spy={true}
								>
									<div className='program_details_navlink_text'>Mentors</div>
								</ScrollLink>
								<ScrollLink
									className='program_details_navbar_link'
									to='Review'
									smooth={true}
									offset={-180}
									spy={true}
								>
									<div className='program_details_navlink_text'>Reviews</div>
								</ScrollLink>
								<ScrollLink
									className='program_details_navbar_link'
									to='FAQ'
									smooth={true}
									offset={-180}
									spy={true}
								>
									<div className='program_details_navlink_text'>FAQ</div>
								</ScrollLink>
							</div>
						</div>
						<div className='container'>
							<div name='overview' id='overview'>
								<OverView overview={programData.overview} />
							</div>
							<div name='curriculum' id='curriculum'>
								<Curriculum curriculum={programData.curriculum} />
							</div>

							<div name='admission' id='admission'>
								<Admission admissionProcedure={programData.admissionProcedure} />
							</div>
							<div name='SpeakWithExpert' id='SpeakWithExpert'>
								<SpeakWithExpert />
							</div>
							<div id='fee' name='fee'>
								<Pricing pricing={programData.fee} />
							</div>
							<div id='LearningExperience' name='LearningExperience'>
								<LearningExperience
									learningExperience={programData.learningExperience}
								/>
							</div>
							<div id='Projects' name='Projects'>
								<Projects projectsData={programData.projects} />
							</div>
							<div id='Mentors' name='Mentors'>
								<Mentors mentorsData={programData.mentors} />
							</div>
							<div className='mt-5' id='Review' name='Review'>
								<Review reviews={programData.reviews} />
							</div>
							<div className='mt-5' id='Blogs' name='Blogs'>
								<Carousel className='videoSlide'><Blogs/></Carousel>						
								
							</div>
							<div className='mt-5' id='FAQ' name='FAQ'>
								<FAQ faqData={programData.faq} />
							</div>
						</div>
					</>
				) : null}
			</div>
		</>
	);
};

export default ProgramDetails;
