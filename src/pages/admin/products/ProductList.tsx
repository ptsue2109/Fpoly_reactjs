import React from "react";
import { Link } from "react-router-dom";
import { Button, Space, Table, Tag, Popconfirm } from "antd";
import { currencyFm, pageTitle } from '../../../ultils'
import TableCustom from "../../../components/admin/DataTable";
import { useAppSelector, useAppDispatch } from '../../../app/stores/hooks';
interface DataType {
}

const columnsProList: any = [
  {
    title: "IMAGE",
    dataIndex: "image",
    key: "image",
    render: (_: any, record: any) => (
      <Link to={`${record?._id}/edit`}>
        <img width="40px" src={record.image[0] ?? ""} alt="" />
      </Link>
    ),
  },
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
    render: (_: any, record: any) => (
      <div className="overflow-auto surface-overlay">
        <Link
          to={`${record?._id}/edit`}
          style={{ color: "#262626", height: "10px" }}
          className="hover:text-red-700"
        >
          {record?.name}
        </Link>
      </div>
    ),
  },
  {
    title: "COST",
    dataIndex: "cost",
    key: "cost",
    render: (_: any, record: any) => (
      <>
        {currencyFm.format(record?.cost)}
      </>
    ),
  },
  {
    title: "DISPLAY",
    dataIndex: "displayPro",
    key: "displayPro",
    render: (_: any, { displayPro }: any) => (
      <Tag
        color={displayPro == "active" ? "green" : "red"}
        key={displayPro >= "active" ? "geekblue" : "blue"}
      >
        {displayPro == "active" ? "Đang hiển thị" : "sản phẩm đang được ẩn"}
      </Tag>
    ),
  },
  {
    title: "STOCK",
    key: "stock",
    dataIndex: "stock",
    render: (_: any, { stock }: any) => (
      <Tag
        color={stock == 0 ? "red" : stock > 5 ? "green" : "warning"}
        key={stock >= 5 ? "geekblue" : "blue"}
      >
        {stock == 0 ? `hết hàng (${stock})` : stock > 5 ? `còn hàg(${stock}) ` : `sắp hết (${stock}) `}

      </Tag>
    ),
  },
  {
    title: "CATEGORY",
    dataIndex: "categoryId",
    key: "categoryId",
    render: (_: any, record: any) => <Link className="text-color hover:text-red-700" to={`/admin/categories/${record?._id}/edit`}>{record?.categoryId}</Link>,
  },
  {
    title: "BRANDS",
    dataIndex: "brandId",
    key: "brandId",
    render: (_: any, record: any) => <Link className="text-color hover:text-red-700" to={`/admin/brands/${record?._id}/edit`}>{record?.brandId}</Link>,
  },
  {
    title: "ACTION",
    key: "action",
    render: (_: any, record: any) => (
      <Space size="middle">
        <Button type="primary">
          <Link to={`${record._id}/edit`}>Edit</Link>
        </Button>
        <Popconfirm
          title={`Delete ${record.name}?`}
          okText="OK"
          cancelText="Cancel"
        >
          <Button type="dashed" danger>
            Delete
          </Button>
        </Popconfirm>
      </Space>
    ),
  },
]
const ProductList = (props: DataType) => {
  const {products} = useAppSelector(state => state.homeReducer);

  React.useEffect(() => { document.title = "Admin | Products"; pageTitle('Danh sách sản phẩm') }, []);

  const data: DataType[] = products.map((item, index) => {
    return {
      key: index + 1,
      _id: item._id,
      name: item.name,
      displayPro: item.displayPro ?? "",
      cost: item.cost,
      image: item.image,
      categoryId: item?.categoryId?.cateName,
      brandId: item?.brandId?.brandName,
      stock: item?.stock,
    }
  });
  return (
    <>
      <Button type="primary" style={{ marginBottom: "20px" }}>
        <Link to="add">Add Product</Link>
      </Button>
      <TableCustom column={columnsProList} data={data} />
    </>
  );
}
export default ProductList;
