// import { Divider } from "antd";
// import React, { useEffect } from "react";
// import ServicesCard from "../components/ServicesCards";
// import FooterArea from "../components/Footer";

// function Services() {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <div className="min-h-screen flex flex-col">
//             <div className="flex-grow" style={{ padding: 20 }}>
//                 <Divider>
//                     <h1 className="text-3xl md:text-5xl font-bold mt-20 mb-6">OUR SERVICES</h1>
//                 </Divider>
//                 <div className="flex flex-col items-center">
//                     <ServicesCard />
//                 </div>
//             </div>
//             <FooterArea />
//         </div>
//     );
// }

// export default Services;


// src/pages/Services.js
import { Divider } from "antd";
import React, { useEffect } from "react";
import ServicesCard from "../components/ServicesCards";
import FooterArea from "../components/Footer";
import { useTheme } from "../Theme/themeContext";

function Services() {
    const { themeKey } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div
            className="min-h-screen flex flex-col"
            style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}
        >
            <div className="flex-grow" style={{ padding: 20 }}>
                <Divider>
                    <h1 className="text-3xl md:text-5xl font-bold mt-20 mb-6" style={{ color: 'var(--heading)' }}>
                        OUR SERVICES
                    </h1>
                </Divider>
                <div className="flex flex-col items-center">
                    <ServicesCard />
                </div>
            </div>
            <FooterArea />
        </div>
    );
}

export default Services;
