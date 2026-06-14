import { useState } from "react";
import SiteLayout from "../components/SiteLayout";
import { contact, services } from "../data/siteData";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const text = `*New Project Enquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Service:* ${service}\n*Message:* ${message}`;
    const url = `https://wa.me/918610759752?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  return (
    <SiteLayout>
      <section className="section-head">
        <p className="eyebrow">Contact</p>
        <h1>Let us build your next creative project.</h1>
      </section>

      <section className="contact-grid">
        <article className="card">
          <h3>Contact Information</h3>
          <p>
            <strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+918610759752">{contact.phone}</a>
          </p>
          <p>
            <strong>Address:</strong> {contact.address}
          </p>
          <p>
            <a href={contact.map} target="_blank" rel="noreferrer">
              Open Exact Location
            </a>
          </p>
        </article>

        <form className="card form-grid" onSubmit={handleSubmit}>
          <h3>Start a Project</h3>
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="tel" placeholder={contact.phone} value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <select value={service} onChange={(e) => setService(e.target.value)} required>
            <option value="" disabled>
              Select Service
            </option>
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
          <textarea rows="5" placeholder="Tell us about your project..." value={message} onChange={(e) => setMessage(e.target.value)} required />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}

export default ContactPage;
