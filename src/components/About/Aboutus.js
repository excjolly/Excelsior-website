import { Row, Col, Card, Timeline, Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import Chart from './Chart';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Aboutus() {
	const data = [
		{ type: 'Maths', value: 27 },
		{ type: 'Chemistry', value: 30 },
		{ type: 'Phtysis', value: 40 },
		{ type: 'Zoo', value: 3 },
	];

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
			<div>
				<div className='banner mb-3'>
					<div className='container'>
						<h1 className='admission_heading mb-3'> About US</h1>
					</div>
				</div>
				<div className='container'>
					<h2 className='admission_heading mb-3'> Our Values</h2>
					<Row gutter={[20, 30]} className='mb-5'>
						<Col xs={24} sm={24} md={12} lg={8}>
							<Card title='Our Values' hoverable>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
									enim ad minim veniam, quis nostrud exercitation ullamco laboris
									nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
									in reprehenderit in voluptate velit esse cillum dolore eu
									fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt mollit anim id est
									laborum
								</p>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={12} lg={8}>
							<Card title='Our Values' hoverable>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
									enim ad minim veniam, quis nostrud exercitation ullamco laboris
									nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
									in reprehenderit in voluptate velit esse cillum dolore eu
									fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt mollit anim id est
									laborum
								</p>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={12} lg={8}>
							<Card title='Our Values' hoverable>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
									enim ad minim veniam, quis nostrud exercitation ullamco laboris
									nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
									in reprehenderit in voluptate velit esse cillum dolore eu
									fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt mollit anim id est
									laborum
								</p>
							</Card>
						</Col>
					</Row>
					<h2 className='admission_heading mb-3'> ABOUT EXCELSIOR</h2>
					<Row gutter={[20, 30]} className='mb-5'>
						<Col xs={24} sm={24} md={12} lg={12}>
							<Card title='Our Mission' hoverable>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
									enim ad minim veniam, quis nostrud exercitation ullamco laboris
									nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
									in reprehenderit in voluptate velit esse cillum dolore eu
									fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt mollit anim id est
									laborum
								</p>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12}>
							<Card title='Our Vision' hoverable>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
									enim ad minim veniam, quis nostrud exercitation ullamco laboris
									nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
									in reprehenderit in voluptate velit esse cillum dolore eu
									fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt mollit anim id est
									laborum
								</p>
							</Card>
						</Col>
					</Row>
					<Row gutter={[20, 30]} className='mb-5'>
						<Col xs={24} sm={24} md={12} lg={12}>
							<h2 className='admission_heading mb-3'> TimeLine</h2>
							<Card>
								<Timeline mode={'alternate'}>
									<Timeline.Item label='2015-09-01'>
										Create a services
									</Timeline.Item>
									<Timeline.Item label='2015-09-01 09:12:11'>
										Solve initial network problems
									</Timeline.Item>
									<Timeline.Item>Technical testing</Timeline.Item>
									<Timeline.Item label='2015-09-01 09:12:11'>
										Network problems being solved
									</Timeline.Item>
									<Timeline.Item label='2015-09-01 09:12:11'>
										Network problems being solved
									</Timeline.Item>
								</Timeline>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12}>
							<h2 className='admission_heading mb-3'> Our Achievements</h2>
							<Row gutter={[20, 30]} className='mb-3'>
								<Col xs={12} sm={12} md={12} lg={12}>
									<div className='home__stats-item'>
										<Avatar size={42} />
										<p>{'Name'}</p>
										<h6 className='text-primary'>{'Primary'}</h6>
									</div>
								</Col>
								<Col xs={12} sm={12} md={12} lg={12}>
									<div className='home__stats-item'>
										<Avatar size={42} />
										<p>{'Name'}</p>
										<h6 className='text-primary'>{'Primary'}</h6>
									</div>
								</Col>
							</Row>
							<Row gutter={[20, 30]} className='mb-3'>
								<Col xs={12} sm={12} md={12} lg={12}>
									<div className='home__stats-item'>
										<Avatar size={42} />
										<p>{'Name'}</p>
										<h6 className='text-primary'>{'Primary'}</h6>
									</div>
								</Col>
								<Col xs={12} sm={12} md={12} lg={12}>
									<div className='home__stats-item'>
										<Avatar size={42} />
										<p>{'Name'}</p>
										<h6 className='text-primary'>{'Primary'}</h6>
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
