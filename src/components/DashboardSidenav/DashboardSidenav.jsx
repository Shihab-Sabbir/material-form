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
import { Divider, List, ListItem, ListItemText, Paper } from "@mui/material";

function DashboardSidenav() {
  const navMenuItemStyle = 'flex items-center gap-[19px] text-[15px] leading-[20px] hover:bg-[#F1F0FF] hover:font-[700] hover:text-[#2142D9] px-[25px] h-[39px] rounded-[10px] cursor-pointer';
  const navMenuIconStyle = 'w-[19px] flex items-center justify-start';
  const hoverEffect = {
    borderRadius:'10px',
    '&:hover': {
     background: "#F1F0FF",
   }
   }
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
            <ListItem button className={navMenuItemStyle} sx={hoverEffect}>
              <img src={dbHomeLogo}  className={navMenuIconStyle}  alt="" />
              <p>Dashboard</p>
            </ListItem>
            <ListItem button className={navMenuItemStyle} sx={hoverEffect}>
              <img src={campaignLogo} className={navMenuIconStyle}  alt="" />
              <p>Campaign</p>
            </ListItem>
            <ListItem button className={navMenuItemStyle} sx={hoverEffect}>
              <img src={contactsLogo} className={navMenuIconStyle}  alt="" />
              <p>Contacts</p>
            </ListItem>
            <ListItem button className={navMenuItemStyle} sx={hoverEffect}>
              <img src={analyticsLogo} className={navMenuIconStyle}  alt="" />
              <p>Analytics</p>
            </ListItem>
            <ListItem button className={navMenuItemStyle} sx={hoverEffect}>
              <img src={reportLogo} className={navMenuIconStyle}  alt="" />
              <p>Reports</p>
            </ListItem>
            <ListItem button className={navMenuItemStyle} sx={hoverEffect}>
              <img src={billingLogo} className={navMenuIconStyle}  alt="" />
              <p>Billing</p>
            </ListItem>
            <ListItem button className={navMenuItemStyle} sx={hoverEffect}>
              <img src={conversationLogo} className={navMenuIconStyle}  alt="" />
              <p>Conversations</p>
            </ListItem>
          </nav>
        </div>
        <div>
          <p className="py-[35px] text-[#959595] pl-[26px] text-[14px]">Support</p>
          <nav className="flex flex-col">
            <ListItem button className={navMenuItemStyle} sx={hoverEffect}>
              <img src={settingLogo} alt="" />
              <p>Setting</p>
            </ListItem>
            <ListItem button className={navMenuItemStyle} sx={hoverEffect}>
              <img src={helpLogo} alt="" />
              <p>Help Center</p>
            </ListItem>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default DashboardSidenav;
