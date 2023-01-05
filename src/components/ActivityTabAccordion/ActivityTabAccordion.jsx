import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import calenderLogo from "../../asset/calenderLogo.png";
import calenderLogoBW from "../../asset/calenderLogoBW.png";
import dotLogo from "../../asset/dotLogo.png";
import './activityStyle.css'

import {
  FormControlLabel,
  Radio,
} from "@mui/material";
import CampaignFilter from "../CampaignFilter/CampaignFilter";

function ActivityTabAccordion() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="max-h-[685px] overflow-y-auto overflow-x-hidden activityScroll">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{ boxShadow: "2px 5px 14px rgba(0, 0, 0, 0.06)", marginBottom: "14px",borderRadius:'5px',maxHeight:'226px' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#9F9F9F" }} />}
          sx={{
            flexDirection: "row-reverse",
            borderBottom: "1px solid #F0F0F0",
            height:'41.5px',
            '.MuiButtonBase-root .MuiAccordionSummary-root .Mui-expanded .MuiAccordionSummary-gutters':{maxHeight:'41.5px'}
          }}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="flex items-center justify-between pl-[12px] w-full">
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-[10px]">
              <img src={calenderLogo} className='w-[18px] h-[18px]' alt="" />
              <p className="text-[#2B2B2B] font-bold text-[11px] w-[179px]">
                Campaigns <span className="font-[400]">created</span> James Dean
              </p>
              </div>
              <div className="leading-[20px] text-[8px] flex items-center font-[500] text-[#676767] gap-[30px]">
               <div className="flex items-center min-w-fit">
               <p>Due</p> <img src={calenderLogoBW} className='w-[10px] h-[10px] mx-[5px]' /> <p>Today 12:00pm</p>
               </div>
               <img src={dotLogo} alt="" />
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="pl-2">
            <FormControlLabel
              value="female"
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: "14px",
                    },
                  }}
                />
              }
              label="Prepare quote for Pattrick Leach"
              sx={{
                ".MuiFormControlLabel-label": {
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#2B2B2B",
                  paddingLeft:'10px'
                },
              }}
            />
            <div className="px-[30px]">
              <p className="leading-[14px] text-[10px] font-[500] text-[#676767] pb-[25px] w-[437px]">
                Lorem ipsum may be used as a placeholder before final copy is
                available. Lorem ipsum may be used as a placeholder before final
                copy is available.
              </p>
              <div className="w-[437px] h-[58px] rounded-[5px] border border-[1px solid #E3E3E3] px-[17px] py-[9px] overflow-hidden">
                <CampaignFilter />
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{ boxShadow: "2px 5px 14px rgba(0, 0, 0, 0.06)", marginBottom: "14px",borderRadius:'5px',maxHeight:'226px' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#9F9F9F" }} />}
          sx={{
            flexDirection: "row-reverse",
            borderBottom: "1px solid #F0F0F0",
            height:'41.5px',
            '.MuiButtonBase-root .MuiAccordionSummary-root .Mui-expanded .MuiAccordionSummary-gutters':{maxHeight:'41.5px'}
          }}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="flex items-center justify-between pl-[12px] w-full">
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-[10px]">
              <img src={calenderLogo} className='w-[18px] h-[18px]' alt="" />
              <p className="text-[#2B2B2B] font-bold text-[11px] w-[179px]">
                Campaigns <span className="font-[400]">created</span> James Dean
              </p>
              </div>
              <div className="leading-[20px] text-[8px] flex items-center font-[500] text-[#676767] gap-[30px]">
               <div className="flex items-center min-w-fit">
               <p>Due</p> <img src={calenderLogoBW} className='w-[10px] h-[10px] mx-[5px]' /> <p>Today 12:00pm</p>
               </div>
               <img src={dotLogo} alt="" />
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="pl-2">
            <FormControlLabel
              value="female"
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: "14px",
                    },
                  }}
                />
              }
              label="Prepare quote for Pattrick Leach"
              sx={{
                ".MuiFormControlLabel-label": {
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#2B2B2B",
                  paddingLeft:'10px'
                },
              }}
            />
            <div className="px-[30px]">
              <p className="leading-[14px] text-[10px] font-[500] text-[#676767] pb-[25px] w-[437px]">
                Lorem ipsum may be used as a placeholder before final copy is
                available. Lorem ipsum may be used as a placeholder before final
                copy is available.
              </p>
              <div className="w-[437px] h-[58px] rounded-[5px] border border-[1px solid #E3E3E3] px-[17px] py-[9px] overflow-hidden">
                <CampaignFilter />
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{ boxShadow: "2px 5px 14px rgba(0, 0, 0, 0.06)", marginBottom: "14px",borderRadius:'5px',maxHeight:'226px' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#9F9F9F" }} />}
          sx={{
            flexDirection: "row-reverse",
            borderBottom: "1px solid #F0F0F0",
            height:'41.5px',
            '.MuiButtonBase-root .MuiAccordionSummary-root .Mui-expanded .MuiAccordionSummary-gutters':{maxHeight:'41.5px'}
          }}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="flex items-center justify-between pl-[12px] w-full">
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-[10px]">
              <img src={calenderLogo} className='w-[18px] h-[18px]' alt="" />
              <p className="text-[#2B2B2B] font-bold text-[11px] w-[179px]">
                Campaigns <span className="font-[400]">created</span> James Dean
              </p>
              </div>
              <div className="leading-[20px] text-[8px] flex items-center font-[500] text-[#676767] gap-[30px]">
               <div className="flex items-center min-w-fit">
               <p>Due</p> <img src={calenderLogoBW} className='w-[10px] h-[10px] mx-[5px]' /> <p>Today 12:00pm</p>
               </div>
               <img src={dotLogo} alt="" />
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="pl-2">
            <FormControlLabel
              value="female"
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: "14px",
                    },
                  }}
                />
              }
              label="Prepare quote for Pattrick Leach"
              sx={{
                ".MuiFormControlLabel-label": {
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#2B2B2B",
                  paddingLeft:'10px'
                },
              }}
            />
            <div className="px-[30px]">
              <p className="leading-[14px] text-[10px] font-[500] text-[#676767] pb-[25px] w-[437px]">
                Lorem ipsum may be used as a placeholder before final copy is
                available. Lorem ipsum may be used as a placeholder before final
                copy is available.
              </p>
              <div className="w-[437px] h-[58px] rounded-[5px] border border-[1px solid #E3E3E3] px-[17px] py-[9px] overflow-hidden">
                <CampaignFilter />
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ActivityTabAccordion;
