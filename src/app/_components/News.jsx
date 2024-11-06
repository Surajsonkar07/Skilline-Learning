import Image from "next/image";
import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <div className=" mb-3">
      <div className="text-center  ">
        <h1 className="text-xl font-bold text-[#2F327D] mb-3">
          Lastest News and Resources
        </h1>
        <p className="text-sm text-gray-400">
          See the developments that have occurred to Skillines in the world
        </p>
      </div>
      <div className="flex justify-evenly max-sm:flex-col max-sm:items-center max-sm:gap-7  mt-10 ">
        <div className="w-72 flex flex-col gap-4">
          <Image src={"/news2.png"} width={400} height={400} />
          <button className="text-black  border-[1px] text-sm bg-[#F48C06] rounded-xl shadow-sm  w-24 py-1">
            NEWS
          </button>
          <h1 className="text-sm font-bold text-[#2F327D]">
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </h1>
          <p className="text-xs text-gray-400">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
          <Link
            href={"/"}
            className=" text-xs border-b w-16 pb-[1px] border-gray-400 text-gray-400"
          >
            Read more
          </Link>
        </div>
        <div className="">
          <div className="flex  justify-between w-[25em] ">
            <div>
              <Image src={"/news4.png"} width={150} height={150} />
              <button className="text-black   text-[8px] relative top-[-35px]  left-[60px] bg-[#F48C06] rounded-xl shadow-sm  w-20 py-1">
              PRESS RELEASE
              </button>
            </div>
            <div className="w-[15em] ">
              <h1 className="text-[#2F327D] text-xs my-3">
                Class Technologies Inc. Closes $30 Million Series A Financing to
                Meet High Demand
              </h1>
              <p className="text-gray-400 text-xs">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>
          <div className="flex  justify-between w-[25em] ">
            <div>
              <Image src={"/news3 (1).png"} width={150} height={150} />
              <button className="text-black   text-xs relative top-[-35px]  left-[60px] bg-[#F48C06] rounded-xl shadow-sm  w-20 py-1">
                NEWS
              </button>
            </div>
            <div className="w-[15em] ">
              <h1 className="text-[#2F327D] text-xs my-3">
                Class Technologies Inc. Closes $30 Million Series A Financing to
                Meet High Demand
              </h1>
              <p className="text-gray-400 text-xs">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>
          <div className="flex  justify-between w-[25em] ">
            <div>
              <Image src={"/news1.png"} width={150} height={150} />
              <button className="text-black   text-xs relative top-[-35px]  left-[60px] bg-[#F48C06] rounded-xl shadow-sm  w-20 py-1">
                NEWS
              </button>
            </div>
            <div className="w-[15em] ">
              <h1 className="text-[#2F327D] text-xs my-3">
                Class Technologies Inc. Closes $30 Million Series A Financing to
                Meet High Demand
              </h1>
              <p className="text-gray-400 text-xs">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
