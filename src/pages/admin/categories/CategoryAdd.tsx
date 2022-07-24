import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "antd";
import { pageTitle } from '../../../ultils'
import CateForm from './../../../components/admin/CateForm';
import { useAppDispatch } from './../../../app/stores/hooks';
import {AsyncCreateCategories} from "../../../app/stores/thunks/cateThunk"
type Props = {}

const CategoryAdd = (props: Props) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [fileList, setFileList] = React.useState<any[]>([]);
  React.useEffect(() => {
    document.title = "Admin | Add Cate"
    pageTitle('Add Category')
  }, []);
  const onFinish = async (data: any) => {
    data.image= fileList;
    dispatch(AsyncCreateCategories(data))
  };

  const onReset = () => {
    form.resetFields();
    setFileList([]);
  };
  
  return (
    <>

      <Button type="primary" style={{ marginBottom: "20px" }}>
        <Link to="/admin/categories">List  Category</Link>
      </Button>
      <CateForm
        onFinish={onFinish}
        form={form}
        fileList={fileList}
        setFileList={setFileList}
        onReset={onReset}
      />
    </>
  )
}

export default CategoryAdd