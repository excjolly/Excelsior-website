import { BugFilled, BulbFilled, CloudFilled, CodeFilled } from '@ant-design/icons';
import { Menu } from 'antd';
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
					<div className='col col-lg-4 col-sm-12 px-0'>
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
					</div>
					<div
						className='col col-lg-8 col-sm-12 d-flex p-0'
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default LearningExperience;
