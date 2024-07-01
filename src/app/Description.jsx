import React from 'react'
import { useSelector } from 'react-redux';

function Description({dayData=34,hourData=34}) {
  const locationName=useSelector((state)=>state.errorData.locationName);
  console.log(locationName+"location")
  return (
    <div className='grid grid-rows-6 grid-flow-row p-10'>
        <span className='text-right'>{dayData.desc}</span>
        <span className='text-right'>Feels like {hourData.tempFeel}°</span>
        <span className='italic row-span-3'>{locationName}</span>
    </div>
  )
}

export default Description