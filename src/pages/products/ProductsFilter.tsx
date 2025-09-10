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
import { getCategories, getTenants } from "../../http/api";
import { useAuthStore, type Tenant } from "../../store";
import type { Category } from "../../types";

type ProductsFilterProps = {
  children?: React.ReactNode;
};

const ProductsFilter = ({ children }: ProductsFilterProps) => {
  const { user } = useAuthStore();
  // retrieve data from backend

  const { data: resturants } = useQuery({
    queryKey: ["resturants"],
    queryFn: () => {
      // TODO: add query parameter to it
      return getTenants();
    },
  });
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      // TODO: add query parameter to it
      return getCategories();
    },
  });

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

            {user!.role === "admin" && (
              <Col span={6}>
                <Form.Item name="resturant">
                  <Select
                    style={{ width: "100%" }}
                    allowClear={true}
                    placeholder="Select Resturant"
                  >
                    {resturants?.data.map((resturant: Tenant) => {
                      return (
                        <Select.Option value={resturant.id}>
                          {resturant.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>
            )}

            <Col span={6}>
              <Form.Item name="categoryId">
                <Select
                  style={{ width: "100%" }}
                  allowClear={true}
                  placeholder="Select Category"
                >
                  {categories?.data.map((category: Category) => {
                    return (
                      <Select.Option key={category._id}>
                        {category.name}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Space>
                <Form.Item name="isPublish">
                  <Switch defaultChecked onChange={() => {}} />
                </Form.Item>
                <Typography.Text style={{ marginBottom: 22, display: "block" }}>
                  Show only published
                </Typography.Text>
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
