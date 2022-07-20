import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "antd";
import { pageTitle } from '../../../ultils'
import BrandForm from '../../../components/admin/BrandForm';
type Props = {}

const BrandAdd = (props: Props) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [fileList, setFileList] = React.useState<any[]>([]);
  React.useEffect(() => {
    document.title = "Admin | Add Brand"
    pageTitle('Add Brand')
  }, []);
  const onFinish = async (values: any) => {
    console.log("values", values);
  };

  const onReset = () => {
    form.resetFields();
    setFileList([]);
  };

  return (
    <>

      <Button type="primary" style={{ marginBottom: "20px" }}>
        <Link to="/admin/brands">List  Brand</Link>
      </Button>
      <BrandForm
        onFinish={onFinish}
        form={form}
        fileList={fileList}
        setFileList={setFileList}
        onReset={onReset}
      />
    </>
  )
}

export default BrandAdd