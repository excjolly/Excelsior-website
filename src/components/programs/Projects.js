import { Card, Carousel, Col, Image, Row } from 'antd';
import React, { Fragment } from 'react';

function Projects({ projectsData }) {
	let firstRow = projectsData.map((e) => e.firstRow);
	let secondRow = projectsData.map((e) => e.secondRow);

	return (
		<div className='container mb-5'>
			<h3 className='admission_heading'> Projects </h3>
			<Carousel className='d-lg-jsjs' dots={false} autoplay={false}>
				{projectsData.map((e, i) => (
					<div className='mb-4' key={i}>
						<Row gutter={[20, 30]}>
							<Col lg={12} className='d-flex'>
								<Card>
									<div className='d-flex flex-column'>
										<div className='project_header'>
											<header>
												<b>{e.firstRow.title}</b>
											</header>
										</div>
										<div className='order-lg-2 p-2'>
											<p>{e.firstRow.description}</p>
										</div>
									</div>
								</Card>
							</Col>
							<Col lg={12} className='d-flex'>
								<Card>
									<div className='d-flex flex-column'>
										<div className='project_header'>
											<header>
												<b>{e.secondRow.title}</b>
											</header>
										</div>
										<div className='order-lg-2 p-2'>
											<p>{e.secondRow.description}</p>
										</div>
									</div>
								</Card>
							</Col>
						</Row>
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default Projects;
