import React from 'react'

function Description({dayData=34}) {
  return (
    <div className='grid grid-rows-2 grid-flow-row p-10'>
        <span className='text-right justify-end'>{dayData.desc}</span>
        <span>Feels like {dayData.tempFeel}°</span>
    </div>
  )
}

export default Description