"use client"; // This is a client component
import React, { useEffect } from "react";
import Navigation from "./Navigation";
import HourlyForecast from "./HourlyForecast";
import CurrentForecast from "./CurrentForecast";
import TenDayForeCast from "./TenDayForeCast";
import { useDispatch, useSelector } from "react-redux";
import {loadHourData} from './hourlyForecastData';
import {loadDailyData} from './dailyForecastData';
import fetchApiData from "./utils/fetchData";
function WeatherApp() {
  /*const location=useSelector((state)=>state.location.longitude);
    console.log(location);*/
  const dispatch = useDispatch();
  const longitude = useSelector((state) => state.location.longitude);
  const latitude = useSelector((state) => state.location.latitude);
  useEffect(() => {
    let param={
        location: latitude+","+ longitude,
        fields: [
          'temperature',
          'weatherCode',
          'temperatureApparent',
          'temperatureMax',
          'temperatureMin'
        ],
        units: 'metric',
        timesteps: ['1h'],
        startTime: 'now',
        endTime: 'nowPlus6h',
        timezone: 'America/New_York'
      }
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Accept-Encoding': 'gzip',
          'content-type': 'application/json'
        },
        body: JSON.stringify(param)
      };
      if(longitude){
        fetchApiData(options,dispatch,loadHourData)
      let newOptions={...options,body:JSON.stringify({...param,timesteps: ['1d'],endTime: 'nowPlus5d'})};
      fetchApiData(newOptions,dispatch,loadDailyData)
      }
      
    
  }, [longitude]);
  return (
    <main className="flex min-h-screen flex-col items-center p-8 sm:p-16 md:p-24 bg-blue-200 text-black" >
      <Navigation />
      <CurrentForecast />
      <HourlyForecast />
      <TenDayForeCast />
    </main>
  );
}

export default WeatherApp;
