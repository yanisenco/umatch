import React from "react";


const Button = ({ text }) => {

    return (
        <button 
            className="bg-black hover:bg-black-80 text-white px-10 py-3 w-96 text-sm font-bold m-auto rounded-[10px] text-white uppercase"
            onClick={() => console.log('Button clicked!')}
        >
            {text} 
        </button>
    )
}

export default Button;