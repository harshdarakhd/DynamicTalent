// import React, { useEffect } from "react";
// import FooterArea from "../components/Footer";

// function Careers() {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const justifyStyle = {
//         textAlign: 'justify',
//     };

//     return (
//         <div className="min-h-screen flex flex-col">
//             <div className="flex-grow flex flex-col items-center p-2" style={justifyStyle}>
//                 <div className="px-4 py-8 lg:py-16">
//                     <h1 className="text-5xl mt-20 mb-10 lg:mt-40 text-left">Make an impact that matters.</h1>
//                     <p className="text-2xl mb-6 max-w-screen-lg">{`Many ideas grow better when transplanted into another mind than the one where they sprang up.`}</p>
//                     <p className="text-2xl mb-6 max-w-screen-lg">
//                         Our goal at Agarwal Darak & Associates is to build a team of individuals with competence, integrity, a passion for excellence, a desire to learn, a willingness to work hard, and more importantly, deep respect for their own commitments. A healthy work ethic and meritocracy, which rewards superior performance faster than expected, will reward them in return. Agarwal Darak & Associates offers a challenging, stimulating, and professional work environment where you will be an integral part of the team. We offer an exciting opportunity for you to grow on both a professional and personal level.
//                     </p>
//                     <p className="text-2xl mb-6 max-w-screen-lg">
//                         Send us your CV at <a href="mailto:info@adal.com" className="text-blue-600">info@adal.com</a>
//                     </p>
//                     <p className="text-2xl mb-6 max-w-screen-lg">
//                         Your CV must contain details of your actual experience, preference if any, for specific service areas, current and expected remuneration, and the period within which you can join if an offer is made.
//                     </p>
//                     <p className="text-2xl mb-6 max-w-screen-lg">
//                         Wishing you all success in your career ahead.
//                     </p>
//                 </div>
//             </div>
//             <FooterArea />
//         </div>
//     );
// }

// export default Careers;


// src/pages/Careers.js
import React, { useEffect } from "react";
import FooterArea from "../components/Footer";
import { useTheme } from "../Theme/themeContext";

function Careers() {
    const { themeKey } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const justifyStyle = { textAlign: 'justify' };

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow flex flex-col items-center p-2" style={justifyStyle}>
                <div className="px-4 py-8 lg:py-16">
                    <h1 className="text-5xl mt-20 mb-10 lg:mt-40 text-left" style={{ color: 'var(--heading)' }}>Make an impact that matters.</h1>
                    <p className="text-2xl mb-6 max-w-screen-lg" style={{ color: 'var(--text-primary)' }}>
                        Many ideas grow better when transplanted into another mind than the one where they sprang up.
                    </p>
                    <p className="text-2xl mb-6 max-w-screen-lg" style={{ color: 'var(--text-primary)' }}>
                        Our goal at Dynamic Talent Acquisition Services is to build a team of individuals with competence, integrity, a passion for excellence, a desire to learn, a willingness to work hard, and more importantly, deep respect for their own commitments. A healthy work ethic and meritocracy, which rewards superior performance faster than expected, will reward them in return. Dynamic Talent Acquisition Services offers a challenging, stimulating, and professional work environment where you will be an integral part of the team. We offer an exciting opportunity for you to grow on both a professional and personal level.
                    </p>
                    <p className="text-2xl mb-6 max-w-screen-lg" style={{ color: 'var(--text-primary)' }}>
                        Send us your CV at <a href="mailto:dynamic@urvacancy.com" className="text-blue-600">dynamic@urvacancy.com</a>
                    </p>
                    <p className="text-2xl mb-6 max-w-screen-lg" style={{ color: 'var(--text-primary)' }}>
                        Your CV must contain details of your actual experience, preference if any, for specific service areas, current and expected remuneration, and the period within which you can join if an offer is made.
                    </p>
                    <p className="text-2xl mb-6 max-w-screen-lg" style={{ color: 'var(--text-primary)' }}>
                        Wishing you all success in your career ahead.
                    </p>
                </div>
            </div>
            <FooterArea />
        </div>
    );
}

export default Careers;
