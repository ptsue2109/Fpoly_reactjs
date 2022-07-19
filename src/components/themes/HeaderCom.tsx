import React from "react";
import styled from "styled-components";
import { SearchOutlined, WifiOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
interface Props {
  navBtnStatus: boolean
}

const HeaderCom = ({ navBtnStatus }: Props) => {
  const topNavArr = [
    {
      url: '#',
      text: 'Gọi mua hàng 190033532'
    },
    {
      url: '#',
      text: 'Cửa hàng gần bạn',
      icon: 'pi pi-map-marker'
    },
    {
      url: '/cart',
      text: 'Giỏ hàng',
      icon: 'pi pi-shopping-bag'
    },
    {
      url: '/tra-cuu-don',
      text: 'Tra cứu đơn hàng',
      icon: 'pi pi-map-marker'
    }
  ]
  return (
    <>
      <div className="flex justify-content-between  align-items-center bg-red-600 max-h-4rem text-white ">
        <div className="flex-0 flex justify-items-between gap-4 ml-7 px-3">
          <Link to={"/"}>
            <img
              src="https://res.cloudinary.com/asm-ph13269/image/upload/v1651872786/logopreload_dujfxg.png"
              className="max-w-2rem"
              alt=""
            />
          </Link>
        </div>
        <div className="flex-1 flex  justify-items-center align-items-center  m-2 px-5 py-3 border-round gap-3">
          <WrapperInput
            size="large"
            placeholder="Enter keyword.."
            prefix={<SearchOutlined />}
          />
        </div>
        {navBtnStatus == true ? (
          <NavBtn>
            <div className="flex-1 flex justify-content-start gap-3 top_nav-button">
              {topNavArr && topNavArr.map((item: any, index: any) => (
                <div className="top_nav-button--div" key={index}>
                  <i className={`${item?.icon} icon`}></i>
                  <Link to={item?.url} className="top_nav-buttonBox">{item?.text}</Link>
                </div>
              ))}
            </div>
          
          </NavBtn>
        ) : null}
      </div>
    </>
  );
};
const WrapperInput = styled(Input)`
  border: none;
  border-radius: 5px;
  width: 500px;
`;

const NavBtn = styled.div`
  .top_nav-button--div{
    
    border-radius:5px;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1),
    0px 1px 4px -1px rgba(0, 0, 0, 0.1);

    &:hover {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12),
      0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
  }
`;

export default HeaderCom;
