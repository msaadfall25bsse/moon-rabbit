import ContactForm from "@/components/ContactForm";
import "@/styles/contact.css";

export default function ContactPage() {
  return (
    <main>
      {/* Contact Banner Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Planning your mystical journey to Northern Pakistan? Reach out to the Moon Rabbit team.
          </p>
        </div>
      </section>

      {/* Contact Main Grid Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Sidebar Info */}
            <div className="contact-info-card">
              <h2 className="info-heading">Get In Touch</h2>

              <div className="info-item">
                <p className="info-label">Address</p>
                <p className="info-value">
                  Gilgit & Skardu, Northern Pakistan
                </p>
              </div>

              <div className="info-item">
                <p className="info-label">Phone & WhatsApp</p>
                <p className="info-value">+92 300 0000000</p>
              </div>

              <div className="info-item">
                <p className="info-label">Email Address</p>
                <p className="info-value">info@moonrabbit.pk</p>
              </div>

              <div className="info-item">
                <p className="info-label">Tour Hours</p>
                <p className="info-value">Monday – Sunday: 24 / 7 Concierge</p>
              </div>
            </div>

            {/* Right Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
