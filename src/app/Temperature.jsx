import React from 'react'
import WeatherIcon from './WeatherIcon';
import { useSelector } from 'react-redux';

function Temperature({dayData=34}) {
  console.log("brinda-->");
  return (
    <div className='flex-1 grid grid-rows-4 grid-flow-col p-10 justify-normal'>
        <span className='text-xs'>Now</span>
        <span className='text-5xl font-extrabold row-span-2'>{dayData.val} ° 
        <WeatherIcon code={dayData.code}/>
        </span>
        <span className='text-xs'> High {dayData.tempMax}°    Low {dayData.tempMin}°</span>
    </div>
  )
}

export default Temperature