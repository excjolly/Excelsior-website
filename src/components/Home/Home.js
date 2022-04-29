import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Avatar,
  Rate,
  Form,
  Input,
  Steps,
  Card,
  Select,
  Modal,
  Radio,
} from "antd";
import {
  RightOutlined,
  BorderOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import images from "../../assets/images";
import Admission from "../programs/Admission";
import Helmet from "react-helmet";
import { ScrollElement } from "react-scroll/modules";

const { Option } = Select;

const Home = () => {
  const navigate = useNavigate();
  const [registerFormCurrentStep, setRegisterFormCurrentStep] = useState(0);
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
    {
      title: "Users",
      text: "17",
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

  const [
    isRecentTestimonialsModalVisible,
    setIsRecentTestimonialsModalVisible,
  ] = useState(false);

  const next = () => {
    setRegisterFormCurrentStep((prev) => prev + 1);
  };

  const prev = () => {
    setRegisterFormCurrentStep((prev) => prev - 1);
  };

  const RegisterForm = () => {
    switch (registerFormCurrentStep) {
      case 0:
        return (
          <div>
            <h4>What was your major interest</h4>
            <Select
              style={{ width: "100%", marginTop: 20 }}
              defaultValue="lucy"
              onChange={() => {}}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
          </div>
        );
      case 1:
        return (
          <div>
            <h4>What was your major interest</h4>
            <Select
              style={{ width: "100%", marginTop: 20 }}
              defaultValue="lucy"
              onChange={() => {}}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
          </div>
        );
      case 2:
        return (
          <div>
            <h4>What was your major interest</h4>
            <Select
              style={{ width: "100%", marginTop: 20 }}
              defaultValue="lucy"
              onChange={() => {}}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
          </div>
        );
      case 3:
        return (
          <div>
            <h4>What was your major interest</h4>
            <Select
              style={{ width: "100%", marginTop: 20 }}
              defaultValue="lucy"
              onChange={() => {}}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
          </div>
        );

      default:
        return <div></div>;
    }
  };

  const RecentTestimonialsModal = () => {
    return (
      <Modal
        title="Recent Testimonials"
        visible={isRecentTestimonialsModalVisible}
        onCancel={() => setIsRecentTestimonialsModalVisible(false)}
        width={"60%"}
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
                  <Card className="box-shadow">
                    <Avatar />
                    <h4 style={{ margin: "10px 0" }}>Panayappan</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum, blanditiis illum est possimus culpa architecto
                      adipisci. Explicabo modi ullam quo!
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

  return (
    <div className="mb-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container mt-4">
          <h1 className="Banner_Heading" >EXCELSIOR</h1>
          <p className="mb-4 ">
            Excelsior is ideal for professionals who wants to 
          </p>
            
        </div>
      <div className="home__banner-left-content d-flex flex-column justify-content-center mb-5">
       

        <div className="container  pt-4">
          <h2 className="text-white admission_heading">Introduction to Cloud</h2>
          <div>
            <Row>
              <Col lg={12}>
                <p className="mb-4 text-white">
                  Excelsior is ideal for professionals who wants to master their
                  skill set and grow their career. With well-structured
                  programs, industry experts as mentors, tailored for every
                  student with a proven learning methodology.
                </p>
              </Col>
            </Row>

            <Button type="primary" icon={<RightOutlined />}>
              Getting Started
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mb-5">
          <h2 className="admission_heading">Stats</h2>
          <Row gutter={[20, 30]}>
            {statsData?.map((item, index) => (
              <Col xs={24} sm={24} md={6} lg={4} key={index}>
                <div className="home__stats-item">
                  <Avatar size={42} />
                  <p>{item.title}</p>
                  <h3 className="text-primary">{item.text}</h3>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="mb-5">
          <Row gutter={[20, 30]}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <h2 className="admission_heading">Help</h2>
              <Card
              // title="Know More About the Scholarships and Offers"
              >
                <Form
                  //   form={form}
                  name="horizontal_login"
                  layout="outline"
                  //   onFinish={onFinish}
                >
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please input your Name!" },
                    ]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                    ]}
                  >
                    <Input type="text" placeholder="Email Address " />
                  </Form.Item>
                  <Form.Item
                    name="phonenumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <Input type="number" placeholder="Phone Number " />
                  </Form.Item>
                  <Form.Item>
                    <Radio.Group
                    // onChange={onChange}
                    // value={value }
                    >
                      <Radio value={"Myself"}>Myself</Radio>
                      <Radio value={"My Company"}>My Company</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item shouldUpdate>
                    {() => (
                      <Button
                        type="primary"
                        htmlType="submit"
                        // disabled={
                        // //   !form.isFieldsTouched(true) ||
                        // //   !!form.getFieldsError().filter(({ errors }) => errors.length).length
                        // }
                      >
                        Submit
                      </Button>
                    )}
                  </Form.Item>
                </Form>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
              <h2 className="admission_heading">Videos</h2>
              <Row gutter={[20, 30]}>
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <Col xs={24} sm={24} md={12} key={index}>
                    <div className="home__videos-item">
                      <div className="home__videos-item-left">
                        <h6>Database Basics</h6>
                        <div className="home__videos-item-time">
                          <p> 16.05</p>
                        </div>
                      </div>
                      <div className="home__videos-item-right">
                        <h3>Database Basics</h3>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
        {/* <Admission /> */}

        <div className="mb-5">
          <Row gutter={[20, 30]}>
            <Col xs={24} sm={24} md={24} lg={8}>
              <h2 className="admission_heading">Latest News</h2>
              <Card className="home__app-info_latest-news">
                {latestNewsData?.map((item, index) => (
                  <Row gutter={[20, 30]} key={index}>
                    <Col sm={4} lg={4}>
                      <BorderOutlined style={{ color: "#F35D5D" }} />
                    </Col>
                    <Col sm={16} lg={16}>
                      <h6>
                        <b> {item.title}</b>
                      </h6>
                    </Col>
                    <Col sm={4} lg={4}>
                      <small> {item.time}</small>
                    </Col>
                  </Row>
                ))}
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8}>
              <h2 className="admission_heading">Recent Testimonials</h2>
              <Card className="test_admission">
                {recentTestimonialsData?.map((item, index) => (
                  <Row className="mb-3" gutter={[20, 30]}>
                    <Col xs={10} sm={10} md={10} lg={10}>
                      <img src={item.image} alt={item.title} />
                    </Col>
                    <Col xs={14} sm={14} md={14} lg={14}>
                      <h6>
                        {" "}
                        <b>{item.title} </b>
                      </h6>
                      <Rate disabled defaultValue={item.rating} />
                    </Col>
                  </Row>
                ))}
                <Row align="middle" justify="center">
                  <Button
                    onClick={() => setIsRecentTestimonialsModalVisible(true)}
                    type="primary"
                    ghost
                  >
                    See More
                  </Button>
                </Row>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8}>
              <h2 className="admission_heading">Recent Blogs</h2>
              <Card className="test_admission">
                {recentTestimonialsData?.map((item, index) => (
                  <Row className="mb-3" gutter={[20, 30]}>
                    <Col xs={10} sm={10} md={10} lg={10}>
                      <img src={item.image} alt={item.title} />
                    </Col>
                    <Col xs={14} sm={14} md={14} lg={14}>
                      <h6>
                        {" "}
                        <b>{item.title} </b>
                      </h6>
                      <Rate disabled defaultValue={item.rating} />
                    </Col>
                  </Row>
                ))}
                <Row align="middle" justify="center">
                  <Button
                    onClick={() => setIsRecentTestimonialsModalVisible(true)}
                    type="primary"
                    ghost
                  >
                    See More
                  </Button>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
        <h2 className="admission_heading">Mail List</h2>
        <Card>
          <h5 className="mb-3">Ready to make bread?</h5>
          <h5 className=" mb-3 text-primary">Join our email list!</h5>
          <p className="mb-3">
            Cheesecake chocolate carrot cake pie lollipop lemon drops.
          </p>
          <Form layout="horizontal">
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
              <Button type="primary" htmlType="submit" icon={<RightOutlined />}>
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
