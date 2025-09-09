import { Breadcrumb, Flex, Space } from "antd";
import {  RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
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
      </Space>
    </>
  );
};

export default Products;
