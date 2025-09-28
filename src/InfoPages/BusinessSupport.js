// import React from 'react'
// import logo from '../assets/ServicesImages/BusinessSupport.jpg'

// function BusinessSupportServices() {
//   return (
//     <div className="flex justify-between items-start py-8">
//       <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
//       <h1 className="mt-40 text-5xl mb-3">
//         <b>BUSINESS SUPPORT SERVICES</b></h1>
//       <div className='mb-3'>
//       <div className='mb-4 text-3xl'>
//       Explore Business Support Services
//       </div>
//         <div>Outsourcing of processes under the following functions:</div>
//         <div className='ml-10'>
//           <b>I)</b>Accounts and finance
//           <br/>
//           <b>II)</b>Management Reporting
//         </div>
//         <ul className="list-disc pl-6 mb-10 ml-20">
//         <li>Virtual C.F.O. + HR Manager + Company Secretary</li>
//         <li>Payroll process outsourcing</li>
//         <li>Services of selecting, setting up, and migrating to ERP systems</li>
//         <li>Assistance in the preparation and tracking of Annual Operating Plans</li>
//         <li>Labour Law compliance</li>
//         <li>MIS Data Preparation</li>
//         </ul>
//       </div>
//       </div>
//       <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-60 mr-10 text-5xl">
//     <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Direct Taxation" />
//   </div>
//     </div>
//   )
// }

// export default BusinessSupportServices

import React, { useEffect } from 'react';
import logo from '../assets/ServicesImages/BusinessSupport.jpg';

function BusinessSupportServices() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-8">
      <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
        <h1 className="mt-20 lg:mt-40 text-5xl mb-5 text-center lg:text-left">
          <b>BUSINESS SUPPORT SERVICES</b>
        </h1>
        <div className="mb-3">
          {/* <div className="mb-4 text-3xl text-center lg:text-left">
            Explore Business Support Services
          </div> */}
          <div>Outsourcing of processes under the following functions:</div>
          <div className="ml-4 mt-4 lg:ml-10">
            <b>I)</b> Accounts and finance
            <br />
            <b>II)</b> Management Reporting
          </div>
          <ul className="list-disc pl-6 mb-10 ml-4 lg:ml-20 text-left">
            <li>Virtual C.F.O. + HR Manager + Company Secretary</li>
            <li>Payroll process outsourcing</li>
            <li>Services of selecting, setting up, and migrating to ERP systems</li>
            <li>Assistance in the preparation and tracking of Annual Operating Plans</li>
            <li>Labour Law compliance</li>
            <li>MIS Data Preparation</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-10 lg:mt-60 lg:mr-10 text-5xl">
        <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Business Support" />
      </div>
    </div>
  );
}

export default BusinessSupportServices;
