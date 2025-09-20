
import React, { useState } from 'react';
import {
  Layout,
  Table,
  Button,
  Avatar,
  Tag,
  Space,
  Input,
  Checkbox,
  Typography,
  Pagination,
} from 'antd';
import {
  PlusOutlined,
  SearchOutlined,
  FilterOutlined,
  SortAscendingOutlined,
} from '@ant-design/icons';

const { Content } = Layout;
const { Search } = Input;

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
  status: 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected';
}

const OrderList: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const orderData: OrderData[] = [
    {
      key: '1',
      orderId: '#CM9801',
      user: { name: 'Natali Craig', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=natali' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'In Progress',
    },
    {
      key: '2',
      orderId: '#CM9802',
      user: { name: 'Kate Morrison', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=kate' },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: 'Complete',
    },
    {
      key: '3',
      orderId: '#CM9803',
      user: { name: 'Drew Cano', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=drew' },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: 'Pending',
    },
    {
      key: '4',
      orderId: '#CM9804',
      user: { name: 'Orlando Diggs', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=orlando' },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: 'Approved',
    },
    {
      key: '5',
      orderId: '#CM9805',
      user: { name: 'Andi Lane', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=andi' },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: 'Rejected',
    },
    {
      key: '6',
      orderId: '#CM9801',
      user: { name: 'Natali Craig', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=natali' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'In Progress',
    },
    {
      key: '7',
      orderId: '#CM9802',
      user: { name: 'Kate Morrison', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=kate' },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: 'Complete',
    },
    {
      key: '8',
      orderId: '#CM9803',
      user: { name: 'Drew Cano', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=drew' },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: 'Pending',
    },
    {
      key: '9',
      orderId: '#CM9804',
      user: { name: 'Orlando Diggs', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=orlando' },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: 'Approved',
    },
    {
      key: '10',
      orderId: '#CM9805',
      user: { name: 'Andi Lane', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=andi' },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: 'Rejected',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return '#1890ff';
      case 'Complete':
        return '#52c41a';
      case 'Pending':
        return '#faad14';
      case 'Approved':
        return '#722ed1';
      case 'Rejected':
        return '#f5222d';
      default:
        return '#d9d9d9';
    }
  };

  const columns = [
    {
      title: '',
      dataIndex: 'checkbox',
      width: 50,
      render: (_: any, record: OrderData) => (
        <Checkbox
          checked={selectedRowKeys.includes(record.key)}
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedRowKeys([...selectedRowKeys, record.key]);
            } else {
              setSelectedRowKeys(selectedRowKeys.filter(key => key !== record.key));
            }
          }}
        />
      ),
    },
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
      render: (user: { name: string; avatar: string }) => (
        <Space>
          <Avatar src={user.avatar} size="small" />
          {user.name}
        </Space>
      ),
    },
    {
      title: 'Project',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={getStatusColor(status)} style={{ borderRadius: '12px' }}>
          {status}
        </Tag>
      ),
    },
  ];

//   const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
//     setSelectedRowKeys(newSelectedRowKeys);
//   };

//   const rowSelection = {
//     selectedRowKeys,
//     onChange: onSelectChange,
//   };

  return (
    <Content
      style={{
        margin: "16px",
        padding: "24px",
        background: "#fff",
        overflow: "auto",
      }}
    >
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '24px' 
      }}>
        <Typography.Title level={4} style={{ margin: 0 }}>
          Order List
        </Typography.Title>
        <Search
          placeholder="Search"
          style={{ width: 300 }}
          prefix={<SearchOutlined />}
        />
      </div>

      {/* Action Buttons */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '16px' 
      }}>
        <Space>
          <Button icon={<PlusOutlined />} type="primary">
            Add
          </Button>
          <Button icon={<FilterOutlined />}>
            Filter
          </Button>
          <Button icon={<SortAscendingOutlined />}>
            Sort
          </Button>
        </Space>
      </div>

      {/* Table */}
      <Table
        // rowSelection={rowSelection}
        columns={columns}
        dataSource={orderData}
        pagination={false}
        style={{ marginBottom: '16px' }}
      />

      {/* Pagination */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '24px' 
      }}>
        <Pagination 
          current={1} 
          total={50} 
          showSizeChanger={false}
          showQuickJumper={false}
        />
      </div>
    </Content>
  );
};

export default OrderList;