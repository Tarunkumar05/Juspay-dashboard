// components/Navbar/Navbar.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Button, Avatar, Dropdown, Typography, Input } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  BugOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CustomIcons from "../CustomIcons/CustomIcons";
import { useTheme } from "../../contexts/ThemeContext";

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
  leftCollapsed,
  rightCollapsed,
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
        icon: <BugOutlined style={{ color: "#ff4d4f" }} />,
      },
      {
        key: "2",
        label: "New user registered",
        icon: <UserOutlined style={{ color: "#52c41a" }} />,
      },
      {
        key: "3",
        label: "Andi Lane subscribed to you",
        icon: <UserOutlined style={{ color: "#1890ff" }} />,
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
      style={{
        background: theme === "dark" ? "var(--color-bg-primary)" : "#fff",
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow:
          theme === "dark" ? "var(--shadow-md)" : "0 2px 6px rgba(0,21,41,.08)",
        zIndex: 1000,
        borderBottom: `1px solid ${
          theme === "dark" ? "var(--color-border-secondary)" : "#f0f0f0"
        }`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Button
          type="text"
          icon={leftCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onLeftToggle}
          style={{
            color: theme === "dark" ? "var(--color-text-primary)" : undefined,
          }}
        />
        {theme === "dark" ? <CustomIcons.LightStar/> : <CustomIcons.DarkStar/>}

        <Title
          level={4}
          style={{
            margin: 0,
            color: theme === "dark" ? "var(--color-text-primary)" : undefined,
          }}
        >
          {getPageTitle()}
        </Title>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Search
          placeholder="Search"
          style={{ width: 200 }}
          prefix={<SearchOutlined />}
        />

        {/* Theme Toggle - Show Sun icon in dark mode, Moon icon in light mode */}
        {theme === "dark" ? (
          <CustomIcons.Moon
            width={24}
            height={24}
            style={{ cursor: "pointer" }}
            onClick={handleThemeToggle}
          />
        ) : (
          <CustomIcons.Sun
            width={24}
            height={24}
            style={{ cursor: "pointer" }}
            onClick={handleThemeToggle}
          />
        )}

        {theme === "dark" ? (
          <CustomIcons.LightClock
            width={24}
            height={24}
            style={{
              cursor: "pointer",
            }}
            onClick={handleClockClick}
          />
        ) : (
          <CustomIcons.Clock
            width={24}
            height={24}
            style={{
              cursor: "pointer",
            }}
            onClick={handleClockClick}
          />
        )}

        <Dropdown menu={notificationMenu} placement="bottomRight">
          {theme === "dark" ? (
            <CustomIcons.LightNotification
              width={24}
              height={24}
              style={{
                cursor: "pointer",
              }}
            />
          ) : (
            <CustomIcons.Notification
              width={24}
              height={24}
              style={{
                cursor: "pointer",
              }}
            />
          )}
        </Dropdown>

          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=user" />


        <CustomIcons.Toggle
          width={24}
          height={24}
          style={{
            cursor: "pointer",
            color: theme === "dark" ? "var(--color-text-primary)" : undefined,
          }}
          onClick={onRightToggle}
        />

        <Button
          type="text"
          icon={rightCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onRightToggle}
          style={{
            color: theme === "dark" ? "var(--color-text-primary)" : undefined,
          }}
        />
      </div>
    </Header>
  );
};

export default Navbar;
