"use client"; // This is a client component
import React, { useEffect } from "react";
import HourItem from "./HourItem";
import { useDispatch, useSelector } from "react-redux";

function HourlyForecast() {
  const hour = [1, 2, 3, 4, 5, 6];
  
  const hourDataValue=useSelector((state)=>state.hourlydata);
  
  
  let hourData = () => {
    
    return hourDataValue.map((item) => <HourItem temp={item}/>);
  };
  return (
    <div className="w-full">
      <span className="text-black px-5">Hourly forecast</span>

      <div className="flex bg-slate-200 rounded-3xl w-full">{hourData()}</div>
    </div>
  );
}

export default HourlyForecast;
