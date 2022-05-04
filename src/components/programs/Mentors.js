import { RightCircleOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import React, { Fragment } from 'react';

function Mentors({ mentorsData }) {
	return (
		<div>
			<h3 className='admission_heading'>Mentors</h3>
			<div className='row'>
				{mentorsData.map((e, i) => (
					<Fragment key={i}>
						<div className='col col-lg-3 col-md-3 col-sm-12'>
							<Card hoverable className='h-100'>
								<div className='mb-n5 card-body'>
									<div className='d-flex align-items-center flex-column'>
										<div className='mb-3 d-flex align-items-center flex-column'>
											<div className='sw-13 position-relative mb-3'>
												<img
													className='img-fluid rounded-xl'
													alt='ak'
													src={e.imageURL}
												/>
											</div>
											<div className='h5 mb-0 text-center'>{e.name}</div>
											<div className='text-muted '>{e.areaOfExpert}</div>
											<div className='text-muted'>
												<RightCircleOutlined />
												<span className='align-middle'>{e.location}</span>
											</div>
										</div>
										<div className='d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100'>
											<Button type='primary'>Hire</Button>
											<Button type='primary'>Follow</Button>
										</div>
									</div>
								</div>
							</Card>
						</div>
					</Fragment>
				))}
			</div>
		</div>
	);
}

export default Mentors;
