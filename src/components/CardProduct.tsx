import React from "react";
import { Card } from 'primereact/card';
 
type Props = {};

const CardProduct = ({ data }: any) => {
  React.useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className="flex border-100">
      {data &&
        data.map((item: any, index: React.Key | null | undefined) => (
          <Card key={index} >
            <div className="">
              <p>{item?.name}</p>
              <p>{item?.price}</p>
              <img src={item?.img} alt="" width={'50px'} />
            </div>
          </Card>
        
        ))}
    </div>
  );
};

export default CardProduct;
