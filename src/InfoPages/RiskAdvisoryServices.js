// import React from 'react'
// import logo from '../assets/ServicesImages/RiskAdvisory.jpg'

// function RiskAdvisoryServices() {
//   return (
//     <div className="flex justify-between items-start py-8">
//       <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
//       <h1 className="mt-40 text-5xl mb-10">
//         <b>RISK ADVISORY SERVICES</b></h1>
//       <div className='mb-10'>
//       <div className='mb-8 text-3xl'>
//       Explore Risk Advisory Services
//       </div>
//       <ul className="list-disc pl-6 mb-10 ml-10">
//         <li>Internal controls set-up and implementation</li>
//         <li>Documentation of Standard Operating Procedures (SOPs)</li>
//         <li>Compliance Audits</li>
//         <li>Accounting manual and chart of accounts</li>
//         <li>Advising, arranging and maintenance of insurance of assets and manpower</li>
//         <li>Internal Audit</li>
//         <li>Stock Audit</li>
//         <li>Fixed Assets Audit</li>
//         <li>Management Audit</li>
//         <li>Due Diligence</li>
//       </ul>
//       </div>
//       </div>
//       <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-60 mr-10 text-5xl">
//         <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Direct Taxation" />
//       </div>
//     </div>
//   )
// }

// export default RiskAdvisoryServices

import React, { useEffect } from 'react';
import logo from '../assets/ServicesImages/RiskAdvisory.jpg';

function RiskAdvisoryServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-8">
      <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
        <h1 className="mt-20 lg:mt-40 text-4xl mb-10 text-center lg:text-left">
          <b>RISK ADVISORY SERVICES</b>
        </h1>
        <div className="mb-10">
          {/* <div className="mb-8 text-3xl text-center lg:text-left">
            Explore Risk Advisory Services
          </div> */}
          <ul className="list-disc pl-6 mb-10 ml-4 lg:ml-10 text-left">
            <li>Internal controls set-up and implementation</li>
            <li>Documentation of Standard Operating Procedures (SOPs)</li>
            <li>Compliance Audits</li>
            <li>Accounting manual and chart of accounts</li>
            <li>Advising, arranging and maintenance of insurance of assets and manpower</li>
            <li>Internal Audit</li>
            <li>Stock Audit</li>
            <li>Fixed Assets Audit</li>
            <li>Management Audit</li>
            <li>Due Diligence</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-10 lg:mt-60 lg:mr-10 text-5xl">
        <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Risk Advisory Services" />
      </div>
    </div>
  );
}

export default RiskAdvisoryServices;
