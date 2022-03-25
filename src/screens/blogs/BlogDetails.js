import React from "react";
import { Row, Col, Card, Avatar, Button } from "antd";
import {
    LikeOutlined,
    ClockCircleOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    RightOutlined,
} from "@ant-design/icons";
import images from "../../assets/images";
import { BlogDetails } from "..";
import BlogCard from "./components/BlogCard";
import BlogMiniCard from "./components/BlogMiniCard";

const { Meta } = Card;

const BlogDetail = () => {
    return (
        <>
            <div className="blog__details-container section-container">
                <h2>Blog Detail</h2>
                <Row gutter={[20, 30]} className="mt-20">
                    <Col xs={24} sm={24} md={24} lg={18}>
                        <div className="blog__details-container">
                            <img
                                className="blog__details__image"
                                src={images.food}
                                alt="food"
                            />
                            <div className="blog__details-content section">
                                <h2>Carrot Cake Gingerbread</h2>
                                <p style={{ marginTop: 10 }}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Explicabo dolore minus,
                                    repellendus non ex earum assumenda voluptate
                                    quidem blanditiis ut sapiente suscipit quo
                                    error quaerat expedita rerum, fugit,
                                    veritatis dolorem ad deleniti reiciendis
                                    unde facilis. Labore amet at provident
                                    distinctio, placeat quaerat voluptates sunt
                                    cupiditate! Itaque, vero hic, maiores
                                    reprehenderit officiis corrupti voluptate
                                    iusto laborum cum amet tempora. Id quo
                                    distinctio aliquam odio et, temporibus
                                    debitis in mollitia. Omnis maiores eius
                                    itaque tempore, reprehenderit iste incidunt
                                    veritatis consequuntur maxime veniam
                                    laudantium labore inventore quo quia?
                                    Mollitia, perspiciatis repudiandae itaque
                                    repellat ipsam ratione reiciendis enim
                                    minima et natus quidem voluptate suscipit!
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dignissimos pariatur enim
                                    eum, accusamus doloremque repudiandae
                                    incidunt tenetur! Unde illum sint beatae
                                    consectetur illo fuga nostrum vero corrupti
                                    impedit non aspernatur ipsam porro, nihil
                                    nulla repudiandae expedita cupiditate
                                    voluptate amet vitae sequi accusamus
                                    officia! Voluptates ut laboriosam impedit
                                    veniam est nobis error assumenda maxime,
                                    nihil laborum nulla necessitatibus, atque
                                    blanditiis voluptatem sed et earum esse illo
                                    ipsum aspernatur adipisci eum? Tenetur
                                    laudantium harum rem qui perferendis esse
                                    non ea iste numquam quaerat suscipit, nam
                                    accusantium blanditiis. Voluptatum vitae
                                    quasi molestias nostrum totam facere minus
                                    quae reprehenderit, deserunt porro quisquam
                                    dignissimos. Quas?
                                </p>
                                <div className="blog__details-footer">
                                    <div
                                        style={{ display: "flex", gap: "12px" }}
                                    >
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
                                    <div
                                        style={{ display: "flex", gap: "12px" }}
                                    >
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
                        <div className="blog__details-author-section section">
                            <h3 className="text-primary">About the Author</h3>
                            <Card className="mt-10">
                                <div className="blog__details-author">
                                    <Avatar />
                                    <div className="blog__details-author-info">
                                        <h4 className="text-primary">
                                            Olli Hawkins
                                        </h4>
                                        <p>Development Lead</p>
                                        <p className="blog__details-author-description">
                                            Cupcake chocolate cake jelly beans
                                            lemon drops danish bear claw carrot
                                            cake soufflé. Marshmallow jujubes
                                            tiramisu apple pie carrot cake
                                            danish candy. Croissant croissant
                                            chocolate bar. Jelly macaroon apple
                                            pie croissant pastry cheesecake.
                                            Marshmallow oat cake lemon drops
                                            chocolate bonbon
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="blog__details-also-like section">
                            <h4 className="text-primary">You May Also Like</h4>
                            <Row gutter={[20, 30]} className="mt-10">
                                {[1, 2, 3].map((item, index) => (
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={8}
                                        lg={8}
                                        key={index}
                                    >
                                        <BlogCard />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6}>
                        {[1, 2, 3, 4].map((item, index) => (
                            <BlogMiniCard key={index} />
                        ))}
                        <div className="blogs__details-advertise-blogs">
                            <Card className="blogs__details-advertise-blog">
                                <h3>Introduction to Bread Making</h3>
                                <Button
                                    type="primary"
                                    icon={<RightOutlined />}
                                    style={{ marginTop: 20 }}
                                >
                                    View
                                </Button>
                            </Card>
                            <Card className="blogs__details-advertise-blog">
                                <h3>Introduction to Bread Making</h3>
                                <Button
                                    type="primary"
                                    icon={<RightOutlined />}
                                    style={{ marginTop: 20 }}
                                >
                                    View
                                </Button>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default BlogDetail;
