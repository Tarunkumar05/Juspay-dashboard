import { Avatar, List, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import CustomIcons from "../CustomIcons/CustomIcons";
import "./RightSider.scss";

const { Text } = Typography;

interface RightSiderProps {
  collapsed: boolean;
}

const RightSider: React.FC<RightSiderProps> = ({ collapsed }) => {
  // Activities data
  const activities = [
    {
      id: 1,
      user: "You",
      action: "have a bug that needs...",
      time: "Just now",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
      type: "bug",
    },
    {
      id: 2,
      user: "Released",
      action: "a new version",
      time: "59 minutes ago",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
      type: "release",
    },
    {
      id: 3,
      user: "Submitted",
      action: "a bug",
      time: "12 hours ago",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=3",
      type: "bug",
    },
    {
      id: 4,
      user: "Modified",
      action: "A data in Page X",
      time: "Today, 11:59 AM",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=4",
      type: "edit",
    },
    {
      id: 5,
      user: "Deleted",
      action: "a page in Project X",
      time: "Feb 2, 2025",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=5",
      type: "delete",
    },
  ];

  // Contacts data
  const contacts = [
    {
      id: 1,
      name: "Natali Craig",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=natali",
    },
    {
      id: 2,
      name: "Drew Cano",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=drew",
    },
    {
      id: 3,
      name: "Orlando Diggs",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=orlando",
    },
    {
      id: 4,
      name: "Andi Lane",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=andi",
    },
    {
      id: 5,
      name: "Kate Morrison",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=kate",
    },
    {
      id: 6,
      name: "Koray Okumus",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=koray",
    },
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      reverseArrow
      width={280}
      collapsedWidth={0}
      className="right-sider"
    >
      <div className="right-sider__content">
        {/* Notifications */}
        <div className="right-sider__section">
          <h2 className="right-sider__section_heading" >Notifications</h2>
          <List
            size="small"
            dataSource={[
              { text: "You have a bug that needs...", time: "Just now", icon: <CustomIcons.Bug/> },
              { text: "New user registered", time: "59 minutes ago", icon: <CustomIcons.NewUser/> },
              { text: "You have a bug that needs...", time: "12 hours ago", icon: <CustomIcons.Bug/> },
              { text: "You have a bug that needs...", time: "Today: 11:59 AM", icon: <CustomIcons.Subscribe/> },
            ]}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={item.icon}
                  title={<Text className="item-title">{item.text}</Text>}
                  description={
                    <Text type="secondary" className="item-time">
                      {item.time}
                    </Text>
                  }
                />
              </List.Item>
            )}
          />
        </div>

        {/* Activities */}
        <div className="right-sider__section">
          <h2 className="right-sider__section_heading" >Activities</h2>
          <List
            size="small"
            dataSource={activities}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size={24} src={item.avatar} />}
                  title={
                    <Text className="item-title">
                      {item.user} {item.action}
                    </Text>
                  }
                  description={
                    <Text type="secondary" className="item-time">
                      {item.time}
                    </Text>
                  }
                />
              </List.Item>
            )}
          />
        </div>

        {/* Contacts */}
        <div className="right-sider__section--last">
          <h2 className="right-sider__section_heading" >Contacts</h2>
          <List
            size="small"
            dataSource={contacts}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size={24} src={item.avatar} />}
                  title={<Text className="item-title">{item.name}</Text>}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </Sider>
  );
};

export default RightSider;