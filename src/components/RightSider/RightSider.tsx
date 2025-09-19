import { Avatar, Divider, List, Typography } from "antd";
import Sider from "antd/es/layout/Sider";

const { Text, Title } = Typography;
interface RightSiderProps {
 collapsed : boolean
}

const RightSider :React.FC<RightSiderProps> = ({collapsed}) => {

    

  // Activities data
  const activities = [
    {
      id: 1,
      user: 'You',
      action: 'have a bug that needs...',
      time: 'Just now',
      avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
      type: 'bug'
    },
    {
      id: 2,
      user: 'Released',
      action: 'a new version',
      time: '59 minutes ago',
      avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
      type: 'release'
    },
    {
      id: 3,
      user: 'Submitted',
      action: 'a bug',
      time: '12 hours ago',
      avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
      type: 'bug'
    },
    {
      id: 4,
      user: 'Modified',
      action: 'A data in Page X',
      time: 'Today, 11:59 AM',
      avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=4',
      type: 'edit'
    },
    {
      id: 5,
      user: 'Deleted',
      action: 'a page in Project X',
      time: 'Feb 2, 2025',
      avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=5',
      type: 'delete'
    }
  ];

  // Contacts data
  const contacts = [
    { id: 1, name: 'Natali Craig', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=natali' },
    { id: 2, name: 'Drew Cano', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=drew' },
    { id: 3, name: 'Orlando Diggs', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=orlando' },
    { id: 4, name: 'Andi Lane', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=andi' },
    { id: 5, name: 'Kate Morrison', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=kate' },
    { id: 6, name: 'Koray Okumus', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=koray' }
  ];

  return (


          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            reverseArrow
            width={320}
            collapsedWidth={0}
            style={{
              background: '#fff',
              boxShadow: '-2px 0 6px rgba(0,21,41,.08)',
            }}
          >
            <div style={{ padding: '16px' }}>
              <Title level={5}>Notifications</Title>
              <Text type="secondary">You have a bug that needs...</Text>
              <br />
              <Text type="secondary" style={{ fontSize: '12px' }}>Just now</Text>
              
              <Divider />
              
              <Title level={5}>Activities</Title>
              <List
                dataSource={activities}
                renderItem={(item) => (
                  <List.Item style={{ padding: '8px 0' }}>
                    <List.Item.Meta
                      avatar={<Avatar size="small" src={item.avatar} />}
                      title={
                        <Text style={{ fontSize: '14px' }}>
                          <Text strong>{item.user}</Text> {item.action}
                        </Text>
                      }
                      description={
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          {item.time}
                        </Text>
                      }
                    />
                  </List.Item>
                )}
              />
              
              <Divider />
              
              <Title level={5}>Contacts</Title>
              <List
                dataSource={contacts}
                renderItem={(item) => (
                  <List.Item style={{ padding: '8px 0' }}>
                    <List.Item.Meta
                      avatar={<Avatar size="small" src={item.avatar} />}
                      title={
                        <Text style={{ fontSize: '14px' }}>
                          {item.name}
                        </Text>
                      }
                    />
                  </List.Item>
                )}
              />
            </div>
          </Sider>
  );
};

export default RightSider;