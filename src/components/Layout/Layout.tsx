import React, { useState } from 'react';
import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router-dom';
import MainSider from '../MainSider/MainSider';
import Navbar from '../Navbar/Navbar';
import RightSider from '../RightSider/RightSider';

const Layout: React.FC = () => {
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      {/* Left Sidebar */}
      <MainSider collapsed={leftCollapsed} />

      <AntLayout>
        {/* Header */}
        <Navbar
          leftCollapsed={leftCollapsed}
          rightCollapsed={rightCollapsed}
          onLeftToggle={() => setLeftCollapsed(!leftCollapsed)}
          onRightToggle={() => setRightCollapsed(!rightCollapsed)}
        />

        <AntLayout>
          {/* Main Content - This will change based on route */}
          <Outlet />
        </AntLayout>
      </AntLayout>

      {/* Right Sidebar */}
      <RightSider collapsed={rightCollapsed} />
    </AntLayout>
  );
};

export default Layout;