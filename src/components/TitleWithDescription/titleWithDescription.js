import React from "react";


const TitleWithDescription = ({ title,text }) => {

    return (
        <>
            <h3 className="text-2xl font-bold text-dark-blue mb-4">{title}</h3>
            <p className="text-base">{text}</p>
        </>
    )
}

export default TitleWithDescription;