import { useEffect } from "react";
import { notification } from "antd";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Layout, Menu, Dropdown } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  GithubFilled,
  CopyrightOutlined,
} from "@ant-design/icons";
import CustomersTable from "../../components/CustomersTable";
import "./styles.css";
import { Footer } from "antd/es/layout/layout";
import { useCustomers } from "../../hooks/useCustomers";

const { Header, Content } = Layout;

const HomePage = () => {
  const { customersList } = useCustomers();
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const handleLogout = async () => {
    logout();
    notification.success({
      message: "Logout Successful",
    });
  };

  const menu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout}>
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ float: "right" }}
        >
          <Dropdown overlay={menu} arrow trigger={["click", "hover"]}>
            <Menu.Item key="user">
              <UserOutlined /> Admin
            </Menu.Item>
          </Dropdown>
        </Menu>
      </Header>
      <Content style={{ padding: "24px" }}>
        <h1>Customer List</h1>
        <CustomersTable data={customersList} />
      </Content>
      <Footer className="footer">
        <a
          href="https://github.com/MiguelMDSDP"
          target="_blank"
          rel="noreferrer"
        >
          <GithubFilled /> MiguelMDSDP
        </a>
        <CopyrightOutlined /> 2023
      </Footer>
    </Layout>
  );
};

export default HomePage;
