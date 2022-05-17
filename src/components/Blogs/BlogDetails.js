import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'antd';
import HtmlHead from '../HtmlHead';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
	const { state } = useLocation();
	const { blogId } = state;
	const [details, setDetails] = useState();
	const [realted, setRelatedBlog] = useState([]);
	console.log('blog detail min..', blogId);
	// console.log("all array..",allArray);
	useEffect(() => {
		getParticularBlog();
	}, []);
	const getParticularBlog = async () => {
		let body = {
			id: blogId.id,
		};
		let response = await axios.post('https://getexcelsior.com/api/api/blogdetail', body);
		console.log('particular res..', response.data);
		if (response.data.data) {
			setDetails(response.data.data);
			if (response.data.blogresult.length > 0) {
				setRelatedBlog(response.data.blogresult);
			}
		}
	};
	return (
		<>
			<div className='blog__details-container section-container'>
				<HtmlHead
					title='About Excelsior | Knowledge Center | Best Online Education Platform for Data Science'
					desc='Enhance your knowledge about Data Science by reading carefully curated Blogs'
					kw='Best Data Science Course, Machine Learning Courses, Best online Course in Delhi NCR, Best online course in Bengaluru, Specialization in Data Science for Finance, Specialization in Data Science for IT, Finance Data Science, Data Science for IT, Deep Learning, Python programming, Machine Learning, Data Analytics, Financial Analytics '
					pathname='{pathname}'
				/>
				<h2>Blog Detail</h2>
				<Row gutter={[20, 30]} className='mt-20'>
					<Col xs={24} sm={24} md={24} lg={18}>
						<div className='blog__details-container'>
							<img
								className='blog__details__image'
								src={blogId.fullimage}
								alt='Data science Blogs'
							/>
							<div className='blog__details-content section'>
								<h1>{blogId.title}</h1>

								<cite>
									<article
										dangerouslySetInnerHTML={{ __html: blogId.description }}
									></article>
								</cite>
								{/* <p style={{ marginTop: 10 }}>
									{blogId.description} 
								</p> */}
							</div>
						</div>
						{details ? (
							<div className='blog__details-author-section section'>
								<h2 className='custom-text-primary'>About the Author</h2>
								<Card className='mt-10'>
									<div className='blog__details-author'>
										{/* <Avatar /> */}
										<div className='blog__details-author-info'>
											<h3 className='custom-text-primary'>
												{details.author_name}
											</h3>
											<p>{details.author_title}</p>
											<p className='blog__details-author-description'>
												{details.author_des}
											</p>
										</div>
									</div>
								</Card>
							</div>
						) : null}

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
						{/* {realted.map((item, index) => (
							<BlogMiniCard key={index} item={item}  />
						))} */}
						<h2>Our Job Guaranteed Programs</h2>
						<div className='blogs__details-advertise-blogs'>
							<Card className='blogs__details-advertise-blog'>
								<h3 className='mb-3 text-white'>
									Specialization in Data Science for IT
								</h3>
								<Button>
									<a
										href='/programs/specialization-in-data-science-for-it'
										target='_blank'
										rel='noreferrer'
									>
										Learn More
									</a>
								</Button>
							</Card>
							<Card className='blogs__details-advertise-blog'>
								<h3 className='mb-3 text-white'>
									Specialization in Data Science for Finance
								</h3>
								<Button>
									<a
										href='/programs/specialization-in-data-science-for-finance'
										target='_blank'
										rel='noreferrer'
									>
										Learn More
									</a>
								</Button>
							</Card>
							<Card className='blogs__details-advertise-blog'>
								<h3 className='mb-3 text-white'>Deep Learning</h3>
								<Button>
									<a
										href='/programs/deep-learning'
										target='_blank'
										rel='noreferrer'
									>
										Learn More
									</a>
								</Button>
							</Card>
							<Card className='blogs__details-advertise-blog'>
								<h3 className='mb-3 text-white'>Machine Learning with Python</h3>
								<Button>
									<a
										href='/programs/machine-learning-with-python'
										target='_blank'
										rel='noreferrer'
									>
										Learn More
									</a>
								</Button>
							</Card>
							<Card className='blogs__details-advertise-blog'>
								<h3 className='mb-3 text-white'>Data Analytics</h3>
								<Button>
									<a
										href='/programs/data-analytics'
										target='_blank'
										rel='noreferrer'
									>
										Learn More
									</a>
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
