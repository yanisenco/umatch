import React from "react";
import { useTranslation } from 'react-i18next';
import artists from "../../assets/images/actors/artists.png";
import influencers from "../../assets/images/actors/influencers.png";
import brands from "../../assets/images/actors/brands.png";
import esport from "../../assets/images/actors/esport.png";
import actors from "../../assets/images/actors/actors.png";
import labels from "../../assets/images/actors/labels.png";

const LogoWithCategories = () => {
  const { t } = useTranslation();
  const categories = [
    { title: t('actorSection.artists'), textColor: "text-black", color: "bg-yellow", image: artists, height: "md:h-[250px]", width: "w-[142px]" },
    { title: t('actorSection.influencers'), color: "bg-dark-blue", image: influencers, height: "md:h-[450px]", width: "w-[255px]" },
    { title: t('actorSection.brands'), color: "bg-red", image: brands, height: "md:h-[400px]", width: "w-[225px]" },
    { title: t('actorSection.eSport'), color: "bg-dark-blue", image: esport, height: "md:h-[600px]", width: "w-[310px]" },
    { title: t('actorSection.actors'), color: "bg-red", image: actors, height: "md:h-[450px]", width: "w-[255px]" },
    { title: t('actorSection.labels'), textColor: "text-black", color: "bg-yellow", image: labels, height: "md:h-[200px]", width: "w-[113px]" }
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 py-10">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`relative ${category.color} flex flex-col items-center justify-center p-4 rounded-full h-[70px] ${category.height} ${category.width} md:w-[130px]`}
        >
          <div className={`absolute ${index % 2 === 0 ? "-left-6 md:-top-6 md:left-auto" : "-right-6 md:-bottom-6 md:right-auto"} w-14 md:w-24 rounded-full overflow-hidden`}>
            <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
          </div>
          <p className={`${category.textColor ? category.textColor : "text-white"} font-semibold text-center flex items-center justify-center h-full`}>
            {category.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LogoWithCategories;