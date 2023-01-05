import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import { Tab } from '@mui/material';

function UserInfoTab() {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
const style = {
    fontSize :'12px',
    fontWeight:700,
    lineHeight : '20px',
    fontFamily : 'Inter',
    textTransform : 'none',
    color:'black'
};
  return (
     <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList 
          onChange={handleChange}
          sx={{
            '.MuiTabs-indicator':{
                backgroundColor:'#2142D9',
                height:'4px',
                borderRadius:' 5px 5px 0px 0px'
            }
          }}
          >
            <Tab style={style} label="Contact Info" value="1" />
            <Tab style={style} label="Address Info" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <div className="w-full h-20  flex flex-col gap-[17px]">
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-[500] text-[#9F9F9F]">E-mail</p>
                <p className="text-[12px] font-[700] text-[#2B2B2B]">Pattrick@example.com</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-[500] text-[#9F9F9F]">Phone</p>
                <p className="text-[12px] font-[700] text-[#2B2B2B]">(001) 546-8528</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-[500] text-[#9F9F9F]">Contact Owner</p>
                <p className="text-[12px] font-[700] text-[#2B2B2B]">James Dean</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-[500] text-[#9F9F9F]">Job Title</p>
                <p className="text-[12px] font-[700] text-[#2B2B2B]">Software Developer</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-[500] text-[#9F9F9F]">Annual Revenue</p>
                <p className="text-[12px] font-[700] text-[#2B2B2B]">$ 100,000</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value="2">
        <div className="w-full h-20 flex flex-col gap-[17px]">
              <p className='text-center'>Comming Soon ! </p>
            </div>
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default UserInfoTab;