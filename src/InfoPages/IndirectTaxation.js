// import React from 'react'
// import logo from '../assets/ServicesImages/GST.png'

// function IndirectTaxation() {
//   return (
//     <div className="flex justify-between items-start py-8">
//       <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
//       <h1 className="mt-20 text-5xl mb-4">
//         <b>INDIRECT TAXATION SERVICE</b></h1>
//       <div className='mb-10'>
//       <div className='mb-6 text-3xl'>
//       Explore Indirect Taxation Services
//       </div>
//       <ul className="list-disc pl-6 mb-10 ml-10">
//         <li>GST Consultancy Services</li>
//         <li>GST Audit</li>
//         <li>GST Litigation Services</li>
//         <li>GST Compliance Services</li>
//         <li>GST Refunds</li>
//         <li>GST Returns</li>
//         <li>GST Registration</li>
//       </ul>
//       </div>
//       </div>
//       <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-40 mr-10 text-5xl">
//         <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Direct Taxation" />
//       </div>
//     </div>
//   )
// }

// export default IndirectTaxation

import React, { useEffect } from 'react';
import logo from '../assets/ServicesImages/GST.png';

function IndirectTaxation() {
  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-8">
      <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
        <h1 className="mt-20 lg:mt-20 text-5xl mb-4 text-center lg:text-left">
          <b>INDIRECT TAXATION SERVICE</b>
        </h1>
        <div className="mb-10">
          {/* <div className="mb-6 text-3xl text-center lg:text-left">
            Explore Indirect Taxation Services
          </div> */}
          <ul className="list-disc pl-6 mb-10 ml-4 lg:ml-10 text-left">
            <li>GST Consultancy Services</li>
            <li>GST Audit</li>
            <li>GST Litigation Services</li>
            <li>GST Compliance Services</li>
            <li>GST Refunds</li>
            <li>GST Returns</li>
            <li>GST Registration</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-10 lg:mt-40 lg:mr-10 text-5xl">
        <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Indirect Taxation" />
      </div>
    </div>
  );
}

export default IndirectTaxation;
