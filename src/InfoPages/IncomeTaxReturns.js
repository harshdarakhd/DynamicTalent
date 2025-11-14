import React, { useState, useEffect } from 'react';
import logo from '../assets/ServicesImages/IncomeTaxReturn.jpg';
import Modal from '../components/modal';

function IncomeTaxReturns() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [couponCodes, setCouponCodes] = useState({
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
  });

  const [showCouponInput, setShowCouponInput] = useState({
    code1: false,
    code2: false,
    code3: false,
    code4: false,
    code5: false,
  });

  const [paymentLinks, setPaymentLinks] = useState({
    link1: 'https://rzp.io/l/vZF74psmt8',
    link2: 'https://rzp.io/l/1h5hJ02cx',
    link3: 'https://rzp.io/l/5ATVEW8',
    link4: 'https://rzp.io/l/oIwwYOU3N',
    link5: 'https://rzp.io/l/TpGqx2hY',
  });

  const validCoupon = "ITADAL24";
  const discountedLinks = {
    link1: 'https://rzp.io/i/HB7hErnRHe',
    link2: 'https://rzp.io/l/gJEWFXXcQ',
    link3: 'https://rzp.io/l/DTgv4KqkWr',
    link4: 'https://rzp.io/l/ddvNTSqFpe',
    link5: 'https://rzp.io/l/yQPuUJhw9',
  };

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleCouponChange = (event, codeKey) => {
    setCouponCodes({
      ...couponCodes,
      [codeKey]: event.target.value,
    });
  };

  const handleCouponSubmit = (codeKey, linkKey) => {
    if (couponCodes[codeKey] === validCoupon) {
      window.open(discountedLinks[linkKey], '_blank');
    } else {
      setModalMessage('Invalid coupon code');
      setShowModal(true);
    }
    setCouponCodes({
      ...couponCodes,
      [codeKey]: '',
    });
    setShowCouponInput({
      ...showCouponInput,
      [codeKey]: false,
    });
  };

  const services = [
    { desc: 'Resident ITR - Rental Income + Salary Income + Income from Other Sources (aggregate less than 50 Lakhs)', price: 'Rs. 999', codeKey: 'code1', linkKey: 'link1' },
    { desc: 'Resident ITR - Rental Income + Salary Income + Income from Other Sources + Capital Gains', price: 'Rs. 2499', codeKey: 'code2', linkKey: 'link2' },
    { desc: 'Resident ITR - Rental Income + Salary Income + Capital Gains + Future & Options (Derivative Transactions) + Crypto Transactions (Virtual Digital Assets)', price: 'Rs. 4999', codeKey: 'code3', linkKey: 'link3' },
    { desc: 'Non-Resident ITR - Income from House Property + Income from Other Sources + Capital Gains', price: 'Rs. 4999', codeKey: 'code4', linkKey: 'link4' },
    { desc: 'Non-Resident ITR - Income from House Property + Income from Other Sources + Capital Gains + Future & Options (Derivative Transactions)', price: 'Rs. 7999', codeKey: 'code5', linkKey: 'link5' },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-8">
      <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
        <h1 className="mt-40 lg:mt-40 text-5xl mb-10 text-center lg:text-left">
          <b>Income Tax Returns</b>
        </h1>
        <div className="mb-10">
          <ul className="list-disc pl-6 mb-10 ml-4 lg:ml-10 text-left">
            {services.map((item, index) => (
              <li className="mb-4" key={index}>
                {item.desc}
                <div className="mt-2 flex items-center">
                  <span className="mr-1"><b>{item.price}</b></span>
                  <a href={paymentLinks[item.linkKey]} target="_blank" rel="noopener noreferrer">
                    <button className="bg-gray-800 text-white px-2 py-1 rounded text-sm ml-4 sm:mr-2 hover:bg-gray-500">
                      Pay Now
                    </button>
                  </a>
                  {item.codeKey !== 'code1' && (
                    <>
                      {!showCouponInput[item.codeKey] ? (
                        <button
                          onClick={() => setShowCouponInput({ ...showCouponInput, [item.codeKey]: true })}
                          className="bg-gray-800 text-white px-2 py-1 rounded text-sm ml-3 hover:bg-gray-500"
                        >
                          Have Coupon Code?
                        </button>
                      ) : (
                        <>
                          <input
                            type="text"
                            placeholder="Coupon Code"
                            value={couponCodes[item.codeKey]}
                            onChange={(event) => handleCouponChange(event, item.codeKey)}
                            className="ml-1 px-2 border rounded border-gray-900"
                            style={{ width: '30%', height: '20%' }}
                          />
                          <button
                            onClick={() => handleCouponSubmit(item.codeKey, item.linkKey)}
                            className="bg-gray-800 text-white px-2 py-1 rounded text-sm ml-4 hover:bg-gray-500"
                          >
                            Submit
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-20 lg:mt-60 lg:mr-10 text-5xl">
        <img src={logo} className="w-[90%] rounded-md mt-6 lg:mt-0 lg:ml-8" alt="Direct Taxation" />
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} message={modalMessage} />
    </div>
  );
}

export default IncomeTaxReturns;
