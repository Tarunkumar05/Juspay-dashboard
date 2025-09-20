import Sider from "antd/es/layout/Sider";
import { DashboardOutlined, ProjectOutlined } from "@ant-design/icons";

import { Dropdown, Menu, Typography } from "antd";
import React from "react";
import "./MainSider.scss";
import CustomIcons from "../CustomIcons/CustomIcons";
import "../../styles/themes/_light.scss";

const { Text } = Typography;

interface MainSiderProps {
  collapsed: boolean;
}

const favoritesItems = [
  {
    key: "overview",
    icon: <DashboardOutlined />,
    label: "Overview",
  },
  {
    key: "projects",
    icon: <ProjectOutlined />,
    label: "Projects",
  },
];

const dashboardItems = [
  {
    key: "default",
    icon: <CustomIcons.Default width={20} height={20} />,
    label: "Default",
  },
  {
    key: "ecommerce",
    icon: <CustomIcons.ShoppingBag width={20} height={20} />,
    label: "eCommerce",
  },
  {
    key: "projects-dashboard",
    icon: <CustomIcons.Projects width={20} height={20} />,
    label: "Projects",
  },
  {
    key: "online-courses",
    icon: <CustomIcons.BookOpen width={20} height={20} />,
    label: "Online Courses",
  },
];

const pagesItems = [
  {
    key: "user-profile",
    icon: <CustomIcons.UserProfile width={20} height={20} />,
    label: "User Profile",
    children: [
      { key: "profile-overview", label: "Overview" },
      { key: "profile-projects", label: "Projects" },
      { key: "profile-campaigns", label: "Campaigns" },
      { key: "profile-documents", label: "Documents" },
      { key: "profile-followers", label: "Followers" },
    ],
  },
  {
    key: "account",
    icon: <CustomIcons.Account width={20} height={20} />,
    label: "Account",
  },
  {
    key: "corporate",
    icon: <CustomIcons.Corporate width={20} height={20} />,
    label: "Corporate",
  },
  {
    key: "blog",
    icon: <CustomIcons.Blog width={20} height={20} />,
    label: "Blog",
  },
  {
    key: "social",
    icon: <CustomIcons.Social width={20} height={20} />,
    label: "Social",
  },
];

// Combine all menu items for collapsed state
const allMenuItems = [...favoritesItems, ...dashboardItems, ...pagesItems];

const MainSider: React.FC<MainSiderProps> = ({ collapsed }) => {
  const userMenu = {
    items: [
      { key: "1", label: "Profile" },
      { key: "2", label: "Settings" },
      { key: "3", label: "Logout" },
    ],
  };
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="main-sider"
      width={212}
      theme="light"
    >
      <div className="main-sider__header">
        <div className="main-sider__avatar">
          <Dropdown menu={userMenu} placement="bottomRight">
            <CustomIcons.Profile width={20} height={20} />
          </Dropdown>
        </div>
        {!collapsed && (
          <Text strong className="main-sider__title">
            ByeWind
          </Text>
        )}
      </div>

      <div className="main-sider__content">
        {collapsed ? (
          // When collapsed, show all items in a single menu
          <Menu
            mode="inline"
            defaultSelectedKeys={["default"]}
            defaultOpenKeys={["user-profile"]}
            items={allMenuItems}
            className="main-sider__menu"
            inlineCollapsed={collapsed}
          />
        ) : (
          // When expanded, show sections with titles
          <>
            <div className="main-sider__section">
              <div className="main-sider__section-title">
                <Text type="secondary">Favorites</Text>
              </div>
              <Menu
                mode="inline"
                items={favoritesItems}
                className="main-sider__menu"
              />
            </div>

            <div className="main-sider__section">
              <div className="main-sider__section-title">
                <Text type="secondary">Recently</Text>
              </div>
            </div>

            <div className="main-sider__section">
              <div className="main-sider__section-title">
                <Text type="secondary">Dashboards</Text>
              </div>
              <Menu
                mode="inline"
                defaultSelectedKeys={["default"]}
                items={dashboardItems}
                className="main-sider__menu"
              />
            </div>

            <div className="main-sider__section">
              <div className="main-sider__section-title">
                <Text type="secondary">Pages</Text>
              </div>
              <Menu
                mode="inline"
                defaultOpenKeys={["user-profile"]}
                items={pagesItems}
                className="main-sider__menu"
              />
            </div>
          </>
        )}
      </div>
    </Sider>
  );
};

export default MainSider;
