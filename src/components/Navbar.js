// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import logo from '../assets/DTA.png';
// import { useTheme } from '../Theme/themeContext';


// function Navbar() {
//     const location = useLocation();
//     const { themeKey } = useTheme(); // you may use theme if needed
//     const [isOpen, setIsOpen] = useState(false);


// function linkClasses(path) {
//     const isActive = location.pathname === path;
//     return `text-xl ${isActive ? 'font-semibold' : ''}`;
//     }

// const toggleMenu = () => setIsOpen(!isOpen);
// const closeMenu = () => setIsOpen(false);


// return (
//     <div
//     className="p-1 fixed top-0 w-full z-40 font-verdana theme-transition"
//     style={{ backgroundColor: 'var(--nav-bg)', color: 'var(--nav-text)' }}
//     >
//     <div className="flex justify-between items-center flex-wrap">
//     <div className="flex items-center">
//     <img src={logo} className="w-14 h-15 mr-2" alt="logo" />
//     <div className='font-normal font-serif text-lg md:text-2xl lg:text-3xl' style={{ color: 'var(--nav-text)' }}>
//     <Link to="/" onClick={closeMenu}>
//     <h2>DYNAMIC TALENT</h2>
//     <h1>ACQUISITION SERVICES LLP</h1>
//     </Link>
//     </div>
//     </div>


//     <button onClick={toggleMenu} className="sm:hidden flex items-center px-3 py-2 rounded mx-auto" style={{ color: 'var(--nav-text)', borderColor: 'transparent' }}>
//     {/* hamburger */}
//     <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
//     </button>


//     <ul className={`${isOpen ? 'block' : 'hidden'} sm:flex justify-center space-y-4 sm:space-y-0 sm:space-x-8 w-full sm:w-auto text-center mt-4 sm:mt-0`}>
//     {[
//     { path: '/', text: 'Home' },
//     { path: '/services', text: 'Our Services' },
//     { path: '/about', text: 'About Us' },
//     { path: '/careers', text: 'Careers' },
//     { path: '/contact', text: 'Contact' },
//     ].map((item) => (
//     <li key={item.path} className="text-sm sm:text-sm">
//     <Link
//     to={item.path}
//     onClick={closeMenu}
//     className={linkClasses(item.path)}
//     style={{ color: location.pathname === item.path ? 'var(--nav-active)' : 'var(--nav-text)' }}
//     >
//     {item.text}
//     </Link>
//     </li>
//     ))}
//     </ul>
//     </div>
//     </div>
//     );
// }


// export default Navbar;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/DTA.png';
import { useTheme } from '../Theme/themeContext';


function Navbar() {
    const location = useLocation();
    const { themeKey } = useTheme(); // you may use theme if needed
    const [isOpen, setIsOpen] = useState(false);


function linkClasses(path) {
    const isActive = location.pathname === path;
    return `text-xl ${isActive ? 'font-semibold' : ''}`;
    }

const toggleMenu = () => setIsOpen(!isOpen);
const closeMenu = () => setIsOpen(false);


return (
    <div
    className="p-1 fixed top-0 w-full z-40 font-verdana theme-transition"
    style={{ backgroundColor: 'var(--nav-bg)', color: 'var(--nav-text)' }}
    >
    <div className="flex justify-between items-center flex-wrap">
    <div className="flex items-center">
    <img src={logo} className="w-14 h-15 mr-2" alt="logo" />
    <div className='font-normal font-serif text-lg md:text-2xl lg:text-3xl' style={{ color: 'var(--nav-text)' }}>
    <Link to="/" onClick={closeMenu}>
    <h2>DYNAMIC TALENT</h2>
    <h1>ACQUISITION SERVICES LLP</h1>
    </Link>
    </div>
    </div>


    <button onClick={toggleMenu} className="sm:hidden flex items-center px-3 py-2 rounded mx-auto" style={{ color: 'var(--nav-text)', borderColor: 'transparent' }}>
    {/* hamburger */}
    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>


    <ul className={`${isOpen ? 'block' : 'hidden'} sm:flex justify-center space-y-4 sm:space-y-0 sm:space-x-8 w-full sm:w-auto text-center mt-4 sm:mt-0`}>
    {[
    { path: '/', text: 'Home' },
    { path: '/services', text: 'Our Services' },
    { path: '/about', text: 'About Us' },
    { path: '/careers', text: 'Careers' },
    { path: '/contact', text: 'Contact' },
    ].map((item) => (
    <li key={item.path} className="text-sm sm:text-sm">
    <Link
    to={item.path}
    onClick={closeMenu}
    className={linkClasses(item.path)}
    style={{ color: location.pathname === item.path ? 'var(--nav-active)' : 'var(--nav-text)' }}
    >
    {item.text}
    </Link>
    </li>
    ))}
    </ul>
    </div>
    </div>
    );
}


export default Navbar;


// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import logo from '../assets/DTA.png';
// import { useTheme } from '../Theme/themeContext';

// function Navbar() {
//   const location = useLocation();
//   const { themeKey } = useTheme();
//   const [isOpen, setIsOpen] = useState(false);

//   function linkClasses(path) {
//     const isActive = location.pathname === path;
//     return `text-xl ${isActive ? 'font-semibold' : ''}`;
//   }

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <div
//       className="fixed top-0 left-0 w-full z-40 font-verdana theme-transition"
//       style={{
//         height: "var(--nav-height)",
//         display: "flex",
//         alignItems: "center",
//         backgroundColor: "var(--nav-bg)",
//         color: "var(--nav-text)",
//         paddingLeft: "1rem",
//         paddingRight: "1rem",
//       }}
//     >
//       <div className="flex justify-between items-center w-full">

//         {/* Logo + Brand */}
//         <div className="flex items-center">
//           <img src={logo} className="w-14 h-14 mr-2" alt="logo" />
//           <div
//             className="font-normal font-serif text-lg md:text-2xl lg:text-3xl"
//             style={{ color: "var(--nav-text)", lineHeight: 1 }}
//           >
//             <Link to="/" onClick={closeMenu}>
//               <h2 style={{ margin: 0 }}>DYNAMIC TALENT</h2>
//               <h1 style={{ margin: 0, fontSize: "0.8rem" }}>
//                 ACQUISITION SERVICES LLP
//               </h1>
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMenu}
//           className="sm:hidden flex items-center px-3 py-2 rounded"
//           style={{ color: "var(--nav-text)", borderColor: "transparent" }}
//         >
//           <svg
//             className="fill-current h-4 w-4"
//             viewBox="0 0 20 20"
//           >
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//           </svg>
//         </button>

//         {/* Menu Items */}
//         <ul
//           className={`${isOpen ? "block" : "hidden"
//             } sm:flex justify-center space-y-4 sm:space-y-0 sm:space-x-8 w-full sm:w-auto text-center mt-4 sm:mt-0`}
//         >
//           {[
//             { path: "/", text: "Home" },
//             { path: "/services", text: "Our Services" },
//             { path: "/about", text: "About Us" },
//             { path: "/careers", text: "Careers" },
//             { path: "/contact", text: "Contact" },
//           ].map((item) => (
//             <li key={item.path} className="text-sm sm:text-sm">
//               <Link
//                 to={item.path}
//                 onClick={closeMenu}
//                 className={linkClasses(item.path)}
//                 style={{
//                   color:
//                     location.pathname === item.path
//                       ? "var(--nav-active)"
//                       : "var(--nav-text)",
//                 }}
//               >
//                 {item.text}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
