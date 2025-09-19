import Sider from "antd/es/layout/Sider";
import {
  DashboardOutlined,
  UserOutlined,
  TeamOutlined,
  SettingOutlined,
  FileOutlined,
  ProjectOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';

import {
  Menu,
  Avatar,
  Typography,
} from 'antd';
import React from "react";

const { Text } = Typography;

interface MainSiderProps {
  collapsed: boolean
}

const menuItems = [
    {
      key: 'overview',
      icon: <DashboardOutlined />,
      label: 'Overview'
    },
    {
      key: 'projects',
      icon: <ProjectOutlined />,
      label: 'Projects'
    },
    {
      key: 'ecommerce',
      icon: <ShoppingOutlined />,
      label: 'eCommerce',
      children: [
        { key: 'customers', label: 'Customers' },
        { key: 'orders', label: 'Orders' },
        { key: 'products', label: 'Products' }
      ]
    },
    {
      key: 'online-courses',
      icon: <FileOutlined />,
      label: 'Online Courses'
    },
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile'
    },
    {
      key: 'account',
      icon: <SettingOutlined />,
      label: 'Account'
    },
    {
      key: 'corporate',
      icon: <TeamOutlined />,
      label: 'Corporate'
    }
  ];

const baseClass = "main-sider"



const MainSider: React.FC<MainSiderProps> = ({collapsed}) => {
  

  
  return (
      // <Sider
      //   trigger={null}
      //   collapsible
      //   collapsed={collapsed}
      //   className={baseClass}
      //   style={{
      //     background: '#fff',
      //     boxShadow: '2px 0 6px rgba(0,21,41,.08)',
      //   }}
      // >
      //   <div style={{ 
      //     padding: '16px', 
      //     borderBottom: '1px solid #f0f0f0',
      //     display: 'flex',
      //     alignItems: 'center',
      //     gap: '8px'
      //   }}>
      //     <Avatar style={{ backgroundColor: '#1890ff' }}>BW</Avatar>
      //     {!collapsed && <Text strong>ByeWind</Text>}
      //   </div>
        
      //   <div style={{ padding: '8px 0' }}>
      //     {!collapsed && (
      //       <div style={{ padding: '0 16px', marginBottom: '8px' }}>
      //         <Text type="secondary" style={{ fontSize: '12px' }}>Favorites</Text>
      //       </div>
      //     )}
          
      //     <Menu
      //       mode="inline"
      //       defaultSelectedKeys={['overview']}
      //       items={leftMenuItems}
      //       style={{ border: 'none' }}
      //     />
          
      //     {!collapsed && (
      //       <>
      //         <div style={{ padding: '16px', marginTop: '16px' }}>
      //           <Text type="secondary" style={{ fontSize: '12px' }}>Dashboards</Text>
      //         </div>
      //         <div style={{ padding: '16px' }}>
      //           <Text type="secondary" style={{ fontSize: '12px' }}>Pages</Text>
      //         </div>
      //       </>
      //     )}
      //   </div>
      // </Sider>

       <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={baseClass}
        width={240}
        theme="light"
        style={{
          borderRight: '1px solid #f0f0f0'
        }}
      >
        <div style={{ 
          padding: '20px', 
          borderBottom: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <Avatar size={32} style={{ backgroundColor: '#1890ff' }}>
            BW
          </Avatar>
          {!collapsed && <Text strong>ByeWind</Text>}
        </div>
        
        <div style={{ padding: '16px 0' }}>
          {!collapsed && (
            <>
              <div style={{ padding: '0 16px 16px' }}>
                <Text type="secondary" style={{ fontSize: '12px' }}>Favorites</Text>
              </div>
              <div style={{ padding: '0 16px 16px' }}>
                <Text type="secondary" style={{ fontSize: '12px' }}>Recently</Text>
              </div>
            </>
          )}
          
          <Menu
            mode="inline"
            defaultSelectedKeys={['ecommerce']}
            defaultOpenKeys={['ecommerce']}
            items={menuItems}
            style={{ border: 'none' }}
          />
          
          {!collapsed && (
            <div style={{ padding: '16px' }}>
              <Text type="secondary" style={{ fontSize: '12px' }}>Pages</Text>
              <Menu
                mode="inline"
                style={{ border: 'none', marginTop: '8px' }}
                items={[
                  { key: 'user-profile', icon: <UserOutlined />, label: 'User Profile' },
                  { key: 'account', icon: <SettingOutlined />, label: 'Account' },
                  { key: 'corporate', icon: <TeamOutlined />, label: 'Corporate' },
                  { key: 'blog', icon: <FileOutlined />, label: 'Blog' },
                  { key: 'social', icon: <TeamOutlined />, label: 'Social' }
                ]}
              />
            </div>
          )}
        </div>
      </Sider>
  );
};

export default MainSider;