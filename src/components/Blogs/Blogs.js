import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Input, Button, Upload } from "antd";
import { RightOutlined, UploadOutlined } from "@ant-design/icons";
import BlogCard from "./components/BlogCard";
import BlogMiniCard from "./components/BlogMiniCard";
import HtmlHead from "../HtmlHead";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
const { Meta } = Card;
const Blogs = () => {
  const [data, setData] = useState([
    {
      id: 0,
      Title: "Test Blog",
      Description:
        "Hello Yugesh\nWelcome and thank you for installing Strapi, the leading open-source Headless CMS to easily manage content and quickly generate a well-structured API",
    },
  ]);
  useEffect(() => {
    getBlogs()
    //  let response=
  },[])
  const getBlogs=async()=>{
    let response=await axios.get('http://3.111.207.167:8000/api/bloglist');
    console.log(response.data.data);
    if(response.data.data.length>0){
      setData(response.data.data)
    }
  }

  // const 

  // data: Array(1)
  // 0:
  // attributes:
  // Blogdetails: "Hello Yugesh\nWelcome and thank you for installing Strapi, the leading open-source Headless CMS to easily manage content and quickly generate a well-structured API"
  // Title: "Test Blog"
  // createdAt: "2022-04-03T12:10:50.525Z"
  // publishedAt: "2022-04-03T12:11:03.571Z"
  // updatedAt: "2022-04-03T12:11:03.577Z"
  // [[Prototype]]: Object
  // id: 1

  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [file,setFile]=useState();
  const JoinFormSubmit=async()=>{
    if(!file && !name && !email){
      toast.error("All Fields are Required");
    }
    else{
    var formData=new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('file', file);
    console.log("form data..",formData);
    let response=await axios.post('http://3.111.207.167:8000/api/blogupload',formData);
    console.log("Res...",response.data.Success);
    if(response.data.Success===1){
      toast.success("Form Submitt successfully")
    }
    else{
      toast.error("Something went wrong on server")
    }
  }
}
  return (
    <div className="blogs__container mt-3 container">
       <ToastContainer/>
       <HtmlHead
				title='About Excelsior | Blogs | Best Online Education Platform for Data Science'
				desc='Experts are willing to share their knowledge about Data Science, Machine Learning and Artificial Intelligence'
				kw='Best Data Science Course, Machine Learning Courses, Best online Course in Delhi NCR, Best online course in Bengaluru, Specialization in Data Science for Finance, Specialization in Data Science for IT, Finance Data Science, Data Science for IT, Deep Learning, Python programming, Machine Learning, Data Analytics, Financial Analytics '
        pathname='https://getexcelsior.com/blogs'
      />
      <h1 className="admission_heading">Blogs</h1>
      <Row
        gutter={[20, 30]}
        style={{
          marginTop: 20,
        }}
      >
        <Col xs={24} sm={24} md={24} lg={18}>
          <Row gutter={[20, 30]}>
            {data &&
              data.map((item, index) => (
                // console.log("Array wala dat..",data)
                <Col xs={24} sm={24} md={12} lg={8} key={index}>
                  <BlogCard item={item} allArray={data}/>
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Card className="blogs__mail-list">
            <Form layout="vertical">
              <Form.Item>
                <Input placeholder="Name" type="name"  onChange={(text)=>setName(text.target.value)
                }/>
              </Form.Item>
              <Form.Item>
                <Input placeholder="E-mail" type="email" onChange={(e)=>setEmail(e.target.value)} />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Upload File" onChange={(e)=>setFile(e.target.files[0])} type="file"/>
              </Form.Item>
              {/* <Upload  onChange={(e)=>setFile(e.target.files[0])}>
                <Button  type="primary" icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload> */}
              <Button onClick={()=>JoinFormSubmit()} className="mt-3" type="" icon={<RightOutlined />}>
                Join Now
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Blogs;
