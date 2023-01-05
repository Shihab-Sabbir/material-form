import React, { useState } from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import { Tab } from "@mui/material";
import Filter from "../Filter/Filter";
import ActivityTabAccordion from "../ActivityTabAccordion/ActivityTabAccordion";
function HorizontalTab() {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "20px",
    fontFamily: "Inter",
    textTransform: "none",
    color: "black",
    zIndex: "1",
    maxHeight: "41px",
    display: "flex",
    alignItems: "center",
  };
  return (
    <Box sx={{ width: "100%", typography: "body1",fontFamily:'Inter'}}>
      <TabContext value={value} sx={{ height: "41px" ,width: "100%",}}>
        <Box sx={{ 
          width: "100%",background: "#ECEEF0", borderRadius: "5px",
                display:'flex',
                justifyContent:'center'}}
                >
          <TabList
            onChange={handleChange}
            sx={{
              ".MuiTabs-indicator": {
                backgroundColor: "#FFFFFF",
                height: "100%",
                borderRadius: "5px",
                zIndex: "0",
                boxShadow: "2px 5px 14px rgba(0, 0, 0, 0.06)",
                border: "1px solid #E2E2E2",
                marginTop: "-8px"
              },
            }}
          >
            <Tab style={style} label="Activitiy" value="1" />
            <Tab style={style} label="Notes" value="2" />
            <Tab style={style} label="E-mails" value="3" />
            <Tab style={style} label="Calls" value="4" />
            <Tab style={style} label="Task" value="5" />
            <Tab style={style} label="Meeting" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: "0",width:'100%'}}>
          <div className="mt-[31px] max-w-full mx-auto">
            <Filter />
            <p className="text-[12px] text-[#2B2B2B] font-[600] pt-[23px] pb-[14px]">Upcoming Campaign</p>
            <ActivityTabAccordion/>
          </div>
        </TabPanel>
        <TabPanel value="2" sx={{ padding: "0",width:'100%'}}>
          <div className="mt-[31px] max-w-full mx-auto">
           <p className="text-center font-bols text-xl">Comming Soon ! </p>
          </div>
        </TabPanel>
        <TabPanel value="3">
        <div className="w-full h-20 flex flex-col gap-[17px]">
              <p className='text-center font-bols text-xl'>Comming Soon ! </p>
            </div>
        </TabPanel>
        <TabPanel value="4">
        <div className="w-full h-20 flex flex-col gap-[17px]">
              <p className='text-center font-bols text-xl'>Comming Soon ! </p>
            </div>
        </TabPanel>
        <TabPanel value="5">
        <div className="w-full h-20 flex flex-col gap-[17px]">
              <p className='text-center font-bols text-xl'>Comming Soon ! </p>
            </div>
        </TabPanel>
        <TabPanel value="6">
        <div className="w-full h-20 flex flex-col gap-[17px]">
              <p className='text-center font-bols text-xl'>Comming Soon ! </p>
            </div>
        </TabPanel>
      </TabContext>
      
    </Box>
  );
}

export default HorizontalTab;
