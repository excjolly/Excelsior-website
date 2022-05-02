import { Button, Col, Divider, Form, Input, Row } from 'antd';
import React from 'react';
import Helmet from 'react-helmet';

function Contact() {
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
			<div className='mb-3'>
				<div id='contact_section'>
					<h2 className='container text-center text-white  mb-3'>
						<b>Contact US</b>
					</h2>
				</div>
				<div className='container'>
					<h2 className='text-center text-black pt-3 pb-3 mt-4  mb-4'>
						{' '}
						<b>Let’s Start a Conversation</b>
					</h2>
					<Row gutter={[20, 30]} className='mb-3'>
						<Col xs={24} sm={24} md={12} lg={12}>
							<h5 className='mb-5'>
								<strong>Ask how we can help you:</strong>
							</h5>
							<div className='mb-4'>
								<Divider
									className='mb-2'
									orientation='left'
									orientationMargin={0}
								>
									Are you getting enough practical learning?
								</Divider>
								<p className='text-muted pl-3'>
								Ask us about the projects
								</p>
							</div>
							<div className='mb-4'>
								<Divider
									className='mb-2'
									orientation='left'
									orientationMargin={0}
								>
									Are you stuck in your career?
								</Divider>
								<p className='text-muted pl-3'>
								Ask us how our course can help you with career growth
								</p>
							</div>
							<div className='mb-4'>
								<Divider
									className='mb-2'
									orientation='left'
									orientationMargin={0}
								>
									Are you able to learn in big batches?
								</Divider>
								<p className='text-muted pl-3'>
								Ask us how we give you personalized learning experience
								</p>
							</div>
							<div className='mt-5'>
								<div className='mb-3'>
									<h3 className='mb-5 '>
										<b> Points of Contact</b>
									</h3>
									<div className='mb-4'>
										<div className='d-flex mb-3'>
											<h6> D612, 7th Cross Road, 3rd Block, Koramangala, Bengaluru 560034 </h6>

										</div>
										{/* <div className='mb-3'>
											<p className='text-muted'>
												11350 McCormick Rd, EP III, Suite 200, Hunt Valley, MD
												21031
											</p>
										</div> */}
									</div>
									<div className='mb-4'>
										<div className='mb-3'>
											<h6>Know about the course</h6>
										</div>
										<div className='mb-3'>
											<a href='#'>contact@getexcelsior.com</a>
										</div>
									</div>
									<div className='mb-4'>
										<div className='mb-3'>
											<h6>Speak to a Career Counselor</h6>
										</div>
										<div className='mb-3'>
											<a href='#'>info@getexcelsior.com</a>
										</div>
									</div>
									<div className='mb-4'>
										<div className='mb-3'>
											<h6>Speak to a Data Scientist</h6>
										</div>
										<div className='mb-3'>
											<a href='#'>dscounselling@getexcelsior.com</a>
										</div>
									</div>
								</div>
							</div>
							<div className='mt-5'>
								<h3 className='mb-5 '>
									<b> Additional Office Locations</b>
								</h3>
								<div className='mb-4'>
									<div className='d-flex mb-3'>
										<h6> US </h6>
									</div>
									<div className='mb-3'>
										<p className='text-muted'>
											C2 Sector 1, Noida, 201301
										</p>
									</div>
								</div>
							</div>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12}>
							<div>
								<Form title='Enquire Detials' layout='vertical'>
									<Form.Item name='Firstname'>Name</Form.Item>
									<Input className='p-2 mb-3' />
									<Form.Item name='CompanyName'>Company Name</Form.Item>
									<Input className='p-2 mb-3' />
									<Form.Item name='Email'>Email</Form.Item>
									<Input className='p-2 mb-3' />
									<Form.Item name='Email'>PhoneNumber</Form.Item>
									<Input className='p-2 mb-3' />
									<Form.Item name='Email'>Choose your programs</Form.Item>
									<Input className='p-2 mb-3' />
									<Form.Item name='Email'>Comments</Form.Item>
									<Input className='p-2 mb-3' />
								</Form>
								<Button className='text-center' text color='default'>Submit</Button>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default Contact;
