import Image from "next/image";
import React from "react";

const SecondPage = () => {
  return (
    <div className="flex items-center  flex-col gap-20 mt-10 px-5 ">
      <div className="flex flex-col items-center  gap-2">
        <h1 className="text-xl">Trusted by 5,000+ Companies Worldwide</h1>
        <Image src={"/compony_logo.png"} width={900} height={150} />
      </div>
     
    </div>
  );
};

export default SecondPage;
