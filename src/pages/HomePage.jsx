import { Link } from "react-router-dom";
import SiteLayout from "../components/SiteLayout";

function HomePage() {
  return (
    <SiteLayout>
      <section className="hero">
        <div>
          <p className="eyebrow">Creative Animation Agency</p>
          <h1>We bring stories to life with cinematic visuals.</h1>
          <p>
            MP2 Animation Studio crafts animation, branding, and motion design that helps brands communicate clearly
            and grow faster.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Start a Project
            </Link>
            <Link className="btn btn-outline" to="/works">
              View Works
            </Link>
          </div>
        </div>
        <img className="hero-logo" src="/logo.jpeg" alt="MP2 logo" />
      </section>

      <section className="card-grid">
        <article className="card">
          <h3>150+</h3>
          <p>Projects Completed</p>
        </article>
        <article className="card">
          <h3>80+</h3>
          <p>Happy Clients</p>
        </article>
        <article className="card">
          <h3>98%</h3>
          <p>Client Satisfaction</p>
        </article>
      </section>
    </SiteLayout>
  );
}

export default HomePage;
