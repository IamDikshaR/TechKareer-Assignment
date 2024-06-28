import React from "react";

const Drawer = () => {
  return (
    <>
      <div className="py-6 w-80 h-full flex flex-col items-center border bg-[#FCFCFC]">
        <div className="flex justify-end gap-4 text-xs font-medium w-full">
          <button className="flex justify-center items-center gap-2 py-2 min-w-32 bg-[#FEF4F2] text-color-primary border border-color-primary rounded-md">
            <img src="/Icons/trash-03.svg" alt="trash" />
            Delete Job
          </button>
          <button className="flex justify-center items-center gap-2 min-w-32 bg-color-primary text-white border border-[#FCB4A5] rounded-md">
            <img src="/Icons/edit-02.svg" alt="edit" />
            Edit Job
          </button>
          <button className="w-2 rounded-l-lg bg-color-primary border border-[#FCB4A5]"></button>
        </div>
        <div className="flex flex-col gap-4 text-sm text-[#4F4F4F] py-8 w-64">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <img src="/Icons/users-01.svg" alt="applicants" />
              Applicants
            </div>
            <h1 className="font-bold">400</h1>
          </div>
          <hr />
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <img src="/Icons/user-check-01.svg" alt="matches" />
              Matches
            </div>
            <h1 className="font-bold">100</h1>
          </div>
          <hr />
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <img src="/Icons/message-square-02.svg" alt="messages" />
              Messages
            </div>
            <h1 className="font-bold">147</h1>
          </div>
          <hr />
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <img src="/Icons/eye.svg" alt="views" />
              Views
            </div>
            <h1 className="font-bold">800</h1>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Drawer;
