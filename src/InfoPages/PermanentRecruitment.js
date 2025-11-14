import React, { useEffect } from 'react';
import logo from '../assets/Permanent_.jpg';

function PermanentRecruitment() {
  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-8">
      <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
        <h1 className="mt-40 lg:mt-50 text-5xl mb-4 text-center lg:text-left">
          <b>Permanent Recruitment</b>
        </h1>
        <div className="mb-10">
          <ul className="list-disc pl-6 mb-10 ml-4 lg:ml-20 text-left">
            <li>Simplify and streamline permanent hiring to make it efficient and impactful.</li>
            <li>Partner with clients to understand their culture, values, and long-term goals.</li>
            <li>Ensure every hire contributes to overall organizational success.</li>
            <li>Use multi-channel sourcing, structured assessments, and behavioral interviews to identify top talent.</li>
            <li>Deliver lasting results by building strong, sustainable teams rather than just filling roles.</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-10 lg:mt-40 lg:mr-10 text-5xl">
        <img src={logo} className="w-[80%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Permanent Recruitment" />
      </div>
    </div>
  );
}

export default PermanentRecruitment;
