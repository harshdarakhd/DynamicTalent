// import React, { useEffect } from "react";
// import { Divider } from "antd";
// import AboutCard from "../components/AboutCards";
// import FooterArea from "../components/Footer";

// const AboutUstext = () => {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const justifyStyle = {
//         textAlign: 'justify',
//     };

//     return (
//         <div className="flex flex-col items-center p-2" style={justifyStyle}>
//             <h1 className="text-4xl font-semibold mt-8 mb-6">ABOUT US</h1>
//             <p className="text-xl mb-6 max-w-screen-lg">
//                 Agarwal Darak & Associates LLP is a highly esteemed Chartered Accountants firm based in Pune. Our founders, CA Jayesh Agarwal and CA Varun Darak, envisioned a firm that could effectively tackle complex business challenges with customized and innovative solutions.
//             </p>
//             <p className="text-xl mb-6 max-w-screen-lg">
//                 With a comprehensive range of services, including Taxation, Compliance, GST, International Taxation, Transfer Pricing, Transaction Advisory, Company Law Matters, Representation as Counsel, Project Financing, Accounts Outsourcing, Audit and Assurance, Business Registrations, Valuations, Mergers and Acquisition, and Corporate, Financial, and Risk Advisory, we cater to diverse business needs. You are assured of expert guidance in all legal, financial, managerial, and administrative facets of business.
//             </p>
//             <p className="text-xl mb-6 max-w-screen-lg">
//                 As we look forward to a brighter future, we are even more determined than ever to keep the legacy of faith, cooperation, and unity alive!
//             </p>
//         </div>
//     );
// };

// function AboutUs() {
//     return (
//         <div className="min-h-screen flex flex-col">
//             <div className="flex-grow flex flex-col items-center p-10">
//                 <Divider />
//                 <AboutUstext />
//                 <Divider>
//                     <h1 className="text-4xl font-semibold mt-6">Core of the firm</h1>
//                 </Divider>
//                 <AboutCard />
//             </div>
//             <FooterArea />
//         </div>
//     );
// }

// export default AboutUs;


import React, { useEffect } from "react";
import { Divider } from "antd";
import AboutCard from "../components/AboutCards";
import FooterArea from "../components/Footer";
import { useTheme } from "../Theme/themeContext";

const AboutUstext = () => {
    const { themeKey } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const justifyStyle = { textAlign: 'justify' };

    return (
        <div className="flex flex-col items-center p-2" style={justifyStyle}>
            <h1 className="text-4xl font-semibold mt-8 mb-6" style={{ color: 'var(--heading)' }}>About Us & Our Vision</h1>
            <p className="text-xl mb-6 max-w-screen-lg" style={{ color: 'var(--text-primary)' }}>
                Dynamic Acquisition Talent Services LLP is a premier HR consultancy and recruitment vendor headquartered in Pune. Founded in 2004, we have been bridging the gap between exceptional talent and dynamic organizations across India.
            </p>
            {/* <p className="text-xl mb-6 max-w-screen-lg" style={{ color: 'var(--text-primary)' }}>
                With a comprehensive range of services, including Taxation, Compliance, GST, International Taxation, Transfer Pricing, Transaction Advisory, Company Law Matters, Representation as Counsel, Project Financing, Accounts Outsourcing, Audit and Assurance, Business Registrations, Valuations, Mergers and Acquisition, and Corporate, Financial, and Risk Advisory, we cater to diverse business needs. You are assured of expert guidance in all legal, financial, managerial, and administrative facets of business.
            </p> */}
            <p className="text-xl mb-6 max-w-screen-lg" style={{ color: 'var(--text-primary)' }}>
                As we look forward to a brighter future, we are even more determined than ever to keep the legacy of faith, cooperation, and unity alive!
            </p>
        </div>
    );
};

function AboutUs() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow flex flex-col items-center p-10">
                <Divider />
                <AboutUstext />
                {/* <Divider>
                    <h1 className="text-4xl font-semibold mt-6" style={{ color: 'var(--heading)' }}>About Us & Our Vision</h1>
                </Divider> */}
                <AboutCard />
            </div>
            <FooterArea />
        </div>
    );
}

export default AboutUs;