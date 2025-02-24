import React,{useState} from "react";
import { useTranslation } from 'react-i18next';
import Button from "../../components/Button/button";
import Slider from "react-slick";
import TitleWithDescription from "../../components/TitleWithDescription/titleWithDescription";

const ServicesPresentation = () => {
    const { t } = useTranslation();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const servicesPresentation = t('servicesPresentation', { returnObjects: true });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ],
        // appendDots: dots => (
        //     <div>
        //         <ul className="bg-red"> {dots} </ul>
        //     </div>
        // ),
        // customPaging: i => (
        //     <div className="bg-green">
        //         {i + 1}
        //     </div>
        // )
    };

    const offers = Array.isArray(servicesPresentation.subparts) ? servicesPresentation.subparts.map((offer, index) => (
        <div key={index} className="p-4">
            <TitleWithDescription title={offer.title} text={offer.description} />
        </div>
    )) : [];

    return (
        <div className="w-page m-auto">
            <h2 className="text-4xl font-bold text-center mb-10">{servicesPresentation.title}</h2>
            {isDesktop ? <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {offers}
            </div> :
            <Slider {...settings} className="flex flex-col md:flex-row">
                {offers}
            </Slider>}
            <div className="mt-4 flex justify-center items-center">
                <Button text={servicesPresentation.buttonText} />
            </div>
        </div>
    );
}

export default ServicesPresentation;