import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const integration = () => {
  return (
    <div className="">
      {/* first */}
      <div className="flex justify-around max-sm:flex-col max-sm:items-center max-sm:gap-5  mt-5">
        <div className="grid grid-cols-2 gap-10 ">
          <Image src={"/tool1.png"} width={100} height={100} />
          <Image src={"/tool2.png"} width={100} height={100} />
          <Image src={"/tool3.png"} width={100} height={100} />
          <Image src={"/tool4.png"} width={100} height={100} />
        </div>
        <div className="w-72 flex flex-col gap-4">
          <h1 className="text-xs ">
            <span className="border-t-[1px] mr-2 border-blue-400 p-4 relative top-6">
              {" "}
            </span>{" "}
            INTEGRATIONS
          </h1>
          <h1 className="text-[#2F327D] font-bold">
            {" "}
            200+ educational tools and <br /> platform
            <span className="text-[#F48C06]"> integrations</span>{" "}
          </h1>
          <p className="text-sm">
            Schoology has every tool your classroom needs and comes
            pre-integrated with more than 200+ tools, student information
            systems (SIS), and education platforms.
          </p>
          <button className="text-[#F48C06] border-[1px] border-[#F48C06]  text-sm rounded-md shadow-sm  py-[2px]">
            See All Integrations
          </button>
        </div>
      </div>
      {/* second */}

      <div className="flex justify-around max-sm:flex-col-reverse max-sm:items-center  mt-5">
        <div className="w-72 flex flex-col gap-4">
          <h1 className="text-xs ">
            <span className="border-t-[1px] mr-2 border-blue-400 p-4 relative top-6">
              {" "}
            </span>{" "}
            TESTIMONIAL
          </h1>
          <h1 className="text-[#2F327D] font-bold"> What They Say? </h1>
          <p className="text-sm">
            Skilline has got more than 100k positive ratings from our users
            around the world.
          </p>
          <p className="text-sm">
            Some of the students and teachers were greatly helped by the
            Skilline.{" "}
          </p>
          <p className="text-sm">Are you too? Please give your assessment </p>
          <div className="text-[#F48C06] border-[1px] gap-2 border-[#F48C06]  text-sm rounded-3xl shadow-sm  py-[5px] flex items-center justify-center">
            {" "}
            <button>Write your assessment</button>
            <ArrowRight
              color="#F48C06"
              size={35}
              className=" rounded-full border-[1px] p-2 border-[#F48C06]"
            />
          </div>
        </div>
        <div className=" ">
          <Image src={"/TESTIMONIAL.png"} width={250} height={300} className="rounded-xl" />
          <div className=" relative top-[-100px] left-10 bg-white shadow-xl w-72 border-l-4  border-red-400 rounded-md p-5">
            <p className="text-xs mb-3">
            &quot;Thank you so much for your help. It&apos;s exactly what I&apos;ve been
              looking for. You won&apos;t regret it. It really saves me time and
              effort. Skilline is exactly what our business has been lacking.&quot;
            </p>
            <div className="flex  justify-between">
              <p className="text-sm">Gloria Rose</p>{" "}
              <Image src={"/rating.png"} width={110} height={50} />
            </div>
            <p className="text-end text-xs text-gray-400 mt-3"> 12 reviews at Yelp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default integration;
