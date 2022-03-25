import React, { useState } from "react";
import { Avatar } from "antd";
import {
    FileOutlined,
    StockOutlined,
    MessageOutlined,
    SearchOutlined,
    LockOutlined,
    BulbOutlined,
    BellOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import images from "../../assets/images";
import SidebarMenu from "./SidebarMenu";

const Navbar = () => {
    const isSmallerDevice = useMediaQuery({ query: "(max-width: 940px)" });
    const [isSidebarMenuVisible, setIsSidebarMenuVisible] = useState(false);

    return (
        <nav className="navbar__container">
            {isSmallerDevice && (
                <SidebarMenu
                    visible={isSidebarMenuVisible}
                    onClose={() => setIsSidebarMenuVisible(false)}
                />
            )}

            <Link to="/home" className="navbar__brand">
                <img
                    className="navbar__brand-logo"
                    src={images.logo}
                    alt="logo"
                />
            </Link>
            <div className="navbar__items">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "navbar__link active" : "navbar__link"
                    }
                    to="/blogs"
                >
                    <div>
                        <FileOutlined />
                        Blogs
                    </div>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "navbar__link active" : "navbar__link"
                    }
                    to="/programs"
                >
                    <div>
                        <UserOutlined />
                        Programs
                    </div>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "navbar__link active" : "navbar__link"
                    }
                    to="/scholarship"
                >
                    <div>
                        <FileOutlined />
                        Scholarship
                    </div>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "navbar__link active" : "navbar__link"
                    }
                    to="/videos"
                >
                    <div>
                        <FileOutlined />
                        Videos
                    </div>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "navbar__link active" : "navbar__link"
                    }
                    to="/contact"
                >
                    <div>
                        <FileOutlined />
                        Contact
                    </div>
                </NavLink>
            </div>

            <div className="navbar__options">
                <div className="navbar__options-item">
                    <SearchOutlined />
                </div>
                <div className="navbar__options-item">
                    <LockOutlined />
                </div>
                <div className="navbar__options-item">
                    <BulbOutlined />
                </div>
                <div className="navbar__options-item">
                    <BellOutlined />
                </div>
                <div className="navbar__options-profile">
                    <p>Panayappan</p>
                    <Avatar style={{ marginLeft: 5 }} src={images.computer} />
                </div>
            </div>

            <div
                onClick={() => setIsSidebarMenuVisible(true)}
                className="navbar__mobile-toggle"
            >
                <MenuUnfoldOutlined
                    style={{
                        fontSize: 26,
                        color: "#fff",
                    }}
                />
            </div>
        </nav>
    );
};

export default Navbar;
