import React from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "antd";
import { products } from "../../../../db.json";
import { columnsProList } from "../../../components/admin/dataTable";
import { pageTitle } from '../../../ultils'
interface DataType {
}

const data: DataType[] = products.map((item, index) => {
  return {
    key: index + 1,
    _id: item._id,
    name: item.name,
    displayPro: item.displayPro ?? "",
    cost: item.cost,
    image: item.image,
    categoryId: item?.categoryId?.cateName,
    stock: item?.stock,
  }
});

const ProductList = (props: DataType) => {

  React.useEffect(() => { document.title = "Admin | Products" ; pageTitle('Danh sách sản phẩm')}, []);

  return (
    <>
      <Button type="primary" style={{ marginBottom: "20px" }}>
        <Link to="add">Add Product</Link>
      </Button>
      <Table columns={columnsProList} dataSource={data} />
    </>
  );
}
export default ProductList;
