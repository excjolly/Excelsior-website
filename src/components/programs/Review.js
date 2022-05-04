import { Card, Carousel, Col, Rate, Row } from 'antd';
import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return <FiChevronLeft className={className} style={{ ...style }} onClick={onClick} />;
}

function NextArrow(props) {
	const { className, style, onClick } = props;
	return <FiChevronRight className={className} style={{ ...style }} onClick={onClick} />;
}

function Review({ reviews }) {
	return (
		<div className='container mb-4'>
			<h3 className='admission_heading'> Reviews </h3>

			<Carousel
				className='d-lg-jsjs'
				dots={false}
				autoplay={false}
				arrows={true}
				prevArrow={<PrevArrow />}
				nextArrow={<NextArrow />}
			>
				{reviews.map(({ firstRow, secondRow }, index) => {
					return (
						<div key={index}>
							<Row gutter={[20, 30]}>
								<Col lg={12}>
									<Card>
										<Row gutter={[20, 30]}>
											<Col lg={4}>
												<img
													className='img-fluid rounded-xl'
													alt='ak'
													src={firstRow.imageURL}
												/>
											</Col>
											<Col lg={16}>
												<div className='d-flex flex-column justify-content-around'>
													<div>{firstRow.name}</div>
													<div>
														<Rate disabled defaultValue={firstRow.rating} />
													</div>
												</div>
											</Col>
										</Row>
										<div className='p-2'>
											<p>{firstRow.description}</p>
										</div>
									</Card>
								</Col>
								<Col lg={12}>
									<Card>
										<Row gutter={[20, 30]}>
											<Col lg={4}>
												<img
													className='img-fluid rounded-xl'
													alt='ak'
													src={secondRow.imageURL}
												/>
											</Col>
											<Col lg={16}>
												<div className='d-flex flex-column justify-content-around'>
													<div>{secondRow.name}</div>
													<div>
														<Rate
															disabled
															defaultValue={secondRow.rating}
														/>
													</div>
												</div>
											</Col>
										</Row>
										<div className='p-2'>
											<p>{secondRow.description}</p>
										</div>
									</Card>
								</Col>
							</Row>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
}

export default Review;
