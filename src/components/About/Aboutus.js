import { Row, Col, Card, Timeline, Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import Chart from './Chart';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HtmlHead from '../HtmlHead';
import banner from '../../assets/images/AboutUs.png';
import { CheckSquare, ChartUp, Star, OnlineClass, StartUp, Suitcase } from '../Icons';

function Aboutus() {
	return (
		<>
			<HtmlHead
				title='About Excelsior | Best Online Education Platform for Data Science'
				desc='Students can enrol in online courses on topics such as Data Analytics, Marketing Analytics, and Artificial Intelligence. Get in touch with us at +91-9289470444, or email us at info@getexcelsior.com.'
				kw='Best Data Science Course, Machine Learning Courses, Best online Course in Delhi NCR, Best online course in Bengaluru, Specialization in Data Science for Finance, Specialization in Data Science for IT, Finance Data Science, Data Science for IT, Deep Learning, Python programming, Machine Learning, Data Analytics, Financial Analytics '
				pathname='https://getexcelsior.com/aboutus'
			/>
			<div className='container mt-4'>
				<h1 className='Banner_Heading'>EXCELSIOR</h1>
				<p className='mb-4'>We don't just train, We make careers</p>
			</div>
			<div>
				<div
					className='banner mb-3 container'
					style={{ backgroundImage: `url(${banner})` }}
				>
					<div className='container pl-4'>
						<h2 className='admission_heading mb-2' style={{ color: '#fff' }}>
							About US
						</h2>

						<Row>
							<Col lg={12}>
								<h3 className='mb-4 text-white' style={{ lineHeight: '1.5' }}>
									Is acquiring a new skill sufficient? Is it possible to start a
									new career in a different field? Will employers hire you once
									you complete a certification course? Excelsior was founded in
									2017 by three co-founders from IIT Kharagpur and IIT Delhi, who
									saw a need in the field of skill acquisition and decided to
									fill it. Excelsior is more than simply an Ed-tech platform;
									it's a one-stop solution for career guidance, learning, and
									placement to help students reach their goals.
								</h3>
							</Col>
						</Row>
					</div>
				</div>
				<div className='container'>
					<h2 className='admission_heading mb-3'> Our Values</h2>
					<Row gutter={[20, 30]} className='mb-5'>
						<Col xs={24} sm={24} md={12} lg={8}>
							<Card title='Efficiency' className='text-center' hoverable>
								<p>Their can be growth only where there is efficiency</p>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={12} lg={8}>
							<Card title='Committment' className='text-center' hoverable>
								<p>Committment reflects in the output</p>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={12} lg={8}>
							<Card title='Reliability' className='text-center' hoverable>
								<p>Reliability is the pre-condition to trust</p>
							</Card>
						</Col>
					</Row>
					<h2 className='admission_heading mb-3'> ABOUT EXCELSIOR</h2>
					<Row gutter={[20, 30]} className='mb-5'>
						<Col xs={24} sm={24} md={12} lg={12}>
							<Card title='Our Mission' className='text-center' hoverable>
								<p className='text-left'>
									Excelsior aspires to fulfill its purpose of re-inventing the
									student learning experience by elevating mentoring, learning,
									and placement to new heights. Our philosophy is that learning
									and experiential mentoring should go hand in hand. Excelsior
									aims equip learners with the resources and inspiration they
									need to reshape their careers, fulfill their dreams, and make a
									real difference in the world.
								</p>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12}>
							<Card title='Our Vision' className='text-center' hoverable>
								<p className='text-left'>
									We have a problem. And Excelsior is working on a solution. We
									have the problem of rising tuition and diminishing returns for
									students who are placed in the wrong classes or receive weak
									guidance. We seek to solve this problem by offering a dynamic
									learning experience that guides students through the most
									efficient paths for knowledge acquisition and development of
									skills and passions to achieve long term success.
								</p>
							</Card>
						</Col>
					</Row>
					<Row gutter={[20, 30]} className='mb-5'>
						<Col xs={24} sm={24} md={12} lg={12}>
							<h2 className='admission_heading mb-3'> TimeLine</h2>
							<Card>
								<Timeline mode={'alternate'}>
									<Timeline.Item label='Beginning (2017)'>
										Excelsior was born
									</Timeline.Item>
									<Timeline.Item label='First Milestone 2019'>
										1000+ students succesfully placed
									</Timeline.Item>
									<Timeline.Item label='We expanded 2019'>
										Succesfully Launched IT Vertical
									</Timeline.Item>
									<Timeline.Item label='Proven results(2020)'>
										5000+ careers transformed
									</Timeline.Item>
									<Timeline.Item label='And growing'>
										..and we continue our journey towards excellence
									</Timeline.Item>
								</Timeline>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12}>
							<h2 className='admission_heading mb-3'> Our Achievements</h2>
							<Row gutter={[20, 30]} className='mb-3'>
								<Col xs={12} sm={12} md={12} lg={12}>
									<div className='home__stats-item'>
										<Avatar
											className='d-flex align-items-center justify-content-center'
											size={42}
											src={
												<OnlineClass
													strokeWidth='1.2'
													className='custom-text-primary'
													width='30px'
													height='30px'
												/>
											}
										/>
										<h3 className='mt-2'>{'97% Placement'}</h3>
									</div>
								</Col>
								<Col xs={12} sm={12} md={12} lg={12}>
									<div className='home__stats-item'>
										<Avatar
											className='d-flex align-items-center justify-content-center'
											size={42}
											src={
												<Suitcase
													strokeWidth='1.2'
													className='custom-text-primary'
													width='30px'
													height='30px'
												/>
											}
										/>
										<h3 className='mt-2'>{'160+ partners'}</h3>
									</div>
								</Col>
							</Row>
							<Row gutter={[20, 30]} className='mb-3'>
								<Col xs={12} sm={12} md={12} lg={12}>
									<div className='home__stats-item'>
										<Avatar
											className='d-flex align-items-center justify-content-center'
											size={42}
											src={
												<CheckSquare
													strokeWidth='1.2'
													className='custom-text-primary'
													width='30px'
													height='30px'
												/>
											}
										/>
										<h3 className='text-center mt-2'>
											{
												'6,000+ students have successfully transformed their career with us'
											}
										</h3>
									</div>
								</Col>
								<Col xs={12} sm={12} md={12} lg={12}>
									<div className='home__stats-item'>
										<Avatar
											className='d-flex align-items-center justify-content-center'
											size={42}
											src={
												<ChartUp
													strokeWidth='1.2'
													className='custom-text-primary'
													width='30px'
													height='30px'
												/>
											}
										/>
										<h3 className='text-center mt-2'>
											{
												'Revolutionary product that provides relevant data about the job market'
											}
										</h3>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default Aboutus;

{
	/* <Row gutter={[20, 30]}>
            {statsData?.map((item, index) => (
              <Col xs={24} sm={24} md={6} lg={4} key={index}>
                <div className="home__stats-item">
                  <Avatar size={42} />
                  <p>{item.title}</p>
                  <h3 className="text-primary">{item.text}</h3>
                </div>
              </Col>
            ))}
          </Row> */
}
