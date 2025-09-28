// import React from 'react'
// import logo from '../assets/ServicesImages/BusinessRegistration.jpg'

// function BUSINESSREGISTRATIONSERVICES() {
//   return (
//     <div className="flex justify-between items-start py-8">
//       <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
//       <h1 className="mt-40 text-5xl mb-4">
//         <b>BUSINESS REGISTRATION</b></h1>
//       <div className='mb-4'>
//       <div className='mb-4 text-3xl'>
//       Explore Business Registration Services
//       </div>
//       <ul className="list-disc pl-6 mb-10 ml-10">
//         <li>Company Registration</li>
//         <li>Company Annual Compliances</li>
//         <li>Certification and Attestation Services</li>
//         <li>LLP Annual Filings</li>
//         <li>LLP Formations</li>
//         <li>Foreign Company Setup in India</li>
//         <li>Trademark Registration</li>
//         <li>Import Export Code</li>
//         <li>MSME Registration and Compliance</li>
//         <li>Start up Registration and Compliance</li>
//       </ul>
//       </div>
//       </div>
//       <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-60 mr-10 text-5xl">
//     <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Direct Taxation" />
//   </div>
//   </div>
//   )
// }

// export default BUSINESSREGISTRATIONSERVICES

import React, { useEffect } from 'react';
import logo from '../assets/ServicesImages/BusinessRegistration.jpg';

function BUSINESSREGISTRATIONSERVICES() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);


  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-8">
      <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
        <h1 className="mt-20 lg:mt-40 text-5xl mb-4 text-center lg:text-left">
          <b>BUSINESS REGISTRATION</b>
        </h1>
        <div className="mb-4">
          {/* <div className="mb-4 text-3xl text-center lg:text-left">
            Explore Business Registration Services
          </div> */}
          <ul className="list-disc pl-6 mb-10 ml-4 lg:ml-10 text-left">
            <li>Company Registration</li>
            <li>Company Annual Compliances</li>
            <li>Certification and Attestation Services</li>
            <li>LLP Annual Filings</li>
            <li>LLP Formations</li>
            <li>Foreign Company Setup in India</li>
            <li>Trademark Registration</li>
            <li>Import Export Code</li>
            <li>MSME Registration and Compliance</li>
            <li>Start up Registration and Compliance</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-10 lg:mt-60 lg:mr-10 text-5xl">
        <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Business Registration" />
      </div>
    </div>
  );
}

export default BUSINESSREGISTRATIONSERVICES;
