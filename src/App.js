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
import RPO from "./InfoPages/Recruitment Process Outsourcing";
import ExecutiveSearch from "./InfoPages/ExecutiveSearch";
import InternationalTaxation from "./InfoPages/InternationalTaxation";
import PermanentRecruitment from "./InfoPages/PermanentRecruitment";
import RiskAdvisoryServices from "./InfoPages/RiskAdvisoryServices";
import HRAdvisory from "./InfoPages/HRAdvisory";
import IncomeTaxReturns from "./InfoPages/IncomeTaxReturns";
import PrivacyPolicy from "./InfoPages/privacy_policy";
import TermsofUse from "./InfoPages/terms_of_use";
import { ThemeProvider } from "./Theme/themeContext";
import ContractStaffing from "./InfoPages/ContractStaffing";

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
                        path="/services/Executive Search"
                        element={<ExecutiveSearch/>}
                    />
                    <Route
                        path="/services/Permanent Recruitment"
                        element={<PermanentRecruitment />}
                    />
                    <Route
                        path="/services/International Tax"
                        element={<InternationalTaxation />}
                    />
                    <Route
                        path="/services/Contract Staffing"
                        element={<ContractStaffing />}
                    />
                    <Route
                        path="/services/Risk Advisory"
                        element={<RiskAdvisoryServices />}
                    />
                    <Route
                        path="/services/Recruitment Process Outsourcing (RPO)"
                        element={<RPO/>}
                    />
                    <Route
                        path="/services/HR Advisory"
                        element={<HRAdvisory />}
                    />
                    {/* <Route
                        path="/services/Income Tax Returns"
                        element={<IncomeTaxReturns />}
                    /> */}
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
