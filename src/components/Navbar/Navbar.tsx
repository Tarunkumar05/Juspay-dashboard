// components/Navbar/Navbar.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Dropdown, Typography, Input } from "antd";
import { SearchOutlined, BugOutlined, UserOutlined } from "@ant-design/icons";
import CustomIcons from "../CustomIcons/CustomIcons";
import { useTheme } from "../../contexts/ThemeContext";
import "./Navbar.scss";

const { Header } = Layout;
const { Title } = Typography;
const { Search } = Input;

interface NavBarProps {
  leftCollapsed: boolean;
  rightCollapsed: boolean;
  onLeftToggle: () => void;
  onRightToggle: () => void;
}

const Navbar: React.FC<NavBarProps> = ({
  onRightToggle,
  onLeftToggle,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const handleClockClick = () => {
    // Toggle between dashboard and orders page
    if (location.pathname === "/") {
      navigate("/orders");
    } else {
      navigate("/");
    }
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const notificationMenu = {
    items: [
      {
        key: "1",
        label: "You have a bug that needs...",
        icon: (
          <BugOutlined className="notification-icon notification-icon--danger" />
        ),
      },
      {
        key: "2",
        label: "New user registered",
        icon: (
          <UserOutlined className="notification-icon notification-icon--success" />
        ),
      },
      {
        key: "3",
        label: "Andi Lane subscribed to you",
        icon: (
          <UserOutlined className="notification-icon notification-icon--primary" />
        ),
      },
    ],
  };

  // Get current page title
  const getPageTitle = () => {
    if (location.pathname === "/orders") {
      return "Order List";
    }
    return "Dashboard";
  };

  return (
    <Header
      className={`navbar ${
        theme === "dark" ? "navbar--dark" : "navbar--light"
      }`}
    >
      <div className="navbar__left">
        {theme === "dark" ? (
          <CustomIcons.DarkToggle
            className="navbar__icon navbar__icon--toggle"
            onClick={onLeftToggle}
          />
        ) : (
          <CustomIcons.Toggle
            className="navbar__icon navbar__icon--toggle"
            onClick={onLeftToggle}
          />
        )}

        {theme === "dark" ? (
          <CustomIcons.LightStar />
        ) : (
          <CustomIcons.DarkStar />
        )}

        <Title level={4} className="navbar__title">
          {getPageTitle()}
        </Title>
      </div>

      <div className="navbar__right">
        <Search
          placeholder="Search"
          className="navbar__search"
          prefix={<SearchOutlined />}
        />

        {/* Theme Toggle - Show Sun icon in dark mode, Moon icon in light mode */}
        {theme === "dark" ? (
          <CustomIcons.Moon
            width={24}
            height={24}
            className="navbar__icon navbar__icon--theme"
            onClick={handleThemeToggle}
          />
        ) : (
          <CustomIcons.Sun
            width={24}
            height={24}
            className="navbar__icon navbar__icon--theme"
            onClick={handleThemeToggle}
          />
        )}

        {theme === "dark" ? (
          <CustomIcons.LightClock
            className="navbar__icon navbar__icon--clock"
            onClick={handleClockClick}
          />
        ) : (
          <CustomIcons.Clock
            className="navbar__icon navbar__icon--clock"
            onClick={handleClockClick}
          />
        )}

        <Dropdown menu={notificationMenu} placement="bottomRight">
          {theme === "dark" ? (
            <CustomIcons.LightNotification className="navbar__icon navbar__icon--notification" />
          ) : (
            <CustomIcons.Notification className="navbar__icon navbar__icon--notification" />
          )}
        </Dropdown>

        {theme === "dark" ? (
          <CustomIcons.DarkToggle
              className="navbar__icon navbar__icon--toggle"
            onClick={onRightToggle}
          />
        ) : (
          <CustomIcons.Toggle
              className="navbar__icon navbar__icon--toggle"
            onClick={onRightToggle}
          />
        )}
      </div>
    </Header>
  );
};

export default Navbar;
