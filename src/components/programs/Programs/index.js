import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Form, Input, Row, Button, DatePicker, TimePicker } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import validator from 'validator'
import ProgramsCards from '../ProgramsCards';
import Program_DB_Master from '../../../assets/static/Program_DB_Master';
import { programData } from './data';
import Mentors from '../Mentors';
import moment from 'moment';

const Program = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [chooseDate,setChooseDate]=useState();
	const [chooseTime,setChooseTime]=useState(moment());
	const ProgramFormSubmit = async () => {
		if (!name && !email && !phone && !chooseDate && !chooseTime) {
			toast.error('All Fileds is required');
		} else {
			if (validator.isEmail(email) && validator.isMobilePhone(phone)) {
			let body = {
				"name": name,
				"email": email,
				"phone_number": phone,
				"date": chooseDate,
				"time": chooseTime
				}
				console.log("event body is...",body)
			let response = await axios.post('http://3.111.207.167:8000/api/events', body);
			if (response.data.Success === 1) {
				toast.success('Form succesfully submitted');
			} else {
				toast.error('Something went wrong into the server side');
			}
		}else{
			toast.error("Email is not valid")
		}
	}
	};
	const handleChange=(e,value)=>{
		console.log("e",e);
		console.log("vaule",value)
		setChooseDate(value);
	}
	const handleValueChange = value => {
		setChooseTime(value && value.format('HH:mm:ss'));
		// this.setState({ value });
		// console.log("Time is..",value);
	  };

	return (
		<div className='container mt-3'>
			<ToastContainer />
			<div className='mb-5'>
				<h2 className='admission_heading'>Features</h2>
				<Row gutter={[20, 30]}>
					{programData.features.map((item, i) => (
						<ProgramsCards features={item} key={i} />
					))}
				</Row>
			</div>
			<div className='mb-3'>
				<Row gutter={[20, 30]}>
					<Col lg={24}>
						<h2 className='admission_heading'>Programs</h2>
						<div className='programs_lists'>
							<li className='programs_list'>
								<ul>
									<b>Name Of Program</b>
								</ul>
								<ul>
									<b>Duration In Weeks</b>
								</ul>
								<ul>
									<b>Rating</b>
								</ul>
								<ul>
									<b>Completed By</b>
								</ul>
							</li>
							{Program_DB_Master.map((e, index) => (
								<Link to={e.pathname} key={index}>
									<li className='programs_list'>
										<ul className='custom-text-primary'>{e.nameOfProgram}</ul>
										<ul className='programs_listdark'>{e.durationInWeeks}</ul>
										<ul className='programs_listdark'>{e.rating}</ul>
										<ul className='programs_listdark'>{e.completedBy}</ul>
									</li>
								</Link>
							))}
						</div>
					</Col>
					<Col className='mb-5' lg={24}>
						<h2 className='admission_heading'>Homework</h2>
					</Col>
				</Row>
			</div>
			<div className='mb-5'>
				<Row gutter={[20, 30]}>
					<Col xs={24} sm={24} md={8} lg={8} className='mb-5 d-flex flex-column'>
						<h2 className='admission_heading'>List of Quizes</h2>
						<div className='quizes_lists'>
							<div className='mb-5'>
								<h3
									className='custom-text-primary mb-1'
									style={{ fontWeight: 'bold' }}
								>
									Scholarship Test
								</h3>
								<p>
									<Link to='../scholarship'>Mathematics Test</Link>
								</p>
								<p>
									<Link to='../scholarship'>Aptitude Test</Link>
								</p>
							</div>
							<div>
								<h3
									className='custom-text-primary mb-1'
									style={{ fontWeight: 'bold' }}
								>
									Practice Test
								</h3>
								<p>
									<Link to='../scholarship'>Python Test</Link>
								</p>
								<p>
									<Link to='../scholarship'>Machine Learning Test</Link>
								</p>
							</div>
						</div>
					</Col>
					<Col
						className='mb-5'
						xs={24}
						sm={24}
						md={8}
						lg={8}
						style={{ display: 'flex', flexDirection: 'column' }}
					>
						<h2 className='admission_heading'>Events and webinars</h2>
						<>
							<Form
								//   form={form}
								name='horizontal_login'
								layout='outline'
								className='form'
								autoComplete='off'
								// onFinish={(values) => console.log(values)}
							>
								<Form.Item
									name='name'
									rules={[
										{ required: true, message: 'Please input your Name!' },
									]}
								>
									<Input
										placeholder='Name'
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</Form.Item>
								<Form.Item
									name='email'
									rules={[
										{ required: true, message: 'Please input your email!' },
									]}
								>
									<Input
										type='text'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder='Email Address '
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
								>
									<Input
										type='number'
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										placeholder='Phone Number '
									/>
								</Form.Item>
								<Form.Item
									name='date'
									rules={[
										{
											required: true,
											message: 'Please provide date',
										},
									]}
								>
									<DatePicker   onChange={(value, e) => handleChange(value, e)}
   selected={chooseDate} />
								</Form.Item>
								<Form.Item
									name='time'
									rules={[
										{
											required: true,
											message: 'Please provide time',
										},
									]}
								>
									<TimePicker format={'HH:mm'} value={chooseTime} onChange={handleValueChange} />
								</Form.Item>
								<Form.Item shouldUpdate>
									{() => (
										<Button
											onClick={() => ProgramFormSubmit()}
											type='primary'
											htmlType='submit'
										>
											Submit
										</Button>
									)}
								</Form.Item>
							</Form>
						</>
					</Col>
					<Col
						className='mb-5'
						xs={24}
						sm={24}
						md={8}
						lg={8}
						style={{ display: 'flex', flexDirection: 'column' }}
					>
						<h2 className='admission_heading'>Notifications</h2>
						<li className='notifications_list'>
							{programData.notifications.map((item, index) => (
								<div className='d-flex flex-column' key={index}>
									<div className='d-flex mb-2'>
										<span className='mr-2'>&#10146;</span>
										<h4 style={{ lineHeight: '1.3' }}>{item.title}</h4>
									</div>
								</div>
							))}
						</li>
					</Col>
				</Row>
			</div>
			<div className='mb-5'>
				<Mentors mentorsData={programData.mentors} />
			</div>
		</div>
	);
};

export default Program;
