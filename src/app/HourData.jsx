import React from "react";
import WeatherIcon from "./WeatherIcon";

function HourData({temp}) {
  return (
    <div className="grid grid-rows-3 grid-flow-col">
      <div className="align-text-bottom">{temp.val}
      <span>°</span>
      </div>
      <div className="text-right"><WeatherIcon code={temp.code}/></div>
      <div className='text-xs'>{temp.time}</div>
    </div>
  );
}

export default HourData;
