import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Input, Button, Upload } from "antd";
import { RightOutlined, UploadOutlined } from "@ant-design/icons";
import BlogCard from "./components/BlogCard";
import BlogMiniCard from "./components/BlogMiniCard";

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
  // useEffect(() => {
  //     fetch(
  //         "http://localhost:1337/api/blogs/")
  //         .then((response) => response.json())
  //         .then((data) => {setData(data);})
  // },[])

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

  return (
    <div className="blogs__container mt-3 container">
      <h2 className="admission_heading">Blogs</h2>
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
                <Col xs={24} sm={24} md={12} lg={8} key={index}>
                  <BlogCard title={item.Title} description={item.Description} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Card className="blogs__mail-list">
            <Form layout="vertical">
              <Form.Item>
                <Input placeholder="Name" type="name" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="E-mail" type="email" />
              </Form.Item>
              <Upload >
                <Button  type="primary" icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              <Button className="mt-3" type="" icon={<RightOutlined />}>
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
