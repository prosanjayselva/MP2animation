import SiteLayout from "../components/SiteLayout";
import { services } from "../data/siteData";

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="section-head">
        <p className="eyebrow">Services</p>
        <h1>Everything you need for visual storytelling.</h1>
      </section>
      <section className="card-grid">
        {services.map((service) => (
          <article key={service} className="card">
            <h3>{service}</h3>
            <p>Custom strategy, design, and production handled by the MP2 team.</p>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}

export default ServicesPage;
