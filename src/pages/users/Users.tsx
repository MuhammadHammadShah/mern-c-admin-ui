import { Breadcrumb, Space, Table } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../http/api";
import type { User } from "../../types";
import { useAuthStore } from "../../store";
import UsersFilter from "./UsersFilter";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },

  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    render: (_text: string, record: User) => {
      return (
        <div>
          {record.firstName} {record.lastName}
        </div>
      );
    },
  },
  // {
  //   title: "First Name",
  //   dataIndex: "firstName",
  //   key: "firstName",
  //   render: (text: string) => <Link to={`/users/${text}`}>{text}</Link>,
  // },
  // {
  //   title: "Last Name",
  //   dataIndex: "lastName",
  //   key: "lastName",
  // },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
];

const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return getUsers().then((res) => res.data.data);
    },
  });

  const { user } = useAuthStore();
  if (user?.role !== "admin") {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }} size="large">
        <Breadcrumb
          separator={<RightOutlined />}
          items={[
            { title: <Link to="/">Dashboard</Link> },
            {
              title: "Users",
            },
          ]}
        />
        {isLoading && <div>Loading........</div>}
        {isError && <div>{error.message}</div>}

        <UsersFilter
          onFilterChange={(filterName: string, filterValue: string) => {
            console.log(filterName, filterValue);
          }}
        />

        {/*  */}
        {users && (
          <div>
            <h1>Users</h1>
            <Table columns={columns} dataSource={users} rowKey="id" />;
            {/* <ul>
            {users.map((user: User) => (
              <li key={user.id}>{user.firstName}</li>
            ))}
          </ul> */}
          </div>
        )}
      </Space>
    </>
  );
};

export default Users;
