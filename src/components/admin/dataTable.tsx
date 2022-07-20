// import { Link } from "react-router-dom";
// import { Space, Tag, Button, Popconfirm } from "antd";
// import { currencyFm } from "../../ultils";
// export const columnsProList: any = [
//   {
//     title: "#",
//     dataIndex: "key",
//     key: "index",
//   },
//   {
//     title: "IMAGE",
//     dataIndex: "image",
//     key: "image",
//     render: (_: any, record: any) => (
//       <Link to={`${record?._id}/edit`}>
//         <img width="40px" src={record.image[0] ?? ""} alt="" />
//       </Link>
//     ),
//   },
//   {
//     title: "NAME",
//     dataIndex: "name",
//     key: "name",
//     render: (_: any, record: any) => (
//       <div className="overflow-auto surface-overlay">
//         <Link
//           to={`${record?._id}/edit`}
//           style={{ color: "#262626", height: "10px" }}
//           className="hover:text-red-700"
//         >
//           {record?.name}
//         </Link>
//       </div>
//     ),
//   },
//   {
//     title: "COST",
//     dataIndex: "cost",
//     key: "cost",
//     render: (_: any, record: any) => (
//       <>
//         {currencyFm.format(record?.cost)}
//       </>
//     ),
//   },
//   {
//     title: "DISPLAY",
//     dataIndex: "displayPro",
//     key: "displayPro",
//     render: (_: any, { displayPro }: any) => (
//       <Tag
//         color={displayPro == "active" ? "green" : "red"}
//         key={displayPro >= "active" ? "geekblue" : "blue"}
//       >
//         {displayPro == "active" ? "Đang hiển thị" : "sản phẩm đang được ẩn"}
//       </Tag>
//     ),
//   },
//   {
//     title: "STOCK",
//     key: "stock",
//     dataIndex: "stock",
//     render: (_: any, { stock }: any) => (
//       <Tag
//         color={stock == 0 ? "red" : stock > 5 ? "green" : "warning"}
//         key={stock >= 5 ? "geekblue" : "blue"}
//       >
//         {stock == 0 ? `hết hàng (${stock})` : stock > 5 ? `còn hàg(${stock}) ` : `sắp hết (${stock}) `}

//       </Tag>
//     ),
//   },
//   {
//     title: "CATEGORY",
//     dataIndex: "categoryId",
//     key: "categoryId",
//     render: (_: any, record: any) => <Link className="text-color hover:text-red-700" to={`/admin/categories/${record?._id}/edit`}>{record?.categoryId}</Link>,
//   },
//   {
//     title: "BRANDS",
//     dataIndex: "brandId",
//     key: "brandId",
//     render: (_: any, record: any) => <Link className="text-color hover:text-red-700" to={`/admin/brands/${record?._id}/edit`}>{record?.brandId}</Link>,
//   },
//   {
//     title: "ACTION",
//     key: "action",
//     render: (_: any, record: any) => (
//       <Space size="middle">
//         <Button type="primary">
//           <Link to={`${record._id}/edit`}>Edit</Link>
//         </Button>
//         <Popconfirm
//           title={`Delete ${record.name}?`}
//           okText="OK"
//           cancelText="Cancel"
//         >
//           <Button type="dashed" danger>
//             Delete
//           </Button>
//         </Popconfirm>
//       </Space>
//     ),
//   },
// ];


// export const columnCateList: any = [
//   {
//     title: "#",
//     dataIndex: "key",
//     key: "index",
//   },
//   {
//     title: "IMAGE",
//     dataIndex: "image",
//     key: "image",
//     render: (_: any, record: any) => (
//       <Link to={`${record?._id}/edit`}>
//         <img width="140px" src={record.image ?? ""} alt="" />
//       </Link>
//     ),
//   },
//   {
//     title: "DISPLAY",
//     dataIndex: "status",
//     key: "status",
//     render: (_: any, { status }: any) => (
//       <Tag
//         color={status == "active" ? "green" : "red"}
//         key={status >= "active" ? "geekblue" : "blue"}
//       >
//         {status == "active" ? "Đang hiển thị" : "sản phẩm đang được ẩn"}
//       </Tag>
//     ),
//   },
//   {
//     title: "NAME",
//     dataIndex: "cateName",
//     key: "cateName",
//     render: (_: any, record: any) => (
//       <div className="overflow-auto surface-overlay">
//         <Link
//           to={`${record?._id}/edit`}
//           style={{ color: "#262626", height: "10px" }}
//           className="hover:text-red-700"
//         >
//           {record?.cateName}
//         </Link>
//       </div>
//     ),
//   },
//   {
//     title: "ACTION",
//     key: "action",
//     render: (_: any, record: any) => (
//       <Space size="middle">
//         <Button type="primary">
//           <Link to={`${record._id}/edit`}>Edit</Link>
//         </Button>
//         <Popconfirm
//           title={`Delete ${record.catename}?`}
//           okText="OK"
//           cancelText="Cancel"
//         >
//           <Button type="dashed" danger>
//             Delete
//           </Button>
//         </Popconfirm>
//       </Space>
//     ),
//   },
// ];

// export const BrandsList: any = [
//   {
//     title: "#",
//     dataIndex: "key",
//     key: "index",
//   },
//   {
//     title: "IMAGE",
//     dataIndex: "image",
//     key: "image",
//     render: (_: any, record: any) => (
//       <Link to={`${record?._id}/edit`}>
//         <img width="40px" src={record.image ?? ""} alt="" />
//       </Link>
//     ),
//   },
//   {
//     title: "DISPLAY",
//     dataIndex: "status",
//     key: "status",
//     render: (_: any, { status }: any) => (
//       <Tag
//         color={status == "active" ? "green" : "red"}
//         key={status >= "active" ? "geekblue" : "blue"}
//       >
//         {status == "active" ? "Đang hiển thị" : "sản phẩm đang được ẩn"}
//       </Tag>
//     ),
//   },
//   {
//     title: "NAME",
//     dataIndex: "brandName",
//     key: "brandName",
//     render: (_: any, record: any) => (
//       <div className="overflow-auto surface-overlay">
//         <Link
//           to={`${record?._id}/edit`}
//           style={{ color: "#262626", height: "10px" }}
//           className="hover:text-red-700"
//         >
//           {record?.brandName}
//         </Link>
//       </div>
//     ),
//   },
//   {
//     title: "ACTION",
//     key: "action",
//     render: (_: any, record: any) => (
//       <Space size="middle">
//         <Button type="primary">
//           <Link to={`${record._id}/edit`}>Edit</Link>
//         </Button>
//         <Popconfirm
//           title={`Delete ${record.brandName}?`}
//           okText="OK"
//           cancelText="Cancel"
//         >
//           <Button type="dashed" danger>
//             Delete
//           </Button>
//         </Popconfirm>
//       </Space>
//     ),
//   },
// ];

// export const columnUserList: any = [
//   {
//     title: "#",
//     dataIndex: "key",
//     key: "index",
//   },
//   {
//     title: "IMAGE",
//     dataIndex: "image",
//     key: "image",
//     render: (_: any, record: any) => (
//       <Link to={`${record?._id}/edit`}>
//         <img width="40px" src={record.image ?? "https://banner2.cleanpng.com/20180428/sue/kisspng-pittman-animal-hospital-user-computer-icons-avatar-5ae4937a25a0b7.9399757315249294021541.jpg"} alt="" />
//       </Link>
//     ),
//   },
//   {
//     title: "DISPLAY",
//     dataIndex: "status",
//     key: "status",
//     render: (_: any, { status }: any) => (
//       <Tag
//         color={status == "active" ? "green" : "red"}
//         key={status >= "active" ? "geekblue" : "blue"}
//       >
//         {status == "active" ? "active" : "hidden"}
//       </Tag>
//     ),
//   },
//   {
//     title: "ROLE",
//     dataIndex: "role",
//     key: "role",
//     render: (_: any, { role }: any) => (
//       <p>{role == "admin" ? 'admin' : 'user'}</p>
//     )

//   },
//   {
//     title: "NAME",
//     dataIndex: "username",
//     key: "username",
//     render: (_: any, record: any) => (
//       <div className="overflow-auto surface-overlay">
//         <Link
//           to={`${record?._id}/edit`}
//           style={{ color: "#262626", height: "10px" }}
//           className="hover:text-red-700"
//         >
//           {record?.username}
//         </Link>
//       </div>
//     ),
//   },
//   {
//     title: "Phone",
//     dataIndex: "phoneNumber",
//     key: "phoneNumber"
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address"
//   },
//   {
//     title: "ACTION",
//     key: "action",
//     render: (_: any, record: any) => (
//       <Space size="middle">
//         <Button type="primary">
//           <Link to={`${record._id}/edit`}>Edit</Link>
//         </Button>
//         <Popconfirm
//           title={`Delete ${record.brandName}?`}
//           okText="OK"
//           cancelText="Cancel"
         
//         >
//           <Button type="dashed" danger>
//             Delete
//           </Button>
//         </Popconfirm>
//       </Space>
//     ),
//   },
// ];




import React from "react";
import { Empty, Table } from "antd";
import styled from "styled-components";

const TableWrapper = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 6px;
    overflow: hidden;
    width: 100%;

    & .ant-table-content {
        min-height: 465px;

        &::-webkit-scrollbar {
            height: 6px;
        }
        &::-webkit-scrollbar-thumb {
            background: var(--ant-primary-color);
        }

        & .ant-table-thead > tr > th {
            background-color: #f2f2f2;
        }
    }

    & .ant-table-row td:first-child {
        text-align: center;
    }

    & .ant-table-empty {
        & .ant-table-tbody > tr > td {
            border-bottom: 0;
        }

        & table {
            min-height: 430px;
        }
    }
    & .ant-pagination {
        margin-right: 16px;
        margin-left: 16px;
    }

    & .ant-table.ant-table-small .ant-table-thead > tr > th,
    .ant-table.ant-table-small .ant-table-tbody > tr > td {
        padding: 8px 16px;
    }

    & .ant-pagination.mini .ant-pagination-item,
    & .ant-pagination.mini .ant-pagination-prev,
    & .ant-pagination.mini .ant-pagination-next {
        min-width: 32px;
        height: 32px;
        line-height: 30px;
    }
`;

interface DataTableProps {
    column: any[];
    data?: any[];
    scrollWidth?: number;
    size?: "small" | "middle" | "large";
    loading?: boolean;
}

const DataTable = ({ data, column, scrollWidth, size = "small", loading = false }: DataTableProps) => {
    return (
        <>
            <TableWrapper>
                <Table
                    dataSource={data?.map((item, index) => {
                        return { ...item, key: index + 1 };
                    })}
                    columns={[
                        {
                            title: "STT",
                            dataIndex: "key",
                            width: 60,
                        },
                        ...column,
                    ]}
                    scroll={scrollWidth ? { x: scrollWidth } : {}}
                    size={size}
                    locale={{
                        emptyText: (
                            <div style={{ padding: "16px 0 0" }}>
                                <Empty description="Không tìm thấy dữ liệu" image={Empty.PRESENTED_IMAGE_SIMPLE} />
                            </div>
                        ),
                    }}
                    loading={loading}
                />
            </TableWrapper>
        </>
    );
};

export default DataTable;