/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { HomeOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function Scholarship() {
  const navigate = useNavigate();
  const Navigation = (e) => {
    e.preventDefault();
    navigate("/scholarship/quiz");
  };
  

  return (
    <div className="container mt-3 mb-5">
      <h3 className="admission_heading"> Quiz </h3>
      <Row gutter={[20, 30]}>
        <Col className="hover-scale-up" xs={24} sm={24} md={12} lg={8}>
          <Card
            hoverable
            cover={
              <img
                className="blogs__blog-card-image"
                src="https://acorn-react-elearning-portal.coloredstrategies.com/img/product/small/product-1.webp"
                alt="card-image"
              />
            }
          >
            <div>
              <a
                className="body-link d-block sh-6 mb-2 h5 heading lh-1-5"
                href="#"
              >
                Basic Introduction to Bread Making Techniques
              </a>
              <span className="clamp mb-3 text-muted sh-8 quizz-eww">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </span>
              <div className="g-0 align-items-center mb-1 row">
                <div className="col-auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <HomeOutlined />
                  </div>
                </div>
                <div className="ps-3 col">
                  <div className="g-0 row">
                    <div className="col">
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">
                        Time
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">
                        5 min
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="g-0 align-items-center mb-1 row">
                <div className="col-auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <HomeOutlined />
                  </div>
                </div>
                <div className="ps-3 col">
                  <div className="g-0 row">
                    <div className="col">
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">
                        Time
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">
                        5 min
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="g-0 align-items-center mb-1 row">
                <div className="col-auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <HomeOutlined />
                  </div>
                </div>
                <div className="ps-3 col">
                  <div className="g-0 row">
                    <div className="col">
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">
                        Time
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">
                        5 min
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <Button onClick={(e) => Navigation(e)}>Start</Button>
                <Button></Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Scholarship;
