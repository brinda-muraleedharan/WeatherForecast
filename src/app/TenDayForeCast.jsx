import React from 'react'
import DayForecast from './DayForecast'
import { useSelector } from 'react-redux'

function TenDayForeCast() {
    let futureForeCast=useSelector((state)=>state.dailydata);
    console.log("futureForeCast")
    console.log(futureForeCast)
    let dayForecastComp=()=>{
        return futureForeCast.map((item)=><DayForecast key={item.day} temp={item}/>)
    }
  return (
    <div className='w-full m-5'>
        <span>6 day forecast</span>
        <div className='grid grid-flow-row grid-rows-10'>
            {dayForecastComp()}
        </div>
    </div>
  )
}

export default TenDayForeCast