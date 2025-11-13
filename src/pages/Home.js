import React, { useEffect, useState, useRef } from 'react';
import { Card } from "antd";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import FooterArea from '../components/Footer';
import Homed from '../Images/D1.png';
import Homed1 from '../Images/D2.png';
import Homed2 from '../Images/D3.png';
import Homem from '../Images/M1.png';
import Homem1 from '../Images/M2.png';
import Homem2 from '../Images/M3.png';
import { useTheme } from "../Theme/themeContext";

// Replace with proper icons/logos for each source
import naukriLogo from "../assets/naukri.jpg";
import timesJobsLogo from "../assets/TimesJobs.jpg";
import indeedLogo from "../assets/indeed.jpg";
import linkedInLogo from "../assets/LinkedIn.jpg";
import socialMediaLogo from "../assets/SocialMedia.jpg";
import internalDbLogo from "../assets/InternalDatabase.jpg";

const desktop = [Homed, Homed1, Homed2];
const mobile = [Homem, Homem1, Homem2];

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
      className="relative w-full h-screen overflow-hidden md:mt-10 md:w-90%"
      style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full block object-cover transition-opacity duration-1000
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
  { id: 1, title: "Integrity in Every Engagement", description: "We uphold the highest standards of ethics and transparency in every partnership. Integrity defines our actions, guiding us to deliver solutions our clients can trust." },
  { id: 2, title: "People as Our Core Strength", description: "People are the foundation of every successful organization. We go beyond conventional hiring to align talent with vision, culture, and long-term organizational goals." },
  { id: 5, title: "Excellence through Partnership", description: "Collaboration is central to our approach. We work alongside clients as strategic partners, combining insight and innovation to achieve impactful hiring outcomes." },
  { id: 6, title: "Shaping Futures with Purpose", description: "Our focus extends beyond placements — we aim to empower professionals, strengthen businesses, and contribute to a future built on sustainable success." },
];

const HomeCard = () => (
  <div className="flex flex-col items-center px-4 " style={{ textAlign: 'justify' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full max-w-screen-lg">
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
          <h1 className="text-xl text-center font-semibold mt-1" style={{ color: 'var(--heading)' }}>
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
    {/* <div style={{ paddingTop: '2px' }}> */}
      <LandingPage />
      <Hometext />
      <TalentSources />
      <FooterArea />
    </div>
  );
}

export default Home;


// import React, { useEffect, useState } from "react";
// import Homed from '../Images/D1.png';
// import Homed1 from '../Images/D2.png';
// import Homed2 from '../Images/D3.png';
// import Homem from '../Images/M1.png';
// import Homem1 from '../Images/M2.png';
// import Homem2 from '../Images/M3.png';

// const desktop = [Homed, Homed1, Homed2];
// const mobile = [Homem, Homem1, Homem2];

// const Home = () => {
//   const [images, setImages] = useState(window.innerWidth < 768 ? mobile : desktop);
//   const [current, setCurrent] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const [isInitialLoad, setIsInitialLoad] = useState(true);

//   // Handle responsive image sets
//   useEffect(() => {
//     const handleResize = () => {
//       setImages(window.innerWidth < 768 ? mobile : desktop);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Auto slider
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setAnimating(true);
//       setCurrent((prev) => (prev + 1) % images.length);
//       setIsInitialLoad(false);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [images.length]);

//   return (
//     <div
//       className="relative w-full overflow-hidden"
//       style={{
//         marginTop: "var(--nav-height)",
//         height: "calc(100vh - var(--nav-height))",
//       }}
//     >
//       {images.map((img, idx) => {
//         const isMobile = window.innerWidth < 768;

//         return (
//           <img
//             key={idx}
//             src={img}
//             alt={`Hero-${idx}`}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
//               ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}
//               ${isInitialLoad ? "animate-fade-in" : animating ? idx === current ? "animate-fade-in" : "opacity-0" : ""}
//             `}
//             style={{
//               objectPosition: isMobile ? "center 25%" : "center center",
//             }}
//             onAnimationEnd={() => setAnimating(false)}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default Home;
