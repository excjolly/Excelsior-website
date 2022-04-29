import React from "react";
import images from "../../../assets/images";

const BlogMiniCard = () => {
    return (
        <div className="blogs__must-read-card">
            <img src={images.food} alt="food" />
            <div className="blogs__must-read-card_content">
                <p>A Complete Guide to Mix Dough for Cake</p>
            </div>
        </div>
    );
};

export default BlogMiniCard;
