import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link as ScrollLink } from 'react-scroll';
import { Menu } from 'antd';
import { useLocation } from 'react-router-dom';
import { Card } from 'antd';
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
import FAQ from './FAQ';
import SpeakWithExpert from './SpeakWithExpert';

const ProgramDetails = ({programData}) => {

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
			<Helmet>
				<meta charSet='utf-8' />
				<title>Home</title>
				<link rel='canonical' href='http://mysite.com/example' />
			</Helmet>
			<div className='container mt-4'>
				<h1 className='Banner_Heading'>EXCELSIOR</h1>
				<p className='mb-4 '>Excelsior is ideal for professionals who wants to</p>
			</div>
			<div className='programDetails'>
				{programData.length != 0 ? (
					<>
						<ProgramHeader programData={programData} />
						<KeyHighlights highlight={programData.Highlight} />
						<div className='program_details'>
							<div className='program_details_navbar ' id='myHeader'>
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
								{/* <ScrollLink
            className="program_details_navbar_link"
            to="Blogs"
            smooth={true}
            offset={-180}
            spy={true}
          >
            <div className="program_details_navlink_text">Blogs</div>
          </ScrollLink> */}
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
								<OverView OverView={programData.OverView} />
							</div>
							<div name='curriculum' id='curriculum'>
								<Curriculum Curriculum={programData.Curriculum} />
							</div>

							<div name='admission' id='admission'>
								<Admission AdmissionProcedure={programData.AdmissionProcedure} />
							</div>
							<div name='SpeakWithExpert' id='SpeakWithExpert'>
								<SpeakWithExpert />
							</div>
							<div id='fee' name='fee'>
								<Pricing Pricing={programData.Fee} />
							</div>
							<div id='LearningExperience' name='LearningExperience'>
								<LearningExperience
									LearningExperience={programData.LearningExperience}
								/>
							</div>
							<div id='Projects' name='Projects'>
								<Projects ProjectsData={programData.Projects} />
							</div>
							<div id='Mentors' name='Mentors'>
								<Mentors MentorsData={programData.Mentor} />
							</div>
							<div className='mt-5' id='Review' name='Review'>
								<Review />
							</div>
							<div className='mt-5' id='Blogs' name='Blogs'>
								<Blogs />
							</div>
							{/* <div className="mt-5" id="FAQ" name="FAQ">
          <FAQ />
        </div> */}
						</div>
					</>
				) : null}
			</div>
		</>
	);
};

export default ProgramDetails;
