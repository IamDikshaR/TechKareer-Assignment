import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-6 py-3 sticky top-0 bg-white z-10">
        <div className="bg-color-grey1 text-color-primary py-2 px-4 font-medium">
          Logo
        </div>
        <div className="flex gap-8 items-center border-[0.25px] p-1 rounded-full">
          <button className="flex border border-[#FCB4A5] gap-2 px-3 py-2 bg-color-primary rounded-3xl text-white font-regular">
            <img src="/Icons/briefcase-02.svg" alt="job" />
            Jobs
          </button>
          <button className="flex gap-2 px-3 py-2 font-regular text-color-grey2">
            <img src="/Icons/message-square-01.svg" alt="message" />
            Messages
          </button>
          <button className="flex gap-2 px-3 py-2 font-regular text-color-grey2">
            <img src="/Icons/coins-hand.svg" alt="payment" />
            Payments
          </button>
        </div>
        <div className="flex gap-3">
          <img src="/Icons/bell-02.svg" alt="bell" />
          <div className="flex gap-1">
            <img src="/Icons/icon.svg" alt="icon" />
            <img src="/Icons/chevron-down.svg" alt="down" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
