import { Card, Col, Form, Input, Row, Select, Space } from "antd";

const UserForm = () => {
  return (
    <Row>
      <Col span={24}>
        <Space direction="vertical" size="large">
          {/* First Card >> Basic info */}
          <Card title="Basic User Info" variant="borderless">
            <Row gutter={20}>
              <Col span={12}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "First Name is required",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Last Name is required",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Email is required",
                    },
                    {
                      type: "email",
                      message: "Email is not valid",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
            </Row>
          </Card>
          {/* Second Card >> Security >> Password */}
          <Card title="Security" variant="borderless">
            <Row gutter={20}>
              <Col span={12}>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Password is required",
                    },
                  ]}
                >
                  <Input size="large" type="password" />
                </Form.Item>
              </Col>
            </Row>
          </Card>
          {/* Third Card >> Role >> Tenants */}
          <Card title="Role" variant="borderless">
            <Row gutter={20}>
              <Col span={12}>
                <Form.Item
                  label="Returant"
                  name="tenantId"
                  rules={[
                    {
                      required: true,
                      message: "Resturant is required",
                    },
                  ]}
                >
                  <Select
                    size="large"
                    style={{ width: "100%" }}
                    allowClear={true}
                    onChange={() => {}}
                    placeholder="Select Resturant"
                  >
                    <Select.Option value={1}>Resturant 1</Select.Option>
                    <Select.Option value={2}>Resturant 2</Select.Option>
                    <Select.Option value={3}>Resturant 3</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              {/*  */}

              <Col span={12}>
                <Form.Item
                  label="Role"
                  name="role"
                  rules={[
                    {
                      required: true,
                      message: "Role is required",
                    },
                  ]}
                >
                  <Select
                    size="large"
                    style={{ width: "100%" }}
                    allowClear={true}
                    onChange={() => {}}
                    placeholder="Select Role"
                  >
                    <Select.Option value="admin">Admin</Select.Option>
                    <Select.Option value="manager">Manager</Select.Option>
                    <Select.Option value="customer">Customer</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Space>
      </Col>
    </Row>
  );
};

export default UserForm;
