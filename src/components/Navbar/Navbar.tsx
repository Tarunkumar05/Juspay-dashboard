import {
  Layout,
  Button,
  Badge,
  Avatar,
  Dropdown,
  Typography,
  Input,
} from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  SearchOutlined,
  BugOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import CustomIcons from '../CustomIcons/CustomIcons';
// import Search from 'antd/es/transfer/search';

const { Header } = Layout;
const { Title } = Typography;
const { Search } = Input;

interface NavBarProps {
    leftCollapsed : boolean;
    rightCollapsed: boolean;
    onLeftToggle: () => void;
    onRightToggle: () => void;
}

  const notificationMenu = {
    items: [
      {
        key: '1',
        label: 'You have a bug that needs...',
        icon: <BugOutlined style={{ color: '#ff4d4f' }} />,
      },
      {
        key: '2',
        label: 'New user registered',
        icon: <UserOutlined style={{ color: '#52c41a' }} />,
      },
      {
        key: '3',
        label: 'Andi Lane subscribed to you',
        icon: <UserOutlined style={{ color: '#1890ff' }} />,
      },
    ],
  };

  // User dropdown menu
  const userMenu = {
    items: [
      { key: '1', label: 'Profile' },
      { key: '2', label: 'Settings' },
      { key: '3', label: 'Logout' },
    ],
  };

const Navbar: React.FC<NavBarProps> = ({leftCollapsed, rightCollapsed, onRightToggle, onLeftToggle}) => {


    
  return (
        <Header style={{
          background: '#fff',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 6px rgba(0,21,41,.08)',
          zIndex: 1000
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Button
              type="text"
              icon={leftCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={onLeftToggle}
            />
            <Title  level={4} style={{ margin: 0 }}>Dashboard</Title>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
             <Search
              placeholder="Search"
              style={{ width: 200 }}
              prefix={<SearchOutlined />}
            />
             
           <CustomIcons.Clock width={24} height={24} style={{ cursor: 'pointer' }} />
            
            <Dropdown menu={notificationMenu} placement="bottomRight">
              <Button type="text" icon={<Badge count={3} size="small"><BellOutlined /></Badge>} />
            </Dropdown>

            <Dropdown menu={userMenu} placement="bottomRight">
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=user" />
            </Dropdown>

            <Button
              type="text"
              icon={rightCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={onRightToggle}
            />
          </div>
        </Header>
  );
};

export default Navbar;