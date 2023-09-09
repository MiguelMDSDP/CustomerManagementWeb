import { Table } from "antd";
import { Customer } from "../types/customer";
import { ColumnsType } from "antd/es/table";

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

const data: Customer[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    isActive: true,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    isActive: true,
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob@example.com",
    isActive: true,
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Brown",
    email: "alice@example.com",
    isActive: false,
  },
  {
    id: 5,
    firstName: "Charlie",
    lastName: "Davis",
    email: "charlie@example.com",
    isActive: true,
  },
  {
    id: 6,
    firstName: "Ella",
    lastName: "Williams",
    email: "ella@example.com",
    isActive: false,
  },
  {
    id: 7,
    firstName: "David",
    lastName: "Anderson",
    email: "david@example.com",
    isActive: true,
  },
  {
    id: 8,
    firstName: "Olivia",
    lastName: "Martinez",
    email: "olivia@example.com",
    isActive: true,
  },
  {
    id: 9,
    firstName: "Sophia",
    lastName: "Lopez",
    email: "sophia@example.com",
    isActive: false,
  },
  {
    id: 10,
    firstName: "Liam",
    lastName: "Garcia",
    email: "liam@example.com",
    isActive: true,
  },
  {
    id: 41,
    firstName: "Isabella",
    lastName: "Adams",
    email: "isabella@example.com",
    isActive: false,
  },
  {
    id: 42,
    firstName: "Lucas",
    lastName: "Morris",
    email: "lucas@example.com",
    isActive: true,
  },
  {
    id: 43,
    firstName: "Mia",
    lastName: "Wright",
    email: "mia@example.com",
    isActive: true,
  },
  {
    id: 44,
    firstName: "Henry",
    lastName: "Turner",
    email: "henry@example.com",
    isActive: false,
  },
  {
    id: 45,
    firstName: "Ava",
    lastName: "Scott",
    email: "ava@example.com",
    isActive: true,
  },
  {
    id: 46,
    firstName: "Jackson",
    lastName: "Mitchell",
    email: "jackson@example.com",
    isActive: false,
  },
  {
    id: 47,
    firstName: "Sophia",
    lastName: "Perez",
    email: "sophia@example.com",
    isActive: true,
  },
  {
    id: 48,
    firstName: "Oliver",
    lastName: "Nelson",
    email: "oliver@example.com",
    isActive: true,
  },
  {
    id: 49,
    firstName: "Charlotte",
    lastName: "Hill",
    email: "charlotte@example.com",
    isActive: false,
  },
  {
    id: 50,
    firstName: "William",
    lastName: "Ramirez",
    email: "william@example.com",
    isActive: true,
  },
];

const CustomerTable = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default CustomerTable;
