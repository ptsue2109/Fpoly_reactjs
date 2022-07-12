import React from "react";
// import { Avatar } from 'primereact/avatar';
import { Badge } from "primereact/badge";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Image, Menu, message } from "antd";
import { useAppDispatch, useAppSelector } from "../../../../app/stores/hooks";
import { clearState } from "../../../../app/stores/slices/authSlice";
interface Props {}

const Header = (props: Props) => {
  const { userInfo } = useAppSelector((state) => state.authReducer);
  console.log("home", userInfo);

  const dispatch = useAppDispatch();
  const menu = userInfo ? (
    <Menu>
      <Menu.Item key={1}>
        <Link to={"/admin"}>Admin</Link>
      </Menu.Item>
      <Menu.Item key={2}>
        <Link to={"/profile"}>Profile</Link>
      </Menu.Item>
      <Menu.Item
      key={3}
        onClick={() => {
          dispatch(clearState());

          message.success("Logout success");
        }}
      >
        Logout
      </Menu.Item>
    </Menu>
  ) : (
    <Menu>
      <Menu.Item key={1}>
        <Link to={"/login"}>Login</Link>
      </Menu.Item>
      <Menu.Item key={2}>
        <Link to={"/register"}>Register</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="flex justify-content-between bg-white align-items-center max-h-7rem">
        <div className="flex-auto flex justify-items-center justify-content-center">
          <form id="form" action="/tim-kiem">
            <input
              type="text"
              name="q"
              placeholder="Enter keyword.."
              className="p-2 w-18rem border-gray-100 outline-none hover:border-gray-100 focus:gray-100 active:border-gray-100"
            />
            <button className="p-2 border-300 cursor-pointer bg-red-600">
              <i className="pi pi-search text-white"></i>
            </button>
          </form>
        </div>
        <div className="flex-auto flex  justify-content-center m-2 px-5 py-3 border-round align-items-center gap-3">
          <Link to={"/"}>
            <img
              src="https://theme.hstatic.net/200000343865/1000796725/14/logo.png?v=451"
              alt=""
            />
          </Link>
        </div>
        <div className="flex-auto flex justify-content-center align-items-center  gap-3">
          <div className="menu">
            <Dropdown
              overlay={menu}
              placement="bottom"
              arrow={{ pointAtCenter: true }}
            >
              <Avatar
                src={
                  userInfo?.image ??
                  "https://banner2.cleanpng.com/20180908/ri/kisspng-clip-art-computer-icons-portable-network-graphics-personal-id-svg-png-icon-free-download-14-422-5b93d3459eda10.0094154415364145336507.jpg"
                }
              />
            </Dropdown>
          </div>

          <Link to={"/"} className="no-underline">
            <i
              className="pi pi-heart mr-4 p-text-secondary p-overlay-badge"
              style={{ fontSize: "1.5rem" }}
            >
              <Badge value="0"></Badge>
            </i>{" "}
          </Link>
          <Link to={"/"} className="no-underline">
            <i
              className="pi pi-shopping-cart mr-4 p-text-secondary p-overlay-badge"
              style={{ fontSize: "1.6rem" }}
            >
              <Badge value="0"></Badge>
            </i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
