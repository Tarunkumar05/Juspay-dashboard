import Sider from "antd/es/layout/Sider";

import { Dropdown, Menu, Typography } from "antd";
import React from "react";
import "./MainSider.scss";
import CustomIcons from "../CustomIcons/CustomIcons";
import "../../styles/themes/_light.scss";
import { useTheme } from "../../contexts/ThemeContext";

const { Text } = Typography;


interface MainSiderProps {
  collapsed: boolean;
}

const favoritesItems = [
  {
    key: "overview",
    label: "• Overview",
  },
  {
    key: "projects",
    label: "• Projects",
  },
];



// Combine all menu items for collapsed state


const MainSider: React.FC<MainSiderProps> = ({ collapsed }) => {

  const { theme } = useTheme();
  const userMenu = {
    items: [
      { key: "1", label: "Profile" },
      { key: "2", label: "Settings" },
      { key: "3", label: "Logout" },
    ],
  };

  const dashboardItems = [
    {
      key: "default",
      icon:
        theme === "dark" ? (
          <CustomIcons.DarkDefault />
        ) : (
          <CustomIcons.Default />
        ),
      label: "Default",
    },
    {
      key: "ecommerce",
      icon:
        theme === "dark" ? (
          <CustomIcons.DarkShoppingBag />
        ) : (
          <CustomIcons.ShoppingBag />
        ),
      label: "eCommerce",
    },
    {
      key: "projects-dashboard",
      icon:
        theme === "dark" ? (
          <CustomIcons.DarkProjects />
        ) : (
          <CustomIcons.Projects />
        ),
      label: "Projects",
    },
    {
      key: "online-courses",
      icon:
        theme === "dark" ? (
          <CustomIcons.DarkBookOpen />
        ) : (
          <CustomIcons.BookOpen />
        ),
      label: "Online Courses",
    },
  ];

  const pagesItems = [
  {
    key: "user-profile",
    icon: theme === "dark" ? <CustomIcons.DarkUserProfile /> : <CustomIcons.UserProfile />, 
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
    icon: theme === "dark" ? <CustomIcons.DarkAcoount /> : <CustomIcons.Account />,
    label: "Account",
    children: [
      { key: "Account-option-1", label: "Account-1" },
      { key: "Account-option21", label: "Account-2" },
    ],
  },
  {
    key: "corporate",
    icon: theme === "dark" ? <CustomIcons.DarkCorporate /> : <CustomIcons.Corporate />,
    label: "Corporate",
    children: [
      { key: "Corporate-option-1", label: "Corporate-1" },
      { key: "Corporate-option21", label: "Corporate-2" },
    ],
  },
  {
    key: "blog",
    icon: theme === "dark" ? <CustomIcons.DarkBlog /> : <CustomIcons.Blog />,
    label: "Blog",
    children: [
      { key: "Blog-option-1", label: "Blog-1" },
      { key: "Blog-option21", label: "Blog-2" },
    ],
  },
  {
    key: "social",
    icon: theme === "dark" ? <CustomIcons.DarkSocial /> : <CustomIcons.Social />,
    label: "Social",
    children: [
      { key: "Social-option-1", label: "Social-1" },
      { key: "Social-option21", label: "Social-2" },
    ],
  },
];


  const allMenuItems = [...favoritesItems, ...dashboardItems, ...pagesItems];
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
            <CustomIcons.Profile />
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
                <Text type="secondary">Recently</Text>
              </div>
              <Menu
                mode="inline"
                items={favoritesItems}
                className="main-sider__menu"
              />
            </div>

            <div className="main-sider__section">
              <div className="main-sider__section-title">
                <Text type="secondary">Dashboards</Text>
              </div>
              <Menu
                mode="inline"
                // defaultSelectedKeys={["default"]}
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
