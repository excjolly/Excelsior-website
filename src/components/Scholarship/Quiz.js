/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { HomeOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React, { useEffect,useState } from "react";
import Question from "./Question";
import {
  // BrowserRouter as Router,
  // Switch,
  useLocation
} from "react-router-dom";
import axios from "axios";
function Quiz() {
  const [Data,setData]=useState([])
  const [qes,setQues]=useState([]);
  const [name,setName]=useState();
  const [image,setImage]=useState(0);
  const [time,setTime]=useState();
  const [isActive, setIsActive] = useState(false);
  // const [seconds, setSeconds] = useState(0);
  const [description,setDescription]=useState();
  const [timeup,setTimeUp]=useState(false);
  // const [isActive,setIsActive]=useState(false);
  // let location = useLocation();
  const {state} = useLocation();
  const { id} = state; 
  console.log("QUiz id is",{ id});
  useEffect(()=>{
    getParticularQuizData()
  },[])
  const getParticularQuizData=async()=>{
    let response=await axios.get(`http://3.111.207.167:8000/api/quizquestion?quiz_id=${id}`)
    console.log("Quiz .......",response.data);
    if(response.data.data.question.length>0){
      // setData(response.data.data.quiz);
      setName(response.data.data.quiz.name);
      setDescription(response.data.data.quiz.descritpion)
      setImage(response.data.data.quiz.image);
      setTime(response.data.data.quiz.time)
      setQues(response.data.data.question)
    }
  }
  useEffect(() => {
    let timer = null;
    if(isActive){

      if(time<1){
        setTimeUp(true)
      }
      timer = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  });
  // conso
  return (
    <div className="container mt-5 mb-5">
      <div className="d-lg-flex d-sm-block  justify-content-between">
        <h3 className="admission_heading"> Quiz Details </h3>
        {isActive?
        <div className="text-center" onClick={()=>setIsActive(true)} >
          time : {time}
          </div>:
        <div className="text-center" onClick={()=>setIsActive(true)} >
          <Button>Start</Button>
          </div>
          }
          
        
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h6 className="text-muted mb-3"> Quizz</h6>
          <Card className="quizz_list">
            <img
              className="card-img-top sh-25"
              src={image}
              alt="card-image"
            />
            <div className="p-4">
              <a
                className="body-link d-block sh-6 mb-2 h5 heading lh-1-5"
                href="#"
              >
               {name}
              </a>
              <span className="clamp mb-3 text-muted sh-8 quizz-eww">
                {description}
              </span>
              <div className="g-0 align-items-center mb-1 row">
                <div className="col-auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <HomeOutlined />
                  </div>
                </div>
                <div className="ps-3 col">
                  <div className="g-0 row">
                    <div className="col">
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">
                        Time
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">
                       {time} mints
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </Card>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          {timeup?<div>Sorry Time Over</div>:
          <div>
          <h6 className="text-muted mb-3"> Question</h6>
          {qes && qes.map((item,index)=>(
          <Card className="mb-3">
    <div className="d-flex flex-row align-content-center align-items-center mb-5">
      <div className="sw-5 me-4">
        <div className="sw-5 sh-5 text-primary d-flex justify-content-center align-items-center">
         {index+1}
        </div>
      </div>
      <div className="heading mb-0">
       {item.title}
      </div>
    </div>
    <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
        <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
          <div className="d-flex justify-content-center align-items-center">
            <input type={"radio"} className="btn-check" id="answer_1" name="radioOutline1" />
            <label for="answer_1" className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link">
                A
            </label>

          </div>
        </div>
        <div className="mb-0 text-alternate">
      {item.option1}
        </div>
    </div>
    <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
        <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
          <div className="d-flex justify-content-center align-items-center">
            <input type={"radio"} className="btn-check" id="answer_2" name="radioOutline1" />
            <label for="answer_2" className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link">
                B
            </label>
          </div>
        </div>
        <div className="mb-0 text-alternate">
        {item.option2}
        </div>
    </div>
    <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
        <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
          <div className="d-flex justify-content-center align-items-center">
            <input type={"radio"} className="btn-check" id="answer_3" name="radioOutline1" />
            <label for="answer_3" className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link">
                C
            </label>
          </div>
        </div>
        <div className="mb-0 text-alternate">
        {item.option3}
 
        </div>
    </div>
    <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
        <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
          <div className="d-flex justify-content-center align-items-center">
            <input type={"radio"} className="btn-check" id="answer_4" name="radioOutline1" />
            <label for="answer_4" className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link">
                D
            </label>
          </div>
        </div>
        <div className="mb-0 text-alternate">
        {item.option4}
 
        </div>
    </div>
  </Card>
     ))}
     </div>}
          {/* <Question />
          <Question />
          <Question />
          <Question /> */}

        </div>
      </div>
    </div>
  );
}

export default Quiz;
