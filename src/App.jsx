import React, { useEffect, useState } from "react";

const skills = [
  {
    number: "01",
    title: "Frontend",
    items: ["React.js", "Next.js", "Vue.js", "JavaScript", "TypeScript", "HTML5 & CSS3"],
  },
  {
    number: "02",
    title: "UI & state",
    items: ["Tailwind CSS", "Material UI", "Redux Toolkit", "Context API", "Responsive design"],
  },
  {
    number: "03",
    title: "APIs & backend",
    items: ["REST APIs", "Axios", "Laravel", "Java", "MySQL", "CRUD operations"],
  },
  {
    number: "04",
    title: "Quality & delivery",
    items: ["Vitest", "PHPUnit", "Git", "Docker", "CI/CD", "Agile / Scrum"],
  },
  {
    number: "05",
    title: "Identity & security",
    items: ["OAuth 2.0", "OIDC", "JWT", "Access & refresh tokens"],
  },
  {
    number: "06",
    title: "Tools & growth",
    items: ["Contentful", "Postman", "AWS", "Figma", "SonarCloud", "AI-assisted development"],
  },
];

const experiences = [
  {
    company: "Sectigo",
    location: "Chennai",
    role: "Frontend Developer",
    dates: "Sep 2024 — Oct 2026",
    current: true,
    description:
      "Building responsive, reusable interfaces for SiteLock, Sectigo’s website security platform.",
    highlights: [
      "Developed reusable Next.js components and integrated frontend modules with Laravel services and REST APIs.",
      "Contributed to SiteLock rebranding across interface components, layouts, and styling.",
      "Supported secure integrations using OAuth 2.0, OIDC, JWT, and token-based dashboard-to-WordPress communication.",
      "Resolved production issues, improved cross-browser compatibility, and investigated logs with Elasticsearch.",
      "Integrated Userpilot and Google Tag Manager for product analytics; collaborated across three-week Agile sprints.",
    ],
    stack: ["Next.js", "Laravel", "REST APIs", "OAuth / OIDC", "Elasticsearch"],
  },
  {
    company: "SCube",
    location: "Bangalore",
    role: "Frontend Developer",
    dates: "Aug 2022 — Feb 2024",
    description:
      "Delivered responsive web applications and helped modernize a large content-driven website.",
    highlights: [
      "Helped migrate a large website from WordPress to Next.js, rebuilding 110+ static and 500+ dynamic pages.",
      "Created reusable React components and managed application state with Redux Toolkit and React state.",
      "Integrated Contentful CMS and REST APIs, with Axios for data fetching and submission.",
      "Contributed to the GBBC website project.",
      "Built validated forms with Formik, Yup, and Zod; improved SEO, accessibility, and page-load performance.",
      "Debugged Java and Spring Boot applications and implemented fixes for reported defects.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
  },
];

const projects = [
  {
    number: "01",
    category: "PRODUCT PLATFORM · SECTIGO",
    type: "professional",
    title: "SiteLock platform experience",
    description:
      "Responsive, reusable Next.js interfaces for SiteLock’s cybersecurity platform, shaped by a product rebrand and connected to Laravel APIs. The product dashboard is separate from the public marketing website shown below.",
    tags: ["Next.js", "Laravel", "REST APIs", "OAuth 2.0"],
    visual: "sitelock",
  },
  {
    number: "02",
    category: "CONTENT PLATFORM · SCUBE",
    type: "professional",
    title: "A website, reimagined at scale",
    description:
      "Helped move a large website from WordPress to Next.js, rebuilding 110+ static pages and 500+ dynamic pages for a more maintainable foundation.",
    tags: ["Next.js", "TypeScript", "Contentful", "SEO"],
    visual: "migration",
    url: "https://www.innovatefinance.com/",
  },
  {
    number: "03",
    category: "INTEGRATION · AUTHENTICATION",
    type: "professional",
    title: "Secure connections, seamless flows",
    description:
      "Worked across token-based API communication and dashboard-to-WordPress connectivity, applying OAuth, OIDC, and JWT concepts.",
    tags: ["OAuth 2.0", "OIDC", "JWT", "API integration"],
    visual: "security",
  },
  {
    number: "04",
    category: "MARKETING WEBSITE · SECTIGO",
    type: "professional",
    title: "SiteLock marketing website",
    description:
      "A separate project from the SiteLock product platform: the public marketing website, built with Vue.js.",
    tags: ["Vue.js", "Marketing website"],
    visual: "marketing",
    url: "https://www.sitelock.com/",
  },
  {
    number: "05",
    category: "WEBSITE · SCUBE",
    type: "professional",
    title: "GBBC",
    description:
      "Website project from my time at SCube.",
    tags: ["Next.js", "Tailwind CSS", "Material UI", "Contentful"],
    visual: "gbbc",
    url: "https://gbbc.io/",
  },
  {
    number: "06",
    category: "PERSONAL PROJECT · LEARNING",
    type: "personal",
    title: "Online store",
    description:
      "A personal project built for learning and practice. Explore the live project.",
    tags: ["Personal project", "Learning"],
    visual: "store",
    url: "https://store-umber-one.vercel.app/",
  },
  {
    number: "07",
    category: "PERSONAL PROJECT · LEARNING",
    type: "personal",
    title: "Food app",
    description:
      "A personal project built for learning and practice. Explore the live project.",
    tags: ["Personal project", "Learning"],
    visual: "food",
    url: "https://food-app-lilac-gamma.vercel.app/",
  },
];

const certifications = [
  "React JS Development",
  "Udemy Laravel Course",
  "Vue JS Fundamental Course",
  "AI Coding Agents with GitHub Copilot",
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "arrow-icon arrow-icon--diagonal" : "arrow-icon"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <div className={`reveal ${className}`} style={{ "--reveal-delay": `${delay}ms` }}>
      {children}
    </div>
  );
}

function SectionHeading({ label, title, note }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span className="eyebrow-dot" />{label}</p>
      <div className="section-heading__row">
        <h2>{title}</h2>
        {note && <p className="section-heading__note">{note}</p>}
      </div>
    </div>
  );
}

function ProjectVisual({ type }) {
  if (type === "marketing" || type === "gbbc" || type === "store" || type === "food") {
    const preview = {
      marketing: {
        browser: "sitelock.com",
        eyebrow: "WEBSITE SECURITY",
        heading: "SiteLock",
        layout: "project-preview--marketing",
      },
      gbbc: {
        browser: "gbbc.io",
        eyebrow: "SCUBE WEBSITE PROJECT",
        heading: "GBBC",
        layout: "project-preview--gbbc",
      },
      store: {
        browser: "online store",
        eyebrow: "FIND SOMETHING YOU LOVE",
        heading: "The little shop",
        layout: "project-preview--store",
      },
      food: {
        browser: "food app",
        eyebrow: "GOOD FOOD, GOOD MOOD",
        heading: "Fresh picks",
        layout: "project-preview--food",
      },
    }[type];

    return (
      <div className={`project-art project-art--${type}`} aria-hidden="true">
        <div className={`project-preview ${preview.layout}`}>
          <div className="window-bar"><i /><i /><i /><span>{preview.browser}</span></div>
          <div className="project-preview__content">
            <span>{preview.eyebrow}</span>
            <strong>{preview.heading}</strong>
            <div className="project-preview__shapes"><i /><i /><i /></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "migration") {
    return (
      <div className="project-art project-art--migration" aria-hidden="true">
        <div className="migration-window">
          <div className="window-bar"><i /><i /><i /><span>content / pages</span></div>
          <div className="migration-body">
            <div className="migration-sidebar"><b /><i /><i /><i /><i /></div>
            <div className="migration-content">
              <span className="skeleton skeleton--short" /><span className="skeleton skeleton--title" />
              <div className="skeleton-grid"><i /><i /><i /></div>
              <span className="skeleton" /><span className="skeleton skeleton--mid" />
            </div>
          </div>
        </div>
        <div className="migration-count"><strong>610+</strong><span>pages rebuilt</span></div>
        <div className="art-spark art-spark--one">✳</div>
      </div>
    );
  }

  if (type === "security") {
    return (
      <div className="project-art project-art--security" aria-hidden="true">
        <div className="security-orbit security-orbit--outer" />
        <div className="security-orbit security-orbit--inner" />
        <div className="security-lock">
          <svg viewBox="0 0 48 48" fill="none">
            <path d="M15 21v-5a9 9 0 0 1 18 0v5" stroke="currentColor" strokeWidth="2" />
            <rect x="11" y="21" width="26" height="20" rx="4" fill="currentColor" />
            <circle cx="24" cy="30" r="2" fill="#19231e" />
            <path d="M24 32v3" stroke="#19231e" strokeWidth="2" />
          </svg>
        </div>
        <span className="security-chip security-chip--one">OAuth 2.0</span>
        <span className="security-chip security-chip--two">JWT</span>
        <span className="security-chip security-chip--three">OIDC</span>
        <div className="art-spark art-spark--two">✳</div>
      </div>
    );
  }

  return (
    <div className="project-art project-art--sitelock" aria-hidden="true">
      <div className="site-window">
        <div className="window-bar"><i /><i /><i /><span>sitelock / dashboard</span></div>
        <div className="site-dashboard">
          <div className="site-nav"><b /><i /><i /><i /><span /></div>
          <div className="site-main">
            <div className="site-welcome"><div><i /><b /><small /></div><span>•••</span></div>
            <div className="site-cards"><i /><i /><i /></div>
            <div className="site-chart"><span /><svg viewBox="0 0 260 65" preserveAspectRatio="none"><path d="M0 54 C26 47 28 32 54 38 S83 57 108 37 S149 44 168 22 S195 35 218 13 S243 21 260 5" /></svg></div>
          </div>
        </div>
      </div>
      <div className="status-pill"><span /> Protection active</div>
      <div className="art-spark art-spark--three">✳</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", theme === "dark" ? "#101311" : "#f7f8f4");
    }
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Seethadevi home">
          <span className="brand-mark">S<span>.</span></span>
          <span className="brand-name">SEETHADEVI S<small>FRONTEND DEVELOPER</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "main-nav main-nav--open" : "main-nav"} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>Profile summary</a>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowIcon diagonal /></a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          aria-pressed={theme === "light"}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" />
            </svg>
          )}
        </button>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero__copy">
            <div className="availability"><span /> OPEN TO THE NEXT GOOD THING</div>
            <p className="hero__intro">Hello, I’m Seethadevi —</p>
            <h1>Frontend<br /><span>Developer</span></h1>
            <p className="hero__description">
              Frontend developer turning complex ideas into clear, reliable web experiences. I build with care, sweat the details, and love a good component system.
            </p>
            <div className="hero__actions">
              <a className="button button--dark" href="#work">Explore my work <ArrowIcon /></a>
              <a className="text-link" href="mailto:seethadevi322001@gmail.com">Get in touch <ArrowIcon diagonal /></a>
            </div>
            <div className="hero__meta">
              <span><i className="meta-pin">⌖</i> Chennai, India</span>
              <span className="meta-divider" />
              <span>3.7 years building for the web</span>
            </div>
          </div>
          <div className="hero__visual" aria-label="Abstract illustration representing frontend development">
            <div className="hero-grid" />
            <div className="visual-orbit visual-orbit--one" />
            <div className="visual-orbit visual-orbit--two" />
            <div className="visual-sticker"><span>FRONTEND</span><strong>with<br />feeling</strong><i>✳</i></div>
            <div className="code-card">
              <div className="code-card__top"><span /><span /><span /><small>experience.jsx</small></div>
              <div className="code-lines">
                <p><i>01</i><span className="code-purple">const</span> developer = {"{"}</p>
                <p><i>02</i>&nbsp;&nbsp;name: <span className="code-green">"Seethadevi"</span>,</p>
                <p><i>03</i>&nbsp;&nbsp;focus: <span className="code-green">"frontend"</span>,</p>
                <p><i>04</i>&nbsp;&nbsp;curiosity: <span className="code-orange">true</span>,</p>
                <p><i>05</i>{"}"}</p>
                <p className="code-cursor-line"><i>06</i><span className="code-purple">build</span>(<span className="code-green">"what matters"</span>)<b /></p>
              </div>
              <div className="code-card__foot"><span>●</span> ALL SYSTEMS CURIOUS</div>
            </div>
            <div className="hero-float hero-float--react"><b>⚛</b><span>React</span></div>
            <div className="hero-float hero-float--ts"><b>TS</b><span>TypeScript</span></div>
            <div className="hero-caption">A little logic. A lot of care. <span>↗</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-band" id="about">
          <div className="section-shell intro-band__inner">
            <Reveal>
              <p className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> PROFILE SUMMARY</p>
              <h2>Frontend developer with<br /><em>3.7 years of experience.</em></h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="intro-band__body">
                I’m a frontend developer with 3.7 years of experience creating responsive, scalable products. From rebranding a cybersecurity dashboard to rebuilding hundreds of pages, I bring a thoughtful, collaborative approach to every layer of the UI.
              </p>
              <a className="light-link" href="mailto:seethadevi322001@gmail.com">Have something in mind? <ArrowIcon diagonal /></a>
            </Reveal>
            <div className="intro-decoration" aria-hidden="true">S<span>.</span></div>
          </div>
        </section>

        <section className="work-section section-shell section-space" id="work">
          <Reveal><SectionHeading label="PROJECTS" title={<>Projects<span className="heading-period">.</span></>} note="Professional product and website work, plus personal projects built for learning." /></Reveal>
          {[
            { type: "professional", title: "Professional work" },
            { type: "personal", title: "Personal projects · learning" },
          ].map((group) => {
            const groupProjects = projects.filter((project) => project.type === group.type);
            return (
              <div className="project-group" key={group.type}>
                <h3 className="project-group__title">{group.title}</h3>
                <div className="project-grid">
                  {groupProjects.map((project, index) => (
                    <Reveal className={`project-card project-card--${project.visual}`} delay={index * 80} key={project.number}>
                      <ProjectVisual type={project.visual} />
                      <div className="project-content">
                        <div className="project-meta"><span>{project.category}</span><span>{project.number} / {projects.length.toString().padStart(2, "0")}</span></div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                        {project.url && (
                          <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                            View live site <ArrowIcon diagonal />
                          </a>
                        )}
                      </div>
                    </Reveal>
                  ))}
                </div>
                {group.type === "professional" && (
                  <Reveal className="work-footnote"><span>↳</span> These are collaborative product contributions; details are intentionally kept high-level.</Reveal>
                )}
              </div>
            );
          })}
        </section>

        <section className="skills-section section-space" id="skills">
          <div className="section-shell">
            <Reveal><SectionHeading label="TECHNICAL SKILLS" title={<>Technical Skills<span className="heading-period">.</span></>} note="Frontend, UI development, APIs, testing, and the tools I use to deliver reliable products." /></Reveal>
            <div className="skills-grid">
              {skills.map((group, index) => (
                <Reveal className="skill-group" delay={(index % 3) * 70} key={group.number}>
                  <span className="skill-number">{group.number}</span>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section section-shell section-space" id="experience">
          <Reveal><SectionHeading label="EXPERIENCE" title={<>Experience<span className="heading-period">.</span></>} note="Frontend development roles at Sectigo and SCube." /></Reveal>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <Reveal className="experience-item" delay={index * 100} key={experience.company}>
                <div className="experience-date"><span>{experience.dates}</span><i /></div>
                <div className="experience-body">
                  <div className="experience-heading">
                    <div><h3>{experience.company}</h3><span>{experience.location}</span></div>
                    <span className="experience-role">{experience.role}</span>
                  </div>
                  <p className="experience-description">{experience.description}</p>
                  <ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                  <div className="tag-list">{experience.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="education-section">
          <div className="section-shell education-layout">
            <Reveal className="education-column">
              <p className="eyebrow"><span className="eyebrow-dot" /> EDUCATION</p>
              <h2>Education<span className="heading-period">.</span></h2>
              <div className="education-card">
                <span className="education-years">2020 — 2022</span>
                <h3>Master of Computer Science</h3>
                <p>DGGA College · Bharathidasan University</p>
                <span className="education-score">CGPA <b>9.06</b></span>
              </div>
              <div className="education-card">
                <span className="education-years">2017 — 2020</span>
                <h3>Bachelor of Computer Science</h3>
                <p>DGGA College · Bharathidasan University</p>
                <span className="education-score">CGPA <b>8.25</b></span>
              </div>
            </Reveal>
            <Reveal className="cert-column" delay={100}>
              <p className="eyebrow"><span className="eyebrow-dot" /> CERTIFICATIONS</p>
              <h2>Certifications<span className="heading-period">.</span></h2>
              <div className="cert-list">
                {certifications.map((certification, index) => (
                  <div className="cert-item" key={certification}><span>0{index + 1}</span><p>{certification}</p><i>↗</i></div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-inner">
            <Reveal>
              <p className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> CONTACT</p>
              <h2>Contact<span className="heading-period">.</span></h2>
              <a className="button button--lime" href="mailto:seethadevi322001@gmail.com">Start a conversation <ArrowIcon diagonal /></a>
            </Reveal>
            <Reveal className="contact-details" delay={120}>
              <p>I’m always happy to talk about a good challenge, a thoughtful team, or the details that make a product feel right.</p>
              <a href="mailto:seethadevi322001@gmail.com">seethadevi322001@gmail.com <ArrowIcon diagonal /></a>
              <a href="tel:+918072554494">+91 80725 54494 <ArrowIcon diagonal /></a>
              <a href="https://www.linkedin.com/in/seetha-devi-597a76262/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon diagonal /></a>
            </Reveal>
            <div className="contact-star" aria-hidden="true">✳</div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <a className="brand brand--footer" href="#home">
            <span className="brand-mark">S<span>.</span></span>
            <span className="brand-name">SEETHADEVI S<small>FRONTEND DEVELOPER</small></span>
          </a>
          <p>Designed with care. Built with React.</p>
          <a href="#home" className="back-top">BACK TO TOP ↑</a>
          <span className="footer-copy">© {new Date().getFullYear()} SEETHADEVI S</span>
        </div>
      </footer>
    </>
  );
}

export default App;
