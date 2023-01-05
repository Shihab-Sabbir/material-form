import React from 'react'
import HorizontalTab from '../HorizontalTab/HorizontalTab';

function DashboardMiddlePart() {
  return (
    <div className='flex-1 h-full rounded-[5px]'>
      <div className='flex w-full justify-center'>
      <HorizontalTab/>
      </div>
      </div>
  )
}

export default DashboardMiddlePart;