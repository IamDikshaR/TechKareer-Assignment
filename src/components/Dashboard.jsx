import React from "react";
import Drawer from "./Drawer";

const Dashboard = () => {
  return (
    <>
      <div className="px-20 py-8 border-b">
        <div className="flex items-center gap-6">
          <h1 className="text-3xl font-bold">
            Senior Product Designer{" "}
            <span className="text-sm text-color-grey2 font-normal">
              • posted 2 days ago
            </span>
          </h1>
          <div className="flex gap-1 rounded-xl justify-evenly max-w-16 text-sm font-semibold text-[#067647] bg-[#ECFDF3] border-2 border-[#AAEFC6] px-1">
            <span className="text-[#17B26A]"> •</span> Open
          </div>
        </div>
        <div className="pt-6 flex text-color-grey1 items-center gap-4">
          <h2 className="flex gap-2 font-medium text-lg text-[#5D5D5D]">
            <img src="/Icons/marker-pin-01.svg" alt="location" />
            Delware, USA
          </h2>{" "}
          •{" "}
          <h2 className="flex gap-2 font-medium text-lg text-[#5D5D5D]">
            <img src="/Icons/coins-stacked-03.svg" alt="salary" />
            $300k-$400k
          </h2>
        </div>
      </div>
      <div className="px-20 py-8 flex gap-16">
        <div className="flex flex-col gap-2 items-start">
          <h5 className="text-[#6E6D6D] text-sm">Skills Required</h5>
          <a
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center gap-1 text-xs border-2 p-1 no-underline rounded-lg"
          >
            <img src="/Icons/figma.svg" alt="figma" />
            Figma
          </a>
          <a
            href="https://www.adobe.com/in/products/illustrator.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center gap-1 text-xs border-2 p-1 no-underline rounded-lg"
          >
            <img src="/Icons/illustrator.svg" alt="illustrator" />
            Adobe Illustrator
          </a>
          <a
            href="https://www.adobe.com/in/products/xd.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center gap-1 text-xs border-2 p-1 no-underline rounded-lg"
          >
            <img src="/Icons/xd.svg" alt="xd" />
            Adobe XD
          </a>
        </div>
        <div>
          <h5 className="text-[#6E6D6D] text-sm mb-2">Preffered Language</h5>
          <h3 className="font-bold text-sm">English</h3>
        </div>
        <div>
          <h5 className="text-[#6E6D6D] text-sm mb-2">Type</h5>
          <h3 className="font-bold text-sm">Full time</h3>
        </div>
        <div>
          <h5 className="text-[#6E6D6D] text-sm mb-2">Years of Experience</h5>
          <h3 className="font-bold text-sm">3+ years of experience</h3>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
