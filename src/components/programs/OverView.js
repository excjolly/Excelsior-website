import { Collapse } from "antd";
import React from "react";

function OverView({ OverView }) {
  const { Panel } = Collapse;
  return (
    <div className="mt-5">
      <h3 className="overview_heading">Overview Of the Course</h3>
      <p className="overview_text mt-2">{OverView.Description}</p>
      <p>
        {" "}
        <b>
          <strong> Know more about the Course</strong>
        </b>
      </p>
      <Collapse accordion expandIconPosition="right">
        {OverView.DropDownQuestion.map((e, index) => (
          <Panel header={e.Question} key={index}>
            {console.log(e)}
            <p>{e.Answer}</p>
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
