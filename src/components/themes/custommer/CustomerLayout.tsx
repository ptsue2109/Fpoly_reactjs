import React from "react";
import { Outlet } from "react-router-dom";
import Top_nav from "./components/Top_nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
interface Props {}

const CustomerLayout = (props: Props) => {
  return (
    <>
      <Top_nav />
      <Header/>
     <div className="container">
        <Outlet/>
     </div>
     {/* <Footer/> */}
    </>
  );
};

export default CustomerLayout;
