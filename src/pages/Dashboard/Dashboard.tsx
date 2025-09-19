import { useState } from "react";
import {
  Layout,
  Card,
  Row,
  Col,
  Statistic,
  Progress,
  Typography,
  Table,
  Space,
} from "antd";

import MainSider from "../../components/MainSider/MainSider";
import Navbar from "../../components/Navbar/Navbar";
import RightSider from "../../components/RightSider/RightSider";
import { Bar, Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components (required)
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const { Content } = Layout;
const { Text } = Typography;

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Projections",
      data: [20, 25, 22, 28, 19, 26],
      backgroundColor: "rgba(173, 216, 230, 0.8)", // Light blue
      borderRadius: 4,
      barThickness: 20,
    },
    {
      label: "Actuals",
      data: [18, 24, 20, 25, 16, 24],
      backgroundColor: "rgba(70, 130, 180, 0.9)", // Darker blue
      borderRadius: 4,
      barThickness: 20,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      max: 30,
      grid: {
        color: "rgba(0, 0, 0, 0.1)",
        borderDash: [2, 2],
      },
      border: {
        display: false,
      },
      ticks: {
        callback: function (value: number) {
          return value + "M";
        },
        stepSize: 10,
      },
    },
  },
  layout: {
    padding: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    },
  },
};

const Dashboard = () => {
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  const revenueData = [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,754.50",
    },
    {
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: 64,
      amount: "$2,559.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00",
    },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ];

  // Left sidebar menu items

  // Notification dropdown menu

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Left Sidebar */}
      <MainSider collapsed={leftCollapsed} />

      <Layout>
        {/* Header */}

        <Navbar
          leftCollapsed={leftCollapsed}
          rightCollapsed={rightCollapsed}
          onLeftToggle={() => setLeftCollapsed(!leftCollapsed)}
          onRightToggle={() => setRightCollapsed(!rightCollapsed)}
        />

        <Layout>
          {/* Main Content */}
          <Content
            style={{
              margin: "16px",
              padding: "24px",
              background: "#f5f5f5",
              overflow: "auto",
            }}
          >
            {/* Stats Cards */}
            <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
              {/* Left Side (Stats Cards) */}
              <Col xs={24} lg={12}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12} lg={12}>
                    <Card>
                      <Statistic
                        title="Customers"
                        value={3781}
                        suffix={<Text type="success">+11.01%</Text>}
                        valueStyle={{ color: "#3f8600" }}
                      />
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={12}>
                    <Card>
                      <Statistic
                        title="Orders"
                        value={1219}
                        suffix={<Text type="danger">-0.03%</Text>}
                        valueStyle={{ color: "#cf1322" }}
                      />
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={12}>
                    <Card>
                      <Statistic
                        title="Revenue"
                        value={695}
                        prefix="$"
                        suffix={<Text type="success">+15.03%</Text>}
                        valueStyle={{ color: "#3f8600" }}
                      />
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={12}>
                    <Card>
                      <Statistic
                        title="Growth"
                        value={30.1}
                        suffix="%"
                        valueStyle={{ color: "#3f8600" }}
                      />
                    </Card>
                  </Col>
                </Row>
              </Col>

              {/* Right Side (Your Custom Content) */}
              <Col xs={24} lg={12}>
                <Card title="Projections vs Actuals">
                  <Bar data={data} options={options as any} />
                </Card>
              </Col>
            </Row>

            {/* Charts Row */}
            <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
              <Col xs={24} lg={16}>
                <Card title="Revenue">
                  <div style={{ position: "relative", height: "300px" }}>
                    {/* Revenue Header */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "20px",
                        zIndex: 10,
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: "#000000",
                          }}
                        />
                        <span style={{ fontSize: "14px", color: "#666" }}>
                          Current Week <strong>$58,211</strong>
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: "#87CEEB",
                          }}
                        />
                        <span style={{ fontSize: "14px", color: "#666" }}>
                          Previous Week <strong>$68,768</strong>
                        </span>
                      </div>
                    </div>

                    <Line
                      data={{
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        datasets: [
                          {
                            label: "Current Week",
                            data: [13, 10, 8, 15, 18, 20],
                            borderColor: "#000000",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderWidth: 3,
                            tension: 0.4,
                            pointRadius: 0,
                            pointHoverRadius: 6,
                            fill: false,
                          },
                          {
                            label: "Previous Week",
                            data: [8, 16, 18, 12, 10, 19],
                            borderColor: "#87CEEB",
                            backgroundColor: "rgba(135, 206, 235, 0.1)",
                            borderWidth: 3,
                            tension: 0.4,
                            pointRadius: 0,
                            pointHoverRadius: 6,
                            fill: false,
                          },
                          {
                            label: "Projection",
                            data: [null, null, null, null, 18, 20, 21],
                            borderColor: "#000000",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderWidth: 2,
                            borderDash: [8, 4],
                            tension: 0.1,
                            pointRadius: 0,
                            pointHoverRadius: 0,
                            fill: false,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            display: false,
                          },
                          title: {
                            display: false,
                          },
                          tooltip: {
                            callbacks: {
                              label: function (context) {
                                return `${context.dataset.label}: $${context.parsed.y}M`;
                              },
                            },
                          },
                        },
                        scales: {
                          x: {
                            grid: {
                              display: false,
                            },
                            border: {
                              display: false,
                            },
                            ticks: {
                              color: "#999",
                            },
                          },
                          y: {
                            beginAtZero: true,
                            max: 30,
                            grid: {
                              color: "rgba(0, 0, 0, 0.1)",
                            //   borderDash: [2, 2],
                            },
                            border: {
                              display: false,
                            },
                            ticks: {
                              callback: function (value) {
                                return value + "M";
                              },
                              stepSize: 10,
                              color: "#999",
                            },
                          },
                        },
                        layout: {
                          padding: {
                            top: 40,
                            right: 20,
                            bottom: 10,
                            left: 10,
                          },
                        },
                      }}
                    />
                  </div>
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title="Revenue by Location">
                  <div style={{ marginBottom: "16px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                      }}
                    >
                      <Text>New York</Text>
                      <Text>72k</Text>
                    </div>
                    <Progress percent={72} showInfo={false} />
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                      }}
                    >
                      <Text>San Francisco</Text>
                      <Text>39k</Text>
                    </div>
                    <Progress percent={39} showInfo={false} />
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                      }}
                    >
                      <Text>Sydney</Text>
                      <Text>25k</Text>
                    </div>
                    <Progress percent={25} showInfo={false} />
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                      }}
                    >
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
              <Col flex="70%">
                <Card title="Top Selling Products">
                  <Table
                    dataSource={revenueData}
                    columns={columns}
                    pagination={false}
                    size="small"
                    rowKey="name"
                  />
                </Card>
              </Col>
              <Col flex="30%">
                <Card title="Total Sales" style={{ marginBottom: "16px" }}>
                  <div style={{ textAlign: "center", marginBottom: "16px" }}>
                    <Progress
                      type="circle"
                      percent={65}
                      size={120}
                      strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068",
                      }}
                    />
                  </div>
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>Direct</Text>
                      <Text strong>$300.56</Text>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>Affiliate</Text>
                      <Text strong>$135.18</Text>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>Sponsored</Text>
                      <Text strong>$154.02</Text>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>E-mail</Text>
                      <Text strong>$48.96</Text>
                    </div>
                  </Space>
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>

      {/* Right Sidebar */}
      <RightSider collapsed={rightCollapsed} />
    </Layout>
  );
};

export default Dashboard;
