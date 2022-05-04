import { Collapse } from 'antd';
import React from 'react';

function OverView({ overview }) {
	const { Panel } = Collapse;
	return (
		<div className='mt-5'>
			<h3 className='overview_heading'>Overview Of the Course</h3>
			<p className='overview_text mt-2'>{overview.description}</p>
			<p>
				<b>
					<strong>Know more about the Course</strong>
				</b>
			</p>
			<Collapse accordion expandIconPosition='right'>
				{overview.dropdownQuestion.map((e, index) => (
					<Panel header={e.question} key={index}>
						<p>{e.answer}</p>
					</Panel>
				))}
			</Collapse>

			{/* <Dropdown className="overview_dropdown" overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Know more about the Course <DownOutlined />
        </a>
      </Dropdown> */}
			{/* <p className='overview_ans'>{ans}</p> */}
		</div>
	);
}

export default OverView;
