import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import plusLogo from '../../asset/plusLogo.png'
import { Button, Card, CardContent } from "@mui/material";

function DashboardAccordion() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ border: "none", padding: "10px 0", boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: "#9F9F9F", fontSize: "12.11px" }} />
          }
          sx={{padding:'0'}}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="flex items-center w-full justify-between">
            <div className="flex gap-2">
              <p className="text-[#2B2B2B] font-bold text-[12px]">
                Campaigns
              </p>
              <div className="leading-[20px] px-[10px] flex items-center w-[28px] h-[19px] bg-[#F4F4F4] rounded-[5px] text-[12px] font-[600] text-[#676767]">
                2
              </div>
            </div>
            <p className="text-[8px] leading-[20px] pb-[1.6px] pr-[6px] text-[#9F9F9F] font-[600]">
              {expanded === "panel1" ? "Close" : "View"}
            </p>
          </div>
        </AccordionSummary>
        <AccordionDetails  sx={{padding:'0'}}>
          <div>
            <Button sx={{width:'100%',height:'29px',border:'1px solid #ECECEC',padding:0}}>
            <div className="flex items-center justify-center gap-[12px] border-[#ECECEC] rounded-[5px] text-[#2B2B2B] text-[9px] font-[600]">
              <img src={plusLogo} className='w-[14px]' alt="" />
              <p>Create New Campaign</p>
            </div>
            </Button>
            <Card
        sx={{
          width: "228px",
          height: "94px",
          marginTop: "11px",
          marginBottom: "23px",
          borderRadius: "5px",
          boxShadow: "2px 5px 14px rgba(0, 0, 0, 0.03)",
          border: "1px solid #ECECEC",
        }}
      >
        <CardContent sx={{ padding: "19px 14px"}}>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="text-[#9F9F9F] text-[9px]">Ending in: 18 Jan, 2021</p>
              <p className="bg-[#F1F0FF] w-[85px]  rounded-[10px] text-[#2142D9] text-[8px] py-[3px] text-center font-[600] ">
              Enrolled
              </p>
            </div>
            <p className="text-[#2B2B2B] text-[12px] font-[600]">Web Developement</p>
            <p className="text-[#2B2B2B] text-[16px] font-[700]">$1,200</p>
          </div>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: "228px",
          height: "94px",
          marginTop: "0px",
          marginBottom: "0px",
          borderRadius: "5px",
          boxShadow: "2px 5px 14px rgba(0, 0, 0, 0.03)",
          border: "1px solid #ECECEC",
        }}
      >
        <CardContent sx={{ padding: "19px 14px"}}>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="text-[#9F9F9F] text-[9px]">Ending in: 21 Jan, 2021</p>
              <p className="bg-[#ff704330] w-[85px]  rounded-[10px] text-[#FF7043] text-[8px] py-[3px] text-center font-[600] ">
              Pending
              </p>
            </div>
            <p className="text-[#2B2B2B] text-[12px] font-[600]">AI Workshopt</p>
            <p className="text-[#2B2B2B] text-[16px] font-[700]">$2,200</p>
          </div>
        </CardContent>
      </Card>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ border: "none", padding: "10px 0", boxShadow: "none" }}
      >
        <AccordionSummary
         sx={{padding:'0'}}
          expandIcon={
            <ExpandMoreIcon sx={{ color: "#9F9F9F", fontSize: "12.11px" }} />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="flex items-center w-full justify-between">
            <div className="flex gap-2">
              <p className="text-[#2B2B2B] font-bold text-[12px]">Tickets</p>
              <div className="leading-[20px] px-[10px] flex items-center w-[28px] h-[19px] bg-[#F4F4F4] rounded-[5px] text-[12px] font-[600] text-[#676767]">
                2
              </div>
            </div>
            <p className="text-[8px] leading-[20px] pb-[1.6px] pr-[6px] text-[#9F9F9F] font-[600]">
              {expanded === "panel2" ? "Close" : "View"}
            </p>
          </div>
        </AccordionSummary>
        <AccordionDetails  sx={{padding:'0'}}>
          <Typography>Coming Soon !!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
       sx={{ border: "none", padding: "10px 0", boxShadow: "none" }}
      >
        <AccordionSummary
         sx={{padding:'0'}}
          expandIcon={
            <ExpandMoreIcon sx={{ color: "#9F9F9F", fontSize: "12.11px" }} />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="flex items-center gap-2 w-full justify-between">
            <div>
              <p className="text-[#2B2B2B] font-bold text-[12px]">
                Attachments
              </p>
              <div className="leading-[20px] px-[10px] flex items-center w-[28px] h-[19px] bg-[#F4F4F4] rounded-[5px] text-[12px] font-[600] text-[#676767] hidden">
                2
              </div>
            </div>
            <p className="text-[8px] leading-[20px] pb-[1.6px] pr-[6px] text-[#9F9F9F] font-[600]">
              {expanded === "panel3" ? "Close" : "View"}
            </p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Coming Soon !!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
       sx={{ border: "none", padding: "10px 0", boxShadow: "none" }}
      >
        <AccordionSummary
         sx={{padding:'0'}}
          expandIcon={
            <ExpandMoreIcon sx={{ color: "#9F9F9F", fontSize: "12.11px" }} />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="flex items-center w-full justify-between">
            <div className="flex gap-2">
              <p className="text-[#2B2B2B] font-bold text-[12px]">Playbooks</p>
              <div className="leading-[20px] px-[10px] flex items-center w-[28px] h-[19px] bg-[#F4F4F4] rounded-[5px] text-[12px] font-[600] text-[#676767] hidden">
                2
              </div>
            </div>
            <p className="text-[8px] leading-[20px] pb-[1.6px] pr-[6px] text-[#9F9F9F] font-[600]">
              {expanded === "panel4" ? "Close" : "View"}
            </p>
          </div>
        </AccordionSummary>
        <AccordionDetails  sx={{padding:'0'}}>
          <Typography>Coming Soon !!</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default DashboardAccordion;
