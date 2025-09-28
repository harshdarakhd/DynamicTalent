import { HashRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "../src/components/Navbar";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import { NavLink } from "react-router-dom";
import ServicesCard from "./components/ServicesCards";
import DirectandIndirectTaxation from "./InfoPages/DirectandIndirectTaxation";
import ManagementConsultancy from "./InfoPages/RiskAdvisoryServices";
import TransactionAdvisory from "./InfoPages/RiskAdvisoryServices";
import BusinessRegistrationService from "./InfoPages/BusinessRegistration";
import DirectTaxation from "./InfoPages/DirectTaxation";
import InternationalTaxation from "./InfoPages/InternationalTaxation";
import IndirectTaxation from "./InfoPages/IndirectTaxation";
import BusinessSupportServices from "./InfoPages/BusinessSupport";
import RiskAdvisoryServices from "./InfoPages/RiskAdvisoryServices";
import HRAdvisory from "./InfoPages/HRAdvisory";
import IncomeTaxReturns from "./InfoPages/IncomeTaxReturns";
import PrivacyPolicy from "./InfoPages/privacy_policy";
import TermsofUse from "./InfoPages/terms_of_use";
import { ThemeProvider } from "./Theme/themeContext";

function App() {
    return (
        <ThemeProvider defaultTheme="clientHR">
        <div>
            <Router>
                {/* <Header /> */}
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/careers" element={<Careers />} />
                    <Route
                        path="/services/Direct Tax"
                        element={<DirectTaxation/>}
                    />
                    <Route
                        path="/services/GST"
                        element={<IndirectTaxation />}
                    />
                    <Route
                        path="/services/International Tax"
                        element={<InternationalTaxation />}
                    />
                    <Route
                        path="/services/Business Support"
                        element={<BusinessSupportServices />}
                    />
                    <Route
                        path="/services/Risk Advisory"
                        element={<RiskAdvisoryServices />}
                    />
                    <Route
                        path="/services/Business Registration"
                        element={<BusinessRegistrationService/>}
                    />
                    <Route
                        path="/services/HR Advisory"
                        element={<HRAdvisory />}
                    />
                    <Route
                        path="/services/Income Tax Returns"
                        element={<IncomeTaxReturns />}
                    />
                    <Route 
                        path ="privacy-policy"
                        element={<PrivacyPolicy />}
                    />
                    <Route
                        path="terms-of-use"
                        element={<TermsofUse />}
                    />
                </Routes>
            </Router>
        </div>
        </ThemeProvider>
    );
}

export default App;
