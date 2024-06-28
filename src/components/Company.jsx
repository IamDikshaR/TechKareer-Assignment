import React from "react";

const Company = () => {
  return (
    <>
      <div className="px-20 py-8">
        <h3 className="flex items-center gap-4 font-medium">
          <img src="/Icons/image.svg" alt="company-logo" />
          Atlassian
        </h3>
        <div className="mt-10 flex gap-36">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs text-[#6E6D6D] mb-1">Company size</p>
              <p className="text-sm font-medium">1k - 2k Employees</p>
            </div>
            <div>
              <p className="text-xs text-[#6E6D6D] mb-1">Sector</p>
              <p className="text-sm font-medium">
                Information technology, Infrastructure
              </p>
            </div>
            <div>
              <p className="text-xs text-[#6E6D6D] mb-1">Founded In</p>
              <p className="text-sm font-medium">2019</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs text-[#6E6D6D] mb-1">Type</p>
              <p className="text-sm font-medium">Private</p>
            </div>
            <div>
              <p className="text-xs text-[#6E6D6D] mb-1">Funding</p>
              <p className="text-sm font-medium">Bootstrapped</p>
            </div>
            <div>
              <p className="text-xs text-[#6E6D6D] mb-1">Founded By</p>
              <p className="text-sm font-medium">
                <a
                  href="https://www.google.com/search?q=Scott+Farquhar"
                  className="no-underline text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Scott Farquhar
                </a>
                <a
                  href="https://www.google.com/search?q=Mike+Cannon-Brookes"
                  className="no-underline text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  , Mike Cannon-Brookes
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
