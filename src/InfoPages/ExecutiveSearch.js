import React, { useEffect } from 'react';
import logo from '../assets/ExecutiveSearch.jpg';

function ExecutiveSearch() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-8">
      <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
        <h1 className="mt-20 lg:mt-40 text-5xl mb-10 text-center lg:text-left">
          <b>Executive Search</b>
        </h1>
        <div className="mb-10">
          <ul className="list-disc pl-6 mb-10 ml-4 lg:ml-10 text-left">
            <li>Specialize in identifying and attracting senior-level leaders who drive strategic success.</li>
            <li>Use a consultative, research-driven approach to ensure quality leadership decisions.</li>
            <li>Leverage deep industry expertise and maintain a confidential, high-touch process.</li>
            <li>Connect organizations with visionary executives aligned with their culture and mission.</li>
            <li>Focus on achieving true leadership alignment beyond just candidate placement.</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-12 lg:mt-40 lg:mr-28 text-5xl">
        <img src={logo} className="w-[75%] rounded-md mt-1 lg:mt-0 lg:ml-8" alt="Executive Search" />
      </div>
    </div>
  );
}

export default ExecutiveSearch;
