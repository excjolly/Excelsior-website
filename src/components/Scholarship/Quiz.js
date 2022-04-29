/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { HomeOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React from "react";
import Question from "./Question";

function Quiz() {
  return (
    <div className="container mt-5 mb-5">
      <div className="d-lg-flex d-sm-block  justify-content-between">
        <h3 className="admission_heading"> Quiz Details </h3>
        <div className="text-center">
          <Button>Start</Button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h6 className="text-muted mb-3"> Quizz</h6>
          <Card className="quizz_list">
            <img
              className="card-img-top sh-25"
              src="https://acorn-react-elearning-portal.coloredstrategies.com/img/product/small/product-1.webp"
              alt="card-image"
            />
            <div className="p-4">
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
            </div>
          </Card>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h6 className="text-muted mb-3"> Question</h6>
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />

        </div>
      </div>
    </div>
  );
}

export default Quiz;
