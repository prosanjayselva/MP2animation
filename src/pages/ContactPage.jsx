import SiteLayout from "../components/SiteLayout";
import { contact, services } from "../data/siteData";

function ContactPage() {
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

        <form className="card form-grid">
          <h3>Start a Project</h3>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder={contact.phone} />
          <select defaultValue="">
            <option value="" disabled>
              Select Service
            </option>
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
          <textarea rows="5" placeholder="Tell us about your project..." />
          <button type="button" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}

export default ContactPage;
