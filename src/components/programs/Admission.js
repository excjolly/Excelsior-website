import { Button, Card, Col, Row, Steps } from "antd";
import React, { useState } from "react";
function Admission({ AdmissionProcedure }) {
  const [current, setCurrent] = useState(0);
  console.log(AdmissionProcedure);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const { Step } = Steps;

  return (
    <div className="mt-5 mb-5">
      <h3 className="admission_heading"> Admission Procedure</h3>
      <p className=" mb-3 admission_text">{AdmissionProcedure.Description}</p>
      <Card>
        <Steps className="mb-3" current={current}>
          {AdmissionProcedure.AdmissionStepForm.map((item) => (
            <Step className="mb-3" key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">
          {AdmissionProcedure.AdmissionStepForm[current].content}
        </div>
        <Row style={{ marginTop: 20 }} gutter={[5, 30]}>
          <Col> {current === 3 && <Button type="primary">Finish</Button>}</Col>
          <Col>
            {current < 3 && (
              <Button onClick={() => next()} type="primary">
                Next
              </Button>
            )}
          </Col>
          <Col>
            {current > 0 && (
              <Button onClick={() => prev()} type="primary">
                Previous
              </Button>
            )}
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Admission;
