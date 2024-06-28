import React from "react";

const Job = () => {
  return (
    <>
      <div className="flex justify-start gap-10 px-20 py-4 border text-sm">
        <p className="text-color-primary font-medium underline decoration-2 underline-offset-[20px] border-color-primary">
          Job preview
        </p>
        <p className="text-color-grey3">Applicants</p>
        <p className="text-color-grey3">Match</p>
        <p className="text-color-grey3">Messages</p>
      </div>
    </>
  );
};

export default Job;
