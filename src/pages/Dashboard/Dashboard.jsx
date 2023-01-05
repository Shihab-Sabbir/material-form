import React from 'react'
import DashboadHeader from '../../components/DashboadHeader/DashboadHeader';
import DashboardLeftPart from '../../components/DashboardLeftPart/DashboardLeftPart';
import DashboardMiddlePart from '../../components/DashboardMiddlePart/DashboardMiddlePart';
import DashboardRightPart from '../../components/DashboardRightPart/DashboardRightPart';
import DashboardSidenav from '../../components/DashboardSidenav/DashboardSidenav'

function Dashboard() {
  return (
    <div className='max-w-[2000px] mx-auto relative'>
      <div className='flex items-center justify-center min-w-screen'>
      <div className='absolute top-0 left-0 z-20'>
      <DashboardSidenav/>
      </div>
      <div className='flex-1 ml-[260px] h-screen flex flex-col overflow-auto relative'>
       <div className='h-[70px] w-full fixed top-0 right-0 bg-white pl-[260px]'>
       <DashboadHeader/>
       </div>
       <div className='h-full mt-[70px] flex justify-between p-[22px] bg-[#F2F7FA] gap-[26px] border overflow-hidden min-w-fit'>
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