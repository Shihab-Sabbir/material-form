import React from "react";
import userIcon2 from "../../asset/userIcon2.png";
import googleIcon from "../../asset/googleIcon.png";
import backLogo from "../../asset/backLogo.png";
import logLogo from "../../asset/logLogo.png";
import emailLogo from "../../asset/emailLogo.png";
import callLogo from "../../asset/callLogo.png";
import moreLogo from "../../asset/moreLogo.png";
import penLogo from "../../asset/penLogo.png";
import { Button } from "@mui/material";
import UserInfoTab from "../UserInfoTab/UserInfoTab";

function DashboardLeftPart() {
  return (
    <div>
      <div className="w-[282px] bg-white h-full rounded-[5px] p-[27px] font-[Inter]">
        <div className="flex gap-[14px] items-center">
          <img
            src={backLogo}
            alt=""
            className="w-[24px] h-[24px] cursor-pointer"
          />
          <p className="text-[12px] font-[700]">Back to contact</p>
        </div>
        <div className="mt-[40px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-[11px]">
            <img src={userIcon2} alt="" className="w-[80px] h-[80px]" />
            <p className="text-[17px] font-[700]">Pattrick Leach</p>
            <div className="flex items-center gap-1">
              <img src={googleIcon} alt="" className="w-[16px] h-[16px]" />
              <p className="text-[#878787] text-[10px] ">Google</p>
            </div>
            <div className="flex items-center gap-[19px] mt-[29px] mb-[36px]">
              <div className="flex flex-col gap-2 items-center">
                <img
                  src={logLogo}
                  className="w-[27px] h-[27px] cursor-pointer"
                  alt=""
                />
                <p className="text-[10px] text-[#696868] leading-[20px]">Log</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <img
                  src={emailLogo}
                  className="w-[27px] h-[27px] cursor-pointer"
                  alt=""
                />
                <p className="text-[10px] text-[#696868] leading-[20px]">Log</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <img
                  src={callLogo}
                  className="w-[27px] h-[27px] cursor-pointer"
                  alt=""
                />
                <p className="text-[10px] text-[#696868] leading-[20px]">Log</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <img
                  src={moreLogo}
                  className="w-[27px] h-[27px] cursor-pointer"
                  alt=""
                />
                <p className="text-[10px] text-[#696868] leading-[20px]">Log</p>
              </div>
            </div>
            <div className="mb-[15px]">
              <Button
              variant="contained"
              style={{
                height:'41px',
                width:'174px',
                background:'#2142D9',
                textTransform:'none'
              }}
              >
                <div className="flex items-center gap-[18.13px]">
                  <p className="text-white font-[500] text-[12px] leading-[12px]">Edit Contact</p>
                  <img src={penLogo} alt="" />
                </div>
              </Button>
            </div>
           <div>
           <UserInfoTab/>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLeftPart;
