import {
  Layout,
  Card,
  Row,
  Col,
  Statistic,
  Progress,
  Typography,
  Table,
} from "antd";

import { Bar, Line, Doughnut } from "react-chartjs-2";

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
  ArcElement,
} from "chart.js";

import "./Dashboard.scss";
import worldMap from "../../assets/images/world-map.svg";
import CustomIcons from "../../components/CustomIcons/CustomIcons";

// Register Chart.js components (required)
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
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

// Doughnut chart data
const doughnutData = {
  labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
  datasets: [
    {
      data: [300.56, 135.18, 154.02, 48.96],
      backgroundColor: [
        "#2F2F2F", // Dark gray/black for Direct
        "#90EE90", // Light green for Affiliate
        "#9370DB", // Light purple for Sponsored
        "#87CEEB", // Light blue for E-mail
      ],
      borderWidth: 0,
      spacing: 6, // Space between segments
      borderRadius: [
        { innerStart: 20, innerEnd: 20, outerStart: 20, outerEnd: 20 }, // Direct
        { innerStart: 20, innerEnd: 20, outerStart: 20, outerEnd: 20 }, // Affiliate
        { innerStart: 20, innerEnd: 20, outerStart: 20, outerEnd: 20 }, // Sponsored
        { innerStart: 20, innerEnd: 20, outerStart: 20, outerEnd: 20 }, // E-mail
      ],
    },
  ],
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "70%",
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  elements: {
    arc: {
      borderRadius: 10,
    },
  },
};

const Dashboard = () => {
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

  // Sales data for the legend
  const salesData = [
    { label: "Direct", value: "$300.56", color: "#2F2F2F" },
    { label: "Affiliate", value: "$135.18", color: "#90EE90" },
    { label: "Sponsored", value: "$154.02", color: "#9370DB" },
    { label: "E-mail", value: "$48.96", color: "#87CEEB" },
  ];

  return (
    <Content className="dashboard">
      {/* Stats Cards */}
      <Row gutter={[16, 16]} className="dashboard__stats-row">
        {/* Left Side (Stats Cards) */}
        <Col xs={24} lg={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={12}>
              <Card>
                <Statistic
                  title="Customers"
                  value={3781}
                  suffix={<Text type="success">+11.01% <CustomIcons.UpArrow/></Text>}
                //   valueStyle={{ color: "#3f8600" }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={12}>
              <Card>
                <Statistic
                  title="Orders"
                  value={1219}
                  suffix={<Text type="danger">-0.03% <CustomIcons.DownArrow/></Text>}
                //   valueStyle={{ color: "#cf1322" }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={12}>
              <Card>
                <Statistic
                  title="Revenue"
                  value={695}
                //   prefix="$"
                  suffix={<Text type="success">+15.03% <CustomIcons.UpArrow/></Text>}
                //   valueStyle={{ color: "#3f8600" }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={12}>
              <Card>
                <Statistic
                  title="Growth"
                  value={30.1}
                  suffix={<Text type="success">+30.1% <CustomIcons.UpArrow/></Text>}
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
      <Row gutter={[16, 16]} className="dashboard__charts-row">
        <Col xs={24} lg={16}>
          <Card title="Revenue">
            <div className="revenue-chart">
              {/* Revenue Header */}
              <div className="revenue-chart__header">
                <div className="legend-item">
                  <div className="legend-item__dot legend-item__dot--current" />
                  <span className="legend-item__text">
                    Current Week <strong>$58,211</strong>
                  </span>
                </div>
                <div className="legend-item">
                  <div className="legend-item__dot legend-item__dot--previous" />
                  <span className="legend-item__text">
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
            <div className="location-revenue">
              <div className="location-revenue__item">
                <img src={worldMap} alt="" />
              </div>

              <div className="location-revenue__item">
                <div className="location-revenue__header">
                  <Text>New York</Text>
                  <Text>72k</Text>
                </div>
                <Progress percent={72} showInfo={false} />
              </div>
              <div className="location-revenue__item">
                <div className="location-revenue__header">
                  <Text>San Francisco</Text>
                  <Text>39k</Text>
                </div>
                <Progress percent={39} showInfo={false} />
              </div>
              <div className="location-revenue__item">
                <div className="location-revenue__header">
                  <Text>Sydney</Text>
                  <Text>25k</Text>
                </div>
                <Progress percent={25} showInfo={false} />
              </div>
              <div className="location-revenue__item location-revenue__item--last">
                <div className="location-revenue__header">
                  <Text>Singapore</Text>
                  <Text>61k</Text>
                </div>
                <Progress percent={61} showInfo={false} />
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Bottom Row */}
      <Row gutter={[16, 16]}>
        <Col flex="60%">
          <Card title="Top Selling Products">
            <Table
              dataSource={revenueData}
              columns={columns}
              pagination={false}
              size="small"
              rowKey="name"
              className="top-sell-table"
            />
          </Card>
        </Col>
        <Col flex="40%">
          <Card title="Total Sales">
            <div className="sales-chart">
              {/* Chart Container */}
              <div className="sales-chart__container">
                <Doughnut data={doughnutData} options={doughnutOptions} />
              </div>

              {/* Legend */}
              <div className="sales-legend">
                {salesData.map((item, index) => (
                  <div key={index} className="sales-legend__item">
                    <div className="sales-legend__label">
                      <div
                        className="sales-legend__dot"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="sales-legend__text">{item.label}</span>
                    </div>
                    <span className="sales-legend__value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Dashboard;
