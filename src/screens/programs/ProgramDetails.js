import React, { useEffect } from 'react';
import { Breadcrumb, Rate } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Routes,
    Route, NavLink } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";

const ProgramDetails = () => {
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
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "program_details_navbar_link active" : "program_details_navbar_link"
                            }
                            to="/programs/details"
                        >
                            <div className='program_details_navlink_text'>
                                Overview
                            </div>
                        </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "program_details_navbar_link active" : "program_details_navbar_link"
                        }
                        to="curriculum"
                    >
                        <div className='program_details_navlink_text'>
                            Curriculum
                        </div>
                    </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "program_details_navbar_link active" : "program_details_navbar_link"
                            }
                            to="/blogs"
                        >
                            <div className='program_details_navlink_text'>
                                Admission Procedure
                            </div>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "program_details_navbar_link active" : "program_details_navbar_link"
                            }
                            to="/blogs"
                        >
                            <div className='program_details_navlink_text'>
                                Learning Experience
                            </div>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "program_details_navbar_link active" : "program_details_navbar_link"
                            }
                            to="/blogs"
                        >
                            <div className='program_details_navlink_text'>
                                Projects
                            </div>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "program_details_navbar_link active" : "program_details_navbar_link"
                            }
                            to="/blogs"
                        >
                            <div className='program_details_navlink_text'>
                                Mentors
                            </div>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "program_details_navbar_link active" : "program_details_navbar_link"
                            }
                            to="/blogs"
                        >
                            <div className='program_details_navlink_text'>
                                Reviews
                            </div>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "program_details_navbar_link active" : "program_details_navbar_link"
                            }
                            to="/blogs"
                        >
                            <div className='program_details_navlink_text'>
                                Blogs
                            </div>
                        </NavLink>
                    </div>
                    <Routes>
                        <Route path="curriculum" element={<h3>curriculum</h3>} />
                        {/* <Route path="posts" element={<Posts />} /> */}
                    </Routes>
            </div>
        </div>
    );
}

export default ProgramDetails;