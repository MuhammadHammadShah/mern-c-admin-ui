import { useQuery } from "@tanstack/react-query";
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
import { getTenants } from "../../http/api";
import type { Tenant } from "../../store";

type ProductsFilterProps = {
  children?: React.ReactNode;
};

const ProductsFilter = ({ children }: ProductsFilterProps) => {
  // retrieve data from backend

  const { data: resturants } = useQuery({
    queryKey: ["resturants"],
    queryFn: () => {
      // TODO: add query parameter to it
      return getTenants();
    },
  });
  console.log(">>>>>>>>>>>>>>>", resturants?.data);
  //
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
              <Form.Item name="resturant">
                <Select
                  style={{ width: "100%" }}
                  allowClear={true}
                  placeholder="Select Resturant"
                >
                  {resturants?.data.data.map((resturant: Tenant) => {
                    return (
                      <Select.Option value={resturant.id}>
                        {resturant.name}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>

            {/*  */}

            <Col span={6}>
              <Form.Item name="category">
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
