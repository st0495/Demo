import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./styles.scss";
import {
  Layout,
  Menu,
  Button,
  Typography,
  Input,
  InputNumber,
  Row,
} from "antd";
import { Link } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";
import { ProjectOutlined, FieldTimeOutlined } from "@ant-design/icons";
import Project from "../Projects";

const { Sider } = Layout;
const { Text } = Typography;
const DashBoardScreen = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [pageDisplayed, setPageDisplayed] = useState("1");
  return (
    <Layout
      style={{
        minHeight: "100vh",
        border: "solid",
        borderColor: "green",
        flex: 1,
        flexDirection: "row",
        width: "100%",
      }}
    >
      <div>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
          style={{
            border: "solid",
            borderColor: "red",
            width: "30%",
            height: "100%",
          }}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            onClick={(e) => setPageDisplayed(e.key)}
          >
            <Menu.Item key="1" icon={<ProjectOutlined />}>
              TIME TRACKER
            </Menu.Item>

            <Menu.Item key="2" icon={<FieldTimeOutlined />}>
              PROJECT
            </Menu.Item>
          </Menu>
        </Sider>
      </div>

      <Layout>{pageDisplayed === "2" && <Project />}</Layout>
    </Layout>
  );
};

export default DashBoardScreen;
