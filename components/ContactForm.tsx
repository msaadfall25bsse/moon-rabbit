"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Strictly frontend only, no backend/email sending
    setSubmitted(true);
    setFormData({ fullName: "", email: "", phoneNumber: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="wpforms-container wpforms-container-full wpforms-render-modern" id="wpforms-4434">
      {submitted && (
        <div className="wpforms-confirmation-container-full">
          <p>Thanks for contacting us! We will be in touch with you shortly.</p>
        </div>
      )}

      <form
        id="wpforms-form-4434"
        className="wpforms-form"
        onSubmit={handleSubmit}
      >
        <div className="wpforms-field-container">
          {/* Full Name */}
          <div className="wpforms-field wpforms-field-name">
            <label className="wpforms-field-label" htmlFor="wpforms-4434-field_0">
              Full Name <span className="wpforms-required-label" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="wpforms-4434-field_0"
              className="wpforms-field-large wpforms-field-required"
              placeholder="Your Name"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          {/* Email Address */}
          <div className="wpforms-field wpforms-field-email">
            <label className="wpforms-field-label" htmlFor="wpforms-4434-field_1">
              Email Address <span className="wpforms-required-label" aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="wpforms-4434-field_1"
              className="wpforms-field-large wpforms-field-required"
              placeholder="sample@yourcompanydomain.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Phone Number */}
          <div className="wpforms-field wpforms-field-text">
            <label className="wpforms-field-label" htmlFor="wpforms-4434-field_3">
              Phone Number <span className="wpforms-required-label" aria-hidden="true">*</span>
            </label>
            <input
              type="tel"
              id="wpforms-4434-field_3"
              className="wpforms-field-large wpforms-field-required"
              placeholder="Phone Number"
              required
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
          </div>

          {/* Message */}
          <div className="wpforms-field wpforms-field-textarea">
            <label className="wpforms-field-label" htmlFor="wpforms-4434-field_2">
              Message
            </label>
            <textarea
              id="wpforms-4434-field_2"
              className="wpforms-field-large"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
        </div>

        <div className="wpforms-submit-container">
          <button
            type="submit"
            id="wpforms-submit-4434"
            className="wpforms-submit"
            value="wpforms-submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
