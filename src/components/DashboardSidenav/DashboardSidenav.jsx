import React from "react";
import dbHomeLogo from "../../asset/dbHomeLogo.png";
import dbLogo from "../../asset/dbLogo.png";
import campaignLogo from "../../asset/campaignLogo.png";
import contactsLogo from "../../asset/contactsLogo.png";
import analyticsLogo from "../../asset/analyticsLogo.png";
import billingLogo from "../../asset/billingLogo.png";
import conversationLogo from "../../asset/conversationLogo.png";
import reportLogo from "../../asset/reportLogo.png";
import helpLogo from "../../asset/helpLogo.png";
import settingLogo from "../../asset/settingLogo.svg";

function DashboardSidenav() {
  const navMenuItemStyle = 'flex items-center gap-[19px] text-[15px] leading-[20px] hover:bg-[#F1F0FF] hover:font-[700] hover:text-[#2142D9] px-[25px] h-[39px] rounded-[10px] cursor-pointer';
  const navMenuIconStyle = 'w-[19px] flex items-center justify-start';
  return (
    <div className="font-[Inter] w-[260px] border h-screen bg-white">
      <div className="px-[38px] py-[16px]">
        <img src={dbLogo} alt="" />
      </div>
      <hr />
      <div className="px-[14px] py-[18px]">
        <div>
          <p className="py-[35px] text-[#959595] text-[14px] pl-[26px]">General</p>
          <nav className="flex flex-col gap-1">
            <div className={navMenuItemStyle}>
              <img src={dbHomeLogo}  className={navMenuIconStyle}  alt="" />
              <p>Dashboard</p>
            </div>
            <div className={navMenuItemStyle}>
              <img src={campaignLogo} className={navMenuIconStyle}  alt="" />
              <p>Campaign</p>
            </div>
            <div className={navMenuItemStyle}>
              <img src={contactsLogo} className={navMenuIconStyle}  alt="" />
              <p>Contacts</p>
            </div>
            <div className={navMenuItemStyle}>
              <img src={analyticsLogo} className={navMenuIconStyle}  alt="" />
              <p>Analytics</p>
            </div>
            <div className={navMenuItemStyle}>
              <img src={reportLogo} className={navMenuIconStyle}  alt="" />
              <p>Reports</p>
            </div>
            <div className={navMenuItemStyle}>
              <img src={billingLogo} className={navMenuIconStyle}  alt="" />
              <p>Billing</p>
            </div>
            <div className={`${navMenuItemStyle} `}>
              <img src={conversationLogo} className={navMenuIconStyle}  alt="" />
              <p>Conversations</p>
            </div>
          </nav>
        </div>
        <div>
          <p className="py-[35px] text-[#959595] pl-[26px] text-[14px]">Support</p>
          <nav className="flex flex-col">
            <div className={navMenuItemStyle}>
              <img src={settingLogo} alt="" />
              <p>Setting</p>
            </div>
            <div className={navMenuItemStyle}>
              <img src={helpLogo} alt="" />
              <p>Help Center</p>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default DashboardSidenav;
