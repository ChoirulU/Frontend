import React from "react";

const BUtton = ({ text, onClick, color }) => {
    return ( 
        <button
            onClick={onClick}
            className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
            {text}
        </button>
     );
}

export default BUtton;