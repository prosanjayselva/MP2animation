import SiteLayout from "../components/SiteLayout";

function AboutPage() {
  return (
    <SiteLayout>
      <section className="section-head">
        <p className="eyebrow">About</p>
        <h1>Creative partners since 2018.</h1>
      </section>
      <section className="about-grid">
        <img src="/logo.jpeg" alt="MP2 logo" className="about-logo" />
        <div>
          <p>
            MP2 Animation Studio was founded with one goal: help brands communicate with stronger visual language.
            We combine concept, story, and execution under one team.
          </p>
          <p>
            From logo systems to motion campaigns, every output is crafted for brand recall and measurable marketing
            impact.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

export default AboutPage;
