import { NavLink } from "react-router-dom";
import { contact } from "../data/siteData";
import logoSrc from "../assets/logo.jpeg";

const navItems = [
  { to: "/home", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/works", label: "Works" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];

function SiteLayout({ children }) {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <NavLink to="/home" className="brand">
            <img src={logoSrc} alt="MP2 Animation Studio logo" />
            <span>MP2 Animation Studio</span>
          </NavLink>
          <nav className="nav">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="container page">{children}</main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="brand brand-footer">
              <img src={logoSrc} alt="MP2 Animation Studio logo" />
              <span>MP2 Animation Studio</span>
            </div>
            <p>{contact.address}</p>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              {" · "}
              <a href="tel:+918610759752">{contact.phone}</a>
            </p>
          </div>
          <div className="socials">
            {contact.socials.map((item) => (
              <a key={item.name} href={item.url} target="_blank" rel="noreferrer" className="social-link">
                <span>{item.icon}</span> {item.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;
