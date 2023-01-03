import { Card, CardContent } from '@mui/material';
import React from 'react'


function DashboardRightPart() {
  return (
    <div className='min-w-[282px] bg-white h-full rounded-[5px] p-[27px]'>
<p>Company</p>
<div className='flex items-center gap-[8.25px]'>
  <img src="" className='w-[33px] h-[33px]' alt="" />
  <div className='flex flex-col'>
    <p>Google Inc.</p>
    <p>Logo www.google.com</p>
  </div>
</div>
<Card sx={{ width: 228,height:71 ,marginTop:'28px'}}>
      <CardContent>
      </CardContent>
    </Card>
      </div>
  )
}

export default DashboardRightPart;