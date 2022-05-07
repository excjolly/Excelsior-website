import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment'
import { useNavigate, useLocation } from 'react-router-dom';
function Blogs() {
	const navigate=useNavigate()
	const [Data,setData]=useState([]);
	useEffect(()=>{
		blogList()
	},[])
	const blogList=async()=>{
		let response=await axios.get('http://3.111.207.167:8000/api/bloglist');
		console.log(response.data.data);
		if(response.data.data.length>0){
		  setData(response.data.data)
		}
	}
	const BlogdetailPage=(item)=>{
		navigate("/blog-details/"+item.slug,{ state:{ blogId: item}})
	}
	return (
		<div className='mb-4'>
			<h2 className='admission_heading'>Blogs</h2>
			<div className='row'>
				{Data.map((item,index)=>(
	<div className='col col-lg-3 col-md-3 col-sm-12'>
		
	<Card className='blogs_header' onClick={()=>BlogdetailPage(item)}>
		<div className='d-flex card_blog flex-column'>
			<img
				className='img_banner'
				alt='akk'
				src={item.fullimage}
			/>
			<div className='p-3'>
				<b>{item.title}</b>
			</div>
			<div className='d-flex justify-content-between p-3'>
				<span className='text-muted'>Artcile</span>
				{/* moment('timestamp').format('MMMM Do YYYY') */}
				<span className='text-muted'>
				{moment(item.created_at).format('MMMM Do YYYY')}</span>
			</div>
		</div>
	</Card>
</div>
				))}
			
			
			</div>
		</div>
	);
}

export default Blogs;
