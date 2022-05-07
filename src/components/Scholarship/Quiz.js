import { HomeOutlined } from '@ant-design/icons';
import { Row, Col, Card, Form, Input, Upload, Button, Modal } from 'antd';
import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import Question from './Question';
import validator from 'validator'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
var array1 = [];
function Quiz() {
	const navigate = useNavigate();
	const [totalcorrect, setTotalCorrect] = useState();
	const [totalWrong, setTotalWrong] = useState();
	const [count, setCount] = useState(0);
	const firstUpdate = useRef(true);
	// useLayoutEffect(() => {
	//   if (firstUpdate.current) {
	//     firstUpdate.current = false;
	//     return;
	//   }
	//   console.log("componentDidUpdateFunction");
	// });
	const [Quizname, setQuizName] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [Data, setData] = useState([]);
	const [qes, setQues] = useState([]);
	const [newQues, setNewQuestion] = useState([]);
	const [quizPlayerUserName, setQuizPlayerUsername] = useState();
	const [name, setName] = useState();
	const [image, setImage] = useState(0);
	const [time, setTime] = useState(0);
	const [isActive, setIsActive] = useState(true);
	const [description, setDescription] = useState();
	const [CheckItem, setCheckItme] = useState([]);
	const [submittedArray, setSUbmittedArray] = useState([]);
	const [timeup, setTimeUp] = useState(false);
	const { state } = useLocation();
	const [userForm, setUserForm] = useState(false);
	const [checkedRadio, setCheckedRadio] = useState();
	const [loader, setLoader] = useState(false);
	const [arr1, setArr1] = useState([]);
	const [cardTime, setCardTime] = useState();
	const { id } = state;
	// console.log("QUiz id is",{ id});
	useEffect(() => {
		getParticularQuizData();
		getUserForm();
	}, []);

	const getUserForm = () => {
		// var user_id=localStorage.getItem('user_Data');
		if (localStorage.getItem('user_Data')) {
			setUserForm(false);
		} else {
			setUserForm(true);
		}
	};
	const handleCancel = () => {
		setUserForm(false);
	};
	const JoinFormSubmit = async () => {
		if (!quizPlayerUserName && !email && !phone) {
			toast.error('All Fileds are required');
		} else {
			if (validator.isEmail(email)) {
				if(validator.isMobilePhone(phone)){
			let body = {
				name: quizPlayerUserName,
				email: email,
				phone_number: phone,
				quiz: id,
				session_id: '',
			};
			let response = await axios.post('http://3.111.207.167:8000/api/session', body);
			// console.log("response..",response.data.data)
			if (response.data.Success === 1) {
				localStorage.setItem('user_Data', JSON.stringify(response.data.data));
				setTime(parseInt(cardTime) * 60);
				toast.success('Your Form Sucesssfully Submited');
				setUserForm(false);
			}
		}else{
			toast.error("Mobile number is not valid")
		}
	}else{
			toast.error("EMail is not valid")
		}
	}
	};
	const getParticularQuizData = async () => {
		var ele = document.getElementsByClassName('unchecek');
		for (var i = 0; i < ele.length; i++) ele[i].checked = false;

		let response = await axios.get(
			`http://3.111.207.167:8000/api/quizquestion?quiz_id=${id}`
		);
		// console.log("Quiz .......",response.data);
		array1 = [];
		if (response.data.data.question.length > 0) {
			setName(response.data.data.quiz.name);
			setDescription(response.data.data.quiz.descritpion);
			console.log('Quiz image is/....', response.data.data.quiz.image);
			setImage(response.data.data.quiz.image);
			setCardTime(response.data.data.quiz.time);
			if (localStorage.getItem('user_Data')) {
				setTime(parseInt(response.data.data.quiz.time) * 60);
			}
			setQues(response.data.data.question);
			// console.log("pGE REJHSGFJ", response.data.data.question);
			response.data.data.question.map((Q) => {
				let responce = { question: Q.id, answer: '' };
				array1.push(responce);
			});
			// console.log("min...",array1);
		}
	};
	useEffect(() => {
		let timer = null;
		if (isActive) {
			if (time == 1 && localStorage.getItem('user_Data')) {
				finalFormSubmit();
				setTimeUp(true);
			}
			timer = setInterval(() => {
				if (time > 0) {
					setTime((time) => time - 1);
				}
			}, 1000);
		}
		return () => {
			clearInterval(timer);
		};
	});
	// const prfix = "prefix";
	// const answerArray=[];

	const setabc1 = (a, item) => {
		// console.log("item",item)
		// console.log("array1",array1)
		var index = array1.findIndex((p) => p.question == item.id);
		array1[index] = { question: item.id, answer: a };
		// console.log("index",index)
		// console.log("changearray",array1)
	};
	const resultCancel = () => {
		setTimeUp(false);
		setIsActive(false);
		navigate('/scholarship');
	};
	const finalFormSubmit = async () => {
		var user_recors = JSON.parse(localStorage.getItem('user_Data'));
		console.log('mam ..', user_recors);
		setTimeUp(true);
		let body = {
			name: user_recors.name,
			email: user_recors.email,
			phone_number: user_recors.phone_number,
			quiz: id,
			session_id: user_recors.a_id,
			answer: array1,
		};
		console.log('bodyyy..', body);
		setLoader(true);
		let responce = await axios.post('http://3.111.207.167:8000/api/submitanswer', body);
		// console.log("rfinal array is..",responce.data);
		setTotalCorrect(responce.data.totalcorrect);
		setTotalWrong(responce.data.totalwrong);
		setLoader(false);
		// if()
	};
	const restryQuiz = () => {
		setTimeUp(false);
		setIsActive(true);
		getParticularQuizData();
	};
	return (
		<div className='container mt-5 mb-5'>
			<ToastContainer />
			<div className='d-lg-flex d-sm-block  justify-content-between'>
				<h3 className='admission_heading'> Quiz Details </h3>
				{
					isActive ? (
						<div className='text-center' onClick={() => setIsActive(true)}>
							Time left : {time}
						</div>
					) : null

					// <div className="text-center" onClick={()=>setIsActive(true)} >
					//   <Button>Start</Button>
					//   </div>
				}
			</div>
			<div className='row'>
				<div className='col-lg-4 col-md-4 col-sm-12'>
					<h6 className='text-muted mb-3'>Quizz</h6>
					<Card className='quizz_list'>
						<img
							className='card-img-top sh-25'
							src={`http://3.111.207.167:8000/uploads/quiz/${image}`}
							alt='card-image'
						/>
						<div className='p-4'>
							{/* <a
                className="body-link d-block sh-6 mb-2 h5 heading lh-1-5"
                href="#"
              > */}
							{name}
							{/* </a> */}
							<span className='clamp mb-3 text-muted sh-8 quizz-eww'>
								{description}
							</span>
							<div className='g-0 align-items-center mb-1 row'>
								<div className='col-auto'>
									<div className='sw-3 sh-4 d-flex justify-content-center align-items-center'>
										<HomeOutlined />
									</div>
								</div>
								<div className='ps-3 col'>
									<div className='g-0 row'>
										<div className='col'>
											<div className='text-alternate sh-4 d-flex align-items-center lh-1-25'>
												Time
											</div>
										</div>
										<div className='col-auto'>
											<div className='sh-4 d-flex align-items-center text-alternate'>
												{cardTime} mints
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Card>
				</div>
				<div className='col-lg-8 col-md-8 col-sm-12'>
					{timeup ? (
						<Modal
							title='Time Up'
							maskClosable={false}
							keyboard={false}
							closable={false}
							visible={timeup}
							onCancel={resultCancel}
							onOk={restryQuiz}
							okButtonProps={{
								children: 'Custom OK',
							}}
							cancelButtonProps={{
								children: 'Custom cancel',
							}}
							okText='Re attempt'
							cancelText='Home'
						>
							<Card className='blogs__mail-list'>
								<i className='fa fa-spinner fa-spinner'></i>
								<div>Your Result:-</div>
								{totalWrong ? (
									<>
										<div>Correct Answer:- {totalcorrect}/{qes.length} </div>
										<div>Wrong Answer:- {totalWrong}/{qes.length}</div>
									</>
								) : (
									<>Loading..Result Please wait.</>
								)}
							</Card>
						</Modal>
					) : null}
					{isActive ? (
						<div>
							<h6 className='text-muted mb-3'> Question</h6>
							{qes.map((item, index) => (
								//  {ques.map((item,i)=>(
								<div key={index} className='quizQuestion'>
									<h3>{item.title}</h3>
									<div class='form-check'>
										<input
											type='radio'
											className='unchecek'
											name={item.id}
											id={'1' + item.id}
											value='A'
											onChange={() => setabc1('A', item)}
										/>
										<label className='form-check-label' for={'1' + item.id}>
											{item.option1}
										</label>
									</div>
									<div class='form-check'>
										<input
											type='radio'
											className='unchecek'
											name={item.id}
											id={'2' + item.id}
											value='B'
											onChange={() => setabc1('B', item)}
										/>
										<label className='form-check-label' for={'2' + item.id}>
											{item.option2}
										</label>
									</div>
									{/* {item} */}
									{item.option3 ? (
										<div class='form-check'>
											<input
												type='radio'
												className='unchecek'
												name={item.id}
												id={'3' + item.id}
												value='C'
												onChange={() => setabc1('C', item)}
											/>
											<label className='form-check-label' for={'3' + item.id}>
												{item.option3}
											</label>
										</div>
									) : null}
									{item.option4 ? (
										<div class='form-check'>
											<input
												type='radio'
												className='unchecek'
												name={item.id}
												id={'4' + item.id}
												value='D'
												onChange={() => setabc1('D', item)}
											/>
											<label className='form-check-label' for={'4' + item.id}>
												{item.option4}
											</label>
										</div>
									) : null}
								</div>
								// ))}
							))}
						</div>
					) : null}
					<div className='btn btn-primary' onClick={() => finalFormSubmit()}>
						Done
					</div>
					{/* <Question />
          <Question />
          <Question />
          <Question /> */}
				</div>
				<Modal
					cancelButtonProps={{ style: { display: 'none' } }}
					title='Quiz Form'
					maskClosable={false}
					keyboard={false}
					closable={false}
					visible={userForm}
					onOk={JoinFormSubmit}
				>
					<Card className='blogs__mail-list'>
						<Form layout='vertical'>
							<Form.Item>
								<Input
									placeholder='Name'
									type='name'
									onChange={(text) => setQuizPlayerUsername(text.target.value)}
								/>
							</Form.Item>
							<Form.Item>
								<Input
									placeholder='E-mail'
									type='email'
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Item>
							<Form.Item>
								<Input
									placeholder='Phone'
									type='number'
									minLength={10}
		  							maxLength={12}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</Form.Item>
						</Form>
					</Card>
				</Modal>
			</div>
		</div>
	);
}

export default Quiz;
