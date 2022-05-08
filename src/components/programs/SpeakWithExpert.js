import { Button, Card, Col, Row } from 'antd';
import React from 'react';

function SpeakWithExpert() {
	return (
		<div className='mb-3'>
			<h2 className='admission_heading '>Speak With Expert</h2>
			<Row gutter={[20, 30]}>
				<Col lg={12}>
					<Card style={{ backgroundColor: '#f35d5d' }}>
						<h2 className='text-white mb-5'>
						Schedule your session with a Data Science expert
						</h2>
						<h3 className=' text-white mb-4' style={{ lineHeight: '1.5' }}>
						Talk to a real data scientist before you even think of joining the field:  We've built this platform for those who already have an understanding of the various terminologies and are looking to gain more insights through personalised interviews with real data scientists from top companies.
						</h3>
						<Row className='text-white'>
							<Button><a href="https://calendly.com/datasciencecounselling-excelsior" target="_blank" rel="noreferrer">Schedule Now</a></Button>
						</Row>
					</Card>
				</Col>
				<Col lg={12}>
					<Card style={{ backgroundColor: '#f35d5d' }}>
						<h2 className='text-white mb-5'>
							Know what's right for you and speak to a career counselor
						</h2>
						<h3 className='text-white mb-4' style={{ lineHeight: '1.5' }}>
						Get Career Advice From Industry Professionals! Take the next step and speak to an expert counselor before making a career choice . At Excelsior, we understand that students want flexibility when it comes to their education and career.
						</h3>
						<Row className='text-white'>
								<Button><a href="https://calendly.com/akash-excelsior" target="_blank" rel="noreferrer">Schedule Now</a></Button>
						</Row>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default SpeakWithExpert;
