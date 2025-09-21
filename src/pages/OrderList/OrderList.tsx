import React, { useState, useMemo } from "react";
import {
  Table,
  Button,
  Avatar,
  Tag,
  Space,
  Input,
  Checkbox,
  Typography,
  Pagination,
  Select,
  Dropdown,
  Menu,
  Modal,
  Form,
  message,
} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  FilterOutlined,
  SortAscendingOutlined,
  MoreOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import "./OrderList.scss";

const { Search } = Input;
const { Option } = Select;

interface OrderData {
  key: string;
  orderId: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  timestamp: number;
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
}

interface FilterState {
  status: string[];
  dateRange: string;
  searchText: string;
}

interface SortState {
  field: string;
  order: "asc" | "desc";
}

// Dummy data generator
const generateOrderData = (): OrderData[] => {
  const users = [
    { name: "Natali Craig", seed: "natali" },
    { name: "Kate Morrison", seed: "kate" },
    { name: "Drew Cano", seed: "drew" },
    { name: "Orlando Diggs", seed: "orlando" },
    { name: "Andi Lane", seed: "andi" },
    { name: "Phoenix Baker", seed: "phoenix" },
    { name: "Lana Steiner", seed: "lana" },
    { name: "Demi Wilkinson", seed: "demi" },
    { name: "Candice Wu", seed: "candice" },
    { name: "Olivia Rhye", seed: "olivia" },
  ];

  const projects = [
    "Landing Page",
    "CRM Admin pages",
    "Client Project",
    "Admin Dashboard",
    "App Landing Page",
    "E-commerce Site",
    "Mobile App UI",
    "Portfolio Website",
    "SaaS Platform",
    "Marketing Site",
  ];

  const addresses = [
    "Meadow Lane Oakland",
    "Larry San Francisco",
    "Bagwell Avenue Ocala",
    "Washburn Baton Rouge",
    "Nest Lane Olivette",
    "Main Street Boston",
    "Oak Avenue Chicago",
    "Pine Street Seattle",
    "Maple Drive Austin",
    "Cedar Road Denver",
  ];

  const dates = [
    { text: "Just now", offset: 1000 },
    { text: "A minute ago", offset: 60000 },
    { text: "5 minutes ago", offset: 300000 },
    { text: "1 hour ago", offset: 3600000 },
    { text: "2 hours ago", offset: 7200000 },
    { text: "Yesterday", offset: 86400000 },
    { text: "2 days ago", offset: 172800000 },
    {
      text: "Feb 2, 2023",
      offset: Date.now() - new Date("2023-02-02").getTime(),
    },
    {
      text: "Jan 15, 2023",
      offset: Date.now() - new Date("2023-01-15").getTime(),
    },
    {
      text: "Dec 20, 2022",
      offset: Date.now() - new Date("2022-12-20").getTime(),
    },
  ];

  const statuses: Array<
    "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected"
  > = ["In Progress", "Complete", "Pending", "Approved", "Rejected"];

  // Generate 50 orders for better pagination demonstration
  const orders: OrderData[] = [];
  for (let i = 1; i <= 50; i++) {
    const userIndex = (i - 1) % users.length;
    const projectIndex = (i - 1) % projects.length;
    const addressIndex = (i - 1) % addresses.length;
    const dateIndex = (i - 1) % dates.length;
    const statusIndex = (i - 1) % statuses.length;

    orders.push({
      key: i.toString(),
      orderId: `#CM98${String(i).padStart(2, "0")}`,
      user: {
        name: users[userIndex].name,
        avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${users[userIndex].seed}${i}`,
      },
      project: projects[projectIndex],
      address: addresses[addressIndex],
      date: dates[dateIndex].text,
      timestamp: Date.now() - dates[dateIndex].offset - i * 1000,
      status: statuses[statusIndex],
    });
  }

  return orders;
};

const OrderList: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [filters, setFilters] = useState<FilterState>({
    status: [],
    dateRange: "all",
    searchText: "",
  });
  const [sortState, setSortState] = useState<SortState>({
    field: "timestamp",
    order: "desc",
  });
  
  // New state for add functionality
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [orderData, setOrderData] = useState<OrderData[]>(generateOrderData());
  const [form] = Form.useForm();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "#6366f1";
      case "Complete":
        return "#10b981";
      case "Pending":
        return "#f59e0b";
      case "Approved":
        return "#8b5cf6";
      case "Rejected":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  // Generate unique order ID
  const generateOrderId = () => {
    const maxId = Math.max(
      ...orderData.map(order => parseInt(order.orderId.replace("#CM98", "")))
    );
    return `#CM98${String(maxId + 1).padStart(2, "0")}`;
  };

  // Generate avatar URL from name
  const generateAvatarUrl = (name: string) => {
    const seed = name.toLowerCase().replace(/\s+/g, '');
    return `https://api.dicebear.com/7.x/miniavs/svg?seed=${seed}`;
  };

  // Handle adding new order
  const handleAddOrder = async () => {
    try {
      const values = await form.validateFields();
      const newOrder: OrderData = {
        key: (orderData.length + 1).toString(),
        orderId: generateOrderId(),
        user: {
          name: values.userName,
          avatar: generateAvatarUrl(values.userName),
        },
        project: values.project,
        address: values.address,
        date: "Just now",
        timestamp: Date.now(),
        status: values.status,
      };

      setOrderData([newOrder, ...orderData]);
      setIsAddModalVisible(false);
      form.resetFields();
      message.success("Order added successfully!");
      
      // Reset to first page to show the new order
      setCurrentPage(1);
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  // Handle modal cancel
  const handleModalCancel = () => {
    setIsAddModalVisible(false);
    form.resetFields();
  };

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = [...orderData];

    // Apply search filter
    if (filters.searchText) {
      const searchLower = filters.searchText.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.orderId.toLowerCase().includes(searchLower) ||
          item.user.name.toLowerCase().includes(searchLower) ||
          item.project.toLowerCase().includes(searchLower) ||
          item.address.toLowerCase().includes(searchLower)
      );
    }

    // Apply status filter
    if (filters.status.length > 0) {
      filtered = filtered.filter((item) =>
        filters.status.includes(item.status)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue: any = a[sortState.field as keyof OrderData];
      let bValue: any = b[sortState.field as keyof OrderData];

      if (sortState.field === "user") {
        aValue = a.user.name;
        bValue = b.user.name;
      }

      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortState.order === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [orderData, filters, sortState]);

  // Paginate data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredAndSortedData.slice(startIndex, endIndex);
  }, [filteredAndSortedData, currentPage, pageSize]);

  const columns = [
    {
      title: "",
      dataIndex: "checkbox",
      width: 50,
      render: (_: any, record: OrderData) => (
        <Checkbox
          checked={selectedRowKeys.includes(record.key)}
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedRowKeys([...selectedRowKeys, record.key]);
            } else {
              setSelectedRowKeys(
                selectedRowKeys.filter((key) => key !== record.key)
              );
            }
          }}
        />
      ),
    },
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
      sorter: true,
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (user: { name: string; avatar: string }) => (
        <Space size={12}>
          <Avatar src={user.avatar} size={32} />
          <span className="user-name">{user.name}</span>
        </Space>
      ),
      sorter: true,
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
      sorter: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      sorter: true,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date: string) => (
        <Space>
          <CalendarOutlined className="date-icon" />
          {date}
        </Space>
      ),
      sorter: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={getStatusColor(status)} className="status-tag">
          {status}
        </Tag>
      ),
      sorter: true,
    },
    {
      title: "",
      key: "actions",
      width: 50,
      render: (_: any) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="edit">Edit</Menu.Item>
              <Menu.Item key="view">View Details</Menu.Item>
              <Menu.Item key="delete" danger>
                Delete
              </Menu.Item>
            </Menu>
          }
          trigger={["click"]}
        >
          <Button
            type="text"
            icon={<MoreOutlined />}
            className="action-button"
          />
        </Dropdown>
      ),
    },
  ];

  const handleSearch = (value: string) => {
    setFilters({ ...filters, searchText: value });
    setCurrentPage(1);
  };

  const handleStatusFilter = (values: string[]) => {
    setFilters({ ...filters, status: values });
    setCurrentPage(1);
  };

  const handleSort = (field: string) => {
    setSortState({
      field,
      order:
        sortState.field === field && sortState.order === "asc" ? "desc" : "asc",
    });
  };

  const filterMenu = (
    <div className="filter-dropdown">
      <div className="filter-section">
        <Typography.Text strong>Status</Typography.Text>
        <Select
          mode="multiple"
          placeholder="Select status"
          value={filters.status}
          onChange={handleStatusFilter}
          style={{ width: "100%" }}
        >
          <Option value="In Progress">In Progress</Option>
          <Option value="Complete">Complete</Option>
          <Option value="Pending">Pending</Option>
          <Option value="Approved">Approved</Option>
          <Option value="Rejected">Rejected</Option>
        </Select>
      </div>
    </div>
  );

  const sortMenu = (
    <Menu>
      <Menu.Item key="orderId" onClick={() => handleSort("orderId")}>
        Sort by Order ID
      </Menu.Item>
      <Menu.Item key="user" onClick={() => handleSort("user")}>
        Sort by User
      </Menu.Item>
      <Menu.Item key="project" onClick={() => handleSort("project")}>
        Sort by Project
      </Menu.Item>
      <Menu.Item key="date" onClick={() => handleSort("timestamp")}>
        Sort by Date
      </Menu.Item>
      <Menu.Item key="status" onClick={() => handleSort("status")}>
        Sort by Status
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="order-list-container">
      {/* Header */}
      <div className="order-list-header">
        <Typography.Title level={4} className="page-title">
          Order List
        </Typography.Title>
      </div>

      {/* Action Bar */}
      <div className="action-bar">
        <div className="action-buttons">
          <Button 
            type="primary" 
            icon={<PlusOutlined />} 
            className="add-button"
            onClick={() => setIsAddModalVisible(true)}
          />
         
          <Dropdown overlay={filterMenu} trigger={["click"]}>
            <Button icon={<FilterOutlined />} className="filter-button"/>
          </Dropdown>
          
          <Dropdown overlay={sortMenu} trigger={["click"]}>
            <Button icon={<SortAscendingOutlined />} className="sort-button"/>
          </Dropdown>
        </div>

        <Search
          placeholder="Search"
          allowClear
          onSearch={handleSearch}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
          prefix={<SearchOutlined />}
        />
      </div>

      {/* Table */}
      <div className="table-container">
        <Table
          columns={columns}
          dataSource={paginatedData}
          pagination={false}
          className="order-table"
          rowClassName="table-row"
        />
      </div>

      {/* Pagination */}
      <div className="pagination-container">
        <Pagination
          current={currentPage}
          total={filteredAndSortedData.length}
          pageSize={pageSize}
          showSizeChanger={false}
          showQuickJumper={false}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
          }
          showLessItems={true}
          onChange={setCurrentPage}
          className="pagination"
        />
      </div>

      {/* Add Order Modal */}
      <Modal
        title="Add New Order"
        open={isAddModalVisible}
        onOk={handleAddOrder}
        onCancel={handleModalCancel}
        okText="Add Order"
        cancelText="Cancel"
        width={500}
        className="add-order-modal"
      >
        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          className="add-order-form"
        >
          <Form.Item
            name="userName"
            label="User Name"
            rules={[{ required: true, message: "Please enter user name" }]}
          >
            <Input placeholder="Enter user name" />
          </Form.Item>

          <Form.Item
            name="project"
            label="Project"
            rules={[{ required: true, message: "Please enter project name" }]}
          >
            <Input placeholder="Enter project name" />
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please enter address" }]}
          >
            <Input placeholder="Enter address" />
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please select status" }]}
          >
            <Select placeholder="Select status">
              <Option value="In Progress">In Progress</Option>
              <Option value="Complete">Complete</Option>
              <Option value="Pending">Pending</Option>
              <Option value="Approved">Approved</Option>
              <Option value="Rejected">Rejected</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default OrderList;