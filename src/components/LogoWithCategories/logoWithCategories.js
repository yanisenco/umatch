import artists from "../../assets/images/actors/artists.png";
import influencers from "../../assets/images/actors/influencers.png";
import brands from "../../assets/images/actors/brands.png";
import esport from "../../assets/images/actors/esport.png";
import actors from "../../assets/images/actors/actors.png";
import labels from "../../assets/images/actors/labels.png";


const LogoWithCategories = () => {
  const categories = [
    { title: "Artists", color: "bg-yellow", image: artists, height: "h-[250px]" },
    { title: "Influencers Youtubers", color: "bg-dark-blue", image: influencers, height: "h-[450px]" },
    { title: "Brands", color: "bg-red", image: brands, height: "h-[400px]" },
    { title: "(E)Sport clubs", color: "bg-dark-blue", image: esport, height: "h-[600px]" },
    { title: "Actors", color: "bg-red", image: actors, height: "h-[450px]" },
    { title: "Labels", color: "bg-yellow", image: labels, height: "h-[200px]" }
  ];

  return (
    <div className="flex justify-center items-center gap-6 py-10">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`relative ${category.color} flex flex-col items-center justify-center p-4 rounded-full ${category.height} w-[130px]`}
        >
          <div className={`absolute ${index%2 ===0 ? "-top-6" : "-bottom-6"} w-24 h-24 rounded-full overflow-hidden`}>
            <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
          </div>
          <p className="text-white font-semibold text-center m-auto pt-4">
            {category.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LogoWithCategories;