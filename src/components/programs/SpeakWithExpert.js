import { Button, Card, Col, Row } from 'antd';
import React from 'react';

function SpeakWithExpert() {
	return (
		<div className='mb-3'>
			<h3 className='admission_heading '>Speak With Expert</h3>
			<Row gutter={[20, 30]}>
				<Col lg={12}>
					<Card style={{ backgroundColor: '#f35d5d' }}>
						<div className='text-white mb-3'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
							blanditiis illum est possimus culpa architecto adipisci. Explicabo
							modi ullam quo!"
						</div>
						<div className=' text-white mb-3'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
							blanditiis illum est possimus culpa architecto adipisci. Explicabo
							modi ullam quo!"
						</div>
						<Row className='text-white mb-3'>
							<Col lg={20}></Col>
							<Col lg={4}>
								<Button>View</Button>
							</Col>
						</Row>
					</Card>
				</Col>
				<Col lg={12}>
					<Card style={{ backgroundColor: '#f35d5d' }}>
						<div className='text-white mb-3'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
							blanditiis illum est possimus culpa architecto adipisci. Explicabo
							modi ullam quo!"
						</div>
						<div className=' text-white mb-3'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
							blanditiis illum est possimus culpa architecto adipisci. Explicabo
							modi ullam quo!"
						</div>
						<Row className='text-white mb-3'>
							<Col lg={20}></Col>
							<Col lg={4}>
								<Button>View</Button>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default SpeakWithExpert;
