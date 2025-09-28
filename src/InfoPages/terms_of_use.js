import React, { useEffect } from "react";
import { Divider } from "antd";
import FooterArea from "../components/Footer";

const TermsofuseText = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const justifyStyle = {
        textAlign: 'justify',
    };

    return (
        <div className="flex flex-col items-center p-2" style={justifyStyle}>
           <h1 className="mb-6 text-4xl">Terms of Use</h1>
            <div>We are constantly evolving in order to provide the best possible experience for you. These terms are important for you to understand and acknowledge to best set the expectations of our services. These terms broadly include the following:&nbsp;<br />
            <ul className="list-disc ml-8">
            <li>Using our Services</li>
            <li>Expectations&nbsp;</li>
            <li>Payment and Billing</li>
            <li>Content and Data&nbsp;</li>
            <li>Grievance and Resolution&nbsp;</li>
            </ul>
            <br /> 
            By accepting electronically (for example, clicking "I Agree"), installing, accessing or using the Services, you agree to these terms.&nbsp;
            <br /> 
            We also have a Privacy Policy; we encourage you to read through them to know more about how your data is protected.
            <br /> 
            <div className="mt-10"><strong>USING OUR SERVICES</strong></div>
            <br /> 
            Before using our services, you must be aware of the following:
            <br /> 
            <ol className="list-decimal list-inside ml-8">
            <strong>1.Term modifications:</strong>&nbsp;
            <br />
            <ul className="list-disc ml-8">
            <li>We would like to keep you up to date with our terms, so when we update them, we will alert you by putting the last updated date on this page.&nbsp;</li>
            </ul>
            <br /> 
            <strong>2.Service Provider:&nbsp;</strong>
            <br /> 
            <ul className="list-disc ml-8">
            <li>You are contracting with&nbsp;Agarwal Darak &amp; Associates LLP&nbsp;and/or its affiliates (referred to as "ADAL", "We", "Our", or "Us").&nbsp;</li>
            <li>Our business is based in India.</li>
            </ul>
            <br /> 
            <strong>3.Age Requirement:&nbsp;</strong>
            <br /> 
            <ul className="list-disc ml-8">
            <li>You must be at least 18 years or above to enjoy our services.</li>
            </ul>
            <br /> 
            <strong>4.User Registration:&nbsp;</strong>
            <br /> 
            <ul className="list-disc ml-8">
            <li>You will need to create an account with us. Please ensure to keep your password a secret because you're responsible for anything that happens using your account.&nbsp;</li>
            <li>If you pick a username that we think isn't okay (example: it's offensive or inappropriate), we might need to change or remove it.</li>
            </ul>
            <br /> 
            <strong>5.User Account:&nbsp;</strong>
            <br /> 
            </ol>
            <ul className="list-disc ml-16">
            <li>You can view your account via login ID and password.&nbsp;</li>
            <li>You can delete your account at any time from the dashboard. We clean up data periodically.</li>
            <li>Inaccurate registration information may result in account suspension.</li>
            <li>Your account or plan purchased cannot be transferred or shared with anyone else.</li>
            <li>If you suspect unauthorized use or knowledge of your account, please promptly notify us by&nbsp;<a href="https://help.quicko.com/support/tickets/new">submitting a request</a>.&nbsp;</li>
            </ul>
            <br /> 
            <strong>Service-Specific Additional terms:&nbsp;</strong><br/>
            The permission we give you to use our services continues as long as you comply with:
            <ul className="list-disc ml-8">
            <li>these terms</li>
            <li>service-specific additional terms, which include things related to only that service.</li>
            </ul>
            &nbsp;
            <div className="mt-10"><strong>WHAT WE CAN EXPECT FROM YOU</strong></div>
            <br /> 
            To ensure a good experience for all, it is essential that you adhere to the following guidelines of behaviour:
            <br /> 
            <ul className="list-disc ml-8">
            <li>Adhere to all applicable laws and regulations.</li>
            <li>Do not engage in unauthorized framing or linking of our Services.</li>
            <li>Avoid impersonating other users or using their account credentials.</li>
            <li>Refrain from harassing, intimidating, or threatening our employees or agents.</li>
            <li>Do not copy or modify our Services' software (example: HTML, JavaScript, images, or any other code).</li>
            <li>Retain any copyright and proprietary rights on content.</li>
            <li>Do not engage in automated use of the system or any data gathering tools (example: web scraping, robotic process automation, etc).</li>
            <li>Avoid disparaging, tarnishing, or harming us or our Services.</li>
            <li>Do not circumvent or interfere with security-related features of our Services.</li>
            <li>Do not engage in any other unauthorized use of our Services.</li>
            </ul>
            <br /> <strong>PAYMENT AND BILLING</strong><br/>
            &nbsp;
            While using our services, keep in mind the following:
            <br /> 
            <ul className="list-disc ml-8">
            <li>Applicable fees for our Services are charged upon purchasing a suitable plan which are fixed and final.</li>
            <li>Payments will be billed in Indian Rupees (INR) through our Payment gateway partners, accepting credit cards, debit cards, UPI, net banking, and bank EMI.</li>
            <li>The fees include applicable taxes, and any statutory variations in taxes are your responsibility.</li>
            <li>The fees are charged according to our determined manner, rates, and frequency, and we may update them at our discretion.</li>
            <li>Invoices will be generated upon purchasing a plan and can be viewed from your account.</li>
            <li>Invoice disputes must be communicated by&nbsp;submitting a request&nbsp;within ten (10) days from the invoice date and we will try our best to resolve them.</li>
            </ul>
            <br /> 
            <strong>&nbsp;Promotional offers:</strong>&nbsp;
            <br /> 
            <ul className="list-disc ml-8">
            <li>To avail promotional offers or discounts, log in to your account and use the coupon code during payment.</li>
            <li>Only one coupon code can be used at a time for a given service, and we may discontinue promotional codes or incentives anytime without notice.</li>
            </ul>
            <br /> 
            <strong>Refund and Cancellation:&nbsp;</strong>
            <br /> 
            <ul className="list-disc ml-8">
            <li>If you purchase a paid service that automatically renews, you can cancel it before the end of the current billing period.</li>
            <li>The cancellation will be effective at the end of the billing period.</li>
            <li>You will have access to the paid service until the start of the next billing period.</li>
            <li>You will not receive a refund or credit for any remaining days in your current billing period.</li>
            <li>You can cancel your purchase and receive a refund as long as you have not commenced using the relevant paid service purchased and make your request no later than 7 working days after your order is purchased.</li>
            <li>After 7 working days, refund requests may be approved or denied at our discretion.</li>
            <li>If you receive a refund, we reserve the right to terminate your access to the purchased service.</li>
            </ul>
            &nbsp;
            <div className="mt-10"><strong>CONTENT AND DATA</strong></div>
            <li className="list-disc ml-5">Some of our services are designed to let you upload, submit, store, send, receive, or share your personal information. You have no obligation to provide any content to our services and you&rsquo;re free to choose the content that you want to provide. If you decide to provide content, ensure you have the necessary rights and that it complies with the law.
            </li><br /> 
            <div className="mt-10"><strong>User data:</strong></div>
            <br /> 
            <ul className="list-disc ml-8">
            <li>We may retain the data you provide for the purpose of providing our Services to you.</li>
            <li>We do not share your data with any third parties without taking prior consent from you.&nbsp;</li>
            <li>We keep your data safe from any unauthorized use.&nbsp;</li>
            <li>We do not share or sell your data to any third party, your data is used safely by our internal products and services only.&nbsp;</li>
            <li>You are responsible for all the data you provide and any data related to your activities using our Services.</li>
            </ul>
            <br /> 
            <strong>Our Content:</strong>
            <br /> 
            <ul className="list-disc ml-8">
            <li>You agree not to use any intellectual property rights, title, or interest (&ldquo;IPR&rdquo;) in the contents of our website.</li>
            <li>The structure, colour, and other creative details of our website are proprietary to us.</li>
            <li>Trademarks, copyrights, and patents used by either party are the sole property of their respective owners.</li>
            <li>You grant us the rights to host, use, process, analyze, store, display, transmit, and retain your data for providing our Services.</li>
            <li>No assignment or license of any of our trademark or service mark or any other Intellectual Property Right is granted to you, except as expressly set out.</li>
            <li>You are not authorized to use or infringe upon our Intellectual Property Rights and must comply with these terms and other policies.</li>
            </ul>
            <br /> 
            <strong>Data Protection:&nbsp;</strong>
            <ul className="list-disc ml-8">
            <li>We prioritize data privacy and security.</li>
            <li>By using our Services, you agree to our Privacy Policy.</li>
            <li>We may maintain or use your data according to our Privacy Policy.</li>
            <li>Our Services are hosted in India, and if you access them from any other region, your data will be transferred to India with your express consent.</li>
            <li>We take appropriate measures to safeguard the security, confidentiality, and integrity of your data and prevent unauthorized access.</li>
            </ul>
            <br /> 
            <strong>&nbsp; &nbsp; Communications:</strong>
            <br /> 
            <ul className="list-disc ml-8">
            <li>By providing personal contact information, you consent to receive marketing communications from us.</li>
            <li>Marketing communications may include SMS, electronic communications, and promotional emails.</li>
            <li>You can unsubscribe at any time by clicking the "unsubscribe" link in the footer of our emails or by contacting us at info@adal.co.in.</li>
            </ul>
            <br /> 
            <br /> 
            <strong>GRIEVANCE AND RESOLUTION &nbsp;</strong>
            <br /> 
            You are entitled to receive services of a certain standard and quality, and you have the right and remedies to resolve any issues if things do not go as expected under these terms.
            <br /> 
            <ul className="list-decimal list-inside ml-8">
            <strong><li>Disclaimer:&nbsp;</li></strong>
            <br /> 
            <ul className="list-disc ml-8">
            <li>As our services are provided on an AS-IS and AS-AVAILABLE BASIS, we can only commit to our services.</li>
            <li>Your use of our Services is at your own risk.</li>
            <li>We make no warranties about the accuracy or completeness of the content or linked websites.</li>
            <li>We are not liable for errors, personal injury, unauthorized access, interruptions, or transmission issues.</li>
            <li>We are not responsible for any viruses, third-party products, or advertised services.</li>
            <li>We do take any responsibility for hyperlinked websites or featured advertisements.</li>
            </ul>
            <br /> 
            <strong><li>Governing Law and Dispute Resolution:</li></strong>
            <br /> 
            <ul className="list-disc ml-8">
            <li>Our services are governed by the laws of India.</li>
            <li>The exclusive jurisdiction for resolving any disputes related to our services lies with the courts, tribunals, councils, forums, and other dispute resolution bodies in Ahmedabad, India.</li>
            <li>Disputes or claims will be resolved through Alternative Dispute Resolution methods (example: mediation, arbitration, or negotiation), in accordance with applicable laws.</li>
            </ul>
            <br /> 
            <strong><li>Liabilities:</li></strong>
            <br/>
            <ul className="list-disc ml-8">
            <li>ADAL and its affiliates are not liable for any damages resulting from your use or inability to use the Services, including loss of profits or data.</li>
            <li>ADAL's liability, if any, is limited to the total amount you paid for the product or service in the six months preceding the claim.</li>
            <li>ADAL and its affiliates are not responsible for indirect or consequential damages, such as any interest and penalties levied by the Government, losses due to technology failures, data corruption, or loss of business or profits.&nbsp;</li>
            <li>You agree to protect and hold ADAL harmless from any claims or legal actions brought against them due to your actions or mistakes.</li>
            <li>If legal proceedings arise, both parties must notify each other within five days and have the opportunity to participate and defend themselves.</li>
            <li>The indemnity clause remains in effect even after the agreement ends. Claims related to indemnities cannot be made more than 30 days after the termination of services.</li>
            </ul>
            <br /> 
            <br /> 
            <strong><li>Action:&nbsp;</li></strong>
            <br /> 
            <ul className="list-disc ml-8">
            <li>We may terminate your account access to our services at any time if we see any suspicion of fraud, &nbsp;hacking, phishing, harassment, spamming, misleading others, unauthorized content scraping, illegal activity, unauthorized access, or non-compliance with these terms.&nbsp;</li>
            <li>If your account is terminated, you are prohibited from creating a new account under your name or any third party's name.&nbsp;</li>
            <li>It is required to comply with a legal requirement or court order.</li>
            </ul>
            </ul>
            <br /> 
            <br /> 
            <strong>Contact us:</strong>
            <br /> 
            <ul>
            <li>If you face any difficulties or require assistance, feel free to contact us via email at&nbsp;<a href="mailto:info@adal.com" className="text-blue-500">
                                    info@adal.com
            </a>.</li>
            </ul>
            </div>
        </div>
    );
};

function TermsofUse() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow flex flex-col items-center p-10">
                <Divider />
                <TermsofuseText />
            </div>
            <FooterArea />
        </div>
    );
}

export default TermsofUse;
