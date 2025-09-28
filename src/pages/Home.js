// import React, { useEffect, useState, useRef } from 'react';
// import { Card } from "antd";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import { AiFillLinkedin } from "react-icons/ai";
// import { MdWhatsapp } from "react-icons/md";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import { FaLocationArrow } from "react-icons/fa";
// import Home1 from '../Images/Home1.jpeg';
// import Home2 from '../Images/Home2.jpeg';
// import Home5 from '../Images/Home3.png';
// import Home6 from '../Images/Home4.png';
// import img1 from '../assets/FMCG.png';
// import img2 from '../assets/InfrastructureandRealEstate.png';
// import img3 from '../assets/Manufacturing.png';
// import img4 from '../assets/Jewellery.png';
// import img5 from '../assets/HealthCare.png';
// import img6 from '../assets/Lifestyle.png';
// import img7 from '../assets/NBFCsandFinancialServices.png';
// import FooterArea from '../components/Footer';
// import Homed from '../Images/Image1desktop.jpeg';
// import Homed1 from '../Images/Image2desktop.jpeg';
// import Homed2 from '../Images/Image3desktop.jpeg';
// import Homed3 from '../Images/Image4desktop.jpeg';
// import Homem from '../Images/Image1mobile.jpeg';
// import Homem1 from '../Images/Image2mobile.jpeg';
// import Homem2 from '../Images/Image3mobile.jpeg';
// import Homem3 from '../Images/Image4mobile.jpeg';


// const { Meta } = Card;

// const desktop = [Homed, Homed1, Homed2, Homed3];
// const mobile = [Homem, Homem1, Homem2, Homem3];

// const LandingPage = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [prevImageIndex, setPrevImageIndex] = useState(0);
//   const [isInitialLoad, setIsInitialLoad] = useState(true);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [images, setImages] = useState(window.innerWidth < 768 ? mobile : desktop);

//   useEffect(() => {
//     const updateImages = () => {
//       if (window.innerWidth < 768) {
//         setImages(mobile);
//       } else {
//         setImages(desktop);
//       }
//     };

//     updateImages(); // Initial check

//     window.addEventListener('resize', updateImages);
//     return () => window.removeEventListener('resize', updateImages);
//   }, []);

//   useEffect(() => {
//     console.log('Current images:', images); // Log images
//     const interval = setInterval(() => {
//       setIsTransitioning(true);
//       setPrevImageIndex(currentImageIndex);
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setIsInitialLoad(false);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentImageIndex, images.length]);

//   const handlePrevClick = () => {
//     setIsTransitioning(true);
//     setPrevImageIndex(currentImageIndex);
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     setIsInitialLoad(false);
//   };

//   const handleNextClick = () => {
//     setIsTransitioning(true);
//     setPrevImageIndex(currentImageIndex);
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     setIsInitialLoad(false);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden mt-10 md:w-90%">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Slide ${index}`}
//           className={`absolute top-0 left-0 w-full h-full object-contain md:object-cover transition-opacity duration-1000 transform md:scale-85 ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
//             } ${isInitialLoad
//               ? 'animate-fade-in'
//               : isTransitioning
//                 ? index === currentImageIndex
//                   ? 'animate-fade-in'
//                   : 'opacity-0'
//                 : ''
//             }`}
//           onAnimationEnd={() => setIsTransitioning(false)}
//         />
//       ))}
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={handlePrevClick}
//           className="text-white bg-black bg-opacity-50 rounded-full p-2 z-20"
//         >
//           <FaArrowLeft size={30} />
//         </button>
//         <button
//           onClick={handleNextClick}
//           className="text-white bg-black bg-opacity-50 rounded-full p-2 z-20"
//         >
//           <FaArrowRight size={30} />
//         </button>
//       </div>
//     </div>
//   );
// };




// const data = [
//   {
//     id: 1,
//     title: "Integrity",
//     description: (
//       "We are fair, honest and transparent in our conduct; everything we do must stand the test of public scrutiny. We observe highest ethical standards, preserve client confidence, maintain an independent perspective and manage client and firm resources cost-effectively."
//     ),
//   },
//   {
//     id: 2,
//     title: "Responsibility",
//     description: "We take responsibility for our actions and are conscious about environmental and social principles in our work."
//   },
//   // {
//   //     id: 3,
//   //     title: "Meritocracy",
//   //     description: "We are passionate about achieving the highest standards of quality, always promoting meritocracy. We believe talent and hard- work have no substitute."
//   // },
//   // {
//   //     id: 4,
//   //     title: "Pioneering",
//   //     description: "We are bold and agile, courageously taking on challenges and using deep customer insight to develop innovative solutions. We constantly look to improve upon our services, cultivating our knowledge, skill and attitude to achieve excellence."
//   // },
//   {
//     id: 5,
//     title: "Unity",
//     description: "We invest in our people and partners, enable continuous learning, and build caring and collaborative relationships based on trust and mutual respect. We are always receptive to new ideas and new ways of thinking, embracing change and sharing knowledge"
//   },
//   {
//     id: 6,
//     title: "Collaboration",
//     description: "We continuously strive to receive feedback from all stakeholders, improve upon it and act. We regard the freedom of expression of thought as one of the yardsticks of growth. Individual strengths when combined to form a team helps to accelerate performance & output. We align individual goals with that of the team & the Firm."
//   },
// ];

// const justifyStyle = {
//   textAlign: 'justify',
// };

// const HomeCard = () => {
//   return (
//     <div className="flex flex-col items-center px-4 " style={justifyStyle}>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-screen-lg">
//         {data.map((item) => {
//           return (
//             <div key={item.id} className="flex flex-col my-8 border-2 p-4 relative md:w-auto" style={{ borderRadius: '12px' }}>
//               {/* Add the curved grey line */}
//               <div className="absolute top-0 left-0 right-0 h-1 bg-gray-700" style={{ marginTop: '-1px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}></div>
//               <h1 className="text-lg text-center font-semibold mt-3">{item.title}</h1>
//               <p className="mt-4 font-sans text-center mb-3">{item.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>

//   );
// }

// const Hometext = () => {
//   return (
//     <div className="flex flex-col">
//       <h1 className="text-5xl text-center" style={{ marginTop: '100px', fontFamily: 'Times New Roman' }}>
//         Our Ethos
//       </h1>
//       <HomeCard />
//     </div>
//     // <div className="max-w-2xl text-white relative pl-4 lg:pl-8 py-8 lg:pl-0 lg:text-left">
//     //   <h1 className="text-8xl mb-6" style={{ marginTop: '100px' ,fontFamily: 'Times New Roman'}}>
//     //     We rise by lifting others
//     //   </h1>
//     //  <h1 className="text-4xl mb-6" style={{ marginTop : '60px' ,fontFamily: 'Times New Roman'}}>
//     //    Striving hard to make a positive impact
//     //  </h1>
//     //</div>
//   );
// };


// const img = [img1, img2, img3, img5, img7];
// const HomeInfo = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollRef = useRef(7);

//   return (
//     <div className="relative flex flex-col items-center">
//       <div className="flex flex-wrap justify-center items-center mt-2 w-full mx-auto">
//         <h1
//           className="text-4xl mb-8 max-w-2xl text-center"
//           style={{ marginTop: '40px', fontFamily: 'Times New Roman' }}
//         >
//           Industries We Serve
//         </h1>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-screen-lg">
//         {img.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index}`}
//             className="w-full object-cover rounded-lg"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// function Home() {
//   // const [refreshed, setRefreshed] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);


//   return (
//     <div>
//       <div>
//         <LandingPage />
//       </div>
//       <div>
//         {/* <img
//         src={HomeLogo}
//         className="absolute inset-0 w-full h-full object-cover"
//         alt="Home Background"
//         style={{ zIndex: -1 }}
//       /> */}
//         {/* <div className="absolute inset-0 opacity-50"></div> */}
//         <Hometext />
//       </div>
//       <div className="flex flex-col items-center">
//         {/* <h1 className="mt-10 md:text-7xl 2xl">We Deliver What We Promise</h1> */}
//         <HomeInfo />
//       </div>
//       <FooterArea />

//       {/* add a button which will redirect to Contact us page */}
//       {/* <div className="flex justify-center">
//       <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-20 mb-20"
//       onClick={() => window.location.href='ca-varun-associates-site#/contact'}
//       >
//         Get In Touch
//       </button>
//       </div> */}
//     </div>

//   );
// }

// export default Home;


// // src/pages/Home.js
// import React, { useEffect, useState, useRef } from 'react';
// import { Card } from "antd";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import { AiFillLinkedin } from "react-icons/ai";
// import { MdWhatsapp } from "react-icons/md";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import { FaLocationArrow } from "react-icons/fa";
// import Home1 from '../Images/Home1.jpeg';
// import Home2 from '../Images/Home2.jpeg';
// import Home5 from '../Images/Home3.png';
// import Home6 from '../Images/Home4.png';
// import img1 from '../assets/FMCG.png';
// import img2 from '../assets/InfrastructureandRealEstate.png';
// import img3 from '../assets/Manufacturing.png';
// import img4 from '../assets/Jewellery.png';
// import img5 from '../assets/HealthCare.png';
// import img6 from '../assets/Lifestyle.png';
// import img7 from '../assets/NBFCsandFinancialServices.png';
// import FooterArea from '../components/Footer';
// import Homed from '../Images/Image1desktop.jpeg';
// import Homed1 from '../Images/Image2desktop.jpeg';
// import Homed2 from '../Images/Image3desktop.jpeg';
// import Homed3 from '../Images/Image4desktop.jpeg';
// import Homem from '../Images/Image1mobile.jpeg';
// import Homem1 from '../Images/Image2mobile.jpeg';
// import Homem2 from '../Images/Image3mobile.jpeg';
// import Homem3 from '../Images/Image4mobile.jpeg';
// import { useTheme } from "../Theme/themeContext";

// const { Meta } = Card;
// const desktop = [Homed, Homed1, Homed2, Homed3];
// const mobile = [Homem, Homem1, Homem2, Homem3];

// const LandingPage = () => {
//   const { themeKey } = useTheme();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [prevImageIndex, setPrevImageIndex] = useState(0);
//   const [isInitialLoad, setIsInitialLoad] = useState(true);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [images, setImages] = useState(window.innerWidth < 768 ? mobile : desktop);

//   useEffect(() => {
//     const updateImages = () => setImages(window.innerWidth < 768 ? mobile : desktop);
//     updateImages();
//     window.addEventListener('resize', updateImages);
//     return () => window.removeEventListener('resize', updateImages);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsTransitioning(true);
//       setPrevImageIndex(currentImageIndex);
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setIsInitialLoad(false);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentImageIndex, images.length]);

//   const handlePrevClick = () => {
//     setIsTransitioning(true);
//     setPrevImageIndex(currentImageIndex);
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     setIsInitialLoad(false);
//   };

//   const handleNextClick = () => {
//     setIsTransitioning(true);
//     setPrevImageIndex(currentImageIndex);
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     setIsInitialLoad(false);
//   };

//   return (
//     <div
//       className="relative w-full h-screen overflow-hidden mt-10 md:w-90%"
//       style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}
//     >
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Slide ${index}`}
//           className={`absolute top-0 left-0 w-full h-full object-contain md:object-cover transition-opacity duration-1000 transform md:scale-85 ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
//             } ${isInitialLoad
//               ? 'animate-fade-in'
//               : isTransitioning
//                 ? index === currentImageIndex
//                   ? 'animate-fade-in'
//                   : 'opacity-0'
//                 : ''
//             }`}
//           onAnimationEnd={() => setIsTransitioning(false)}
//         />
//       ))}
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={handlePrevClick}
//           className="text-white bg-black bg-opacity-50 rounded-full p-2 z-20"
//         >
//           <FaArrowLeft size={30} />
//         </button>
//         <button
//           onClick={handleNextClick}
//           className="text-white bg-black bg-opacity-50 rounded-full p-2 z-20"
//         >
//           <FaArrowRight size={30} />
//         </button>
//       </div>
//     </div>
//   );
// };

// // Ethos Data
// const data = [
//   { id: 1, title: "Integrity", description: "We are fair, honest and transparent in our conduct; everything we do must stand the test of public scrutiny. We observe highest ethical standards, preserve client confidence, maintain an independent perspective and manage client and firm resources cost-effectively." },
//   { id: 2, title: "Responsibility", description: "We take responsibility for our actions and are conscious about environmental and social principles in our work." },
//   { id: 5, title: "Unity", description: "We invest in our people and partners, enable continuous learning, and build caring and collaborative relationships based on trust and mutual respect. We are always receptive to new ideas and new ways of thinking, embracing change and sharing knowledge" },
//   { id: 6, title: "Collaboration", description: "We continuously strive to receive feedback from all stakeholders, improve upon it and act. We regard the freedom of expression of thought as one of the yardsticks of growth. Individual strengths when combined to form a team helps to accelerate performance & output. We align individual goals with that of the team & the Firm." },
// ];

// const justifyStyle = { textAlign: 'justify' };

// const HomeCard = () => {
//   return (
//     <div className="flex flex-col items-center px-4 " style={justifyStyle}>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-screen-lg">
//         {data.map((item) => (
//           <div
//             key={item.id}
//             className="flex flex-col my-8 border-2 p-4 relative md:w-auto theme-transition"
//             style={{
//               borderRadius: '12px',
//               borderColor: 'var(--card-border)',
//               backgroundColor: 'var(--bg-page)',
//               color: 'var(--text-primary)'
//             }}
//           >
//             <div className="absolute top-0 left-0 right-0 h-1" style={{ marginTop: '-1px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', backgroundColor: 'var(--muted)' }}></div>
//             <h1 className="text-lg text-center font-semibold mt-3" style={{ color: 'var(--heading)' }}>{item.title}</h1>
//             <p className="mt-4 font-sans text-center mb-3">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Hometext = () => {
//   return (
//     <div className="flex flex-col">
//       <h1 className="text-5xl text-center theme-transition" style={{ marginTop: '100px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>
//         Our Ethos
//       </h1>
//       <HomeCard />
//     </div>
//   );
// };

// const img = [img1, img2, img3, img5, img7];
// const HomeInfo = () => {
//   return (
//     <div className="relative flex flex-col items-center">
//       <div className="flex flex-wrap justify-center items-center mt-2 w-full mx-auto">
//         <h1 className="text-4xl mb-8 max-w-2xl text-center theme-transition" style={{ marginTop: '40px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>
//           Industries We Serve
//         </h1>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-screen-lg">
//         {img.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index}`}
//             className="w-full object-cover rounded-lg"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// function Home() {
//   const { themeKey } = useTheme();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="theme-transition" style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}>
//       <LandingPage />
//       <Hometext />
//       <HomeInfo />
//       <FooterArea />
//     </div>
//   );
// }

// export default Home;


// src/pages/Home.js
import React, { useEffect, useState, useRef } from 'react';
import { Card } from "antd";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Home1 from '../Images/Home1.jpeg';
import Home2 from '../Images/Home2.jpeg';
import Home5 from '../Images/Home3.png';
import Home6 from '../Images/Home4.png';
import FooterArea from '../components/Footer';
import Homed from '../Images/Image1desktop.jpeg';
import Homed1 from '../Images/Image2desktop.jpeg';
import Homed2 from '../Images/Image3desktop.jpeg';
import Homed3 from '../Images/Image4desktop.jpeg';
import Homem from '../Images/Image1mobile.jpeg';
import Homem1 from '../Images/Image2mobile.jpeg';
import Homem2 from '../Images/Image3mobile.jpeg';
import Homem3 from '../Images/Image4mobile.jpeg';
import { useTheme } from "../Theme/themeContext";

// Replace with proper icons/logos for each source
import naukriLogo from "../assets/naukri.jpg";
import timesJobsLogo from "../assets/TimesJobs.jpg";
import indeedLogo from "../assets/indeed.jpg";
import linkedInLogo from "../assets/LinkedIn.jpg";
import socialMediaLogo from "../assets/SocialMedia.jpg";
import internalDbLogo from "../assets/InternalDatabase.jpg";

const desktop = [Homed, Homed1, Homed2, Homed3];
const mobile = [Homem, Homem1, Homem2, Homem3];

// LandingPage (unchanged except theme usage)
const LandingPage = () => {
  const { themeKey } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [images, setImages] = useState(window.innerWidth < 768 ? mobile : desktop);

  useEffect(() => {
    const updateImages = () => setImages(window.innerWidth < 768 ? mobile : desktop);
    updateImages();
    window.addEventListener('resize', updateImages);
    return () => window.removeEventListener('resize', updateImages);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsInitialLoad(false);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden mt-10 md:w-90%"
      style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-contain md:object-cover transition-opacity duration-1000 
          ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
          ${isInitialLoad ? 'animate-fade-in' : isTransitioning ? (index === currentImageIndex ? 'animate-fade-in' : 'opacity-0') : ''}`}
          onAnimationEnd={() => setIsTransitioning(false)}
        />
      ))}
    </div>
  );
};

// Ethos Data
const data = [
  { id: 1, title: "Integrity", description: "We are fair, honest and transparent in our conduct; everything we do must stand the test of public scrutiny." },
  { id: 2, title: "Responsibility", description: "We take responsibility for our actions and are conscious about environmental and social principles in our work." },
  { id: 5, title: "Unity", description: "We invest in our people and partners, enable continuous learning, and build caring and collaborative relationships." },
  { id: 6, title: "Collaboration", description: "We continuously strive to receive feedback from all stakeholders, improve upon it and act. We align individual goals with that of the team." },
];

const HomeCard = () => (
  <div className="flex flex-col items-center px-4 " style={{ textAlign: 'justify' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-screen-lg">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col my-8 border-2 p-4 relative md:w-auto theme-transition"
          style={{
            borderRadius: '12px',
            borderColor: 'var(--card-border)',
            backgroundColor: 'var(--bg-page)',
            color: 'var(--text-primary)'
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-1"
            style={{ marginTop: '-1px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', backgroundColor: 'var(--muted)' }}
          />
          <h1 className="text-lg text-center font-semibold mt-3" style={{ color: 'var(--heading)' }}>
            {item.title}
          </h1>
          <p className="mt-4 font-sans text-center mb-3">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Hometext = () => (
  <div className="flex flex-col">
    <h1 className="text-5xl text-center theme-transition"
      style={{ marginTop: '100px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>
      Our Ethos
    </h1>
    <HomeCard />
  </div>
);

// Talent Sources Carousel
const talentSources = [
  { name: "Naukri.com", logo: naukriLogo },
  { name: "TimesJobs", logo: timesJobsLogo },
  { name: "Indeed", logo: indeedLogo },
  { name: "LinkedIn", logo: linkedInLogo },
  { name: "Social Media", logo: socialMediaLogo },
  { name: "Internal DB", logo: internalDbLogo },
];

// const TalentSources = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const scroll = () => {
//       if (scrollRef.current) {
//         scrollRef.current.scrollLeft += 1; // slow auto scroll
//         if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
//           scrollRef.current.scrollLeft = 0;
//         }
//       }
//     };
//     const interval = setInterval(scroll, 40); // adjust speed
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative flex flex-col items-center w-full">
//       <h1 className="text-4xl mb-8 text-center theme-transition"
//         style={{ marginTop: '40px', fontFamily: 'var(--font-heading)', color: 'var(--heading)' }}>
//         Talent Sources
//       </h1>
//       <div
//         ref={scrollRef}
//         className="flex space-x-6 overflow-x-hidden w-full max-w-screen-lg px-4 py-2"
//       >
//         {[...talentSources, ...talentSources].map((source, index) => (
//           <div key={index} className="flex flex-col items-center flex-shrink-0 w-1/5">
//             <img src={source.logo} alt={source.name} className="h-16 w-16 object-contain mb-2" />
//             <p className="text-sm text-center">{source.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const TalentSources = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1; // slow auto scroll
        // instead of hard reset, loop smoothly
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 30); // smaller interval = smoother scroll
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center w-full">
      <h1
        className="text-4xl mb-8 text-center theme-transition"
        style={{
          marginTop: "40px",
          fontFamily: "var(--font-heading)",
          color: "var(--heading)",
        }}
      >
      Our Talent Sources
      </h1>
      <div
        ref={scrollRef}
        className="flex space-x-1 overflow-x-hidden w-full max-w-screen-lg px-4 py-2"
      >
        {[...talentSources, ...talentSources].map((source, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-shrink-0 w-1/5"
          >
            <img
              src={source.logo}
              alt={source.name}
              className="h-24 w-24 object-contain mb-2" // increased size
            />
            <p className="text-base text-center">{source.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function Home() {
  const { themeKey } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="theme-transition" style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}>
      <LandingPage />
      <Hometext />
      <TalentSources />
      <FooterArea />
    </div>
  );
}

export default Home;
