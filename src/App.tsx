
import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import {
  ArrowDown, ArrowUpRight, GitBranch, Mail, Menu, X, Radio,
  Cpu, BrainCircuit, Database, ExternalLink, Sparkles,
  Globe, Layers3, ChevronRight, Award, GraduationCap, BadgeCheck
} from 'lucide-react'
import {
  profile, featuredProjects, experience, learningProjects, skills,
  technologySkills, achievements, certifications
} from './data/portfolio'

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' }
  }
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }}>
    <span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}
  </motion.div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTech, setActiveTech] = useState('AI')
  const [showAllLearning, setShowAllLearning] = useState(false)
  const [showAllCertificates, setShowAllCertificates] = useState(false)

  const nav = [
    ['Experience', '#experience'],
    ['Technologies', '#technologies'],
    ['Projects', '#projects'],
    ['More builds', '#additional-projects'],
    ['Credentials', '#credentials'],
    ['About', '#about'],
    ['Contact', '#contact']
  ]

  const techs = [
    {
      id: 'Electronics',
      icon: Cpu,
      color: 'blue',
      title: 'Signals become systems.',
      desc: 'Embedded electronics, sensors, satellite communication and engineering problem-solving.',
      points: [
        'CanSat electronics & electrical power subsystem',
        'Sensor integration, soldering and testing',
        'Satellite spectrum and signal analysis'
      ]
    },
    {
      id: 'Data',
      icon: Database,
      color: 'green',
      title: 'Data becomes direction.',
      desc: 'Turning structured and unstructured information into useful analysis, dashboards and decisions.',
      points: [
        'Power BI dashboards and DAX measures',
        'Data preparation, validation and exploration',
        'Data modelling, reporting and business insights'
      ]
    },
    {
      id: 'AI',
      icon: BrainCircuit,
      color: 'violet',
      title: 'Systems become intelligent.',
      desc: 'Building practical AI applications with language models, retrieval workflows and agentic patterns.',
      points: [
        'LLM-powered applications and prompt design',
        'Retrieval-augmented generation and vector search',
        'Tool-calling, multi-step and multi-agent workflows'
      ]
    }
  ]

  const currentTech = techs.find(t => t.id === activeTech)!

  return <div className="app-shell">
    <div className="ambient ambient-one" />
    <div className="ambient ambient-two" />

    <header className="site-header">
      <a className="brand" href="#home">
        <span className="brand-mark">Q<span>.</span></span>
        <span>QAISAR KHAN<small>ENGINEERING INTELLIGENCE</small></span>
      </a>

      <button
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {nav.map(([label, href]) =>
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        )}
        <a className="nav-cta" href="#contact">Let's connect <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div className="availability" initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}>
            <span className="pulse-dot" /> COMPUTER SCIENCE ENGINEERING · DUNAÚJVÁROS, HUNGARY
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            Engineering<br/><span className="gradient-text">intelligence.</span>
          </motion.h1>

          <motion.p className="hero-lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>
            I explore the space where <b>Artificial Intelligence</b>, <b>Data</b> and <b>Electronics</b> meet, turning technical ideas into useful systems and experiences.
          </motion.p>

          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }}>
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button button-quiet" href="#experience">Professional experience <ChevronRight size={17}/></a>
          </motion.div>

          <motion.div className="hero-footnote" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }}>
            <span className="mono">01 / 03</span>
            <span>Curiosity across physical and digital worlds</span>
          </motion.div>
        </div>

        {/* HERO PORTRAIT AND ORBITING TECHNOLOGY SATELLITES */}
        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: .92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="orbit orbit-c" />

          <div className="core">
            <div className="core-grid" />
            <img
              className="hero-portrait"
              src={profile.portrait}
              alt="Portrait of Qaisar Khan"
              fetchPriority="high"
            />
            <div className="core-caption">
              SYSTEM ONLINE<br />
              <b>THINK · BUILD · EXPLORE</b>
            </div>
          </div>

          <div className="satellite-orbit satellite-electronics">
            <div className="float-chip chip-elec">
              <Cpu size={16} /> ELECTRONICS
            </div>
          </div>

          <div className="satellite-orbit satellite-data">
            <div className="float-chip chip-data">
              <Database size={16} /> DATA
            </div>
          </div>

          <div className="satellite-orbit satellite-ai">
            <div className="float-chip chip-ai">
              <BrainCircuit size={16} /> AI SYSTEMS
            </div>
          </div>

          <div className="signal-line signal-one" />
          <div className="signal-line signal-two" />

          <span className="art-coord coord-a">47°23' N<br />18°55' E</span>
          <span className="art-coord coord-b">FIELD / 001</span>
        </motion.div>

        <a className="scroll-cue" href="#experience">
          <span>SCROLL TO EXPLORE</span><ArrowDown size={15}/>
        </a>
      </section>

      <section className="ticker" aria-label="Areas of work">
        <div className="ticker-track">
          {Array.from({length: 2}).map((_, i) =>
            <span key={i}>
              ARTIFICIAL INTELLIGENCE <i>✳</i> DATA INTELLIGENCE <i>✳</i> ELECTRONICS & EMBEDDED <i>✳</i> ENGINEERING <i>✳</i>
            </span>
          )}
        </div>
      </section>

      <section className="experience section-wrap section-pad" id="experience">
        <SectionHeading
          eyebrow="01 / PROFESSIONAL EXPERIENCE"
          title="Engineering in the real world."
          text="Experience shaped by technical operations, satellite communications and practical engineering environments."
        />

        <motion.div className="experience-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="experience-visual">
            <div className="radar-rings">
              <div/><div/><div/><span className="radar-sweep"/>
            </div>
            <div className="radar-label"><Radio size={15}/> MISSION LOG / COMPLETED</div>
            <div className="experience-visual-bottom">
              <span>SPACE ELECTRONICS WING</span><b>SUPARCO</b>
            </div>
          </div>

          <div className="experience-content">
            <div className="experience-top">
              <span className="eyebrow">PAKISTAN SPACE & UPPER ATMOSPHERE RESEARCH COMMISSION</span>
              <span className="date-pill">MAR 2025 — AUG 2026</span>
            </div>
            <h3>{experience.role}</h3>
            <p className="muted">{experience.location}</p>
            <p>{experience.summary}</p>
            <ul>{experience.responsibilities.map(item => <li key={item}>{item}</li>)}</ul>
            <div className="tool-row">{experience.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
          </div>
        </motion.div>
      </section>

      <section className="technology section-wrap section-pad" id="technologies">
        <SectionHeading
          eyebrow="02 / TECHNOLOGY UNIVERSE"
          title="Three worlds. One mindset."
          text="Choose a field to explore its visual language, the problems it helps solve, and the tools used across related work."
        />

        <div className="tech-tabs">
          {techs.map(t =>
            <button
              key={t.id}
              onClick={() => setActiveTech(t.id)}
              className={activeTech === t.id ? `tech-tab active ${t.color}` : 'tech-tab'}
              aria-pressed={activeTech === t.id}
            >
              <t.icon size={18}/>{t.id}<span>↗</span>
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTech.id}
            className={`tech-panel ${currentTech.color}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: .3 }}
          >
            <div className="tech-panel-visual">
              <div className="tech-orb">
                <currentTech.icon size={62} strokeWidth={1}/>
                <span className="orb-ring ring-1"/>
                <span className="orb-ring ring-2"/>
              </div>
              <span className="visual-index">ENVIRONMENT / {currentTech.id.toUpperCase()}</span>
            </div>

            <div className="tech-panel-copy">
              <span className="eyebrow">FIELD NOTES / {currentTech.id.toUpperCase()}</span>
              <h3>{currentTech.title}</h3>
              <p>{currentTech.desc}</p>
              <ul>
                {currentTech.points.map(p =>
                  <li key={p}><ChevronRight size={15}/>{p}</li>
                )}
              </ul>
              <div className="tech-skill-block">
                <span className="mono">TOOLS & METHODS</span>
                <div className="tag-list">
                  {technologySkills[currentTech.id as keyof typeof technologySkills].map(skill =>
                    <span key={skill}>{skill}</span>
                  )}
                </div>
              </div>
              <a className="text-link" href="#projects">Explore related work <ArrowUpRight size={16}/></a>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="projects section-wrap section-pad" id="projects">
        <SectionHeading
          eyebrow="03 / SELECTED WORK"
          title="Ideas, made tangible."
          text="Selected projects across AI, education technology, analytics, computer vision and embedded engineering."
        />

        <div className="project-grid">
          {featuredProjects.map((project, i) =>
            <motion.article
              className={`project-card ${project.theme}`}
              key={project.name}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: .15 }}
              transition={{ delay: i * .06 }}
            >
              <div className="project-card-top">
                <span className="project-number">{project.number} / PROJECT</span>
                <span className="project-status">{project.status}</span>
              </div>

              <div className="project-graphic">
                <div className="graphic-grid"/>
                <div className="graphic-symbol">
                  {project.theme === 'violet'
                    ? <BrainCircuit/>
                    : project.theme === 'green'
                    ? <Database/>
                    : project.theme === 'cyan'
                    ? <Layers3/>
                    : project.name.includes('CanSat')
                    ? <Radio/>
                    : <Globe/>
                  }
                </div>
                <div className="graphic-orbit"/>
              </div>

              <div className="project-card-body">
                <span className="eyebrow">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p className="project-contribution"><strong>My contribution:</strong> {project.contribution}</p>

                {project.award && <div className="project-award"><Award size={15}/>{project.award}</div>}

                <div className="tag-list">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>

                <div className="project-links">
                  {project.links?.map((link: { label: string; href: string; kind?: string }) =>
                    <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                      {link.label}
                      {link.kind === 'source' ? <GitBranch size={14}/> : <ArrowUpRight size={15}/>}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          )}
        </div>
      </section>

      <section className="learning section-wrap section-pad" id="additional-projects">
        <SectionHeading
          eyebrow="04 / EXPERIMENTS & LEARNING BUILDS"
          title="More systems in the workshop."
          text="A selection of training-guided and independent prototypes. These projects reflect practical exploration, not equal levels of production maturity."
        />

        <div className="learning-list">
          {learningProjects.map((project, i) =>
            <motion.article
              className="learning-row"
              key={project.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="mono">{String(i + 1).padStart(2, '0')}</span>
              <div><h4>{project.title}</h4><p>{project.detail}</p></div>
              <span className="learning-group">{project.group}</span>
              <div className="learning-row-links">
                {project.repo &&
                  <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}>
                    <GitBranch size={15}/>
                  </a>
                }
                {project.demo &&
                  <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
                    <ExternalLink size={15}/>
                  </a>
                }
              </div>
            </motion.article>
          )}
        </div>
      </section>

      <section className="credentials section-wrap section-pad" id="credentials">
        <SectionHeading
          eyebrow="05 / RECOGNITION & LEARNING"
          title="Milestones and credentials."
          text="Selected competition recognition and completed courses. Course certificates are separate from formal academic qualifications."
        />

        <div className="achievement-grid">
          {achievements.map((item, i) =>
            <motion.article
              className="achievement-card"
              key={item.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * .06 }}
            >
              <div className="credential-icon"><Award size={20}/></div>
              <span className="mono">{item.year} / RECOGNITION</span>
              <h3>{item.title}</h3>
              <p className="credential-issuer">{item.issuer}</p>
              <p>{item.detail}</p>
            </motion.article>
          )}
        </div>

        <div className="cert-heading">
          <div><span className="eyebrow">COMPLETED COURSES</span><h3>Selected certifications.</h3></div>
          <button className="text-link" onClick={() => setShowAllCertificates(!showAllCertificates)}>
            {showAllCertificates ? 'Show selected' : 'View all certificates'} <ArrowUpRight size={15}/>
          </button>
        </div>

        <div className="certificate-grid">
          {(showAllCertificates ? certifications : certifications.slice(0, 6)).map((cert, i) =>
            <article className="certificate-card" key={cert.title}>
              <div className="certificate-top"><BadgeCheck size={18}/><span className="mono">{cert.date}</span></div>
              <h4>{cert.title}</h4>
              <p className="credential-issuer">{cert.issuer}</p>
              <p>{cert.focus}</p>
            </article>
          )}
        </div>

        <p className="learning-note"><GraduationCap size={14}/> Only completed courses are listed here. In-progress learning can be added separately later.</p>
      </section>

      <section className="about section-wrap section-pad" id="about">
        <SectionHeading
          eyebrow="06 / BACKGROUND"
          title="A multidisciplinary foundation."
          text="A path connecting electronics, data and computer science, with a practical interest in building useful technology."
        />

        <div className="about-grid">
          <div className="about-intro">
            <div className="about-profile-row">
              <img className="about-photo" src={profile.portrait} alt="Portrait of Qaisar Khan" loading="lazy"/>
              <span className="about-photo-caption">
                <span className="eyebrow">PROFILE / QK-01</span>
                <strong>Qaisar Khan</strong>
                <small>Computer Science Engineering</small>
              </span>
            </div>
            <h3>Learning by connecting disciplines.</h3>
            <p>From electronics and satellite-related engineering environments to data analytics and AI applications, I enjoy understanding how systems work and how they can be made more useful.</p>
            <p>Currently studying Computer Science Engineering at the University of Dunaújváros, Hungary.</p>
          </div>

          <div className="education-card">
            <span className="eyebrow">EDUCATION</span>
            <div className="edu-item">
              <span>01</span>
              <div><h4>BSc Computer Science Engineering</h4><p>University of Dunaújváros · Hungary · Sep 2026 – present · Stipendium Hungaricum</p></div>
            </div>
            <div className="edu-item">
              <span>02</span>
              <div><h4>BS Data Science</h4><p>Virtual University of Pakistan · Online, part-time · Apr 2025 – present</p></div>
            </div>
            <div className="edu-item">
              <span>03</span>
              <div><h4>Diploma of Associate Engineering</h4><p>Electronics · SUPARCO Institute of Technical Training · 2022–2024</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills section-wrap section-pad">
        <SectionHeading
          eyebrow="07 / TOOLKIT"
          title="Tools for different layers of a problem."
          text="A practical map of technologies explored through education, professional experience and projects. Listed skills reflect different levels of use, not a claim of expert proficiency in every tool."
        />
        <div className="skills-grid">
          {Object.entries(skills).map(([group, list], i) =>
            <div className="skill-card" key={group}>
              <span className="mono">0{i + 1} / TOOLSET</span>
              <h3>{group}</h3>
              <div className="tag-list">{list.map(skill => <span key={skill}>{skill}</span>)}</div>
            </div>
          )}
        </div>
      </section>

      <section className="contact section-wrap section-pad" id="contact">
        <div className="contact-panel">
          <div className="contact-orbit"/>
          <span className="eyebrow">08 / OPEN CHANNEL</span>
          <h2>Have a good idea?<br/><span className="gradient-text">Let's connect.</span></h2>
          <p>For opportunities, collaboration, technical conversations or just to exchange ideas.</p>
          <a className="button button-primary" href={`mailto:${profile.email}`}>Start a conversation <Mail size={16}/></a>
          <div className="social-links">
            {profile.socials.map(s =>
              <a href={s.href} target="_blank" rel="noreferrer" key={s.label}>{s.label}<ArrowUpRight size={13}/></a>
            )}
          </div>
        </div>
      </section>
    </main>

    <footer className="footer section-wrap">
      <a className="brand" href="#home">
        <span className="brand-mark">Q<span>.</span></span>
        <span>QAISAR KHAN<small>ENGINEERING INTELLIGENCE</small></span>
      </a>
      <span>Designed to connect the physical and digital.</span>
      <a href="#home">BACK TO TOP ↑</a>
    </footer>
  </div>
}

export default App
