import { Card, Carousel, Col, Image, Row } from 'antd';
import React from 'react';

function Projects({ projectsData }) {
	let firstRow = projectsData.map((e) => e.firstRow);
	let secondRow = projectsData.map((e) => e.secondRow);
	let singleRow = [firstRow[0], secondRow[0], firstRow[1], secondRow[1]];

	return (
		<div className='container mb-5'>
			<h3 className='admission_heading'> Projects </h3>
			<Carousel className='d-lg-jsjs' dotPosition='bottom'>
				{projectsData.map((e) => (
					<div className='mb-4'>
						<Row gutter={[20, 30]}>
							<Col lg={12}>
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
							<Col lg={12}>
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
			<Carousel className='d-sm-jsjs'>
				{singleRow.map((e) => (
					<>
						<Card>
							<div className='d-flex flex-column'>
								<div className='project_header'>
									<header>
										<b>{e.title}</b>
									</header>
								</div>
								<div className='order-lg-2 p-2'>
									<p>{e.description}</p>
								</div>
							</div>
						</Card>
					</>
				))}
			</Carousel>
		</div>
	);
}

export default Projects;
