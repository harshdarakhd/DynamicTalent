import React, { useEffect } from "react"; 
import { MdLocationOn, MdEmail, MdPhoneIphone, MdWhatsapp } from "react-icons/md";
import logo from "../assets/contact.png";
import FooterArea from "../components/Footer";
import { useTheme } from "../Theme/themeContext";

function ContactUs() {
    const { themeKey } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}>
            <div className="flex-grow">
                <div className="grid flex items-center lg:grid-cols-2 gap-8 p-3 mt-40">
                    <div className="lg:pl-16">
                        <h1 className="text-5xl mb-4 mt-10 lg:mt-0 lg:mb-0" style={{ color: 'var(--heading)' }}>We would love to hear from you!</h1>
                        <div className="mt-8 ml-4 lg:ml-0">
                            <h2 className="text-xl mb-4 flex items-center">
                                <MdEmail style={{ marginRight: '10px', fontSize: "25px" }} />
                                <b>Email:</b>&nbsp;
                                <a href="mailto:dynamic@urvacancy.com" className="hover:text-blue-500">
                                    dynamic@urvacancy.com
                                </a>
                            </h2>
                            <h2 className="text-xl mb-4 flex items-center">
                                <MdPhoneIphone style={{ marginRight: '10px', fontSize: "25px" }} />
                                <p><b>Contact No:</b></p><p>+91 7058457857</p>
                            </h2>
                            <h2 className="text-xl mb-4 flex items-center">
                                <MdWhatsapp style={{ marginRight: '10px', fontSize: "25px" }} />
                                <a
                                    href="https://api.whatsapp.com/send/?phone=917058457857&text=Hello wanted to connect with you."
                                    target="_blank"
                                    className="hover:text-blue-500"
                                >
                                    Click to chat on WhatsApp
                                </a>
                            </h2>
                            <a href='https://share.google/mvesvRoPwCI6osa49' target="_blank" className="flex items-center mt-2 text-xl">
                                <MdLocationOn style={{ marginRight: '10px', fontSize: "25px" }} />
                                <b>Office Address:</b> 128/4, MVPM Spark Co-working Space,Near Balewadi High St, Baner, Pune, Maharashtra 411045
                            </a>
                        </div>
                    </div>

                    <div className="lg:pr-16 flex justify-center items-center">
                        <img src={logo} alt="contact us" className="w-full max-w-md" />
                    </div>
                </div>
            </div>
            <FooterArea />
        </div>
    );
}

export default ContactUs;
