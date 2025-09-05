import { Breadcrumb, Button, Drawer, Form, Space, Table, theme } from "antd";
import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import { Link, Navigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUser, getUsers } from "../../http/api";
import type { CreateUserData, User } from "../../types";
import { useAuthStore } from "../../store";
import UsersFilter from "./UsersFilter";
import { useState } from "react";
import UserForm from "./forms/UserForm";

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
  //
  const queryClient = useQueryClient();

  // get form data via antd useForm()

  const [form] = Form.useForm();

  // background color for drawer
  const {
    token: { colorBgLayout },
  } = theme.useToken();

  // state for drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  //
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

  // create User Mutation

  const { mutate: userMutate } = useMutation({
    mutationKey: ["users"],
    mutationFn: async (data: CreateUserData) =>
      createUser(data).then((res) => res.data),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      return;
    },
  });

  const { user } = useAuthStore();
  if (user?.role !== "admin") {
    return <Navigate to="/" replace={true} />;
  }

  // submit button functionality

  const onHandleSubmit = async () => {
    await form.validateFields();
    const values = form.getFieldsValue();
    // console.log("Sending to API:", values);
    await userMutate(values);
    setDrawerOpen(false);
  };

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
        >
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setDrawerOpen(true)}
          >
            Add User
          </Button>
        </UsersFilter>

        {/*  */}
        {users && (
          <div>
            <h1>Users</h1>
            <Table columns={columns} dataSource={users} rowKey="id" />;
            <Drawer
              title="Create User"
              width={720}
              styles={{ body: { background: colorBgLayout } }}
              open={drawerOpen}
              destroyOnHidden={true}
              onClose={() => {
                form.resetFields();
                setDrawerOpen(false);

                console.log("closing..........");
              }}
              extra={
                <Space>
                  <Button
                    onClick={() => {
                      form.resetFields();
                      setDrawerOpen(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="primary" onClick={onHandleSubmit}>
                    Submit
                  </Button>
                </Space>
              }
            >
              <Form layout="vertical" form={form}>
                <UserForm />
              </Form>
            </Drawer>
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
