import { FC } from "react";
import { Popconfirm, Table, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";

import StatusTag from "../../Tags";
import { Customer } from "../../../utils/types/customer";

import {
  EditOutlined,
  DeleteOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";

import "./styles.css";

interface CustomersTableProps {
  data: Customer[];
  onDelete(customer: Customer): void;
  onDisable(customer: Customer): void;
  onEdit(customer: Customer): void;
  onEnable(customer: Customer): void;
}

const CustomersTable: FC<CustomersTableProps> = ({
  data,
  onDelete,
  onDisable,
  onEdit,
  onEnable,
}) => {
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
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      render: (isActive) => <StatusTag active={isActive} />,
      filters: [
        {
          text: "Active",
          value: true,
        },
        {
          text: "Inactive",
          value: false,
        },
      ],
      onFilter: (value, customer) => customer.isActive === value,
    },
    {
      width: 120,
      key: "actions",
      render: (customer: Customer) => (
        <div className="table-actions-container">
          <Tooltip placement="top" title="Edit customer">
            <EditOutlined onClick={() => onEdit(customer)} />
          </Tooltip>
          <Popconfirm
            placement="bottomLeft"
            onConfirm={() => onDelete(customer)}
            title="Are you sure you want to delete this costumer?"
          >
            <Tooltip placement="top" title="Delete customer">
              <DeleteOutlined className="delete-icon" />
            </Tooltip>
          </Popconfirm>
          {customer.isActive ? (
            <Popconfirm
              placement="bottomLeft"
              onConfirm={() => onDisable(customer)}
              title="Are you sure you want to disable this costumer?"
            >
              <Tooltip placement="top" title="Disable customer">
                <LockOutlined />
              </Tooltip>
            </Popconfirm>
          ) : (
            <Popconfirm
              placement="bottomLeft"
              onConfirm={() => onEnable(customer)}
              title="Are you sure you want to enable this costumer?"
            >
              <Tooltip placement="top" title="Enable customer">
                <UnlockOutlined />
              </Tooltip>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default CustomersTable;
