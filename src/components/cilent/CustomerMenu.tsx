import React from "react";
import {
  TabletOutlined,
  LaptopOutlined,
  MobileOutlined
} from "@ant-design/icons";
import { BsEarbuds, BsSmartwatch } from "react-icons/bs";
import { GrPlug } from 'react-icons/gr';
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { products } from "../../../db.json"
interface Props { }

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
type MenuItem = Required<MenuProps>["items"][number];


const items2: MenuItem[] = products?.map((itemC:any, index:any) =>(
  getItem(`${itemC?.categoryId?.cateName}`, index, <LaptopOutlined /> , [])
))


const items: MenuItem[] = [
  getItem("Điện thoại", '1', <MobileOutlined />, []),
  getItem("Máy tính", "2", <LaptopOutlined />, []),
  getItem("Laptop", "sub3", <TabletOutlined />, []),
  getItem("Tai Nghe", "sub4", <BsEarbuds />, []),
  getItem("Đồng Hồ", "sub5", <BsSmartwatch />, []),
  getItem("Phụ Kiện", "sub6", <GrPlug />, []),

];

const CustomerMenu: React.FC = () => (
  <Menu
    style={{ width: 200 }}
    mode="vertical"
    items={items}
    className="surface-100"
  />
)

export default CustomerMenu;
