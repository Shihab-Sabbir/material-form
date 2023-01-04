import { Card, CardContent, Divider } from "@mui/material";
import React from "react";
import massegeLogo from "../../asset/massegeLogo.png";
import phoneLogo from "../../asset/phoneLogo.png";
import googleLargeLogo from "../../asset/googleLargeLogo.png";
import worldLogo from "../../asset/worldLogo.png";
import DashboardAccordion from "../Accordion/DashboardAccordion";

function DashboardRightPart() {
  return (
    <div className="w-[282px] min-w-fit bg-white h-full rounded-[5px] px-[27px] pt-[27px] font-[inter] overflow-y-auto overflow-x-hidden">
      <p className="text-[#2B2B2B] font-bold text-[12px]">Company</p>
      <div className="flex items-center gap-[8.25px] mt-[18px] mb-[30px]">
        <img src={googleLargeLogo} className="w-[33px] h-[33px]" alt="" />
        <div className="flex flex-col">
          <p className="font-[600] text-[12px]">Google Inc.</p>
          <p className="text-[#9F9F9F] font-[500] text-[10px] flex items-center gap-[6.12px]">
            <img src={worldLogo} alt="" /> www.google.com
          </p>
        </div>
      </div>
      <Card
        sx={{
          width: "228px",
          height: "71px",
          marginTop: "28px",
          marginBottom: "35px",
          borderRadius: "5px",
          boxShadow: "2px 5px 14px rgba(0, 0, 0, 0.03)",
          border: "1px solid #ECECEC",
        }}
      >
        <CardContent sx={{ padding: "12px 23px" }}>
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center gap-[9.33px]">
              <img
                src={massegeLogo}
                className="w-[13.33px] h-[9.33px]"
                alt=""
              />
              <p className="text-[12px] leading-[20px] text-[#424242]">
                pattrick@example.com
              </p>
            </div>
            <div className="flex items-center gap-[9.33px]">
              <img src={phoneLogo} className="w-[11.7px] h-[11.7px]" alt="" />
              <p className="text-[12px] leading-[20px] text-[#424242]">
                (001) 546-8528
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Divider />
      <DashboardAccordion />
    </div>
  );
}

export default DashboardRightPart;
