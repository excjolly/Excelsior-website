import React, { useState } from "react";
import { Row, Col, Button, Avatar, Rate, Form, Input } from "antd";
import {
    RightOutlined,
    BorderOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import images from "../../assets/images";

const Home = () => {
    const [apData, setApData] = useState([
        {
            image: images.mobileApp,
            title: " Application Launch",
            text: "Chocolate cake marshmallow bear claw sweet. Apple pie macaroon sesame snaps candy jelly pudding.",
        },
        {
            image: images.mobileApp,
            title: "Performance Tweaks",
            text: "Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop.",
        },
        {
            image: images.mobileApp,
            title: "Advanced Configuration",
            text: "Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps chocolate. Lollipop halvah powder.",
        },
        {
            image: images.mobileApp,
            title: "Server Analytics",
            text: "Cake tart apple pie bear bonbon sugar plum muffin sesame snaps sweet roll gingerbread bonbon sugar.",
        },
    ]);

    const [statsData, setStatsData] = useState([
        {
            title: "Earnings",
            text: "$315.20",
        },
        {
            title: "Orders",
            text: "16",
        },
        {
            title: "Sessions",
            text: "463",
        },
        {
            title: "Users",
            text: "17",
        },
    ]);

    const [latestNewsData, setLatestNewsData] = useState([
        {
            title: "New user registiration",
            time: "18 DEC",
        },
        {
            title: "3 Products added",
            time: "18 DEC",
        },
        {
            title: "14 products added",
            time: "18 DEC",
        },
        {
            title: "New sale: Steirer Brot",
            time: "18 DEC",
        },
        {
            title: "Product out of stock: Breadstick",
            time: "18 DEC",
        },
        {
            title: "New user registiration",
            time: "18 DEC",
        },
        {
            title: "3 Products added",
            time: "18 DEC",
        },
        {
            title: "14 products added",
            time: "18 DEC",
        },
        {
            title: "New sale: Steirer Brot",
            time: "18 DEC",
        },
        {
            title: "Product out of stock: Breadstick",
            time: "18 DEC",
        },
    ]);

    const [recentTestimonialsData, setRecentTestimonialsData] = useState([
        {
            image: images.computer,
            title: "Panayappan",
            text: "Chocolate bar marzipan marzipan carro",
            rating: 4,
        },
        {
            image: images.computer,
            title: "Sakthi",
            text: "Chocolate bar marzipan marzipan carro",
            rating: 4,
        },
        {
            image: images.computer,
            title: "Jicku",
            text: "Chocolate bar marzipan marzipan carro",
            rating: 5,
        },
    ]);

    return (
        <div className="home__container">
            <div className="home__getting-started">
                <h2>Getting Started</h2>
                <p>
                    Let us manage the database engines for your applications so
                    you can focus on building.
                </p>
            </div>
            <div className="home__banner-section section">
                <Row gutter={[20, 30]}>
                    <Col xs={24} sm={24} md={24} lg={16}>
                        <div className="home__banner-left">
                            <div className="home__banner-left-content">
                                <h2>Introduction to Cloud</h2>
                                <p>
                                    Lollipop chocolate marzipan marshmallow
                                    gummi bears. Tootsie roll liquorice cake
                                    jelly beans.
                                </p>
                                <Button type="primary" icon={<RightOutlined />}>
                                    Getting Started
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <div className="home__banner-right">
                            <h2>Ready to make bread? Start now!</h2>
                            <div>
                                <p>
                                    Cheesecake chocolate carrot cake pie
                                    lollipop lemon toffee lollipop. Oat cake pie
                                    cake cotton.
                                </p>
                                <Button icon={<RightOutlined />}>View</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="home__admission-procedure section">
                <h3 className="home__ap-title section-title">
                    Admission Procedure
                </h3>
                <Row gutter={[20, 30]}>
                    {apData?.map((item, index) => (
                        <Col xs={24} sm={24} md={12} lg={6} key={index}>
                            <div className="home__ap-item">
                                <img src={item.image} alt={item.title} />
                                <h3 className="text-primary">{item.title}</h3>
                                <p className="text-center">{item.text}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className="home__stats section">
                <h3 className="section-title">Stats</h3>
                <Row gutter={[20, 30]}>
                    {statsData?.map((item, index) => (
                        <Col xs={24} sm={24} md={12} lg={6} key={index}>
                            <div className="home__stats-item">
                                <Avatar size={42} />
                                <p>{item.title}</p>
                                <h3 className="text-primary">{item.text}</h3>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className="home__app-info section">
                <Row gutter={[20, 30]}>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <h3 className="section-title">Latest News</h3>
                        <div className="home__app-info_latest-news">
                            {latestNewsData?.map((item, index) => (
                                <div
                                    className="home__app-info_latest-news-item"
                                    key={index}
                                >
                                    <div>
                                        <BorderOutlined
                                            style={{ color: "#F35D5D" }}
                                        />
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p>{item.time}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <h3 className="section-title">Recent Testimonials</h3>
                        <div className="home__app-info_recent-testimonials">
                            {recentTestimonialsData?.map((item, index) => (
                                <div
                                    className="home__app-info_recent-testimonials-item"
                                    key={index}
                                >
                                    <img src={item.image} alt={item.title} />
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                        <Rate
                                            disabled
                                            defaultValue={item.rating}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <h3 className="section-title">Recent Blogs</h3>
                        <div className="home__app-info_recent-testimonials">
                            {recentTestimonialsData?.map((item, index) => (
                                <div
                                    className="home__app-info_recent-testimonials-item"
                                    key={index}
                                >
                                    <img src={item.image} alt={item.title} />
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                        <Rate
                                            disabled
                                            defaultValue={item.rating}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="home__help-section section">
                <Row gutter={[20, 30]}>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <h3 className="section-title">Help</h3>
                        <div className="home__help-container">
                            <h3>Do you need help?</h3>
                            <h4 className="text-primary">
                                Search for documentation!
                            </h4>
                            <p>Cheesecake chocolate carrot cake pie cream.</p>
                            <Form>
                                <Form.Item>
                                    <Input
                                        placeholder="Keyword"
                                        prefix={<SearchOutlined />}
                                    />
                                </Form.Item>
                                <Button
                                    type="primary"
                                    ghost
                                    icon={<RightOutlined />}
                                >
                                    Search
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={16}>
                        <h3 className="section-title">Videos</h3>
                        <Row gutter={[10, 10]}>
                            {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                <Col span={12} key={index}>
                                    <div className="home__videos-item">
                                        <div className="home__videos-item-left">
                                            <h4>
                                                Database <br />
                                                Basics
                                            </h4>
                                            <div className="home__videos-item-time">
                                                <p> 16.05</p>
                                            </div>
                                        </div>
                                        <div className="home__videos-item-right">
                                            <h3>Database Basics</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>

            <div className="home__mail-list section">
                <h3 className="section-title">Mail List</h3>
                <div className="home__mail-list-container">
                    <h3>Ready to make bread?</h3>
                    <h3 className="text-primary">Join our email list!</h3>
                    <p>
                        Cheesecake chocolate carrot cake pie lollipop lemon
                        drops.
                    </p>
                    <Form layout="vertical" style={{ width: "50%" }}>
                        <Form.Item
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                    message: "Name is Required!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: "Email is Required!",
                                },
                            ]}
                        >
                            <Input type="email" />
                        </Form.Item>
                        <Form.Item className="text-center">
                            <Button
                                type="primary"
                                htmlType="submit"
                                icon={<RightOutlined />}
                            >
                                Subscribe
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Home;
