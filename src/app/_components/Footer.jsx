import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#252641] flex flex-col  gap-5 pb-5 justify-between items-center">
      <div>
        {" "}
        <div className="pt-8  flex   justify-center">
          <div className="border-gray-400 border-r pr-8">
            {" "}
            <Image
              src={"/footer.png"}
              width={60}
              height={50}
              className="bg-[#252641]"
            />
            <div className=" relative  bottom-11 left-6    text-white  text-lg">
              SKilline
            </div>
          </div>
          <p className="text-sm text-white mt-5 ml-3">Virtual Class for Zoom</p>
        </div>
      </div>
      <div>
        <h1 className="text-gray-400 text-xs text-center mb-3">
          Subscribe to get our Newsletter
        </h1>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder=" Your Email"
            className="rounded-xl  text-xs p-2 bg-gray-900"
          />
          <button className="text-white rounded-xl px-3 shadow-xl bg-[#141643]">
            {" "}
            Subscribe
          </button>
        </div>
      </div>
      <div>
        <div className="text-gray-400 text-sm">
          <span>Careers</span> |
          <span className="pl-2">Privacy Policy</span> |
          <span className="pl-2">Terms & Conditions</span>
        </div>
        <p className="text-gray-400 text-sm text-center ">© 2021 Class Technologies Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
