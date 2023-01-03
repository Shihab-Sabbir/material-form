import React from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import dbSearchIcon from "../../asset/dbSearchIcon.png";
import massegeIcon from "../../asset/massegeIcon.png";
import notificationIcon from "../../asset/notificationIcon.png";
import userIcon from "../../asset/userIcon.png";
import downArrowIcon from "../../asset/downArrowIcon.png";

function DashboadHeader() {
  return (
    <div className="h-full flex items-center pl-[46.5px] pr-[30px] justify-between">
      <Box
        sx={{
          position: "relative",
          height: "40px",
          width: "330px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          style={{
            height: "100%",
            maxWidth: "18.62px",
            position: "absolute",
            cursor: "pointer",
            zIndex: 1,
            background: "transparent",
            color: "black",
            boxShadow: "none",
          }}
        >
          <img src={dbSearchIcon} />
        </Button>

        <TextField
          sx={{
            ".MuiOutlinedInput-input": {
              height: "40px",
              width: "265px",
              border: "0",
              borderRadius: "7px",
              padding: "0 65px",
              fontSize: "15px",
            },
          }}
          id="outlined-basic"
          placeholder="Search..."
          variant="outlined"
          autoFocus
        />
      </Box>
      <div className="flex gap-[35px] items-center">
        <img className="h-fit" src={massegeIcon} alt="" />
        <img className="h-fit" src={notificationIcon} alt="" />
        <img className="h-fit" src={userIcon} alt="" />
        <img className="h-fit" src={downArrowIcon} alt="" />
      </div>
    </div>
  );
}

export default DashboadHeader;
