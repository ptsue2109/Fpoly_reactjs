import { Link } from "react-router-dom";
import { Space,  Tag, Button, Popconfirm } from "antd";

export const columnsProList:any = [
  {
    title: "#",
    dataIndex: "key",
    key: "index",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (_: any, record: any) => (
      <Link to={`${record?._id}/edit`}>
        <img width="40px" src={record.image ?? ""} alt="" />
      </Link>
    ),
  },
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
    render: (_: any, record: any) => (
      <div className="overflow-auto surface-overlay">
        <Link
        to={`${record?._id}/edit`}
        style={{ color: "#262626", height: "10px" }}
      >
        {record?.name}
      </Link>
      </div>
    ),
  },
  {
    title: "cost",
    dataIndex: "cost",
    key: "cost",
  },
  {
    title: "display",
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
    title: "stock",
    key: "stock",
    dataIndex: "stock",
    render: (_: any, { stock }: any) => (
      <Tag
        color={stock == 0 ? "red" : stock > 5 ? "green" : "warning"}
        key={stock >= 5 ? "geekblue" : "blue"}
      >
        {stock == 0 ? "hết hàng" : stock > 5 ? "còn hàg" : "sắp hết"}
      </Tag>
    ),
  },
  {
    title: "Category",
    dataIndex: "categoryId",
    key: "categoryId",
    render: (_: any, record: any) => <span>{record?.categoryId}</span>,
  },
  {
    title: "Action",
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
];
