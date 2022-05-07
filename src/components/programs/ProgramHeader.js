import React from 'react';
import { Col, Rate, Row } from 'antd';
function clickToScroll(){
	document.getElementById('helpSection').scrollIntoView({behavior: "smooth"})
}
function ProgramHeader({ programData }) {
	return (
		<div
			className='banner container'
			style={{ backgroundImage: `url('${programData.banner}')` }}
		>
			<div className='container'>
				<div className='left pl-4'>
					<h1 className='admission_heading' style={{ color: '#fff' }}>
						{programData.nameOfProgram}
					</h1>
					<div className='rating' style={{ color: '#fff' }}>
						{programData.rating} <Rate disabled defaultValue={programData.rating} />
					</div>
					<Row>
						<Col lg={12}>
							<p style={{ color: '#fff' }}>{programData.description}</p>
						</Col>
					</Row>
					<button className='enroll_button' onClick={() => clickToScroll()}>
						Enroll Now
					</button>
				</div>
				<div className='right'></div>
			</div>
		</div>
	);
}

export default ProgramHeader;
