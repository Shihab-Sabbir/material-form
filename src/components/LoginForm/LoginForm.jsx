import React from "react";
import { Button, Checkbox, InputLabel, TextField } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "../../Style";
import { FcGoogle } from "react-icons/fc";

function LoginForm() {
    const classes = useStyles();
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="px-[171px] py-[250px] bg-white">
        <p className="font-[Inter] text-[24px] font-[500] leading-[36px]">
          Sign in
        </p>
        <p className="font-[Poppins] text-[14px] font-[400] leading-[22px] text-[#949CA9] pb-[22px]">
          Enter your credentials to access to your account
        </p>
        <InputLabel className={classes.inputLabel}>Email</InputLabel>
        <TextField
          className={classes.inputField}
          id="outlined-basic"
          label="Enter your email"
          variant="outlined"
        />
        <InputLabel className={classes.inputLabel}>Password</InputLabel>
        <TextField
          className={classes.inputField}
          id="outlined-basic"
          type="password"
          variant="outlined"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
        <div className="mt-[30px] flex items-center justify-between w-[360px]">
          <div className="flex items-center gap-2 justify-start">
            <Checkbox
              disableRipple
              color="default"
              checkedIcon={
                <span className={clsx(classes.icon, classes.checkedIcon)} />
              }
              icon={<span className={classes.icon} />}
            />
            <p className="font-[Inter] text-[14px] font-[500] text-[#344054]">
              Remember me
            </p>
          </div>
          <p className="font-[Inter] text-[14px] font-[500] text-[#167EE6]">
            Forgot Password?
          </p>
        </div>
        <div className="flex flex-col w-[360px] gap-[29px] my-[29px]">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#3D59DD",
              height: "44px",
              borderRadius: "8px",
              fontSize: "16px",
              color: "white",
              fontFamily: "Inter",
              textTransform: "none",
            }}
          >
            Sign in
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "white",
              height: "44px",
              borderRadius: "8px",
              fontSize: "16px",
              color: "black",
              fontFamily: "Inter",
              textTransform: "none",
              lineHeight: "20px",
            }}
          >
            <FcGoogle className="mr-[9.5px] h-[24px] w-[24px]" /> Sign in with
            Google
          </Button>
        </div>
        <div className="w-[360px]">
          <p className="font-[14px] font-[inter] text-black text-center leading-[24px] ">
            Don’t have an account?{" "}
            <span className="text-[#167EE6] cursor-pointer">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;