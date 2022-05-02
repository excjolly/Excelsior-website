import React from "react";
import { Card } from "antd";
import { LikeOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import images from "../../../assets/images";

const { Meta } = Card;

const BlogCard = ({title,description}) => {
    const navigate = useNavigate();

    return (
        <Card
            onClick={() => navigate("/blog-details")}
            className="blogs__blog-card"
            hoverable
            cover={
                <img
                    alt="food"
                    src={images.food}
                    className="blogs__blog-card-image"
                />
            }
        >
            <Meta title={title} />
            <p>{description}</p>
        </Card>
    );
};

export default BlogCard;
