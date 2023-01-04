import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import plusLogo from "../../asset/plusLogo.png";
import { Button, Card, CardContent, FormControlLabel, Radio } from "@mui/material";

function ActivityTabAccordion() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ border: "none", boxShadow: "none",marginBottom:'14px' }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: "#9F9F9F" }} />
          }
          sx={{ flexDirection: 'row-reverse',borderBottom:'1px solid #F0F0F0'}}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="flex items-center w-full justify-between pl-[34px]">
            <div className="flex gap-[134px]">
              <p className="text-[#2B2B2B] font-bold text-[12px]">Campaigns <span className="font-[400]">created</span> James Dean</p>
              <div className="leading-[20px] text-[8px] flex items-center font-[500] text-[#676767]">
                Due Today 12:00pm
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <FormControlLabel value="female" control={<Radio sx={{
    '& .MuiSvgIcon-root': {
      fontSize: '14px',
    },
  }} />} label="Prepare quote for Pattrick Leach" sx={{'.MuiFormControlLabel-label':{fontWeight:600,fontSize:'13px',color:'#2B2B2B'}}}/>
  <p className="leading-[14px] text-[10px] flex items-center font-[500] text-[#676767] pb-[39px]">Lorem ipsum may be used as a placeholder before final copy is available. Lorem ipsum may be used as a placeholder before final copy is available.</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ActivityTabAccordion;
