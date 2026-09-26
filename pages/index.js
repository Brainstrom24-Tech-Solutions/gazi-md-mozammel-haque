import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FiArrowDown,
  FiArrowUp,
  FiArrowUpRight,
  FiArrowRight,
  FiMap,
  FiHome,
  FiShield,
  FiGrid,
  FiMenu,
  FiX,
} from "react-icons/fi";
import {
  profile,
  timeline,
  initiatives,
  companies,
  publication,
} from "../data/site";

const navigation = [
  ["Profile", "about"],
  ["Companies", "companies"],
  ["Journey", "journey"],
  ["Initiatives", "initiatives"],
  ["Publication", "publication"],
];
const icons = { map: FiMap, building: FiGrid, shield: FiShield, home: FiHome };

function Label({ children, light = false }) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span />
      {children}
    </p>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButton = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -50% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <Head>
        <title>
          Gazi Md. Mozammel Haque | Project Director, Anondo Housing Society
        </title>
        <meta
          name="description"
          content="Gazi Md. Mozammel Haque, Project Director of Anondo Housing Society and Joint Secretary of the Bangladesh Kabaddi Federation. Explore his companies, career and publication."
        />
        <meta name="theme-color" content="#173c34" />
        <meta
          property="og:title"
          content="Gazi Md. Mozammel Haque | Project Director, Anondo Housing Society"
        />
        <meta
          property="og:description"
          content="Project Director of Anondo Housing Society. Joint Secretary of the Bangladesh Kabaddi Federation. Discover his professional journey, companies and publication."
        />
        <meta property="og:image" content={profile.image} />
        <meta property="og:type" content="profile" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a
            href="#home"
            className="brand"
            aria-label="Gazi Md. Mozammel Haque — home"
          >
            <span className="monogram">
              M<span>H</span>
              <i />
            </span>
            <span className="brand-text">
              GAZI MD. MOZAMMEL HAQUE
              <small>Project Director · Anondo Housing Society</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? "location" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="#leadership" className="header-cta">
            Leadership & vision <FiArrowUpRight />
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <nav
          id="mobile-nav"
          className="mobile-nav"
          data-lenis-prevent
          aria-label="Mobile navigation"
          hidden={!menuOpen}
        >
          {[...navigation, ["Leadership & vision", "leadership"]].map(
            ([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
                <FiArrowUpRight />
              </a>
            ),
          )}
        </nav>
      </header>

      <main id="main-content">
        <section id="home" className="hero">
          <div className="hero-watermark" aria-hidden="true">
            MH
          </div>
          <div className="container hero-layout">
            <div className="hero-copy">
              <Label>Service. Purpose. Progress.</Label>
              <h1>
                Gazi Md.
                <br />
                Mozammel
                <br />
                <em>Haque.</em>
              </h1>
              <div className="hero-role">
                <span />
                <div>
                  {profile.role}
                  <strong className="hero-company">{profile.company}</strong>
                </div>
              </div>
              <p className="hero-description">
                A life dedicated to public service.
                <br />A vision shaped by responsibility.
                <br />
                Leadership with people at its heart.
              </p>
              <div className="hero-actions">
                <a href="#about" className="button button-dark">
                  Discover the profile <FiArrowUpRight />
                </a>
                <a href="#initiatives" className="text-link">
                  Explore initiatives <FiArrowRight />
                </a>
              </div>
            </div>
            <div className="portrait-composition">
              <div className="portrait-topline">
                <span>THE PROFESSIONAL PROFILE</span>
                <span>01 / INTRODUCTION</span>
              </div>
              <div className="portrait-frame">
                <Image
                  src={profile.image}
                  alt="Gazi Md. Mozammel Haque seated at his office desk"
                  fill
                  sizes="(max-width: 760px) 160vw, 90vw"
                  quality={90}
                  priority
                  className="hero-portrait"
                />
                <div className="portrait-overlay" />
                <div className="portrait-caption">
                  <span className="caption-rule" />
                  <div>
                    Purpose in every responsibility.
                    <small>GAZI MD. MOZAMMEL HAQUE</small>
                  </div>
                </div>
              </div>
              <div className="portrait-bottomline">
                <span>PUBLIC SERVICE & PROJECT LEADERSHIP</span>
              </div>
            </div>
          </div>
          <div className="container hero-bottom">
            <a href="#about">
              <span className="scroll-circle">
                <FiArrowDown />
              </span>
              SCROLL TO DISCOVER
            </a>
            <p>
              Grounded in experience. <span>Focused on the future.</span>
            </p>
          </div>
        </section>

        <div className="values-strip">
          <div className="container">
            <span>Public service</span>
            <i>✦</i>
            <span>Institutional leadership</span>
            <i>✦</i>
            <span>Responsible stewardship</span>
            <i>✦</i>
            <span>Community welfare</span>
          </div>
        </div>

        <section id="about" className="section about-section">
          <div className="container about-layout">
            <div className="section-heading">
              <Label>The person behind the purpose</Label>
              <h2>
                A foundation of service.
                <br />
                <em>
                  A commitment
                  <br />
                  to progress.
                </em>
              </h2>
              <div className="section-index">
                01 <span>/ THE PROFILE</span>
              </div>
            </div>
            <div className="about-copy">
              <p className="intro-text">
                Gazi Md. Mozammel Haque brings a background in public
                administration and institutional development to his role as{" "}
                <strong>Project Director of Anondo Housing Society.</strong>
              </p>
              <p>
                His professional journey connects public service with the
                practical work of managing land, strengthening infrastructure
                and supporting the welfare of communities. It is a career shaped
                by responsibility for both institutions and the people they
                serve.
              </p>
              <p>
                He also serves as{" "}
                <strong>
                  Joint Secretary of the{" "}
                  <a
                    className="inline-link"
                    href={profile.federationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bangladesh Kabaddi Federation <FiArrowUpRight />
                  </a>
                </strong>
                , extending his leadership into the sporting community.
              </p>
              <p>
                From his roots in Cumilla to his studies at the University of
                Dhaka and service with Bangladesh Police, each chapter forms
                part of a continuing commitment to purposeful leadership.
              </p>
              <div className="profile-facts">
                <div>
                  <span>ACADEMIC FOUNDATION</span>
                  <strong>{profile.education}</strong>
                  <small>Applied Physics & Electronics</small>
                </div>
                <div>
                  <span>ROOTS & HERITAGE</span>
                  <strong>Meghna, Cumilla</strong>
                  <small>Haripur, Bangladesh</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="companies" className="section companies-section">
          <div className="container">
            <div className="companies-heading">
              <div>
                <Label>The company portfolio</Label>
                <h2>
                  Many identities.
                  <br />
                  <em>A shared commitment.</em>
                </h2>
              </div>
              <p>
                The companies and ventures of Gazi Md. Mozammel Haque, with
                Anondo Housing Society at the heart of his role as Project
                Director.
              </p>
            </div>
            <div className="company-grid">
              {companies.map((company, i) => (
                <article
                  key={company.name}
                  className={`company-card${company.featured ? " company-featured" : ""}`}
                >
                  <div className="company-card-top">
                    <span>
                      {company.featured
                        ? "PROJECT DIRECTOR"
                        : "COMPANY PORTFOLIO"}
                    </span>
                    <span>0{i + 1}</span>
                  </div>
                  <div className="company-logo-stage">
                    <Image
                      src={`/companies/${company.image}`}
                      alt={`${company.name} logo`}
                      width={300}
                      height={180}
                      sizes="(max-width: 600px) 80vw, 300px"
                      className={`company-logo ${company.logoClass || ""}`}
                    />
                  </div>
                  {/* <div className="company-caption">
                    <h3>{company.name}</h3>
                    <p>{company.descriptor}</p>
                  </div> */}
                  {company.website && (
                    <a
                      className="company-website"
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${company.name} website (opens in a new tab)`}
                    >
                      <span>Visit website</span>
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="leadership" className="leadership-section">
          <div className="container leadership-layout">
            <div>
              <Label light>A considered approach</Label>
              <h2>
                Leadership is a responsibility.
                <br />
                <em>Progress is a shared pursuit.</em>
              </h2>
            </div>
            <div className="leadership-note">
              <span className="compass-mark" aria-hidden="true">
                ✧
              </span>
              <p>
                Bringing clarity to complex responsibilities, care to
                institutional decisions, and purpose to the work ahead.
              </p>
              <span>LEADERSHIP & VISION</span>
            </div>
          </div>
          <div className="container principles">
            <div>
              <span>01</span>
              <h3>Lead with integrity</h3>
              <p>Accountability at the centre of every responsibility.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Build with purpose</h3>
              <p>Thoughtful planning for lasting institutional value.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Put people first</h3>
              <p>Progress that connects with the wellbeing of communities.</p>
            </div>
          </div>
        </section>

        <section id="journey" className="section journey-section">
          <div className="container journey-layout">
            <div className="section-heading">
              <Label>A life in chapters</Label>
              <h2>
                Experience that
                <br />
                <em>shapes perspective.</em>
              </h2>
              <p className="section-description">
                From an academic foundation to public service and project
                leadership.
              </p>
              <div className="section-index">
                02 <span>/ THE JOURNEY</span>
              </div>
            </div>
            <div className="timeline">
              {timeline.map((item, i) => (
                <article key={item.label} className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-label">
                    {item.label}
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="initiatives"
          className="section contributions-section"
          aria-labelledby="contributions-title"
        >
          <div className="container">
            <div className="contributions-heading">
              <div>
                <Label light>Areas of contribution</Label>
                <h2 id="contributions-title">
                  Purpose, put
                  <br />
                  <em>into practice.</em>
                </h2>
              </div>
              <div className="contributions-intro">
                <p>
                  Selected areas of work spanning information systems, public
                  assets, infrastructure and the wellbeing of communities.
                </p>
                <span className="contributions-edition">
                  <span />
                  PUBLIC SERVICE IN PRACTICE
                </span>
              </div>
            </div>

            <div className="contributions-grid">
              {initiatives.map((item) => {
                const Icon = icons[item.icon];
                return (
                  <article
                    key={item.number}
                    className="contribution-panel"
                    aria-labelledby={`contribution-title-${item.number}`}
                  >
                    <div className="contribution-meta">
                      <span className="contribution-icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <p>{item.category}</p>
                      <span className="contribution-number" aria-hidden="true">
                        {item.number}
                      </span>
                    </div>
                    <h3 id={`contribution-title-${item.number}`}>
                      {item.title}
                    </h3>
                    <p className="contribution-summary">{item.text}</p>
                    <div className="contribution-rule" />
                    <p className="contribution-description">{item.detail}</p>
                  </article>
                );
              })}
            </div>
            <div className="contributions-footnote">
              <span>INFORMATION. STEWARDSHIP. WELLBEING.</span>
              <span aria-hidden="true">✦</span>
            </div>
          </div>
        </section>

        <section id="publication" className="section publication-section">
          <div className="container publication-layout">
            <div className="publication-art">
              <div className="book-halo" aria-hidden="true" />
              <Image
                src={publication.image}
                alt="Enhanced Bengali cover of Unencumbered Land Ownership by Gazi Md. Mozammel Haque"
                width={1024}
                height={1536}
                sizes="(max-width: 380px) 205px, (max-width: 760px) 230px, 250px"
                quality={95}
                className="book-cover"
              />
              <span className="book-art-caption">FROM THE AUTHOR’S DESK</span>
            </div>
            <div className="publication-copy">
              <Label>Authored work</Label>
              <h2>
                Knowledge,
                <br />
                <em>shared in print.</em>
              </h2>
              <div className="publication-details">
                <p className="publication-format">
                  FEATURED PUBLICATION · BENGALI EDITION
                </p>
                <h3>{publication.title}</h3>
                <p className="publication-title-note">
                  {publication.titleNote}
                </p>
                <p className="publication-author">By {publication.author}</p>
                <p className="publication-description">
                  A published work on land ownership, adding a written dimension
                  to his professional interests in land and property.
                </p>
                <a
                  href={publication.originalImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link book-link"
                >
                  View original book cover <FiArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="container closing-layout">
            <div>
              <Label>A continuing commitment</Label>
              <h2>
                Rooted in service.
                <br />
                <em>Looking forward.</em>
              </h2>
            </div>
            <div>
              <p>
                Explore a professional journey built around responsibility,
                institutional progress and people.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="footer-name" href="#home">
            Gazi Md. Mozammel Haque
            <small>PROJECT DIRECTOR · ANONDO HOUSING SOCIETY</small>
          </a>
          <nav aria-label="Footer navigation">
            {navigation.map(([label, id]) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </nav>
          <a href="#home" className="back-top" aria-label="Back to top">
            <FiArrowUp />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Gazi Md. Mozammel Haque. All rights
            reserved.
          </span>
          <span>SERVICE · PURPOSE · PROGRESS</span>
        </div>
      </footer>
    </>
  );
}
