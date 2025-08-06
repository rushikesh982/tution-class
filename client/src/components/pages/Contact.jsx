import React from "react";
import ContactBanner from "../sections/ContactBanner";
import InquiryForm from "../sections/InquiryForm";
import ContactInfo from "../sections/ContactInfo";
import '../css/Contact.css'
import ContactMap from "../sections/ContactMap";

const Contact = () => {
  return (
    <>
    <ContactBanner />
    <InquiryForm/>
    <ContactInfo/>
    <ContactMap/>
    </>
  );
};

export default Contact;