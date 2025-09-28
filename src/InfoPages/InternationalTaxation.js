// import React from 'react'
// import logo from '../assets/ServicesImages/InternationaTax.jpg'

// function InternationalTaxation() {
//   return (
//     <div className="flex justify-between items-start py-8">
//       <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
//       <h1 className="mt-40 text-5xl mb-10">
//         <b>INTERNATIONAL TAXATION</b></h1>
//       <div className='mb-10'>
//       <div className='mb-8 text-3xl'>
//       Explore International Taxation Services
//       </div>
//       <ul className="list-disc pl-6 mb-10 ml-10">
//         <li>Global Mobility Services</li>
//         <li>NRI Taxation Advisory and Compliances</li>
//         <li>Filing of Forms 15CA-15CB</li>
//         <li>Residential Status for NRIs</li>
//         <li>Tax Residency Certificate</li>
//         <li>TP Audit & Compliance</li>
//         <li>TP Study Report</li>
//       </ul>
//       </div>
//       </div>
//       <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-60 mr-10 text-5xl">
//         <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Direct Taxation" />
//       </div>
//     </div>
//   )
// }

// export default InternationalTaxation

import React, { useEffect } from 'react';
import logo from '../assets/ServicesImages/InternationaTax.jpg';

function InternationalTaxation() {
  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
  
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-8">
      <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
        <h1 className="mt-20 lg:mt-40 text-4xl mb-10 text-center lg:text-left">
          <b>INTERNATIONAL TAXATION</b>
        </h1>
        <div className="mb-10">
          {/* <div className="mb-8 text-3xl text-center lg:text-left">
            Explore International Taxation Services
          </div> */}
          <ul className="list-disc pl-6 mb-10 ml-4 lg:ml-10 text-left">
            <li>Global Mobility Services</li>
            <li>NRI Taxation Advisory and Compliances</li>
            <li>Filing of Forms 15CA-15CB</li>
            <li>Residential Status for NRIs</li>
            <li>Tax Residency Certificate</li>
            <li>TP Audit & Compliance</li>
            <li>TP Study Report</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-10 lg:mt-60 lg:mr-10 text-5xl">
        <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="International Taxation" />
      </div>
    </div>
  );
}

export default InternationalTaxation;
