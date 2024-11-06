import Image from "next/image";
import React from "react";

const SkillLine = () => {
  return (
    <div className="mt-10">
      <div className="text-center px-40 max-sm:px-8 max-sm:text-sm text-gray-500">
        <h1 className="text-[#2F327D] text-2xl font-bold">
          <span className="text-[#F48C06]">What is</span> Skilline?
        </h1>
        <p>
          Skilline is a platform that allows educators to create online classes
         <br /> whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; <br />grade results and
          provide students with feedback all in one place.
        </p>
      </div>
      <div className="flex max-sm:flex-col justify-center gap-10 items-center mt-10">
        <Image src={'/skillline.png'} width={300} height={450}/>
        <Image src={'/skillline2.png'} width={300} height={450}/>
      </div>
    </div>
  );
};

export default SkillLine;
