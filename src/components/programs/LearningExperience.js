import { BugFilled, BulbFilled, CloudFilled, CodeFilled } from '@ant-design/icons';
import { Menu,Col } from 'antd';
import React, { useState } from 'react';

function LearningExperience({ learningExperience }) {
	const [activeKey, setActiveKey] = useState(1);

	return (
		<div className='mb-5'>
			<h3 className='admission_heading '> Career Support </h3>
			<p>
				Excelsior’s industry experts are the ultimate resource for anyone looking to
				build their profile Resume Building LinkedIn Profile Building Github Building
			</p>
			<div className='LearningExperience mt-3'>
				<div className='row m-0'>
					<Col md={8} className='px-0 w-100'>
						<Menu
							className='back d-flex flex-column justify-space-evenly h-100'
							onSelect={({ selectedKeys }) => {
								setActiveKey(parseInt(selectedKeys));
							}}
						>
							<Menu.Item key='1' className='text-center' icon={<BugFilled />}>
								Class Notifications
							</Menu.Item>
							<Menu.Item key='2' className='text-center' icon={<BulbFilled />}>
								Hackathons
							</Menu.Item>
							<Menu.Item key='3' className='text-center' icon={<CloudFilled />}>
								Career Services
							</Menu.Item>
							<Menu.Item key='4' className='text-center' icon={<CodeFilled />}>
								Major Announcements
							</Menu.Item>
						</Menu>
					</Col>
					<Col md={16}
						className='d-flex p-0'
						style={{ border: '10px solid #f35d5d' }}
					>
						{learningExperience.map(
							({ body }, index) =>
								activeKey === index + 1 && (
									<p
										className='p-3'
										style={{ backgroundColor: 'white' }}
										key={index}
									>
										{body}
									</p>
								)
						)}
					</Col>
				</div>
			</div>
		</div>
	);
}

export default LearningExperience;
