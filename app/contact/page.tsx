"use client";

import ContactForm from "@/components/ContactForm";
import "@/styles/contact.css";

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* Spacer matching original elementor layout */}
      <div className="contact-spacer" />

      {/* Main Form Container */}
      <section className="contact-container">
        <div className="contact-inner">
          {/* Centered Wooden Plank Banner */}
          <div className="contact-banner-wrapper">
            <img
              src="/images/banners/aged_wooden_plank_contact.png"
              alt="Contact Moon Rabbit"
              className="contact-plank-banner"
              onError={(e) => {
                // Keep layout clean if image not yet uploaded
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Contact Form Element */}
          <div className="contact-form-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
