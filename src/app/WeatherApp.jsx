"use client"; // This is a client component
import React, { useEffect } from "react";
import Navigation from "./Navigation";
import HourlyForecast from "./HourlyForecast";
import CurrentForecast from "./CurrentForecast";
import TenDayForeCast from "./TenDayForeCast";
import { useDispatch, useSelector } from "react-redux";
import { loadHourData } from "./hourlyForecastData";
import { loadDailyData } from "./dailyForecastData";
import fetchApiData from "./utils/fetchData";
import { setErrorData, setLocationName } from "./errorStore";
import ManyRequest from "./ManyRequest";
import MainLayout from "./MainLayout";
function WeatherApp() {
  /*const location=useSelector((state)=>state.location.longitude);
    console.log(location);*/
  const dispatch = useDispatch();
  const longitude = useSelector((state) => state.location.longitude);
  const latitude = useSelector((state) => state.location.latitude);
  const locationValue = useSelector((state) => state.location.locationValue);
  const statusCode = useSelector((state) => state.errorData.statusCode);
  console.log(statusCode + "errorData");
  useEffect(() => {
    if (longitude) createRequest(true);
    else if (locationValue && locationValue.length != 0) createRequest(false);
  }, [longitude, locationValue]);
  let createRequest = (position) => {
    let param = {
      location: position ? latitude + "," + longitude : locationValue,

      units: "metric",
      timesteps: ["1h", "1d"],
      //timesteps:'1d',
      /*startTime: 'now',
      endTime: 'nowPlus6h',
      timezone: 'America/New_York'*/
    };
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "Accept-Encoding": "gzip",
        "content-type": "application/json",
      },
      //body: JSON.stringify(param)
    };
    console.log(new URLSearchParams(param).toString());
    const params = new URLSearchParams(param).toString();
    fetchApiData(
      options,
      dispatch,
      loadHourData,
      params,
      loadDailyData,
      setLocationName,
      setErrorData
    );
    /*let newOptions={...options,body:JSON.stringify({...param,timesteps: ['1d'],endTime: 'nowPlus5d'})};
      fetchApiData(newOptions,dispatch,loadDailyData)*/
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center p-8 sm:p-16 md:p-24 bg-blue-200 text-black">
      <Navigation />
     <MainLayout statusCode={statusCode}/>
    </main>
  );
}

export default WeatherApp;
