import Sider from "antd/es/layout/Sider";
import {
  DashboardOutlined,
  UserOutlined,
  FileTextOutlined,
  TeamOutlined,
  ShopOutlined,
  BookOutlined,
  GlobalOutlined,
  CreditCardOutlined,
  EditOutlined,
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

  const leftMenuItems = [
    {
      key: 'overview',
      icon: <DashboardOutlined />,
      label: 'Overview',
    },
    {
      key: 'projects',
      icon: <FileTextOutlined />,
      label: 'Projects',
    },
    {
      key: 'ecommerce',
      icon: <ShopOutlined />,
      label: 'eCommerce',
      children: [
        { key: 'customers', label: 'Customers' },
        { key: 'orders', label: 'Orders' },
        { key: 'products', label: 'Products' },
      ]
    },
    {
      key: 'online-courses',
      icon: <BookOutlined />,
      label: 'Online Courses',
    },
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'account',
      icon: <CreditCardOutlined />,
      label: 'Account',
    },
    {
      key: 'corporate',
      icon: <TeamOutlined />,
      label: 'Corporate',
    },
    {
      key: 'blog',
      icon: <EditOutlined />,
      label: 'Blog',
    },
    {
      key: 'social',
      icon: <GlobalOutlined />,
      label: 'Social',
    },
  ];

const baseClass = "main-sider"



const MainSider: React.FC<MainSiderProps> = ({collapsed}) => {
  

  
  return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={baseClass}
        style={{
          background: '#fff',
          boxShadow: '2px 0 6px rgba(0,21,41,.08)',
        }}
      >
        <div style={{ 
          padding: '16px', 
          borderBottom: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Avatar style={{ backgroundColor: '#1890ff' }}>BW</Avatar>
          {!collapsed && <Text strong>ByeWind</Text>}
        </div>
        
        <div style={{ padding: '8px 0' }}>
          {!collapsed && (
            <div style={{ padding: '0 16px', marginBottom: '8px' }}>
              <Text type="secondary" style={{ fontSize: '12px' }}>Favorites</Text>
            </div>
          )}
          
          <Menu
            mode="inline"
            defaultSelectedKeys={['overview']}
            items={leftMenuItems}
            style={{ border: 'none' }}
          />
          
          {!collapsed && (
            <>
              <div style={{ padding: '16px', marginTop: '16px' }}>
                <Text type="secondary" style={{ fontSize: '12px' }}>Dashboards</Text>
              </div>
              <div style={{ padding: '16px' }}>
                <Text type="secondary" style={{ fontSize: '12px' }}>Pages</Text>
              </div>
            </>
          )}
        </div>
      </Sider>
  );
};

export default MainSider;