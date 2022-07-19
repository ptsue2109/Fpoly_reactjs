import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "antd";
import ProductForm from "../../../components/admin/ProductForm";

interface Props {}

const ProductAdd = (props: Props) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [fileList, setFileList] = React.useState<any[]>([]);
  React.useEffect(() => {
    document.title = "Add Product";
  }, []);
  const onFinish = async (values: any) => {
    console.log("values", values);
  };
  const onReset = () => {
    form.resetFields();
    setFileList([]);
  };
  return (
    <div>
      <Button type="primary" style={{ marginBottom: "20px" }}>
        <Link to="/admin/products">List products</Link>
      </Button>
      <ProductForm
        onFinish={onFinish}
        form={form}
        fileList={fileList}
        setFileList={setFileList}
        onReset={onReset}
      />
    </div>
  );
};

export default ProductAdd;
