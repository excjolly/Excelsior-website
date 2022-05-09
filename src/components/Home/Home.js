import React, { useEffect, useState, useMemo } from 'react';
import {
	Row,
	Col,
	Button,
	Avatar,
	Form,
	Input,
	Card,
	Select,
	Modal,
	Menu,
	message,
} from 'antd';
import Blogs from '../programs/Blogs';

import { RightOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import images from '../../assets/images';
import Admission from '../programs/Admission';
import validator from 'validator';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Program_DB_Master from '../../assets/static/Program_DB_Master';
import HtmlHead from '../HtmlHead';
import Review from '../programs/Review';
import { CheckSquare, ChartUp, OnlineClass, StartUp, Suitcase } from '../Icons';
import { BiRupee } from 'react-icons/bi';

const { Option } = Select;
const Home = () => {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [realted, setRelatedBlog] = useState([]);
	const [email, setEmail] = useState('');
	const [subscribeEmail, setSubscribeEmail] = useState('');
	const [subscribeName, setSubscribeName] = useState('');
	const [phone, setPhone] = useState('');
	const [experience, setExperience] = useState('default');
	const [emailName, setEmailName] = useState('');
	const [highestQualification, setHighestQualification] = useState('default');

	const statsData = useMemo(
		() => [
			{
				title: 'Total Placed',
				text: '6600+ students',
				icon: (
					<CheckSquare
						strokeWidth='1.2'
						className='custom-text-primary'
						width='28px'
						height='28px'
					/>
				),
			},
			{
				title: 'Average Salary Hike',
				text: '53%',
				icon: (
					<ChartUp
						strokeWidth='1.2'
						className='custom-text-primary'
						width='28px'
						height='28px'
					/>
				),
			},
			{
				title: 'Average Salary',
				text: '10.7 LPA',
				icon: <BiRupee className='custom-text-primary' size='32px' />,
			},
			{
				title: 'Placement %',
				text: '96.80%',
				icon: (
					<OnlineClass
						strokeWidth='1.2'
						className='custom-text-primary'
						width='28px'
						height='28px'
					/>
				),
			},
			{
				title: 'Highest Salary',
				text: '76.8 LPA',
				icon: (
					<StartUp
						strokeWidth='1.2'
						className='custom-text-primary'
						width='28px'
						height='28px'
					/>
				),
			},
			{
				title: 'Number of Clients',
				text: '160+',
				icon: (
					<Suitcase
						strokeWidth='1.2'
						className='custom-text-primary'
						width='28px'
						height='28px'
					/>
				),
			},
		],
		[]
	);
	function clickToScroll() {
		const elRect = document.getElementById('first-step-form').getBoundingClientRect();
		window.scrollTo({ top: elRect.top - 100, left: 0, behavior: 'smooth' });
	}
	function handleButtonClick(e) {
		message.info('Click on left button.');
		console.log('click left button', e);
	}

	function handleMenuClick(e) {
		message.info('Click on menu item.');
		console.log('click', e);
	}
	const [latestNewsData, setLatestNewsData] = useState([
		{
			title: 'New Initiative: Free Counselling Session with Real Data Scientist before enrolling',
		},
		{
			title: 'Earn Scholarship upto 50%',
		},
		{
			title: 'New Batch starting 17th May 2022',
		},
		{
			title: 'Average Placement increased from 10.1 to 10.7 LPA in this batch',
		},
		{
			title: 'Tesla Added to our client list for automobile industry enthusiasts',
		},
		{
			title: '98.1% placement record in the last batch',
		},
		{
			title: '18% students interned with FAANG companies',
		},
		{
			title: '49% Students got Prep-placement offers',
		},
		{
			title: 'Wells Fargo Added to our client list for Finance Domain Aspirants',
		},
		{
			title: 'Recorded our highest ever placement of 77 LPA in the last batch',
		},
	]);
	const [recentTestimonialsData, setRecentTestimonialsData] = useState([
		{
			image: images.computer,
			title: 'Panayappan',
			text: 'Chocolate bar marzipan marzipan carro',
			rating: 4,
		},
		{
			image: images.computer,
			title: 'Sakthi',
			text: 'Chocolate bar marzipan marzipan carro',
			rating: 4,
		},
		{
			image: images.computer,
			title: 'Jicku',
			text: 'Chocolate bar marzipan marzipan carro',
			rating: 5,
		},
	]);
	const [isRecentTestimonialsModalVisible, setIsRecentTestimonialsModalVisible] =
		useState(false);

	const RecentTestimonialsModal = () => {
		return (
			<Modal
				title='Recent Testimonials'
				visible={isRecentTestimonialsModalVisible}
				onCancel={() => setIsRecentTestimonialsModalVisible(false)}
				width={'60%'}
				footer={null}
			>
				<Carousel showStatus={false} showIndicators={false}>
					{[1, 2, 3].map((item, index) => (
						<Row
							key={index}
							gutter={[20, 30]}
							style={{
								height: 300,
								padding: 10,
								paddingBottom: 20,
							}}
						>
							{[1, 2, 3].map((item, index) => (
								<Col xs={24} sm={24} md={12} lg={8} key={index}>
									<Card className='box-shadow'>
										<Avatar />
										<h4 style={{ margin: '10px 0' }}>
											Hemanth Reddy (Data Scientist-Airtel)
										</h4>
										<p>
											I am writing this review to thank Excelsior's Data
											Science for making Data Science online course. I have
											recently completed this course and it was the best
											decision I have made in my life. The course is well
											designed with details, examples, exercises, lectures and
											assignments. The mentors are really helpful, and they
											helped me to clear all my doubts regarding the program.
											They always replied to my emails on time, and I also got
											a job through Brilliant Data Science. I am really
											thankful to them for helping me build my profile and gain
											the head start I needed.
										</p>
									</Card>
								</Col>
							))}
						</Row>
					))}
				</Carousel>
			</Modal>
		);
	};
	const homeSubmitApi = async () => {
		if (!name && !email && !phone && !experience && !highestQualification) {
			toast.error('Some Parameter is missing..');
		} else {
			if (validator.isEmail(email)) {
				if (phone.length < 9) {
					toast.error('Phone Number Not Valid');
				} else {
					// setEmailError('Valid Email :)')
					let body = {
						name: name,
						email: email,
						phone_number: phone,
						experience: experience,
						qualification: highestQualification,
					};
					console.log('home body is..', body);
					let response = await axios.post(
						'http://3.111.207.167:8000/api/help',
						body
					);
					if (response.data.Success === 1) {
						setName('');
						setEmail('');
						setPhone('');
						setExperience('default');
						setHighestQualification('default');
						toast.success('Your Form is succefully submit');
					} else {
						toast.error('Your Form is not succefully submit');
					}

					console.log('home api is...///...', response.data);
				}
			} else {
				toast.error('Enter Valid Email');
			}
		}
	};
	const menu = (
		<Menu
			items={[
				{
					label: <a href='https://www.antgroup.com'>1st menu item</a>,
					key: '0',
				},
				{
					label: <a href='https://www.aliyun.com'>2nd menu item</a>,
					key: '1',
				},
				{
					type: 'divider',
				},
				{
					label: '3rd menu item',
					key: '3',
				},
			]}
		/>
	);
	const subScribeApi = async () => {
		if (!subscribeEmail && !emailName) {
			toast.error('Some parameter is missing');
		} else {
			if (validator.isEmail(subscribeEmail)) {
				// setEmailError('Valid Email :)')
				let body = {
					name: subscribeName,
					email: subscribeEmail,
				};
				console.log('body..', body);
				let response = await axios.post(
					'http://3.111.207.167:8000/api/Subscribe',
					body
				);
				console.log('res', response.data);
				console.log(response.data.Success);
				if (response.data.Success === 1) {
					toast('Your Email is successfully subscribe');
					setSubscribeEmail('');
				} else {
					toast.error('Issue from server side');
				}
			} else {
				toast.error('Your EMail is not Valid');
			}
		}
	};
	useEffect(() => {
		getBlogList();
		// let response=await
	}, []);
	const getBlogList = async () => {
		let response = await axios.get('http://3.111.207.167:8000/api/bloglist');
		// console.log(response.data.data);
		if (response.data.data.length > 0) {
			setRelatedBlog(response.data.data);
		}
	};
	const gotoBlogPage = () => {
		navigate('/blogs');
	};

	return (
		<div className='mb-5'>
			<ToastContainer />
			<HtmlHead
				title='Excelsior | Online Education Platform | Data Science and Cloud technologies'
				desc='We keep it simple- we focus on the things that really produce results. Keeping this in mind, we encourage you to AIM HIGHER. Excelsior is the best online Data Science institute in Delhi and best online Data Science institute in Bengaluru. Contact - info@getexcelsior.com'
				kw='Best Data Science Course, Machine Learning Courses, Best online Course in Delhi NCR, Best online course in Bengaluru, Specialization in Data Science for Finance, Specialization in Data Science for IT, Finance Data Science, Data Science for IT, Deep Learning, Python programming, Machine Learning, Data Analytics, Financial Analytics'
				pathname='/'
			/>
			<div className='container mt-4'>
				<h1 className='Banner_Heading'>EXCELSIOR</h1>
				<h3 className='mb-4 '>We don't just train, We make careers</h3>
			</div>
			<div className='home__banner-left-content d-flex flex-column justify-content-center mb-2 container mx-auto'>
				<div className='container pt-4 pl-4'>
					<h2 className='text-white admission_heading'>Get the Boost</h2>
					<div>
						<Row>
							<Col lg={12}>
								<h3 className='mb-2 text-white' style={{ lineHeight: '1.5' }}>
									Excelsior is ideal for professionals who wants to master their
									skill set and grow their career. With well-structured programs,
									industry experts as mentors, tailored for every student with a
									proven learning methodology.
								</h3>
							</Col>
						</Row>
						<button className='enroll_button' onClick={() => clickToScroll()}>
							Get Started
						</button>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='mb-5'>
					<h2 className='admission_heading' style={{ color: '#f35d5d' }}>
						Stats
					</h2>
					<Row gutter={[20, 30]} className='a'>
						{statsData?.map((item, index) => (
							<Col xs={24} sm={24} md={6} lg={4} key={index}>
								<div className='home__stats-item text-center h-100'>
									<Avatar
										className='d-flex align-items-center justify-content-center'
										size={40}
										src={item.icon}
									/>
									<p style={{ fontSize: '12px' }}>{item.title}</p>
									<h3 style={{ color: '#f35d5d' }}>{item.text}</h3>
								</div>
							</Col>
						))}
					</Row>
				</div>
				<div className='mb-5'>
					<Row gutter={[10, 30]}>
						<Col xs={24} sm={24} md={8} lg={8} id='first-step-form'>
							<h2
								className='admission_heading'
								id='helpSection'
								style={{ color: '#f35d5d' }}
							>
								Take your first step
							</h2>
							<Card>
								<Form name='horizontal_login' layout='outline'>
									<Form.Item
										name='name'
										rules={[
											{ required: true, message: 'Please input your Name!' },
										]}
										className='mb-3'
									>
										<Input
											value={name}
											placeholder='Name'
											onChange={(text) => setName(text.target.value)}
										/>
									</Form.Item>
									<Form.Item
										name='email'
										rules={[
											{ required: true, message: 'Please input your email!' },
										]}
										className='mb-3'
									>
										<Input
											value={email}
											type='email'
											placeholder='Email Address '
											onChange={(text) => setEmail(text.target.value)}
										/>
									</Form.Item>
									<Form.Item
										name='phonenumber'
										rules={[
											{
												required: true,
												message: 'Please input your phone number!',
											},
										]}
										className='mb-3'
									>
										<Input
											min={9}
											value={phone}
											type='number'
											placeholder='Phone Number '
											onChange={(text) => setPhone(text.target.value)}
										/>
									</Form.Item>

									<Form.Item>
										<Select
											defaultValue='default'
											name='experience'
											id='experience'
											value={experience}
											onChange={setExperience}
										>
											<Option value='default' disabled>
												Experience
											</Option>
											<Option value='fresher'>Fresher</Option>
											<Option value='0-2 yrs'>0-2 Years</Option>
											<Option value='2-5 yrs'>2-5 Years</Option>
											<Option value='5-8 yrs'>5-8 Years</Option>
											<Option value='8+ yrs'>8+ Years</Option>
										</Select>
									</Form.Item>
									<Form.Item>
										<Select
											defaultValue='default'
											name='highest-qualification'
											id='highest-qualification'
											value={highestQualification}
											onChange={setHighestQualification}
										>
											<Option value='default' disabled>
												Highest Qualification
											</Option>
											<Option value='Undergraduate'>Undergraduate</Option>
											<Option value='Graduate'>Graduate</Option>
											<Option value='Post Graduate'>Post Graduate</Option>
											<Option value='Ph.D'>Ph.D</Option>
										</Select>
									</Form.Item>
									<Form.Item shouldUpdate>
										{() => (
											<Button
												type='primary'
												htmlType='submit'
												onClick={() => homeSubmitApi()}
											>
												Submit
											</Button>
										)}
									</Form.Item>
								</Form>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={16} lg={16} className='d-flex flex-column'>
							<h2 className='admission_heading' style={{ color: '#f35d5d' }}>
								Programs
							</h2>
							<Row gutter={[20, 30]} style={{ flex: '1 1 100%', rowGap: '12px' }}>
								{Program_DB_Master.map(
									(
										{ nameOfProgram, icon, shortDescription, pathname },
										index
									) => (
										<Col xs={24} sm={24} md={12} key={index} className='d-flex'>
											<Link
												to={pathname}
												className='home__videos-item'
												style={{ flex: '1 1 100%' }}
											>
												<div className='home__videos-item-left'>
													<img src={icon} alt={nameOfProgram} width='100%' />
												</div>
												<div className='home__videos-item-right p-2'>
													<h3>{nameOfProgram}</h3>
													<p className='mt-2' style={{ fontSize: '13px' }}>
														{shortDescription}
													</p>
												</div>
											</Link>
										</Col>
									)
								)}
							</Row>
						</Col>
					</Row>
				</div>
				{/* <Admission /> */}

				<div name='admission' id='admission'>
					<Admission admissionProcedure={Program_DB_Master[0].admissionProcedure} />
				</div>

				<div className='mb-5'>
					<Row gutter={[20, 30]}>
						<Col
							xs={24}
							sm={24}
							md={24}
							lg={12}
							className='mb-5 d-flex flex-column'
						>
							<h2 className='admission_heading' style={{ color: '#f35d5d' }}>
								Latest News
							</h2>
							<Card className='home__app-info_latest-news'>
								<div style={{ display: 'grid', gap: '1rem' }}>
									{latestNewsData?.map((item, index) => (
										<Row gutter={[20, 30]} key={index}>
											<div className='d-flex'>
												<span className='mr-1'>&#10146;</span>
												<h4 style={{ lineHeight: '1.2' }}>{item.title}</h4>
											</div>
										</Row>
									))}
								</div>
							</Card>
						</Col>
						<Col
							xs={24}
							sm={24}
							md={24}
							lg={12}
							className='mb-5 d-flex flex-column'
						>
							<h2 className='admission_heading '>Speak With Expert</h2>

							<Card
								style={{ backgroundColor: '#f35d5d' }}
								className='home__app-info_speak-with-expert'
							>
								<Col xs={24} sm={24} md={24} lg={6} />
								<h2 className='text-white mb-5'>
									Schedule your session with a Data Science expert
								</h2>
								<h3 className=' text-white mb-4' style={{ lineHeight: '1.5' }}>
									Talk to a real data scientist to get an understanding of the
									various terminologies and are looking to gain more insights
									through personalised interviews with real data scientists from
									top companies.
								</h3>
								<Row className='text-white'>
									<Button>
										<a
											href='https://calendly.com/datasciencecounselling-excelsior'
											target='_blank'
											rel='noreferrer'
										>
											Schedule Now
										</a>
									</Button>
								</Row>
							</Card>
						</Col>
					</Row>
				</div>

				<div className='mt-5' id='Review' name='Review'>
					<Review reviews={Program_DB_Master[0].reviews} />
				</div>
				<div className='mt-5' id='Blogs' name='Recent Blogs'>
					<Blogs />
					<Row className='text-white mb-5 justify-content-center'>
						<Button>
							<h3>
								<Link to='/blogs'>Read More</Link>
							</h3>
						</Button>
					</Row>
				</div>
				<h2 className='admission_heading'>Mail List</h2>
				<Card>
					<h3 className=' mb-3 text-center' style={{ color: '#f35d5d' }}>
						Subscribe to our newsletter
					</h3>
					<p className='mb-3 text-center'>
						Stay updated with the latest news from the industry.
					</p>
					<Form layout='vertical'>
						<div className='d-flex'>
							<Form.Item
								className='mr-4 w-100'
								rules={[
									{
										required: true,
										message: 'Name is Required!',
									},
								]}
							>
								<Input
									type='text'
									value={subscribeName}
									placeholder='Name'
									className='p-2'
									onChange={(e) => setSubscribeName(e.target.value)}
								/>
							</Form.Item>
							<Form.Item
								rules={[
									{
										required: true,
										message: 'Email is Required!',
									},
								]}
								className='w-100'
							>
								<Input
									type='email'
									value={subscribeEmail}
									placeholder='Email Address'
									className='p-2'
									onChange={(text) => setSubscribeEmail(text.target.value)}
								/>
							</Form.Item>
						</div>
						<Form.Item className='text-center'>
							<Button
								onClick={() => subScribeApi()}
								type='primary'
								htmlType='submit'
								icon={<RightOutlined />}
							>
								Subscribe
							</Button>
						</Form.Item>
					</Form>
				</Card>
			</div>

			<RecentTestimonialsModal />
		</div>
	);
};

export default Home;
