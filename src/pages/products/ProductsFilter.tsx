import {
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Switch,
  Typography,
} from "antd";

type ProductsFilterProps = {
  children?: React.ReactNode;
};

const ProductsFilter = ({ children }: ProductsFilterProps) => {
  return (
    <Card>
      <Row justify="space-between">
        <Col span={16}>
          <Row gutter={20}>
            <Col span={6}>
              {/* here and there the prop `name` must be the same as in backend or else you will have conflict and things get tighter */}
              <Form.Item name="q">
                <Input.Search placeholder="Search" allowClear={true} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="rocategoryle">
                <Select
                  style={{ width: "100%" }}
                  allowClear={true}
                  placeholder="Select Category"
                >
                  <Select.Option value="pizza">Pizza</Select.Option>
                  <Select.Option value="beverage">Beverages</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            {/*  */}

            <Col span={6}>
              <Form.Item name="resturant">
                <Select
                  style={{ width: "100%" }}
                  allowClear={true}
                  placeholder="Select Resturant"
                >
                  <Select.Option value="Max">Pizza Max</Select.Option>
                  <Select.Option value="MAMA">Pizza MAMA</Select.Option>
                  <Select.Option value="Hot">Hot Pizza</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Space>
                <Switch defaultChecked onChange={() => {}} />
                <Typography.Text>Show only published</Typography.Text>
              </Space>
            </Col>

            {/* <Col span={8}>
              <Select
                style={{ width: "100%" }}
                allowClear={true}
                onChange={(SelectedItem) =>
                  onFilterChange("statusFilter", SelectedItem)
                }
                placeholder="Status"
              >
                <Select.Option value="ban">Ban</Select.Option>
                <Select.Option value="active">Active</Select.Option>
              </Select>
            </Col> */}
          </Row>
        </Col>
        <Col span={8} style={{ display: "flex", justifyContent: "end" }}>
          {children}
        </Col>
      </Row>
    </Card>
  );
};

export default ProductsFilter;
