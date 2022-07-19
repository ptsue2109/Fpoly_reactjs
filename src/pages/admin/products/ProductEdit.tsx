import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "antd";
import ProductForm from "../../../components/admin/ProductForm";
import { pageTitle } from '../../../ultils';
import { products } from "../../../../db.json"
interface Props { }

const ProductEdit = (props: Props) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [fileList, setFileList] = React.useState<any[]>([]);

  const { id } = useParams();
  const product = products.find(item => item._id === id);
  React.useEffect(() => {
    document.title = `Admin | Edit ${product?.name}`;
    pageTitle(`Edit Product`);
    form.setFieldsValue({ ...product, category: typeof product?.categoryId.cateName === "object" ? product?.categoryId._id : product?.categoryId.cateName });
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

export default ProductEdit;
