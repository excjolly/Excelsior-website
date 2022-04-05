import React, { useEffect, useState } from 'react';
import {
    Breadcrumb, Rate, Steps, Row,
    Col,
    Button,
    Select
} from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Link as ScrollLink } from "react-scroll";
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const ProgramDetails = () => {
    const [ans, setAns] = useState('');
    const [display, setDiplay] = useState('');
    const [registerFormCurrentStep, setRegisterFormCurrentStep] = useState(0);
    const { Option } = Select;
    const { Step } = Steps;
    const onClick = ({ key }) => {
        if (key === '1') {
            setAns('The course is all about .....');
        } else if (key === '2') {
            setAns('You can achive.....');
        } else if (key === '3') {
            setAns('You need to have .... ');
        } else if (key === '4') {
            setAns('The Outcomes are ');
        }
    };

    const menu = (
        <Menu onClick={onClick}>
            <Menu.Item key="1">Phython</Menu.Item>
            <Menu.Item key="2">What is the scope of the course and kind of jobs you get ?</Menu.Item>
            <Menu.Item key="3">Prerequisities and Eligibility ?</Menu.Item>
            <Menu.Item key="4">Learning Outcomes and Skill acquired ?</Menu.Item>
        </Menu>
    );

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
                    <div className='admission_card'>
                        <h2>Apply & Register</h2>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    </div>
                );
            case 1:
                return (
                    <div className='admission_card'>
                        <h2>Telephonic Discussion</h2>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    </div>
                );
            case 2:
                return (
                    <div className='admission_card'>
                        <h2>
                            Admission Test</h2>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    </div>
                );
            case 3:
                return (
                    <div className='admission_card'>
                        <h2>Choose Payment Mode</h2>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    </div>
                );

            default:
                return <div></div>;
        }
    };

    useEffect(() => {
        const header = document.getElementById("myHeader");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    return (
        <div className='programDetails'>
            <div className='banner'>
                <div className='banner_wid'>
                    <div className='left'>
                        <a href='#overview'>overview</a>
                        <div className='banner_breadcrumb'>
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">
                                    <HomeOutlined />
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href="/programs">
                                    <UserOutlined />
                                    <span>Programs List</span>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>Program Details</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <h2>IIT Madras</h2>
                        <h1>Data Science Course Online</h1>
                        <div className='rating'>
                            5 <Rate disabled defaultValue={5} />
                        </div>
                        <p>Learn Data Science from IIT Madras faculty & Industry experts and earn a Data Science certification from India's best Engineering College. Become a Data Scientist through multiple data Science courses covered in this 7-month data science certification program with hands-on exercises & Project work.</p>
                        <button className='enroll_button' onClick={() => console.log('enroll')}>Enroll Now</button>
                    </div>
                    <div className='right'>

                    </div>
                </div>
            </div>
            <div className='programs_insights'>
                <h2>Data Scientist Course <strong>Key Highlights</strong></h2>
                <div className="grid-container">
                    <div className="grid-item">
                        <p>50+ Live sessions across seven months</p>
                    </div>
                    <div className="grid-item">
                        <p>218 Hrs Self-paced Videos</p>
                    </div>
                    <div className="grid-item">
                        <p>
                            200 Hrs Projects & Exercises
                        </p>
                    </div>
                    <div className="grid-item">
                        <p>
                            Learn from IIT Madras Faculty & Industry Practitioners
                        </p>
                    </div>
                    <div className="grid-item">
                        <p>
                            1:1 with Industry Mentors
                        </p>
                    </div>
                    <div className="grid-item">
                        <p>
                            3 Guaranteed Interviews
                        </p>
                    </div>
                    <div className="grid-item">
                        <p>
                            24*7 Support
                        </p>
                    </div>
                    <div className="grid-item">
                        <p>
                            No Cost EMI Option
                        </p>
                    </div>
                </div>
            </div>
            <div className='program_details'>
                <div className='program_details_navbar' id='myHeader'>
                    <ScrollLink className='program_details_navbar_link' to='overview' offset={-150} spy={true}>
                        <div className='program_details_navlink_text'>
                            Overview
                        </div>
                    </ScrollLink>
                    <ScrollLink activeClass='active' className='program_details_navbar_link' to='curriculum' spy={true}>
                        <div className='program_details_navlink_text'>
                            Curriculum
                        </div>
                    </ScrollLink>
                    <ScrollLink className='program_details_navbar_link' to='admission' spy={true}>
                        <div className='program_details_navlink_text'>
                            Admission Procedure
                        </div>
                    </ScrollLink>
                    <ScrollLink className='program_details_navbar_link' to='fee' spy={true}>
                        <div className='program_details_navlink_text'>
                            Fee

                        </div>
                    </ScrollLink>
                    <ScrollLink className='program_details_navbar_link' to='curriculum' spy={true}>
                        <div className='program_details_navlink_text'>
                            Learning Experience

                        </div>
                    </ScrollLink>
                    <ScrollLink className='program_details_navbar_link' to='curriculum' spy={true}>
                        <div className='program_details_navlink_text'>
                            Projects
                        </div>
                    </ScrollLink>
                    <ScrollLink className='program_details_navbar_link' to='curriculum' spy={true}>
                        <div className='program_details_navlink_text'>
                            Mentors
                        </div>
                    </ScrollLink>
                    <ScrollLink className='program_details_navbar_link' to='curriculum' spy={true}>
                        <div className='program_details_navlink_text'>
                            Reviews
                        </div>
                    </ScrollLink>
                    <ScrollLink className='program_details_navbar_link' to='curriculum' spy={true}>
                        <div className='program_details_navlink_text'>
                            Blogs
                        </div>
                    </ScrollLink>
                </div>
            </div>
            <div id='overview' className='program_overview'>
                <h3 className='overview_heading'>Overview Of the Course</h3>
                <p className='overview_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Dropdown className='overview_dropdown' overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Know more about the Course <DownOutlined />
                    </a>
                </Dropdown>
                <p className='overview_ans'>{ans}</p>
            </div>
            <div id='curriculum' className='program_curriculum'>
                <h2 className='curriculum_heading' >Curriculum</h2>
                <p className='curriculum_text' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <p className='curriculum_dropdown' onClick={() => setDiplay(!display)} >Python</p>
                <p className={display ? 'text_active' : 'curriculum_msg'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
            <div id='admission' className='program_admission'>
                <h3 className='admission_heading'> Admission Procedure</h3>
                <p className='admission_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <Steps
                    className='steps'
                    current={registerFormCurrentStep}
                    size="small"
                    direction="horizontal"
                >
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                </Steps>
                <RegisterForm />
                <Row style={{ marginTop: 20 }} gutter={[5, 30]}>
                    <Col>
                        {" "}
                        {registerFormCurrentStep === 3 && (
                            <Button type="primary">
                                Finish
                            </Button>
                        )}
                    </Col>
                    <Col>
                        {registerFormCurrentStep < 3 && (
                            <Button
                                onClick={() => next()}
                                type="primary"
                            >
                                Next
                            </Button>
                        )}
                    </Col>
                    <Col>
                        {registerFormCurrentStep > 0 && (
                            <Button
                                onClick={() => prev()}
                                type="primary"
                            >
                                Previous
                            </Button>
                        )}
                    </Col>
                </Row>
            </div>
            <div id='fee' className='program_fee'>
                <h3 className='fee_heading'>
                    Fee
                </h3>
                <div className='fee_card_list'>
                    <Card className='fee_card' bordered={false}>
                        <ul className='card_list'>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                        </ul>
                    </Card>
                    <Card className='fee_card' bordered={false}>
                        <ul className='card_list'>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                        </ul>
                    </Card>
                    <Card className='fee_card' bordered={false}>
                        <ul className='card_list'>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ProgramDetails;