import React from "react";
import cardIllustration from "../../assets/illustrations/card-illustration.svg";

const PlanCard = ({title, price, features, id}) => {
    const play = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2"> 
            <g clipPath="url(#clip0_1158_710)">
                <path d="M7.752 5.43924L18.26 11.5692C18.3353 11.6133 18.3978 11.6763 18.4412 11.752C18.4846 11.8277 18.5074 11.9135 18.5074 12.0007C18.5074 12.088 18.4846 12.1737 18.4412 12.2494C18.3978 12.3251 18.3353 12.3882 18.26 12.4322L7.752 18.5622C7.67587 18.6067 7.58935 18.6302 7.5012 18.6304C7.41305 18.6306 7.32642 18.6075 7.25007 18.5634C7.17373 18.5194 7.11039 18.4559 7.06647 18.3795C7.02256 18.3031 6.99963 18.2164 7 18.1282V5.87124C6.99998 5.78326 7.02317 5.69684 7.06723 5.62069C7.11129 5.54454 7.17466 5.48136 7.25094 5.43754C7.32723 5.39372 7.41373 5.3708 7.5017 5.3711C7.58968 5.3714 7.67602 5.3949 7.752 5.43924Z" fill="#218380"/>
            </g>
            <defs>
                <clipPath id="clip0_1158_710">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
    const stop = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <g clipPath="url(#clip0_1158_716)">
                <path d="M15 7C15 6.73478 15.1054 6.48043 15.2929 6.29289C15.4804 6.10536 15.7348 6 16 6C16.2652 6 16.5196 6.10536 16.7071 6.29289C16.8946 6.48043 17 6.73478 17 7V17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18C15.7348 18 15.4804 17.8946 15.2929 17.7071C15.1054 17.5196 15 17.2652 15 17V7ZM7 7C7 6.73478 7.10536 6.48043 7.29289 6.29289C7.48043 6.10536 7.73478 6 8 6C8.26522 6 8.51957 6.10536 8.70711 6.29289C8.89464 6.48043 9 6.73478 9 7V17C9 17.2652 8.89464 17.5196 8.70711 17.7071C8.51957 17.8946 8.26522 18 8 18C7.73478 18 7.48043 17.8946 7.29289 17.7071C7.10536 17.5196 7 17.2652 7 17V7Z" fill="#9F9F9F"/>
            </g>
            <defs>
                <clipPath id="clip0_1158_716">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );

    const availableFeatures = features.map((feature, index) => (
        <li key={index} className="flex py-2">
            {(index >=2 && id===0 )|| (index >=3 && id===1) ? stop: play}
            <p className={`font-bold ${(index >=2 && id===0 )|| (index >=3 && id===1) ? "text-black-60": ""}`}>{feature}</p>
        </li>
    ));

    let headerColor = 'bg-yellow';
    switch (id) {
        case 1:
            headerColor = 'bg-red';
        break;        
        case 2:
            headerColor = 'bg-dark-blue';
        break;
        default:
            headerColor = 'bg-yellow';
        break;
    }

    return (
        <div className="bg-input-color rounded-lg shadow-lg">
            <div className={`flex h-[65px] ${headerColor} rounded-t-lg items-center`} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 10px))'}}>
                <h3 className={`absolute ml-2 text-lg uppercase font-bold ${id !==0 && "text-white"}`}>{title}</h3>
                <img src={cardIllustration} alt="cover" className="object-cover w-full h-full" />
            </div>
            <div className="p-3 ">
                <p className="my-3 ml-1 font-bold text-2xl uppercase">{id !==0 ? price+"/ month" : 'free'}</p>
                <ul>
                    {availableFeatures}
                </ul>
            </div>
        </div>
    );
}

export default PlanCard;