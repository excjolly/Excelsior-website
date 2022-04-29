import { Card, Carousel, Col, Image, Row } from "antd";
import React from "react";

function Projects({ ProjectsData }) {
  let FirstRow  = ProjectsData.map(e =>  e.FirstRow)
  let SecondRow = ProjectsData.map(e => e.SecondRow)
  let SingleRow = [FirstRow[0], SecondRow[0] , FirstRow[1],SecondRow[1]]
  console.log(SingleRow)
  return (
    <div className="container mb-5">
      <h3 className="admission_heading"> Projects </h3>
      <Carousel className="d-lg-jsjs" dotPosition="bottom">
        {ProjectsData.map((e) => (
          <div className="mb-4">
            <Row gutter={[20, 30]}>
              <Col lg={12}>
                <Card>
                  <div className="d-flex flex-column">
                    <div className="project_header">
                      <header>
                        <b>{e.FirstRow.Title}</b>{" "}
                      </header>
                      {/* <b>Lorem Ipsum is simply dummy text of the printing </b> */}
                    </div>
                    <div className="order-lg-2 p-2">
                      {" "}
                      <p>{e.FirstRow.Description}</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col lg={12}>
                <Card>
                  <div className="d-flex flex-column">
                    <div className="project_header">
                      <header>
                        <b>{e.SecondRow.Title}</b>{" "}
                      </header>
                      {/* <b>Lorem Ipsum is simply dummy text of the printing </b> */}
                    </div>
                    <div className="order-lg-2 p-2">
                      {" "}
                      <p>{e.SecondRow.Description}</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
      <Carousel className="d-sm-jsjs">
        {SingleRow.map((e) => (
          <>
            <Card>
              <div className="d-flex flex-column">
                <div className="project_header">
                  <header>
                    {" "}
                    <b>{e.Title}</b>
                  </header>
                </div>
                <div className="order-lg-2 p-2">
                  <p>{e.Description}</p>
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
