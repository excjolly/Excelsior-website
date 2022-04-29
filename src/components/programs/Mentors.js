import { RightCircleOutlined, UpCircleOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React from "react";
import { Helmet } from "react-helmet";

function Mentors({ MentorsData }) {
  return (
    <div>
      <h3 className="admission_heading"> Mentors </h3>
      <div className="row">
        {MentorsData.map((e) => (
          <>
            <div className="col col-lg-3 col-md-3 col-sm-12">
              <Card hoverable>
                <div className="mb-n5 card-body">
                  <div className="d-flex align-items-center flex-column mb-5">
                    <div className="mb-3 d-flex align-items-center flex-column">
                      <div className="sw-13 position-relative mb-3">
                        <img
                          className="img-fluid rounded-xl"
                          alt="ak"
                          src={e.Image_URL}
                        />
                      </div>
                      <div className="h5 mb-0 text-center">{e.Name}</div>
                      <div className="text-muted ">{e.AreaOfExpert}</div>
                      <div className="text-muted">
                        <RightCircleOutlined />
                        <span className="align-middle">{e.Location}</span>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100">
                      <Button type="primary">Hire</Button>
                      <Button type="primary">Follow</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Mentors;
