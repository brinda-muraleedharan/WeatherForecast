import React from 'react'
import Temperature from './Temperature'
import Description from './Description'
import { useSelector } from 'react-redux';

function CurrentForecast() {
  const dayData=useSelector((state)=>state.dailydata);
  return (
    <div className='flex justify-items-center text-black w-full'>
        <Temperature dayData={dayData[0]}/>
        <Description dayData={dayData[0]}/>
    </div>
  )
}

export default CurrentForecast