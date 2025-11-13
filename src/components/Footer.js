import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
import { MdWhatsapp } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useTheme } from '../Theme/themeContext';

function FooterArea() {
  const { themeKey } = useTheme();

  return (
    <div className="flex flex-col theme-transition" style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)' }}>
      <div className='p-3 grid grid-cols-1 lg:grid-cols-2'>
        <div className="relative py-8 lg:pl-8 flex justify-center items-center">
          <div>
            <h1 className="text-2xl" style={{ marginTop: '60px', marginBottom: '20px' }}>
              DYNAMIC Talent Acquisition
              <br />
              Services LLP
            </h1>
            <div>
              <h2>
                <a href="mailto:dynamic@urvacancy.com" style={{ color: 'var(--footer-text)' }}>
                  dynamic@urvacancy.com
                </a>
              </h2>
              <hr className="border-t mt-4 mb-2" style={{ borderColor: 'var(--card-border)' }} />
              <div className="flex mt-2 items-center">
                <a href="#" target="_blank">
                  <AiFillLinkedin style={{ fontSize: '30px', color: 'var(--footer-text)', marginRight: 12 }} />
                </a>
                {/* add whatsapp link below */}
                <a href="https://api.whatsapp.com/send/?phone=917058457857&text=Hello wanted to connect with you." target="_blank">
                  <MdWhatsapp style={{ fontSize: '30px', color: 'var(--footer-text)' }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-8 lg:pl-4 flex justify-center items-center">
          <div style={{ marginRight: '90px' }}>
            <h1 className="text-2xl" style={{ marginTop: '60px' }}>
              Office Address
            </h1>
            <div>
              <div className="flex items-center mt-2">
                <a href="https://share.google/mvesvRoPwCI6osa49" target="_blank">
                  <FaLocationArrow style={{ fontSize: 25, color: 'var(--footer-text)', marginRight: 8 }} />
                </a>
                <h2 className="text-xl"><a href="https://share.google/mvesvRoPwCI6osa49" target="_blank">: 128/4, MVPM Spark Co-working
</a></h2>
              </div>
              <div className="flex items-center"><h2 className="text-xl"><a href="https://share.google/mvesvRoPwCI6osa49" target="_blank">Space, Near Balewadi High </a></h2></div>
              <div className="flex items-center"><h2 className="text-xl"><a href="https://share.google/mvesvRoPwCI6osa49" target="_blank">Street, Baner, Pune - 411037</a></h2></div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 flex justify-center" style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)' }}>
        <p className="text-center text-sm">| © 2004 DTAS | <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-use">Terms of Use</Link> |</p>
      </div>

      <div className="p-3 text-sm flex justify-end text-right" style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)' }}>
        Design & Developed by &nbsp; <a href="https://www.linkedin.com/in/harsh-d-07a873124" target="_blank">Harsh Darak</a>
      </div>
    </div>
  );
}

export default FooterArea;
