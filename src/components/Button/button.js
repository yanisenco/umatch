import React from "react";

const Button = ({ text, width }) => {
    return (
        <a 
            className={`bg-black hover:bg-black-80 text-white p-3 ${width ? width : "w-full max-w-80 px-10 py-3"} text-sm font-bold rounded-[10px] text-white uppercase flex items-center justify-center`}
            href={process.env.REACT_APP_CONNECTION_LINK}
            aria-label="Redirect to the connection page"
        >
            {text} 
        </a>
    )
}

export default Button;