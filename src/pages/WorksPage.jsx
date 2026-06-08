import SiteLayout from "../components/SiteLayout";

const projects = [
  { title: "Pulse Media Intro", type: "Logo Animation" },
  { title: "Urban Cart Explainer", type: "2D Animation" },
  { title: "Axon Motion Kit", type: "Motion Graphics" },
  { title: "Kova Brand Launch", type: "Branding" },
  { title: "Zephyr Social Ads", type: "Digital Marketing" },
  { title: "Nova Campaign Visuals", type: "Graphic Design" }
];

function WorksPage() {
  return (
    <SiteLayout>
      <section className="section-head">
        <p className="eyebrow">Our Works</p>
        <h1>Selected projects from MP2 Animation Studio.</h1>
      </section>
      <section className="card-grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h3>{project.title}</h3>
            <p>{project.type}</p>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}

export default WorksPage;
