import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between  max-lg:px-3   items-center lg:mx-28  ">
      <div className="pt-8">
        <Image src={"/logo.png"} width={60} height={50} />
        <div className=" relative  bottom-11 left-4  font-bold text-lg">
          SKilline
        </div>
      </div>

      <div className=" flex   gap-10  max-sm:gap-0 max-sm:flex-col-reverse ">
        <div>
          <ul className="flex justify-between max-sm:pt-6 max-sm:w-[15em] w-[20em] text-lg">
            <Link href={"/"}> Home</Link>
            <Link href={"/careers"}> Careers</Link>
            <Link href={"/blog"}> Blog</Link>
            <Link href={"/aboutus"}> About Us</Link>
          </ul>
        </div>{" "}
        <div className="flex gap-3">
          {" "}
          <button className="text-white bg-black rounded-md w-[6em] shadow-sm px-4 py-[2px]">
            Login
          </button>
          <button className="text-white w-[6em] bg-black rounded-md shadow-sm px-4 py-[2px]">
            Sing Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
