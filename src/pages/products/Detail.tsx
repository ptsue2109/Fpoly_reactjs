import { Breadcrumb, Button, Card, Divider } from "antd";
import React from "react";
import ImageGallery from "react-image-gallery";
import { products } from "../../../db.json";
import { Link, useParams } from "react-router-dom";
type Props = {};

const Detail = (props: Props) => {
  const { slug } = useParams();
  const productDetail = products.find((item) => item.slug === slug);
  const images = productDetail?.image.map((item:any, index:any) => (
    {
      original: item,
      thumbnail: item,
      key: index
    }
  ) );

  React.useEffect(() => {
    document.title = `${productDetail?.name}`;
  }, []);
 
  return (
    <>

      <div className="grid ">
        <div className="col-4">
          <Card>
            <ImageGallery
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
              items={images}
            />
          </Card>
        </div>
        <div className="col-8 bg-red-100">
          <div className="flex flex-column">
            <div className="flex-1">
              {/* Tên sản phẩm: {productDetail?.name}
              Giá sản phẩm: {productDetail?.cost}
              Số lượng trong kho: {productDetail?.stock}
              Id: {productDetail?._id} */}
              {/* {images?.map((item:any, index:any) =>{
                return <img key={index} src={item} alt="" />
              })} */}
            </div>
            <div className="flex-0">
              {/* <Button className="p-3" type="primary" danger>
                Mua ngay
              </Button>
              <Button type="primary">Thêm vào giỏ hàng</Button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
