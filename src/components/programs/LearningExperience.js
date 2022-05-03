import { BugFilled, BulbFilled, CloudFilled, CodeFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';

function LearningExperience({ learningExperience }) {
	return (
		<div className='mb-5'>
			<h3 className='admission_heading '> Career Support </h3>
			<p>
				Excelsior’s industry experts are the ultimate resource for anyone looking to
				build their profile Resume Building LinkedIn Profile Building Github Building
			</p>
			<div className='LearningExperience mt-3'>
				<div className='row'>
					<div className='col col-lg-4 col-sm-12'>
						<Menu
							className='back'
							style={{
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-evenly',
							}}
						>
							<Menu.Item key='1' className='text-center' icon={<BugFilled />}>
								Class Notifications
							</Menu.Item>
							<Menu.Item key='2' className='text-center' icon={<BulbFilled />}>
								Hacktons
							</Menu.Item>
							<Menu.Item key='3' className='text-center' icon={<CloudFilled />}>
								Career Services
							</Menu.Item>
							<Menu.Item key='4' className='text-center' icon={<CodeFilled />}>
								Major Announcements
							</Menu.Item>
						</Menu>
					</div>
					<div className='col col-lg-8 col-sm-12'>
						<p className='mr-4 my-4 p-2' style={{ backgroundColor: 'white' }}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of type
							and scrambled it to make a type specimen book Lorem Ipsum is simply
							dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to make a type
							specimen bookLorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's standard
							dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen bookLorem
							Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen bookLorem Ipsum is simply dummy
							text of the printing and typesetting industry. Lorem Ipsum has been
							the industry's standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to make a type
							specimen bookLorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's standard
							dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LearningExperience;
