import React from 'react'
import DashboadHeader from '../../components/DashboadHeader/DashboadHeader';
import DashboardLeftPart from '../../components/DashboardLeftPart/DashboardLeftPart';
import DashboardMiddlePart from '../../components/DashboardMiddlePart/DashboardMiddlePart';
import DashboardRightPart from '../../components/DashboardRightPart/DashboardRightPart';
import DashboardSidenav from '../../components/DashboardSidenav/DashboardSidenav'

function Dashboard() {
  return (
    <div className='max-w-[2500px] mx-auto relative'>
      <div className='flex items-center justify-center min-w-screen'>
      <div className='absolute top-0 left-0 z-20'>
      <DashboardSidenav/>
      </div>
      <div className='flex-1 md:ml-[775px] lg:ml-[690px] xl:ml-[437px] 2xl:ml-[260px] h-screen flex flex-col overflow-auto min-w-fit max-w-[2360px] mx-auto'>
       <div className='h-[70px] w-full'>
       <DashboadHeader/>
       </div>
       <div className='h-full flex justify-between p-[22px] bg-[#F2F7FA] gap-[26px] overflow-y-auto'>
       <DashboardLeftPart/>
        <DashboardMiddlePart/>
        <DashboardRightPart/>
       </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard;