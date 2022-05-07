import { PhoneFilled } from '@ant-design/icons';
import { Card } from 'antd';
import React,{useState,useEffect} from 'react';
import { Form, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Collapse } from 'antd';
import axios from 'axios';
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
function Curriculum({ curriculum }) {
	const { Panel } = Collapse;
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [currentFruit,setcurrentFruit]=useState();
	const [HighestQualification,setHighestQualification]=useState();

	const KnownMore=async()=>{
		if (!name && !email && !phone && !currentFruit && !HighestQualification) {
			toast.error('Some Parameter is missing..');
		} else {
			if (validator.isEmail(email)) {
				if(phone.length<9){
					toast.error("Phone Number Not Valid")
				}else{
				// setEmailError('Valid Email :)')
			let body = {
				name: name,
				email: email,
				phone_number: phone,
				experience:currentFruit,
				qualification: HighestQualification,
			};
			console.log('home body is..', body);
			let response = await axios.post('http://3.111.207.167:8000/api/help', body);
			if (response.data.Success === 1) {
				setName('');
				setEmail('');
				setPhone('');
				// setExperience('');
				setHighestQualification('');
				toast.success('Your Form is succefully submit');
			} else {
				toast.error('Your Form is not succefully submit');
			}
		
			console.log('home api is...///...', response.data);
		}
	}else{
			toast.error("Enter Valid Email")
		}
	
	}
	}
	const changeFruit = (newFruit) => {
		console.log("selected value is..",newFruit)
		setcurrentFruit(newFruit)
	  }
	  const changeHighestQulaification=(newFruit)=>{
		console.log("selected value is..",newFruit)
		setHighestQualification(newFruit)
	  }

	return (
		<div className='mt-5'>
			<ToastContainer/>
			<h2 className='curriculum_heading custom-text-primary'>Curriculum</h2>

			<div className='row mt-3'>
				<div className='col col-lg-8 col-sm-12'>
					<p>{curriculum.description}</p>
					<Collapse accordion expandIconPosition='right'>
						{curriculum.curriculumData.map((e, i) => (
							<Panel header={e.title} key={i}>
								<ul className='px-4 mb-0'>
									{e.data.map((a, index) => (
										<li key={index}>{a}</li>
									))}
								</ul>
							</Panel>
						))}
					</Collapse>
				</div>
				<div className='contact_us col col-lg-4 col-sm-12'>
					<Card className='p-2'>
						<div className='row'>
							<div className='col col-lg-8'>
								<h2 className='custom-text-primary mb-2'>Contact us</h2>
								<h6>
									<strong>+91 9289460444</strong>
								</h6>
							</div>
							<PhoneFilled style={{ fontSize: '30px', color: '#f35d5d' }} />
						</div>
					</Card>
					<Card title='Know More' className='mt-5'>
				
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
											type='text'
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
										<select
											defaultValue='experience'
											name='experience'
											id='experience'
											value={currentFruit}
											onChange={(event) => changeFruit(event.target.value)}
										>
											<option value='experience'>Experience</option>
											<option value='fresher' >Fresher</option>
											<option value='0-2yrs'>0-2 Years</option>
											<option value='2-5yrs'>2-5 Years</option>
											<option value='5-8yrs'>5-8 Years</option>
											<option value='8+yrs'>8+ Years</option>
										</select>
									</Form.Item>
									<Form.Item>
										<select
											defaultValue='highest-qualification'
											name='highest-qualification'
											id='highest-qualification'
											value={HighestQualification}
											onChange={(event) => changeHighestQulaification(event.target.value)}
										>
											<option value='highest-qualification'>
												Highest Qualification
											</option>
											<option value='UG'>Undergraduate</option>
											<option value='Graduate'>Graduate</option>
											<option value='PG'>Post Graduate</option>
											<option value='PhD'>Ph.D</option>
										</select>
									</Form.Item>
									
									<Form.Item shouldUpdate>
										{() => (
											<Button
												type='primary'
												htmlType='submit'
												onClick={() => KnownMore()}
											>
												Submit
											</Button>
										)}
									</Form.Item>
								</Form>
						
					</Card>
				</div>
			</div>
		</div>
	);
}

export default Curriculum;
