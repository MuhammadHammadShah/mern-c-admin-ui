import { Breadcrumb, Button, Flex, Form, Space } from "antd";
import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ProductsFilter from "./ProductsFilter";

const Products = () => {
  const [filterForm] = Form.useForm();

  return (
    <>
      {/* breadcrumb */}
      <Space direction="vertical" style={{ width: "100%" }} size="large">
        <Flex justify="space-between">
          <Breadcrumb
            separator={<RightOutlined />}
            items={[
              { title: <Link to="/">Dashboard</Link> },
              {
                title: "Users",
              },
            ]}
          />
        </Flex>
        {/* filter */}
        <Form form={filterForm} onFieldsChange={() => {}}>
          <ProductsFilter>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => {}}>
              Add Product
            </Button>
          </ProductsFilter>
        </Form>
      </Space>
    </>
  );
};

export default Products;
