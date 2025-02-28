import React,{useState} from "react";
import Slider from "react-slick";
import "./slider.css";


const SliderCustom = ({children}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        customPaging: (i) => {
            const colors = ["bg-yellow", "bg-dark-blue", "bg-red"];
            return (
                <div className="flex items-center justify-center h-6">
                    <span
                        className={`w-1 transition-all duration-300 rounded-full ${i === currentSlide ? "h-4 " + colors[i] : "h-2 bg-gray-400"}`}
                    ></span>
                </div>
            );
        },
    };

    return (
            <Slider {...settings} className="flex flex-col md:flex-row mb-10">
                    {children}
            </Slider>
    );
}

export default SliderCustom;