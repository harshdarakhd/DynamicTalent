import React, { useEffect } from 'react';
import logo from '../assets/HRServices.jpg';


function HRAdvisory() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-4 mt-10">
      <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
        <h1 className="mt-20 lg:mt-20 text-5xl mb-10 text-center lg:text-left">
          <b>HRAdvisory</b>
        </h1>
        <div className="mb-10">
          {/* <div className="mb-8 text-3xl text-center lg:text-left">
            Explore Audit
          </div> */}
          <ul className="list-disc pl-6 mb-10 ml-4 lg:ml-10 text-left">
            <li>Recruiting candidates</li>
            <li>Hiring the right employees</li>
            <li>Process payroll</li>
            <li>Conducting disciplinary actions</li>
            <li>Updating policies</li>
            <li>Others</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-10 lg:mt-20 lg:mr-10 text-5xl">
        <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Audit" />
      </div>
    </div>
  );
}

export default HRAdvisory;
