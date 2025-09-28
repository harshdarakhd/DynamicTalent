// import React from 'react'
// import logo from '../assets/ServicesImages/DirectTax.png'

// function DirectTaxation() {
//   return (
//     <div className='justify-between'>
//     <div className="flex flex-col items-center">
//     </div>
//       <div className="text-black text-xl relative lg:pl-8 py-8 lg:text-left">
//       <h1 className="mt-40 text-5xl mb-10">
//         <b>DIRECT TAXATION</b></h1>
//       <div className='mb-10'>
//       <div className='mb-8 text-3xl'>
//       Explore Direct Taxation Services
//       </div>
//       <ul className="list-disc pl-6 mb-10 ml-10">
//         <li>Corporate Tax Advisory</li>
//         <li>Income Tax Return Filings</li>
//         <li>Handling Assessment under Income Tax</li>
//         <li>Lower Deduction Certificate</li>
//         <li>Trust advisory & 80G / 12A Registration</li>
//         <li>TDS and TCS Return Filings</li>
//       </ul>
//       </div>
//       </div>
//       <img src={logo} className="w-[60%] rounded-md mt-2 mx-auto" alt="Direct Taxation" />
//     </div>
//   )
// }

// export default DirectTaxation


// import React from 'react';
// import logo from '../assets/ServicesImages/DirectTax.png';

// function DirectTaxation() {
//   return (
//     <div className="flex justify-between items-start py-8">
//       <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
//         <h1 className="mt-40 text-5xl mb-10">
//           <b>DIRECT TAXATION</b>
//         </h1>
//         <div className='mb-10'>
//           <div className='mb-8 text-3xl'>
//             Explore Direct Taxation Services
//           </div>
//           <ul className="list-disc pl-6 mb-10 ml-10">
//             <li>Corporate Tax Advisory</li>
//             <li>Income Tax Return Filings</li>
//             <li>Handling Assessment under Income Tax</li>
//             <li>Lower Deduction Certificate</li>
//             <li>Trust advisory & 80G / 12A Registration</li>
//             <li>TDS and TCS Return Filings</li>
//           </ul>
//         </div>
//       </div>
//       <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-40 mr-10 text-5xl">
//         <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Direct Taxation" />
//       </div>
//     </div>
//   );
// }

// export default DirectTaxation;

import React, { useEffect } from 'react';
import logo from '../assets/ServicesImages/DirectTax.png';

function DirectTaxation() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-8">
      <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
        <h1 className="mt-20 lg:mt-40 text-5xl mb-10 text-center lg:text-left">
          <b>DIRECT TAXATION</b>
        </h1>
        <div className="mb-10">
          {/* <div className="mb-8 text-3xl text-center lg:text-left">
            Explore Direct Taxation Services
          </div> */}
          <ul className="list-disc pl-6 mb-10 ml-4 lg:ml-10 text-left">
            <li>Corporate Tax Advisory</li>
            <li>Income Tax Return Filings</li>
            <li>Handling Assessment under Income Tax</li>
            <li>Lower Deduction Certificate</li>
            <li>Trust advisory & 80G / 12A Registration</li>
            <li>TDS and TCS Return Filings</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-10 lg:mt-40 lg:mr-10 text-5xl">
        <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Direct Taxation" />
      </div>
    </div>
  );
}

export default DirectTaxation;
