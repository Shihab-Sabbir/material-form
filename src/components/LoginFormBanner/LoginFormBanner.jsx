import React from "react";
import Rectangle1 from "../../asset/Rectangle1.png";
import Rectangle2 from "../../asset/Rectangle2.png";
import Rectangle3 from "../../asset/Rectangle3.png";
import dummyImage from "../../asset/dummyImage.png";
import logo from "../../asset/logo.png";

function LoginFormBanner() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full relative bg-[#0022D2] overflow-hidden font-[Inter]">
      <div className="overflow-hidden">
      <img src={Rectangle1} className="absolute top-[0] left-[-100px]" />
    <img src={Rectangle2} className="absolute top-[0] left-[-100px]" />
    <img src={Rectangle3} className="absolute top-[490px] left-[-100px]" />
    <img src={dummyImage} className="absolute bottom-[0] right-[0] " />
    <img src={logo} className="absolute top-[61px] right-[41px] " />
    <p className="absolute right-[40px] top-[406px] text-white font-[500] text-[36px]">
      Automate your message service
    </p>
    <p className="absolute right-[40px] top-[482px] text-white font-[300] text-[14px]">
      Make your tasks easy with Loopmee by an automated integration
    </p>
    <p className="absolute right-[40px] top-[503px] text-white font-[300] text-[14px]">
      along with your contacts
    </p>
      </div>
    </div>
  )
}

export default LoginFormBanner;