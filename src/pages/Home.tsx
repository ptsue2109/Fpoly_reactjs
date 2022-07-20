import React from "react";
import CardProduct from "../components/CardProduct";
import { useAppDispatch, useAppSelector } from "../app/stores/hooks";
import { Card } from "antd";
import { _access } from "../../db.json";
import Access from "../components/cilent/Access";
import Navbar from "../components/themes/custommer/components/Navbar";
type Props = {};

const Home = (props: Props) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(state => state.homeReducer);
  React.useEffect(() => {
    document.title = "CELLPHONES";
  }, [dispatch]);

  return (
    <>
      <Navbar sliderStatus={false} />
      <Card className="mt-5"><h2 className="mx-3 my-5">Điện thoại nổi bật</h2><CardProduct data={products} /></Card>
      <Card className="w-full mt-5"><h2 className="mx-3 my-5">Sản phẩm bán chạy</h2><CardProduct data={products} /></Card>
      <div className="border-black-custom">
        <h2 className="mx-3 my-5">Phụ kiện</h2>
        <Access data={_access} />
      </div>
    </>
  );
};

export default Home;

