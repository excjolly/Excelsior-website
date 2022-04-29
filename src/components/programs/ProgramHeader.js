import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Col, Rate, Row } from "antd";
import React from "react";

function ProgramHeader({ state }) {
  console.log(state);
  return (
    <div className="banner">
      <div className="container">
        <div className="left">
          <h1 className="admission_heading">{state.NameOfProgram}</h1>
          <div className="rating">
            {state.Rating} <Rate disabled defaultValue={state.Rating} />
          </div>
          <Row>
            <Col  lg={12}>
            <p >{state.Description}</p>

            </Col>

          </Row>
          <button
            className="enroll_button"
            onClick={() => console.log("enroll")}
          >
            Enroll Now
          </button>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default ProgramHeader;
