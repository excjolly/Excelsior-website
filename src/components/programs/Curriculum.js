import { PhoneFilled } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import { Form, Input, Button } from "antd";
import { Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Collapse } from "antd";

// import { LockOutlined, UserOutlined } from "@ant-design/icons";

function Curriculum({ Curriculum }) {
  const { Panel } = Collapse;
  console.log(Curriculum)
  return (
    <div className="mt-5">
      <h2 className="curriculum_heading">Curriculum</h2>

      <div className="row mt-3">
        <div className="col col-lg-8 col-sm-12">
          <p>{Curriculum.Description}</p>
          <Collapse accordion expandIconPosition="right">
             {Curriculum.CurriculumData.map((e, i) => (
              <Panel header={e.title} key={i}>
                <ul>
                  {e.Data.map((a) => (
                    <li>{a}</li>
                  ))}
                </ul>
              </Panel>
            ))}
          </Collapse>
        </div>
        <div className="contact_us col col-lg-4 col-sm-12">
          <Card className="p-2">
            <div className="row">
              <div className="col col-lg-8">
                <small> Contact us</small>
                <h6>
                  {" "}
                  <strong>+91 7070707070</strong>{" "}
                </h6>
              </div>
              <PhoneFilled style={{ fontSize: "30px" }} />
            </div>
          </Card>
          <Card
            title="Know More About the Scholarships and Offers"
            className="mt-5"
          >
            <Form
              //   form={form}
              name="horizontal_login"
              layout="outline"
              //   onFinish={onFinish}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your Name!" }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input type="text" placeholder="Email Address " />
              </Form.Item>
              <Form.Item
                name="phonenumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input type="number" placeholder="Phone Number " />
              </Form.Item>
              <Form.Item>
                <Radio.Group
                // onChange={onChange}
                // value={value }
                >
                  <Radio value={"Myself"}>Myself</Radio>
                  <Radio value={"My Company"}>My Company</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item>
                <TextArea placeholder="textarea with clear icon" allowClear />
              </Form.Item>

              <Form.Item shouldUpdate>
                {() => (
                  <Button
                    type="primary"
                    htmlType="submit"
                    // disabled={
                    // //   !form.isFieldsTouched(true) ||
                    // //   !!form.getFieldsError().filter(({ errors }) => errors.length).length
                    // }
                  >
                    Submit
                  </Button>
                )}
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
