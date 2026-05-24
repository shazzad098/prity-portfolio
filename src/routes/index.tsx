import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import {
  ArrowUpRight, Mail, MapPin, Download,
  Code2, Palette, Bug, Database, Award, GraduationCap, Sparkles, FileText, X,
} from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.04c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.48.11-3.09 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.61.23 2.8.11 3.09.73.81 1.18 1.85 1.18 3.11 0 4.44-2.7 5.41-5.27 5.7.41.36.77 1.06.77 2.14v3.17c0 .31.21.68.8.56 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5z"/>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
  </svg>
);
import prityImage from "@/assets/prity.png";
import projectResults from "@/assets/project-results.jpg";
import projectHospital from "@/assets/project-hospital.jpg";
import projectShop from "@/assets/project-shop.jpg";
import cvFile from "@/assets/CV.pdf";
import signImage from "@/assets/sign.png";
import cert1 from "@/assets/certificates/Certificate (1).pdf";
import cert2 from "@/assets/certificates/Certificate (2).pdf";
import cert3 from "@/assets/certificates/Certificate (3).pdf";
import nsdaCert1 from "@/assets/certificates/NSDA/Certificate_1.pdf";
import nsdaCert2 from "@/assets/certificates/NSDA/Certificate_2.pdf";
import nsdaCert3 from "@/assets/certificates/NSDA/Certificate_3.pdf";
import nsdaCert4 from "@/assets/certificates/NSDA/Certificate_4.pdf";
import nsdaCert5 from "@/assets/certificates/NSDA/Certificate_5.pdf";
import nsdaCert6 from "@/assets/certificates/NSDA/Certificate_6.pdf";
import nsdaCert7 from "@/assets/certificates/NSDA/Certificate_7.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prity Ahoshan — Frontend Developer, UI Designer, SQA" },
      { name: "description", content: "Portfolio of Prity Ahoshan — Frontend Developer, UI Designer, and SQA Enthusiast based in Dhaka, Bangladesh." },
      { property: "og:title", content: "Prity Ahoshan — Portfolio" },
      { property: "og:description", content: "Frontend Developer, UI Designer, SQA Enthusiast." },
    ],
  }),
  component: Index,
});

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "Angular", level: 78 },
      { name: "Bootstrap", level: 85 },
      { name: "Responsive Design", level: 95 }
    ]
  },
  {
    icon: Database,
    title: "Backend",
    items: [
      { name: "Python Django", level: 85 },
      { name: "ASP.NET Core", level: 75 },
      { name: "PHP", level: 80 },
      { name: "MySQL", level: 90 },
      { name: "SQL Server", level: 82 }
    ]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    items: [
      { name: "Figma", level: 90 },
      { name: "Wireframing", level: 85 },
      { name: "Prototyping", level: 88 },
      { name: "User-Centered Design", level: 80 }
    ]
  },
  {
    icon: Bug,
    title: "SQA",
    items: [
      { name: "Manual Testing", level: 95 },
      { name: "Bug Reporting", level: 92 },
      { name: "Test Cases", level: 88 },
      { name: "Jira Workflow", level: 90 },
      { name: "SDLC & STLC", level: 90 }
    ]
  },
  {
    icon: Code2,
    title: "Languages",
    items: [
      { name: "C / C++", level: 80 },
      { name: "Python", level: 88 },
      { name: "Java", level: 75 },
      { name: "C#", level: 75 }
    ]
  },
  {
    icon: Sparkles,
    title: "Tools",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "XAMPP", level: 82 },
      { name: "Google Colab", level: 85 },
      { name: "Kaggle", level: 75 }
    ]
  }
];

const projects = [
  {
    title: "Student Result Management",
    description: "A Python Django platform with secure authentication, online result viewing, and a clean student dashboard.",
    tags: ["Django", "MySQL", "HTML/CSS"],
    image: projectResults,
    href: "https://github.com/Prity409/Student-Result-Management-System",
  },
  {
    title: "Hospital Management System",
    description: "Collaborative PHP & MySQL web app simulating patient management, appointment handling, and hospital workflows.",
    tags: ["PHP", "MySQL", "HTML/CSS"],
    image: projectHospital,
    href: "https://github.com/Prity409/Hospital-Management-System",
  },
  {
    title: "Smart Online Shopping Store",
    description: "E-commerce inspired application with product display, shopping logic, and user-friendly layout.",
    tags: ["PHP", "MySQL", "HTML/CSS"],
    image: projectShop,
    href: "https://github.com/Prity409/Smart-Online-Shopping-Store-Management-System",
  },
];

const experiences = [
  {
    role: "Web Developer Intern",
    org: "ASP.NET Core & Angular",
    points: [
      "Built dynamic, responsive web applications with Angular, ASP.NET Core, and SQL Server.",
      "Collaborated on frontend interface development and backend integration.",
      "Strengthened problem-solving and teamwork through real product work.",
    ],
  },
  {
    role: "SQA Intern",
    org: "TechStdio",
    points: [
      "Performed manual software testing and bug identification.",
      "Managed tasks and tickets through Jira workflow.",
      "Executed test cases and produced quality assurance documentation.",
    ],
  },
];

const nsdaCertificates = [
  { name: "Block Batik and Screen Printing (Part 1)", file: nsdaCert1 },
  { name: "Block Batik and Screen Printing (Part 2)", file: nsdaCert2 },
  { name: "Competency Based Assessment Methodology", file: nsdaCert3 },
  { name: "Entrepreneurship Development", file: nsdaCert4 },
  { name: "Fashion Design and Product Development", file: nsdaCert5 },
  { name: "Tailoring and Dress Making", file: nsdaCert6 },
  { name: "Web Design and Development for Freelancing", file: nsdaCert7 }
];

const universityCertificates = [
  { name: "Python Django Course — EDGE Project, Bangladesh ICT Division", file: cert1 },
  { name: "Web Development Essentials — EDGE Project", file: cert2 },
  { name: "Robotics Workshop Certification", file: cert3 },
  { name: "Fire Extinguisher Machine Workshop Participation" }
];

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="inline-flex items-center py-1">
          <img src={signImage} alt="Signature Logo" className="h-9 w-auto object-contain dark:invert" />
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="story-link hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold bg-foreground text-background px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Let's Talk <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </nav>
  );
}

function Section({
  id, eyebrow, title, children, className = "",
}: {
  id?: string; eyebrow?: string; title?: string;
  children: React.ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-6 py-12 md:py-16 ${className}`}>
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          {eyebrow && (
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</p>
          )}
          {title && (
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}

function Hero() {
  return (
    <header id="top" className="relative pt-20 pb-12 md:pt-28 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >

          <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">Prity Ahoshan</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            <span className="font-semibold text-foreground">Frontend Developer · UI Designer · SQA Enthusiast.</span>{" "}
            I build responsive web apps, craft modern UI in Figma, and ensure software quality through structured testing and Jira workflows.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 bg-foreground text-background font-semibold px-6 py-3.5 rounded-full hover:shadow-glow transition-all">
              View Projects
              <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a href={cvFile} download="Prity_Ahoshan_CV.pdf" className="inline-flex items-center gap-2 bg-card border border-border font-semibold px-6 py-3.5 rounded-full hover:border-primary transition-colors">
              <Download className="size-4" /> Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-hero opacity-20 rounded-full blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-soft animate-float">
            <img src={prityImage} alt="Prity Ahoshan" width={1024} height={1024} className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </header>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A builder who cares about quality">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-5">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            I'm a Computer Science and Engineering graduate passionate about Frontend Development, UI/UX Design, and Software Quality Assurance. I love building responsive, user-friendly web applications with clean design and a quality user experience.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I have practical experience with Angular, ASP.NET Core, Python Django, and SQL Server through academic and internship projects. Alongside development, I work on manual testing, bug reporting, and Jira workflow management. I believe technology should not only work properly but also feel intuitive and visually engaging.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            { k: "Role", v: "Frontend & UI" },
            { k: "Focus", v: "SQA & Testing" },
            { k: "Location", v: "Dhaka, BD" },
            { k: "Status", v: "Open to work" },
          ].map((item) => (
            <div key={item.k} className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover-lift">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{item.k}</span>
              <span className="font-semibold text-sm">{item.v}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  const cardHeaderVariants = {
    initial: { height: 180 },
    hover: { height: 68 }
  };

  const cardIconVariants = {
    initial: { 
      scale: 1, 
      x: "-50%", 
      y: "-50%", 
      left: "50%", 
      top: "50%",
      transformOrigin: "center center"
    },
    hover: { 
      scale: 0.6, 
      x: 0, 
      y: 0, 
      left: "20px", 
      top: "16px",
      transformOrigin: "left center"
    }
  };

  const cardTitleVariants = {
    initial: { 
      x: "-50%",
      left: "50%", 
      top: "196px",
      fontSize: "22px",
      transformOrigin: "center center"
    },
    hover: { 
      x: 0,
      left: "64px", 
      top: "22px",
      fontSize: "18px",
      transformOrigin: "left center"
    }
  };

  const cardHintVariants = {
    initial: { opacity: 1, y: 0, scale: 1 },
    hover: { opacity: 0, y: 15, scale: 0.8 }
  };

  const listContainerVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.15
      }
    }
  };

  const rowVariants = {
    initial: { opacity: 0, y: 10 },
    hover: { opacity: 1, y: 0 }
  };

  return (
    <Section id="skills" eyebrow="02 — Skills" title="Tools I build and ship with">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            initial="initial"
            whileHover="hover"
            viewport={{ once: true }}
            className="relative w-full h-[365px] rounded-3xl bg-card border border-border/80 shadow-soft hover:shadow-glow hover:border-primary/20 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col group"
          >
            {/* Collapsible Minimalist Header section */}
            <motion.div 
              variants={cardHeaderVariants}
              transition={{ type: "spring", stiffness: 220, damping: 23 }}
              className="relative w-full bg-muted/20 dark:bg-muted/10 border-b border-border/40 overflow-hidden shrink-0"
            >
              {/* Minimalist dot grid background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:12px_12px] opacity-60" />
            </motion.div>

            {/* Shifting Icon Container */}
            <motion.div
              variants={cardIconVariants}
              transition={{ type: "spring", stiffness: 220, damping: 23 }}
              className="absolute p-3.5 rounded-2xl bg-background border border-border/60 shadow-md flex items-center justify-center text-primary z-20"
            >
              <g.icon className="size-7" />
            </motion.div>

            {/* Shifting Card Title */}
            <motion.h3 
              variants={cardTitleVariants}
              transition={{ type: "spring", stiffness: 220, damping: 23 }}
              className="absolute font-extrabold text-foreground z-20 origin-left"
            >
              {g.title}
            </motion.h3>

            {/* Unhovered Call To Action / Tagline */}
            <motion.div
              variants={cardHintVariants}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              className="absolute w-full text-center left-0 flex flex-col items-center gap-1.5"
              style={{ top: "250px" }}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/65 px-2.5 py-1 rounded-full border border-border">
                {g.items.length} Skills
              </span>
              <p className="text-xs font-mono tracking-wider text-primary/80 flex items-center gap-1 animate-pulse">
                <Sparkles className="size-3" /> Hover to explore
              </p>
            </motion.div>

            {/* Staggered Skills List with Animated Progress Bars (Revealed on Hover) */}
            <motion.div
              variants={listContainerVariants}
              className="absolute left-6 right-6 top-[78px] bottom-6 flex flex-col justify-center gap-3.5 pointer-events-none group-hover:pointer-events-auto z-10"
            >
              {g.items.map((item, idx) => (
                <motion.div key={item.name} variants={rowVariants} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-foreground/90">{item.name}</span>
                    <span className="font-mono text-primary/95 text-[10px]">{item.level}%</span>
                  </div>
                  {/* Progress track */}
                  <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    {/* Inner progress bar */}
                    <motion.div
                      variants={{
                        initial: { width: "0%" },
                        hover: { 
                          width: `${item.level}%`,
                          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 + idx * 0.04 }
                        }
                      }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Work" title="Featured projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover-lift"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <ArrowUpRight className="size-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="04 — Experience" title="Where I've contributed">
      <div className="space-y-5">
        {experiences.map((e, i) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-8 rounded-2xl bg-card border border-border hover-lift"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div>
                <h3 className="text-2xl font-bold">{e.role}</h3>
                <p className="text-sm font-mono text-primary mt-1">{e.org}</p>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Internship</span>
            </div>
            <ul className="space-y-2.5">
              {e.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-sm text-foreground/80">
                  <span className="mt-2 size-1.5 rounded-full bg-secondary shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Research() {
  return (
    <Section eyebrow="05 — Research" title="Published research">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative p-10 md:p-14 rounded-3xl bg-foreground text-background overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 size-80 bg-gradient-hero opacity-30 blur-3xl rounded-full" />
        <div className="relative max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/10 border border-background/20 text-xs font-mono uppercase tracking-widest">
            <Award className="size-3.5" /> Springer · ICICSP 2025
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
            Vision Transformer for Brain Tumor Classification using MRI Images: Performance and Interpretability over CNN Models
          </h3>
          <p className="text-background/70 leading-relaxed">
            Accepted for publication at the International Conference on Intelligent Computing and Signal Processing (ICICSP), Springer 2025 — exploring transformer-based interpretability against traditional CNN baselines.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}

function CertsAndEducation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'nsda' | 'university'>('nsda');

  // Preview items displayed by default on the page card
  const featuredNsda = nsdaCertificates.slice(0, 2);
  const featuredUniversity = universityCertificates.slice(0, 2);

  // Helper render for certificate items
  const renderCertificateItem = (c: typeof nsdaCertificates[0] | typeof universityCertificates[0]) => {
    const hasFile = 'file' in c && c.file;
    const content = (
      <>
        <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
        <div className="flex-1 flex flex-col gap-1.5">
          <span className="font-semibold text-foreground/90 leading-snug">{c.name}</span>
          {hasFile && (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-primary uppercase tracking-wider font-extrabold group-hover:text-primary transition-colors">
              <FileText className="size-3.5" /> View Certificate
            </span>
          )}
        </div>
      </>
    );

    if (hasFile) {
      return (
        <a
          href={c.file}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex gap-3 text-sm p-3.5 rounded-xl bg-primary/5 border border-primary/10 text-foreground hover:bg-primary/10 hover:border-primary/20 hover-lift transition-all duration-200 h-full cursor-pointer w-full text-left"
        >
          {content}
        </a>
      );
    }

    return (
      <div className="flex gap-3 text-sm text-foreground/75 p-3.5 rounded-xl bg-card border border-border/50 h-full w-full text-left">
        {content}
      </div>
    );
  };

  return (
    <Section eyebrow="06 — Credentials" title="Education & certifications">
      <div className="grid md:grid-cols-5 gap-6">
        {/* Professional Dashboard-styled Education Card */}
        <div className="md:col-span-2 p-8 rounded-3xl bg-card border border-border/80 relative overflow-hidden group hover:border-primary/20 hover:shadow-glow transition-all duration-500 flex flex-col justify-between min-h-[360px] hover:-translate-y-1.5">
          {/* Subtle decorative glow */}
          <div className="absolute -top-24 -right-24 size-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -bottom-24 -left-24 size-48 bg-secondary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Minimalist dot grid background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:16px_16px] opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

          <div className="relative z-10 space-y-6">
            {/* Header cap icon with premium badge */}
            <div className="inline-flex p-3 rounded-2xl bg-primary/5 text-primary border border-primary/15 group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-300 shadow-sm w-fit">
              <GraduationCap className="size-6 transition-transform duration-300 group-hover:scale-110" />
            </div>

            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
                Undergraduate Degree
              </span>
              <h3 className="text-2xl font-extrabold leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                B.Sc. in Computer Science & Engineering
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                International University of Business Agriculture and Technology (IUBAT)
              </p>
            </div>
          </div>

          {/* Bottom stats row with large dashboard-style metrics */}
          <div className="relative z-10 grid grid-cols-2 gap-4 pt-6 border-t border-border/60 mt-8">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/80">Result</span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-extrabold text-foreground">3.40</span>
                <span className="text-[10px] text-muted-foreground font-mono">/ 4.00</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/80">Timeline</span>
              <div className="text-sm font-extrabold text-foreground font-mono flex items-center gap-1">
                2022 <span className="text-primary/70 font-normal">—</span> 2026
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Card with Preview & See More Button */}
        <div className="md:col-span-3 p-8 rounded-3xl bg-card border border-border flex flex-col justify-between min-h-[360px] relative overflow-hidden group">
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Award className="size-5 text-primary" /> Certifications
            </h3>

            {/* Split Preview Grid of NSDA & University Certificates */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {/* NSDA Preview */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground/80 border-b border-border/60 pb-1.5">
                  NSDA National Certs
                </h4>
                <div className="space-y-2.5">
                  {featuredNsda.map((c) => (
                    <div key={c.name} className="flex">
                      {renderCertificateItem(c)}
                    </div>
                  ))}
                </div>
              </div>

              {/* University Preview */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground/80 border-b border-border/60 pb-1.5">
                  University & Professional
                </h4>
                <div className="space-y-2.5">
                  {featuredUniversity.map((c) => (
                    <div key={c.name} className="flex">
                      {renderCertificateItem(c)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* See More Button */}
          <div className="pt-4 border-t border-border/40 flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/5 hover:bg-primary text-primary hover:text-background border border-primary/20 hover:border-primary transition-all duration-300 font-semibold text-sm hover-lift cursor-pointer"
            >
              <Award className="size-4" /> See More Certificates
            </button>
          </div>
        </div>
      </div>

      {/* Full Certifications Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-card border border-border shadow-glow rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer z-30"
              >
                <X className="size-5" />
              </button>

              {/* Modal Header */}
              <div className="p-8 pb-4 border-b border-border/40">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
                  Credentials Portfolio
                </span>
                <h3 className="text-2xl font-extrabold text-foreground mt-1">
                  Professional Certifications
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  National Skills Development Authority (NSDA) & Academic Projects
                </p>

                {/* Animated Pill Tabs */}
                <div className="flex gap-2 bg-muted/30 border border-border/50 p-1 rounded-xl w-fit mt-6">
                  <button
                    onClick={() => setActiveTab('nsda')}
                    className={`relative px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'nsda' ? 'text-primary-foreground bg-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    NSDA National Certs ({nsdaCertificates.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('university')}
                    className={`relative px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'university' ? 'text-primary-foreground bg-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    University & Professional ({universityCertificates.length})
                  </button>
                </div>
              </div>

              {/* Scrollable Certificates List Grid */}
              <div className="p-8 overflow-y-auto max-h-[50vh] space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeTab === 'nsda' ? (
                    nsdaCertificates.map((c) => (
                      <motion.div
                        key={c.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex"
                      >
                        {renderCertificateItem(c)}
                      </motion.div>
                    ))
                  ) : (
                    universityCertificates.map((c) => (
                      <motion.div
                        key={c.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex"
                      >
                        {renderCertificateItem(c)}
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: "pritycse.bd@gmail.com", href: "mailto:pritycse.bd@gmail.com" },
    { icon: LinkedinIcon, label: "LinkedIn", value: "in/prity-ahashan", href: "https://bd.linkedin.com/in/prity-ahashan-78507235b" },
    { icon: GithubIcon, label: "GitHub", value: "github.com/Prity409", href: "https://github.com/Prity409" },
    { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: "#" },
  ];
  return (
    <Section id="contact" eyebrow="07 — Contact">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          Let's connect & build something <span className="text-gradient">meaningful</span> together.
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target={it.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group p-6 rounded-2xl bg-card border border-border hover-lift"
          >
            <it.icon className="size-5 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">{it.label}</p>
            <p className="font-semibold text-sm break-all group-hover:text-primary transition-colors">{it.value}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
        <p>© 2026 Prity Ahoshan</p>
        <p>Designed & built with care</p>
      </div>
    </footer>
  );
}

function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics settings for a smooth trail effect
  // Dot follows very fast
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50, mass: 0.1 });

  // Ring follows with a luxurious slight delay/inertia
  const ringX = useSpring(mouseX, { stiffness: 220, damping: 24, mass: 0.3 });
  const ringY = useSpring(mouseY, { stiffness: 220, damping: 24, mass: 0.3 });

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable") ||
        target.closest(".hover-lift") ||
        target.closest(".story-link")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  useEffect(() => {
    if (isVisible && !isTouchDevice) {
      document.body.classList.add("cursor-none-all");
    } else {
      document.body.classList.remove("cursor-none-all");
    }
    return () => {
      document.body.classList.remove("cursor-none-all");
    };
  }, [isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-primary rounded-full pointer-events-none z-[9999]"
      />
      {/* Outer Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="fixed top-0 left-0 w-9 h-9 border border-primary/50 rounded-full pointer-events-none z-[9998] flex items-center justify-center"
      >
        {/* Subtle inner core glow when hovering */}
        <motion.div
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 0.15 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="w-full h-full rounded-full bg-primary"
        />
      </motion.div>
    </>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <CustomCursor />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Research />
      <CertsAndEducation />
      <Contact />
      <Footer />
    </div>
  );
}
