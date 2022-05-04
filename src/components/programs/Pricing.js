import { Card } from 'antd';
import React, { Fragment } from 'react';

function Pricing({ pricing }) {
	return (
		<div className='mt-5 mb-5'>
			<h3 className='fee_heading'>Fee</h3>
			<div className='row-cols-1 row-cols-lg-3 g-2 row'>
				{pricing.map((e, i) => (
					<div className='col' key={i}>
						<Card className='h-100 hover-scale-up '>
							<div className='pb-0 card-body'>
								<div className='d-flex flex-column align-items-center mb-4'>
									<div className='cta-4 text-primary text-center mb-1'>
										<h5>
											<b>{e.typeOfPayment}</b>
										</h5>
									</div>
								</div>
								{e.question.map((a, index) => (
									<Fragment key={index}>
										<h6>
											<b>{a.name}</b>
										</h6>
										<p className='text-alternate mb-4'> {a.answer}</p>
									</Fragment>
								))}
							</div>
						</Card>
					</div>
				))}
			</div>
		</div>
	);
}

export default Pricing;

{
	/* <div className="pt-0">
<div className="mb-4">
  <div className="g-0 mb-2 row">
    <div className="col-auto">
      <div className="sw-3 me-1">
        <UserOutlined />
      </div>
    </div>
  </div>
  <div className="g-0 mb-2 row">
    <div className="col-auto">
      <div className="sw-3 me-1">
        <UserOutlined />
      </div>
    </div>
  </div>
  <div className="g-0 mb-2 row">
    <div className="col-auto">
      <div className="sw-3 me-1">
        <UserOutlined />
      </div>
    </div>
  </div>
  <div className="g-0 mb-2 row">
    <div className="col-auto">
      <div className="sw-3 me-1">
        <UserOutlined />
      </div>
    </div>
  </div>
</div>
<div className="d-flex justify-content-center">
  <Button>Purchase</Button>
</div>
</div> */
}
