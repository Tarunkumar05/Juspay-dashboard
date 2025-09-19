import { useState } from 'react';
import {
  Layout,
  Card,
  Row,
  Col,
  Statistic,
  Progress,
  Typography,
} from 'antd';

import MainSider from '../../components/MainSider/MainSider';
import Navbar from '../../components/Navbar/Navbar';
import RightSider from '../../components/RightSider/RightSider';

const {   Content } = Layout;
const { Text } = Typography;

const Dashboard = () => {
    const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  // Left sidebar menu items


  // Notification dropdown menu




  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Left Sidebar */}
      <MainSider collapsed={leftCollapsed}/>


      <Layout>
        {/* Header */}

        <Navbar leftCollapsed={leftCollapsed} rightCollapsed={rightCollapsed} onLeftToggle={() => setLeftCollapsed(!leftCollapsed)} onRightToggle={() => setRightCollapsed(!setRightCollapsed)}/>


        <Layout>
          {/* Main Content */}
          <Content style={{
            margin: '16px',
            padding: '24px',
            background: '#f5f5f5',
            overflow: 'auto'
          }}>
            {/* Stats Cards */}
            <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
              <Col xs={24} sm={12} lg={6}>
                <Card>
                  <Statistic
                    title="Customers"
                    value={3781}
                    suffix="+11.01%"
                    valueStyle={{ color: '#3f8600' }}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card>
                  <Statistic
                    title="Orders"
                    value={1219}
                    suffix="-0.03%"
                    valueStyle={{ color: '#cf1322' }}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card>
                  <Statistic
                    title="Revenue"
                    value={695}
                    prefix="$"
                    suffix="+15.03%"
                    valueStyle={{ color: '#3f8600' }}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card>
                  <Statistic
                    title="Growth"
                    value={30.1}
                    suffix="%"
                    valueStyle={{ color: '#3f8600' }}
                  />
                </Card>
              </Col>
            </Row>

            {/* Charts Row */}
            <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
              <Col xs={24} lg={16}>
                <Card title="Revenue">
                  <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fafafa' }}>
                    <Text type="secondary">Revenue Chart Placeholder</Text>
                  </div>
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title="Revenue by Location">
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <Text>New York</Text>
                      <Text>72k</Text>
                    </div>
                    <Progress percent={72} showInfo={false} />
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <Text>San Francisco</Text>
                      <Text>39k</Text>
                    </div>
                    <Progress percent={39} showInfo={false} />
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <Text>Sydney</Text>
                      <Text>25k</Text>
                    </div>
                    <Progress percent={25} showInfo={false} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <Text>Singapore</Text>
                      <Text>61k</Text>
                    </div>
                    <Progress percent={61} showInfo={false} />
                  </div>
                </Card>
              </Col>
            </Row>

            {/* Bottom Row */}
            <Row gutter={[16, 16]}>
              <Col xs={24} lg={12}>
                <Card title="Top Selling Products">
                  <div style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fafafa' }}>
                    <Text type="secondary">Products Table Placeholder</Text>
                  </div>
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card title="Total Sales">
                  <div style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fafafa' }}>
                    <Text type="secondary">Sales Donut Chart Placeholder</Text>
                  </div>
                </Card>
              </Col>
            </Row>
          </Content>

          {/* Right Sidebar */}
          <RightSider collapsed={rightCollapsed}/>

        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;