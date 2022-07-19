import React from "react";
import { sliders } from "../../db.json";
import Slider from "react-slick";
type Props = {};

const Sliders = (props: Props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear"
    };
    return (
        <div className="shadow-2  h-full " >
            <Slider {...settings}>
                {sliders &&
                    sliders.map((item, index) => (
                        <div key={index}>
                            <img
                                src={item?.image}
                                alt=""
                                className="h-20rem max-h-20rem w-full slick-vertical"
                            />
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default Sliders;
