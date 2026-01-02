export const ABOUT_ME = {
  name: "Luigi Jet Andrada",
  title: "Front-End Developer",
  location: "Quezon City, PH",
  email: "andradaluigijet@gmail.com",
  description: [
    `Hey there! 👋 I'm Luigi Jet, a <span class="font-medium text-foreground">Front-End Developer</span> with <span class="font-medium text-foreground">3 years of experience</span> in fintech and web applications. 
I specialize in building <span class="font-medium text-foreground">clean, scalable, and high-performance user interfaces</span> for production systems that people actually use.`,
    // eslint-disable-next-line quotes
    'Focused on <span class="font-medium text-foreground">clean UI development</span> and <span class="font-medium text-foreground">seamless REST API integration</span>.',
  ],

  profileImage: "/temp-image.png",
  profileGif: "/profile-gif.gif",
};

export const USER_NAMES = {
  githubUsername: "Luigijet",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/Luigijet",
  linkedin: "https://www.linkedin.com/in/luigi-jet-andrada-71a865236/",
  instagram: "https://www.instagram.com/jet_0899/",
  email: "mailto:andradaluigijet@gmail.com",
  resume: "/resume.pdf",
};

export const FORM_ENDPOINT = "https://formspree.io/f/mykzerag";

export const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "TailwindCSS",
  "Sass",
  "jQuery",
  "VS Code",
  "Git",
  "GitHub",
  "GitLab",
  "Postman",
  "Figma",
  "Vite",
  "Laravel",
];

export const PROJECTS = [
  {
    name: "Blue Sky Theme Park",
    description:
      "A modern ticket booking platform developed as part of a company project, enabling users to browse attractions, select ticket types, and complete reservations through a fast, responsive, and user-friendly interface.",
    tech: ["React", "TypeScript", "Shadcn", "Motion", "Tailwind CSS", "Redux", "Zod"],
    link: "https://tickets.blueskythemepark.ph",
    github: null,
  },
  {
    name: "Bacoor City Solidarity Pass",
    description:
      "An online registration and access management system developed as part of a company project to help decongest traffic in Bacoor City by allowing authorized private vehicles to use designated solidarity routes.",
    tech: ["JQuery", "CSS", "Full Calendar", "Google Maps", "Laravel"],
    link: "https://solidarity.bacoor.gov.ph/",
    github: null,
  },
  {
    name: "Master Siomai Franchisee Management System",
    description:
      "An internal franchisee management system developed for Master Siomai to support franchise operations, including franchisee registration, data management, and administrative workflows. Built as part of a private company project in a professional environment.",
    tech: ["Javascript", "CSS", "Laravel"],
    link: null,
    github: null,
  },
];

export const EXPERIENCE = [
  {
    company: "Pisopay.com Inc",
    companyLink: "https://pisopay.com.ph/",
    role: "Front-End Developer",
    period: "May 2022 - Present",
    location: "Makati City, Metro Manila",
    description: `
      Built and maintained multiple web systems and landing pages, integrating payment gateways and dynamic functionality using React, TypeScript, and Laravel Blade based on project requirements. Translated Figma designs into production-ready React components, implemented responsive and reusable UI patterns, and ensured cross-browser compatibility. Collaborated closely with backend teams to develop scalable and maintainable front-end architecture, delivering robust and engaging user experiences.`,
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel Blade",
      "Shadcn/ui",
      "REST API Integration",
      "Axios / Fetch",
      "GitLab / Version Control",
    ],
    logo: "/pisopay.svg",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Information System",
    institution: "Villagers Montessori College",
    period: "2016 - 2021",
    logo: "/vmc-logo.jpg",
  },
];
