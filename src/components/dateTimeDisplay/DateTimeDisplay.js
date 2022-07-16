  
  import React from 'react';

  const DateTimeDisplay = ({ value, counter }) => {
    return (
        <span className={counter<=0 ? "flex items-center justify-center bg-red-500 text-white  text-sm font-semibold px-2 py-1 rounded mx-1" : "flex items-center justify-center bg-emerald-500 text-white  text-sm font-semibold px-2 py-1 rounded mx-1"}>
     {value}
    </span>
    );
  };
  
  export default DateTimeDisplay;
  
  
