import React from "react";
import { sliders } from "../public/data.json";
import Slider from "react-slick";
type Props = {};

const Sliders = (props: Props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
    };
    return (
        <div>
            <Slider {...settings}>
                {sliders &&
                    sliders.map((item, index) => (
                        <div key={index}>
                            <img
                                src={item?.image}
                                alt=""
                                className="h-30rem max-h-30rem w-full "
                            />
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default Sliders;
