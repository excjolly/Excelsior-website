import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Avatar, Button } from 'antd';
import {
	LikeOutlined,
	ClockCircleOutlined,
	FacebookOutlined,
	LinkedinOutlined,
	RightOutlined,
} from '@ant-design/icons';
import images from '../../assets/images';
import BlogCard from './components/BlogCard';
import BlogMiniCard from './components/BlogMiniCard';

import { useLocation } from 'react-router-dom';
import axios from 'axios';
const { Meta } = Card;

const BlogDetail = () => {
	const {state} = useLocation();
	const { blogId} = state; 
	const [details,setDetails]=useState();
	const [realted,setRelatedBlog]=useState([])
	console.log("blog detail min..",blogId);
	// console.log("all array..",allArray);
	useEffect(()=>{
		getParticularBlog()
	},[])
	const getParticularBlog=async()=>{
		let body={
			"id":blogId.id
			}
		let response=await axios.post('http://3.111.207.167:8000/api/blogdetail',body)
		console.log("particular res..",response.data);
		if(response.data.data){
			setDetails(response.data.data)
			if(response.data.blogresult.length>0){
				setRelatedBlog(response.data.blogresult)
			}
		}
	}
	return (
		<>
			<div className='blog__details-container section-container'>
				
				<h2>Blog Detail</h2>
				<Row gutter={[20, 30]} className='mt-20'>
					<Col xs={24} sm={24} md={24} lg={18}>
						<div className='blog__details-container'>
							<img className='blog__details__image' src={blogId.fullimage} alt='food' />
							<div className='blog__details-content section'>
								<h1>{blogId.title}</h1>

								<cite><article dangerouslySetInnerHTML={{ __html: blogId.description }} ></article></cite>
								{/* <p style={{ marginTop: 10 }}>
									{blogId.description} 
								</p> */}
							</div>
						</div>
						{details?
						<div className='blog__details-author-section section'>
							<h2 className='custom-text-primary'>About the Author</h2>
							<Card className='mt-10'>
								<div className='blog__details-author'>
									{/* <Avatar /> */}
									<div className='blog__details-author-info'>
										<h3 className='custom-text-primary'>{details.author_name}</h3>
										<p>{details.author_title}</p>
										<p className='blog__details-author-description'>
											{details.author_des}
										</p>
									</div>
								</div>
							</Card>
						</div>:null}

						<div className='blog__details-also-like section'>
							{/* <h4 className='text-primary'>You May Also Like</h4> */}
							<Row gutter={[20, 30]} className='mt-0'>
								{/* {realted.map((item, index) => (
									<Col xs={24} sm={24} md={8} lg={8} key={index}>
										<BlogCard item={item} />
									</Col>
								))} */}
							</Row>
						</div>
					</Col>
					<Col xs={24} sm={24} md={24} lg={6}>
						{realted.map((item, index) => (
							<BlogMiniCard key={index} item={item}  />
						))}
						<div className='blogs__details-advertise-blogs'>
							<Card className='blogs__details-advertise-blog'>
								<h3>Introduction to Bread Making</h3>
								<Button
									type='primary'
									icon={<RightOutlined />}
									style={{ marginTop: 20 }}
								>
									View
								</Button>
							</Card>
							<Card className='blogs__details-advertise-blog'>
								<h3>Introduction to Bread Making</h3>
								<Button
									type='primary'
									icon={<RightOutlined />}
									style={{ marginTop: 20 }}
								>
									View
								</Button>
							</Card>
						</div>
					</Col>
				</Row>
			
			</div>
		</>
	);
};

export default BlogDetail;
