import Image from "next/image";
import React from "react";

const EveryOne = () => {
  return (
    <div className="flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-5 justify-evenly mt-10">
      <div className="max-sm:text-center" >
        <h1 className="text-[#F48C06] text-lg font-semibold">
          <span className="bg-[#F48C06] px-6 py-3 rounded-full  relative left-[0px]  z-10"></span>
          <span className="text-[#2F327D] z-50 relative ml-[-40px] "> Everything you can do in a physical <br /> classroom</span>
         , you can do with Skilline
        </h1>
        <p className="mt-2">
          Skilline&apos;s school management software helps traditional <br /> and online
          schools manage scheduling, attendance,<br /> payments and virtual classrooms
          all in one secure <br /> cloud-based system.
        </p>
      </div>
      <div>
        <Image src={"/like.png"} width={350} height={300} />
      </div>
    </div>
  );
};

export default EveryOne;
