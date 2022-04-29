import React, { useState } from "react";
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
import logo from "../../assets/images/logonew.png";

const SidebarMenu = ({ visible, onClose }) => {
  const navigate = useNavigate();
  const [Current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
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
        <div className="sidebarmenu__brand mb-3">
          <img className="sidebarmenu__brand-logo" src={logo} alt="logo" />
        </div>

        <div className="sidebarmenu__options">
          <div className="navbar__options-item">
            <BulbOutlined />
          </div>
        </div>

        <div className="sidebarmenu__menu-items">
          <Menu
            defaultSelectedKeys={["home"]}
            selectedKeys={Current}
            onClick={handleClick}
          >
            <Menu.Item key="home" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="programs" icon={<UserOutlined />}>
              Programs
            </Menu.Item>
            <Menu.Item key="scholarship" icon={<FileOutlined />}>
              Scholarship
            </Menu.Item>
            <Menu.Item key="blogs" icon={<MessageOutlined />}>
              Blogs
            </Menu.Item>
            <Menu.Item key="contact" icon={<StockOutlined />}>
              Contact
            </Menu.Item>
            <Menu.Item key="aboutus" icon={<StockOutlined />}>
              About Us
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Drawer>
  );
};

export default SidebarMenu;
