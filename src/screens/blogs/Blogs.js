import React, { useState } from "react";
import { Row, Col, Card, Form, Input, Button, Modal } from "antd";
import {
    LikeOutlined,
    ClockCircleOutlined,
    RightOutlined,
    FacebookOutlined,
    LinkedinOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images";
import BlogCard from "./components/BlogCard";
import BlogMiniCard from "./components/BlogMiniCard";

const { Meta } = Card;

const Blogs = () => {
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const BlogDetail = () => {
        return (
            <Modal
                title="Blog Detail"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                centered
                width={"80%"}
                footer={null}
            >
                <div className="blog-detail-container">
                    <img
                        className="blog-detail__image"
                        src={images.food}
                        alt="food"
                    />
                    <div className="blog-detail-content section">
                        <h2>Carrot Cake Gingerbread</h2>
                        <p style={{ marginTop: 10 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Explicabo dolore minus, repellendus non ex
                            earum assumenda voluptate quidem blanditiis ut
                            sapiente suscipit quo error quaerat expedita rerum,
                            fugit, veritatis dolorem ad deleniti reiciendis unde
                            facilis. Labore amet at provident distinctio,
                            placeat quaerat voluptates sunt cupiditate! Itaque,
                            vero hic, maiores reprehenderit officiis corrupti
                            voluptate iusto laborum cum amet tempora. Id quo
                            distinctio aliquam odio et, temporibus debitis in
                            mollitia. Omnis maiores eius itaque tempore,
                            reprehenderit iste incidunt veritatis consequuntur
                            maxime veniam laudantium labore inventore quo quia?
                            Mollitia, perspiciatis repudiandae itaque repellat
                            ipsam ratione reiciendis enim minima et natus quidem
                            voluptate suscipit!
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos pariatur enim eum, accusamus
                            doloremque repudiandae incidunt tenetur! Unde illum
                            sint beatae consectetur illo fuga nostrum vero
                            corrupti impedit non aspernatur ipsam porro, nihil
                            nulla repudiandae expedita cupiditate voluptate amet
                            vitae sequi accusamus officia! Voluptates ut
                            laboriosam impedit veniam est nobis error assumenda
                            maxime, nihil laborum nulla necessitatibus, atque
                            blanditiis voluptatem sed et earum esse illo ipsum
                            aspernatur adipisci eum? Tenetur laudantium harum
                            rem qui perferendis esse non ea iste numquam quaerat
                            suscipit, nam accusantium blanditiis. Voluptatum
                            vitae quasi molestias nostrum totam facere minus
                            quae reprehenderit, deserunt porro quisquam
                            dignissimos. Quas?
                        </p>
                        <div className="blog-detail-footer">
                            <div style={{ display: "flex", gap: "12px" }}>
                                <span>
                                    <LikeOutlined
                                        style={{
                                            color: "#F35D5D",
                                            marginRight: 5,
                                        }}
                                    />
                                    369
                                </span>
                                <span>
                                    <ClockCircleOutlined
                                        style={{
                                            color: "#F35D5D",
                                            marginRight: 5,
                                        }}
                                    />
                                    369
                                </span>
                            </div>
                            <div style={{ display: "flex", gap: "12px" }}>
                                <FacebookOutlined
                                    style={{
                                        color: "#F35D5D",
                                        fontSize: 20,
                                    }}
                                />
                                <LinkedinOutlined
                                    style={{
                                        color: "#F35D5D",
                                        fontSize: 20,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    };

    return (
        <div className="blogs__container section-container">
            <BlogDetail />
            <h2>Blogs</h2>
            <Row
                gutter={[20, 30]}
                style={{
                    marginTop: 20,
                }}
            >
                <Col xs={24} sm={24} md={24} lg={18}>
                    <Row gutter={[20, 30]}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                            <Col xs={24} sm={24} md={12} lg={8} key={index}>
                                <BlogCard />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6}>
                    <Card className="blogs__mail-list">
                        <h3>Ready to make bread?</h3>
                        <h3 className="text-primary">Join our email list!</h3>
                        <p className="mv-10">
                            Cheesecake chocolate carrot cake pie lollipop lemon
                            drops.
                        </p>
                        <Form layout="vertical">
                            <Form.Item>
                                <Input placeholder="E-mail" type="email" />
                            </Form.Item>
                            <Button type="primary" icon={<RightOutlined />}>
                                Join Now
                            </Button>
                        </Form>
                    </Card>

                    <div className="blogs__must-read section">
                        <h4 className="text-primary">Must Read</h4>
                        {[1, 2, 3].map((item, index) => (
                            <BlogMiniCard key={index} />
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Blogs;
