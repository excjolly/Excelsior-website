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
									See our platform in action
								</Divider>
								<p className='text-muted pl-3'>
									Request a personalized demo, or request a trial of TUNE’s
									partner marketing platform.
								</p>
							</div>
							<div className='mb-4'>
								<Divider
									className='mb-2'
									orientation='left'
									orientationMargin={0}
								>
									See our platform in action
								</Divider>
								<p className='text-muted pl-3'>
									Request a personalized demo, or request a trial of TUNE’s
									partner marketing platform.
								</p>
							</div>
							<div className='mb-4'>
								<Divider
									className='mb-2'
									orientation='left'
									orientationMargin={0}
								>
									See our platform in action
								</Divider>
								<p className='text-muted pl-3'>
									Request a personalized demo, or request a trial of TUNE’s
									partner marketing platform.
								</p>
							</div>
							<div className='mt-5'>
								<div className='mb-3'>
									<h3 className='mb-5 '>
										<b> Points of Contact</b>
									</h3>
									<div className='mb-4'>
										<div className='d-flex mb-3'>
											<h6> US </h6>
											<Divider type='vertical'></Divider>
											<h6>UK</h6>
										</div>
										<div className='mb-3'>
											<p className='text-muted'>
												11350 McCormick Rd, EP III, Suite 200, Hunt Valley, MD
												21031
											</p>
										</div>
									</div>
									<div className='mb-4'>
										<div className='mb-3'>
											<h6>Information and Sales</h6>
										</div>
										<div className='mb-3'>
											<a href='#'>partnermarketing@tune.com</a>
										</div>
									</div>
									<div className='mb-4'>
										<div className='mb-3'>
											<h6>Information and Sales</h6>
										</div>
										<div className='mb-3'>
											<a href='#'>partnermarketing@tune.com</a>
										</div>
									</div>
									<div className='mb-4'>
										<div className='mb-3'>
											<h6>Information and Sales</h6>
										</div>
										<div className='mb-3'>
											<a href='#'>partnermarketing@tune.com</a>
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
											11350 McCormick Rd, EP III, Suite 200, Hunt Valley, MD
											21031
										</p>
									</div>
								</div>
							</div>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12}>
							<div>
								<Form title='Enquire Detials' layout='vertical'>
									<Form.Item name='Firstname'>First Name</Form.Item>
									<Input className='p-2 mb-3' />
									<Form.Item name='Lastname'>Last Name</Form.Item>
									<Input className='p-2 mb-3' />
									<Form.Item name='CompanyName'>Company Name</Form.Item>
									<Input className='p-2 mb-3' />
									<Form.Item name='Email'>Email</Form.Item>
									<Input className='p-2 mb-3' />
									<Form.Item name='Email'>PhoneNumber</Form.Item>
									<Input className='p-2 mb-3' />
									<Form.Item name='Email'>Interested In</Form.Item>
									<Input className='p-2 mb-3' />
									<Form.Item name='Email'>Commant</Form.Item>
									<Input className='p-2 mb-3' />
								</Form>
								<Button className='text-center'>Submit</Button>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default Contact;
