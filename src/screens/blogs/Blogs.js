import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Input, Button} from "antd";
import {
    RightOutlined,
} from "@ant-design/icons";
import BlogCard from "./components/BlogCard";
import BlogMiniCard from "./components/BlogMiniCard";

const { Meta } = Card;

const Blogs = () => {
    const [data,setData]=useState();
    useEffect(() => {
        fetch(
            "http://localhost:1337/api/blogs/")
            .then((response) => response.json())
            .then((data) => {setData(data);})
    },[])


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
        <div className="blogs__container section-container">
            <h2>Blogs</h2>
            <Row
                gutter={[20, 30]}
                style={{
                    marginTop: 20,
                }}
            >
                <Col xs={24} sm={24} md={24} lg={18}>
                    <Row gutter={[20, 30]}>
                        {data && data.data.map((item, index) => (
                            <Col xs={24} sm={24} md={12} lg={8} key={index}>
                                <BlogCard title={item.attributes.Title} description={item.attributes.Blogdetails}/>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6}>
                    <Card className="blogs__mail-list">
                        <h3>Ready to make bread?</h3>
                        <h3 className="text-primary">Join our email list!</h3>
                        <p className="mv-10">
                            Cheesecake chocolate carrot cake pie lollipop lemon
                            drops.
                        </p>
                        <Form layout="vertical">
                            <Form.Item>
                                <Input placeholder="E-mail" type="email" />
                            </Form.Item>
                            <Button type="primary" icon={<RightOutlined />}>
                                Join Now
                            </Button>
                        </Form>
                    </Card>

                    <div className="blogs__must-read section">
                        <h4 className="text-primary">Must Read</h4>
                        {[1, 2, 3].map((item, index) => (
                            <BlogMiniCard key={index} />
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Blogs;
