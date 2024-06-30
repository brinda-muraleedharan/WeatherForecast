import React from 'react'
import getWeatherDict from './utils/weatherIconDict'
import { FaBeer } from "react-icons/fa";
import WeatherIcon from './WeatherIcon';
function DayForecast({temp}) {
  return (
    <div className='grid grid-col-3 grid-flow-col bg-slate-200 p-4 rounded-2xl m-1'>
        <span>{temp.day}</span>
        <span className='text-right ml-30 sm:ml-40'>
          <WeatherIcon code={temp.code}/>
          {/*getWeatherDict(temp.code)*/}</span>
        <span className='text-right'>{temp.tempMax}°/{temp.tempMin}°</span>
    </div>
  )
}

export default DayForecast