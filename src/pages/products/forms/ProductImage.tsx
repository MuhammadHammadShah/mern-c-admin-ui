import { Space, Upload, Form, type UploadProps, message, Typography } from "antd";

import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const ProductImage = () => {
  // for showing error pop-up
  const [messageApi, contextHolder] = message.useMessage();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const uploaderConfig: UploadProps = {
    name: "file",
    multiple: false,
    showUploadList: false,

    beforeUpload: (file) => {
      // validation logic

      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        messageApi.error("You can only upload Jpg/Png file");
      }

      //image
      setImageUrl(URL.createObjectURL(file));

      //todo size validation
      return false;
    },
  };
  return (
    <Form.Item
      label=""
      name="image"
      rules={[
        {
          required: true,
          message: "Upload the product Image please.",
        },
      ]}
    >
      <Upload listType="picture-card" {...uploaderConfig}>
        {contextHolder}
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          <Space direction="vertical">
            <PlusOutlined />
            <Typography.Text>Upload</Typography.Text>
          </Space>
        )}
      </Upload>
      
    </Form.Item>
  );
};

export default ProductImage;
