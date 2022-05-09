import React from 'react';
import { Col, Rate, Row } from 'antd';

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
							<h3 style={{ color: '#fff', lineHeight: '1.5' }}>
								{programData.description}
							</h3>
						</Col>
					</Row>
					<a
						href='../../assets/Brochure/Excelsior Brochure.pdf'
						download
						className='enroll_button mt-3 py-2'
					>
						Download Excelsior's Report Card
					</a>
				</div>
				<div className='right'></div>
			</div>
		</div>
	);
}

export default ProgramHeader;
