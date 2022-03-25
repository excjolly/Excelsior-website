import React from "react";
import { Drawer, Avatar, Menu } from "antd";
import {
    HomeOutlined,
    UserOutlined,
    FileOutlined,
    StockOutlined,
    MessageOutlined,
    SearchOutlined,
    LockOutlined,
    BulbOutlined,
    BellOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import images from "../../assets/images";

const SidebarMenu = ({ visible, onClose }) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(e.key);
        onClose();
    };

    return (
        <Drawer
            placement="left"
            onClose={onClose}
            visible={visible}
            closable={false}
            width={280}
            className="sidebarmenu__wrapper"
        >
            <div className="sidebarmenu__container">
                <div className="sidebarmenu__brand">
                    <img
                        className="sidebarmenu__brand-logo"
                        src={images.logo}
                        alt="logo"
                    />
                </div>

                <div className="sidebarmenu__profile">
                    <Avatar size={60} />
                    <p>Panayappan</p>
                </div>

                <div className="sidebarmenu__options">
                    <div className="sidebarmenu__options-item">
                        <SearchOutlined />
                    </div>
                    <div className="sidebarmenu__options-item">
                        <LockOutlined />
                    </div>
                    <div className="sidebarmenu__options-item">
                        <BulbOutlined />
                    </div>
                    <div className="sidebarmenu__options-item">
                        <BellOutlined />
                    </div>
                </div>

                <div className="sidebarmenu__menu-items">
                    <Menu defaultSelectedKeys={["home"]} onClick={handleClick}>
                        <Menu.Item key="home" icon={<HomeOutlined />}>
                            Home
                        </Menu.Item>
                        <Menu.Item key="programs" icon={<UserOutlined />}>
                            Programs
                        </Menu.Item>
                        <Menu.Item key="scholarship" icon={<FileOutlined />}>
                            Scholarship
                        </Menu.Item>
                        <Menu.Item key="videos" icon={<StockOutlined />}>
                            Videos
                        </Menu.Item>
                        <Menu.Item key="blogs" icon={<MessageOutlined />}>
                            Blogs
                        </Menu.Item>
                        <Menu.Item key="contact" icon={<MessageOutlined />}>
                            Contact
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        </Drawer>
    );
};

export default SidebarMenu;
