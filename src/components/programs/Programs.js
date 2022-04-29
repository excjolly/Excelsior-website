import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Form, Input, Radio, Row, Button } from "antd";
import ProgramsCards from "./ProgramsCards";
import { useLocation } from "react-router-dom";
import Program_DB_Master from "../../assets/static/Program_DB_Master.json";
const { Meta } = Card;

const Program = () => {
  return (
    <div className="container mt-3">
      <div className="mb-5">
        <h2 className="admission_heading">Features</h2>
        <Row gutter={[20, 30]}>
          <ProgramsCards />
          <ProgramsCards />
          <ProgramsCards />
          <ProgramsCards />
          <ProgramsCards />
          <ProgramsCards />
        </Row>
      </div>
      <div className="mb-3">
        <Row gutter={[20, 30]}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <h2 className="admission_heading">Programs</h2>
            <div className="programs_lists">
              <li className="programs_list">
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
              {Program_DB_Master.map((e,index) => (
                <Link to={{
                  pathname : "/programs/details",
                }}
                state = {e}
                key={index}
                >
                  <li className="programs_list">
                    <ul>{e.NameOfProgram}</ul>
                    <ul className="programs_listdark">{e.DurationInWeeks}</ul>
                    <ul className="programs_listdark">{e.Rating}</ul>
                    <ul className="programs_listdark">{e.CompletedBy}</ul>
                  </li>
                </Link>
              ))}
            </div>
          </Col>
          <Col className="mb-5" xs={24} sm={24} md={12} lg={12}>
            <h2 className="admission_heading">Homework</h2>
          </Col>
        </Row>
      </div>
      <div className="mb-5">
        <Row gutter={[20, 30]}>
          <Col className="mb-5" xs={24} sm={24} md={8} lg={8}>
            <h2 className="admission_heading">List of Quizes</h2>
            <div className="quizes_lists">
              <li className="quizes_list">
                <ul>lorem</ul>
                <ul>ipsum</ul>
              </li>
              <li className="quizes_list">
                <ul>lorem</ul>
                <ul>ipsum</ul>
              </li>
              <li className="quizes_list">
                <ul>lorem</ul>
                <ul>ipsum</ul>
              </li>
            </div>
          </Col>
          <Col className="mb-5" xs={24} sm={24} md={8} lg={8}>
            <h2 className="admission_heading">Events and webinars</h2>
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
          <Col className="mb-5" xs={24} sm={24} md={8} lg={8}>
            <h2 className="admission_heading">Notifications</h2>
            <li className="notifications_list">
              <ul>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </ul>
              <ul>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </ul>
              <ul>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </ul>
              <ul>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </ul>
              <ul>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </ul>
            </li>
          </Col>
        </Row>
      </div>
      <div className="mb-5">
        <h2 className="admission_heading">Mentor</h2>
        <Row gutter={[20, 30]}>
          <Col xs={24} sm={24} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  className="image"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col xs={24} sm={24} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  className="image"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col xs={24} sm={24} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  className="image"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col xs={24} sm={24} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  className="image"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Program;
