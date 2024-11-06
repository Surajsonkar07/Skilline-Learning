import React from "react";
import Header from "./_components/Header";
import Home from "./_components/Home";
import SecondPage from "./_components/SecondPage";
import Card from "./_components/Card";
import SkillLine from "./_components/SkillLine";
import EveryOne from "./_components/EveryOne";
import Feature from "./_components/Feature";
import Integration from "./_components/Integration";
import News from "./_components/News";
import Footer from "./_components/Footer";

const page = () => {
  return (
    <div className="">
      <div className="rounded-b-[150px] w-[98.75vw]  max-sm:w-[114vw] :max-sm:rounded-3xl bg-[#FFF2E1]">
        <Header />
        <Home />
      </div>
      <div className=" max-sm:w-[113vw]">
        {" "}
        <SecondPage />
        <Card />
        <SkillLine />
        <EveryOne />
        <Feature />
        <Integration />
        <News />
        <Footer />
      </div>
    </div>
  );
};

export default page;
