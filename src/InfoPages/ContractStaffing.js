import React, { useEffect } from 'react';
import logo from '../assets/Contract.jpg';

function ContractStaffing() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-8">
      <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
        <h1 className="mt-20 lg:mt-40 text-5xl mb-5 text-center lg:text-left">
          <b>Contract Staffing</b>
        </h1>
        <div className="mb-3">
          <ul className="list-disc pl-6 mb-10 ml-4 lg:ml-20 text-left">
            <li>Offer flexible workforce solutions through contract staffing to meet dynamic business needs.</li>
            <li>Provide pre-screened, qualified professionals for short-term, seasonal, or specialized roles.</li>
            <li>Ensure a compliant and transparent process for onboarding, payroll, and performance management.</li>
            <li>Enable organizations to focus on core operations while managing workforce complexities.</li>
            <li>Help businesses stay agile, efficient, and compliant with trusted staffing solutions.</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-0 lg:mt-40 lg:mr-28 text-5xl">
        <img src={logo} className="w-[60%] rounded-md mt-0 lg:mt-0 lg:ml-4" alt="Contract Staffing" />
      </div>
    </div>
  );
}

export default ContractStaffing;
