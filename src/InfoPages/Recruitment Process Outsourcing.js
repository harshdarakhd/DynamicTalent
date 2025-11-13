import React, { useEffect } from 'react';
import logo from '../assets/RPO.jpg';

function RPO () {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-8">
      <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
        <h1 className="mt-20 lg:mt-40 text-5xl mb-5 text-center lg:text-left">
          <b>RECRUITMENT PROCESS OUTSOURCING</b>
        </h1>

        <div className="mb-4">
          <ul className="list-disc pl-6 mb-10 ml-4 lg:ml-10 text-left leading-relaxed">
            <li>A dedicated recruitment partner functioning as an extension of your HR advisory team.</li>
            <li>End-to-end hiring support including sourcing, assessments, interviews, and onboarding.</li>
            <li>Strengthened employer brand through a consistent, structured candidate experience.</li>
            <li>Access to specialized hiring frameworks, advanced tools, and curated talent networks.</li>
            <li>Improved hiring speed with reduced time-to-fill for critical roles.</li>
            <li>Cost-efficient talent acquisition designed to lower overall hiring expenditure.</li>
            <li>Candidate selection focused on role fit, culture fit, and long-term alignment.</li>
            <li>Scalable engagement models tailored for project-based hiring or full recruitment transformation.</li>
            <li>Data-driven and transparent hiring processes that elevate decision-making quality.</li>
          </ul>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start lg:mt-60 lg:mr-10 text-5xl">
        <img
          src={logo}
          className="w-[80%]"
          alt="Recruitment Process Outsourcing"
        />
      </div>
    </div>
  );
}

export default RPO;
