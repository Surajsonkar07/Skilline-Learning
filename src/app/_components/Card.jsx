import React from "react";
import { Calendar, Receipt, User } from "lucide-react";

const Card = () => {
  return (
    <div className="mt-10">
      <div className=" flex items-center flex-col">
        <h1 className="text-2xl text-[#F48C06]">
          <span className="text-[#2F327D] text-2xl font-bold">All-In-One</span>{" "}
          Cloud Software.
        </h1>
        <p className="text-center text-xl max-sm:text-sm  text-gray-400">
          Skilline is one powerful online software suite that combines all the
          <br /> tools needed to run a successful school or office.
        </p>
      </div>
      <div className="flex max-sm:flex-col items-center max-sm:gap-12 justify-evenly mt-20">
        <div className="w-56 shadow-2xl max-sm:w-72 text-center p-3 rounded-xl">
          <Receipt
            color="white"
            size={50}
            className=" bg-blue-700 p-2 relative top-[-40px] max-sm:top-[-20px]  left-16 max-sm:left-28 rounded-full"
          />
          <h1 className="text-[#2F327D] font-bold">
            Online Billing, Invoicing, & Contracts
          </h1>
          <p className="text-sm">
            Simple and secure control of your organization&apos;s financial and legal
            transactions. Send customized invoices and contracts
          </p>
        </div>{" "}
        <div className="w-56 shadow-2xl text-center max-sm:w-72 p-3 rounded-xl">
          <Calendar
            color="white"
            size={50}
            className=" bg-blue-700 p-2 relative top-[-40px] max-sm:left-28 max-sm:top-[-20px] left-16 rounded-full"
          />
          <h1 className="text-[#2F327D] font-bold">
            Online Billing, Invoicing, & Contracts
          </h1>
          <p className="text-sm">
            Simple and secure control of your organization&apos;s financial and legal
            transactions. Send customized invoices and contracts
          </p>
        </div>{" "}
        <div className="w-56 shadow-2xl text-center max-sm:w-72 p-3 rounded-xl">
          <User
            color="white"
            size={50}
            className=" bg-blue-700 p-2 relative top-[-40px] max-sm:top-[-20px] left-16 max-sm:left-28 rounded-full"
          />
          <h1 className="text-[#2F327D] font-bold">
            Online Billing, Invoicing, & Contracts
          </h1>
          <p className="text-sm">
            Simple and secure control of your organization&apos;s financial and legal
            transactions. Send customized invoices and contracts
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
