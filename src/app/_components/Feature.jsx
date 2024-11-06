import { Component, LucideCopy, UsersRound } from "lucide-react";
import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div className="px-10">
      {/* first */}
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold text-[#2F327D]">
          <span className="text-[#F48C06]">our</span> Feature
        </h1>{" "}
        <p>
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>
      <div className="flex max-sm:flex-col max-sm:items-center justify-evenly mt-10">
        {" "}
        <div>
          <Image src={"/feature.png"} width={350} height={300} />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#2F327D] text-xl font-bold">
            A <span className="text-[#F48C06]">user interface</span> designed{" "}
            <br />
            for the classroom
          </h1>
          <div className="flex justify-between gap-3 ">
            <Component
              size={40}
              className="text-[#2F327D] rounded-full  shadow-lg p-2"
            />
            <p className="text-sm">
              Teachers don’t get lost in the grid view <br />
              and have a dedicated Podium space.
            </p>
          </div>{" "}
          <div className="flex justify-between gap-3 ">
            <LucideCopy
              size={40}
              className="text-[#2F327D] rounded-full  shadow-lg p-2"
            />
            <p className="text-sm">
              TA’s and presenters can be moved to <br /> the front of the class.
            </p>
          </div>{" "}
          <div className="flex justify-between gap-3 ">
            <UsersRound
              size={40}
              className="text-[#2F327D] rounded-full  shadow-lg p-2"
            />
            <p className="text-sm">
              Teachers can easily see all students <br /> and class data at one
              time.
            </p>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="flex justify-evenly max-sm:flex-col-reverse max-sm:items-center items-center mt-4">
        <div className="w-72 ">
          {" "}
          <h1 className="text-[#2F327D] text-xl font-bold mb-4">
            <span className="text-[#F48C06]">Tools</span> For Teachers And
            Learners
          </h1>{" "}
          <p className="text-xs">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time for
            students to complete and submit.
          </p>
        </div>

        <div>
          <Image src={"/feature2.png"} width={350} height={300} />
        </div>
      </div>
      {/* third */}

      <div className="flex justify-evenly max-sm:flex-col max-sm:items-center items-center mt-4">
        {" "}
        <div>
          <Image src={"/feature3.png"} width={350} height={300} />
        </div>
        <div className="w-72 ">
          {" "}
          <h1 className="text-[#2F327D] text-xl font-bold mb-4">
            Assessments, <br />
            <span className="text-[#F48C06]">Quizzes,</span>
            Tests
          </h1>{" "}
          <p className="text-xs">
            Easily launch live assignments, quizzes, and <br />
            tests. Student results are automatically entered in <br />
            the online gradebook.
          </p>
        </div>
      </div>
      {/* four */}

      <div className="flex justify-evenly max-sm:flex-col-reverse max-sm:items-center items-center mt-4">
        <div className="w-72 ">
          {" "}
          <h1 className="text-[#2F327D] text-xl font-bold mb-4">
            <span className="text-[#F48C06]">Class Management </span> <br />
            Tools for Educators
          </h1>{" "}
          <p className="text-xs">
            Class provides tools to help run and manage the class such as Class
            Roster, Attendance, and more. With the Gradebook, teachers can
            review and grade tests and quizzes in real-time.
          </p>
        </div>

        <div>
          <Image src={"/feature4.png"} width={350} height={300} />
        </div>
      </div>
      {/* five */}

      <div className="flex justify-evenly max-sm:flex-col max-sm:items-center items-center mt-4">
        {" "}
        <div>
          <Image src={"/feature5.png"} width={350} height={300} />
        </div>
        <div className="w-72 ">
          {" "}
          <h1 className="text-[#2F327D] text-xl font-bold mb-4">
            One-on-One <br />
            <span className="text-[#F48C06]">Discussions</span>
          </h1>{" "}
          <p className="text-xs">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.{" "}
          </p>
        </div>
      </div>
      <div className="text-center">
        <button className="text-[#F48C06] border-[1px] text-sm border-[#F48C06] rounded-xl shadow-sm px-7 py-[3px]">
        See more features
        </button>
      </div>
    </div>
  );
};

export default Feature;
