import React from 'react'
import WeatherIcon from './WeatherIcon';
import { useSelector } from 'react-redux';

function Temperature({dayData=34,hourData=34}) {
  console.log("brinda-->");
  return (
    <div className='flex-1 grid grid-rows-4 grid-flow-col p-5 sm:p-10 justify-normal'>
        <span className='text-xs'>Now</span>
        <span className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold row-span-2'>{hourData.val} ° 
        <WeatherIcon code={hourData.code}/>
        </span>
        <span className='text-xs'> High {dayData.tempMax}°    Low {dayData.tempMin}°</span>
    </div>
  )
}

export default Temperature