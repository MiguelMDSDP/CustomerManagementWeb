import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Layout, Menu, Dropdown, notification, Button } from "antd";

import {
  UserOutlined,
  LogoutOutlined,
  GithubFilled,
  CopyrightOutlined,
} from "@ant-design/icons";

import CustomersTable from "../../components/Tables/Customers";
import CustomerModal from "../../components/Modals/Customers";

import { Customer } from "../../utils/types/customer";
import { useAuth } from "../../data/context/AuthContext";
import { useCustomers } from "../../data/hooks/useCustomers";

import "./styles.css";
import { validateCustomer } from "../../utils/validators/customer";

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  const { customersList, createCustomer, updateCustomer, deleteCustomer } =
    useCustomers();
  const { isAuthenticated, logout } = useAuth();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedCustomer, setSelectedCustomer] = useState<
    Customer | undefined
  >(undefined);

  if (!isAuthenticated) return <Navigate to="/" />;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedCustomer(undefined);
  };

  const handleEdit = (customer: Customer) => {
    setSelectedCustomer(customer);
    showModal();
  };

  const handleDelete = async (customer: Customer) =>
    await deleteCustomer(customer.id);

  const handleDisable = async (customer: Customer) =>
    await updateCustomer(customer.id, { ...customer, isActive: false });

  const handleEnable = async (customer: Customer) =>
    await updateCustomer(customer.id, { ...customer, isActive: true });

  const handleCancel = () => {
    closeModal();
  };

  const handleSave = async (values: Customer) => {
    if (selectedCustomer) {
      if (values.firstName || values.lastName || values.email) {
        await updateCustomer(selectedCustomer.id, {
          firstName: values.firstName || selectedCustomer.firstName,
          lastName: values.lastName || selectedCustomer.lastName,
          email: values.email || selectedCustomer.email,
          isActive: selectedCustomer.isActive,
        });
      }
    } else {
      const formErrors = validateCustomer(values);
      if (!formErrors) await createCustomer(values);
    }
    closeModal();
  };

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
      <Content style={{ padding: "24px", minHeight: "85vh" }}>
        <div className="page-header">
          <div className="page-title-container">
            <h1 className="page-title">Customer List</h1>
          </div>
          <div className="add-customer-container">
            <Button type="primary" onClick={showModal}>
              Add Customer
            </Button>
          </div>
        </div>
        <CustomersTable
          onDelete={handleDelete}
          onDisable={handleDisable}
          onEnable={handleEnable}
          onEdit={handleEdit}
          data={customersList}
        />
        <CustomerModal
          visible={isModalVisible}
          customer={selectedCustomer}
          onSave={handleSave}
          onCancel={handleCancel}
        />
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
