import { Table } from "antd";
import { Customer } from "../types/customer";
import { ColumnsType } from "antd/es/table";
import { FC } from "react";

interface CustomersTableProps {
  data: Customer[];
}

const CustomersTable: FC<CustomersTableProps> = ({ data }) => {
  const columns: ColumnsType<Customer> = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Active",
      dataIndex: "isActive",
      key: "isActive",
      render: (isActive) => (isActive ? "Yes" : "No"),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default CustomersTable;
