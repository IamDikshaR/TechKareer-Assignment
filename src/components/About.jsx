import React from "react";

const About = () => {
  return (
    <>
      <div className="text-xs border py-8 px-24 leading-loose font-medium">
        <h5 className="text-color-grey3 font-normal">About the Job</h5>
        <ol className="list-decimal list-inside ">
          <li>Handle the UI/UX research design</li>
          <li>
            Work on researching on latest web application designs & trends
          </li>
          <li>Work on conceptualizing and visualizing</li>
          <li>
            Work on creating graphics content and other graphics related works
          </li>
        </ol>
        <p>Benefits:</p>
        <ul className="list-disc list-inside ml-4 leading-relaxed">
          <li>Health Insurance</li>
          <li>Provident Fund</li>
        </ul>
        <p>Schedule:</p>
        <ul className="list-disc list-inside ml-4 leading-relaxed">
          <li>Day shift</li>
        </ul>
        <p>Supplemental pay types:</p>
        <ul className="list-disc list-inside ml-4 leading-relaxed">
          <li>Performace bonus</li>
          <li>Yearly bonus</li>
        </ul>
        <p>Work Location: In person</p>
      </div>
    </>
  );
};

export default About;
