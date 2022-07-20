import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, message } from "antd";
import ProductForm from "../../../components/admin/ProductForm";
import { pageTitle } from "../../../ultils";
import { products } from "../../../../db.json";
interface Props {}

const ProductEdit = (props: Props) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [fileList, setFileList] = React.useState<any[]>([]);

  const { id } = useParams();
  const product = products.find((item) => item._id === id);
  React.useEffect(() => {
    document.title = `Admin | Edit ${product?.name}`;
    pageTitle(`Edit Product`);
    if(product){
      setFileList(product?.image as any[]);
      form.setFieldsValue({
        ...product,
        categoryId: product.categoryId && product.categoryId._id,
        brandId: product.brandId && product.brandId._id,
      });
    }
  }, [product]);

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
        edit={true}
      />
    </div>
  );
};

export default ProductEdit;
