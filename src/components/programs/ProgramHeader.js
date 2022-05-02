import { Col, Rate, Row } from 'antd';
import React from 'react';

function ProgramHeader({ programData }) {
	return (
		<div className='banner'>
			<div className='container'>
				<div className='left'>
					<h1 className='admission_heading'>{programData.NameOfProgram}</h1>
					<div className='rating'>
						{programData.Rating} <Rate disabled defaultValue={programData.Rating} />
					</div>
					<Row>
						<Col lg={12}>
							<p>{programData.Description}</p>
						</Col>
					</Row>
					<button className='enroll_button' onClick={() => console.log('enroll')}>
						Enroll Now
					</button>
				</div>
				<div className='right'></div>
			</div>
		</div>
	);
}

export default ProgramHeader;
