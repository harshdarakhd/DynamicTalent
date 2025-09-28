import React, { useEffect } from 'react'

function DirectandIndirectTaxation() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="max-w-xl text-black text-xl relative pl-2 lg:pl-8 py-8 lg:pl-0 lg:text-left">
      <h1 className="mt-40 md:text-5xl 2xl mb-10">
        <b>Direct & Indirect Taxation</b></h1>
      <div className='mb-10'>
      <p>Attitudes to tax are changing. Organizations of all sizes are increasingly exposed to new trends 
      in tax regulation.
      </p>
      <p>Enhancing a shareholder's value is a fundamental concept which drives every management effort in 
      the modern business environment. Progressive and bottom-line focussed managements have realized 
      that taxes (both direct and indirect), should be viewed as a dynamic item of cost rather than a 
      passive charge on the profits. Indeed, an effective tax-cost management provides a distinct 
      competitive advantage. In order to accomplish this, appropriate tax strategies need to be 
      identified proactively and implemented surgically.
      </p>
      </div>
      <ul className="list-disc pl-6 mb-10">
      <div className='mb-8'>
      Explore tax and regulatory services
      </div>
        <li>Tax Compliance and Diagnostic Review </li>
        <li>Audit under Income Tax Laws and GST</li>
        <li>Tax Optimization and Transaction Structuring</li>
        <li>Obtaining registrations, approvals and licenses</li>
        <li>Refund related assistance</li>
        <li>Litigation and Representation services</li>
        <li>Tax Returns and Hand-holding support</li>
      </ul>
      </div>
    </div>
  )
}

export default DirectandIndirectTaxation