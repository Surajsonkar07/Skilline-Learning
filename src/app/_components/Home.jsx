import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className=" flex max-md:flex-col justify-between mx-10   ">
      <div className=" flex flex-col  gap-5  w-[20em] max-md:mx-28 max-sm:mx-10 mt-10">
        <div>
          {" "}
          <h1 className=" font-bold text-2xl  text-[#2F327D]">
            <span className="text-[#F48C06]">Studying</span> Online is now much
            easier
          </h1>
          <h2 className="text-sm">
            Skilline is an interesting platform that will teach you in more an
            interactive way
          </h2>
        </div>
        <div>
          {" "}
          <div className="flex justify-between items-center ">
            <button className="text-white bg-[#F48C06] rounded-md shadow-sm px-4 py-[4px]">
              Join for free
            </button>
            <div className="bg-[white] p-2 w-[40px] flex justify-end   rounded-full">
              <Image
                src={"/playButton.png"}
                width={20}
                height={20}
                className=""
              />
            </div>
            <h1 className="hover:border-b-2 border-black  text-sm font-bold">
              Watch how it works
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 max-xl:hidden ">
        <Image
          src={"/home1.png"}
          width={150}
          height={30}
          className=" relative left-[-50px] "
        />
        <Image
          src={"/home2.png"}
          width={100}
          height={30}
          className=" relative left-[150px] top-[10px]"
        />
        <Image
          src={"/home3.png"}
          width={200}
          height={30}
          className=" relative right-[80px]  top-[-20px]"
        />
        <Image
          src={"/home4.png"}
          width={200}
          height={30}
          className=" relative top-[50px] "
        />
      </div>

      <div className=" mr-24 max-sm:mr-[10em]">
        <Image src={"/home_img.png"} width={300} height={600} />{" "}
      </div>
    </div>
  );
};

export default Home;
