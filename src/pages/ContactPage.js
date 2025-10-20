import React from "react";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <div className="d-flex flex-column justify-content-center" style={{ minHeight: "80vh" }}>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
