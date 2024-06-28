import React from "react";
import HourData from "./HourData";

function HourItem({temp}) {
  return (
    
      <div className="flex-1 w-32 text-center text-black" key={temp.time}><HourData temp={temp}/></div>
    
  );
}

export default HourItem;
