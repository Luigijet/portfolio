export const ABOUT_ME = {
  name: "Luigi Jet Andrada",
  title: "Front-End Developer",
  location: "Quezon City, PH",
  email: "andradaluigijet@gmail.com",
  description: [
    `Hey there! 👋 I'm Luigi Jet, a <span class="font-medium text-foreground">Front-End Developer</span> with <span class="font-medium text-foreground">3 years of experience</span> in fintech and web applications. 
I specialize in building <span class="font-medium text-foreground">clean, scalable, and high-performance user interfaces</span> for production systems that people actually use.`,
    // eslint-disable-next-line prettier/prettier
    "Focused on <span class=\"font-medium text-foreground\">clean UI development</span> and <span class=\"font-medium text-foreground\">seamless REST API integration</span>.",
  ],

  profileImage: "/profile-image.webp",
  profileGif: "/profile-gif.gif",
};

export const USER_NAMES = {
  githubUsername: "your-github-username",
  leetcodeUsername: "your-leetcode-username", // remove or keep blank if you don't have a LeetCode profile
  hashnodeUsername: "your-hashnode-username", // remove or keep blank if you don't have a Hashnode profile
};

export const SOCIAL_LINKS = {
  github: "https://github.com/Luigijet",
  linkedin: "https://www.linkedin.com/in/luigi-jet-andrada-71a865236/",
  instagram: "https://www.instagram.com/jet_0899/",
  email: "mailto:andradaluigijet@gmail.com",
  resume: "https://your-resume-drive-link.com",
};

// Contact form endpoint (update with your own Formspree endpoint)
export const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

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
    name: "Project 1",
    description: "Describe your project 1 here. Example: A web app for tracking habits.",
    tech: ["React", "TypeScript"],
    link: "https://yourproject1-link.com",
    github: "https://github.com/yourusername/project1",
  },
  {
    name: "Project 2",
    description: "Describe your project 2 here. Example: An e-commerce site for books.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://yourproject2-link.com",
    github: "https://github.com/yourusername/project2",
  },
  // Add more projects as needed
];

export const EXPERIENCE = [
  {
    company: "Pisopay.com Inc",
    companyLink: "https://pisopay.com.ph/",
    role: "Front-End Web Developer",
    period: "May 2022 - Present",
    location: "Makati City, Metro Manila",
    description: `
      Built and maintained multiple web systems and landing pages, integrating payment channels and dynamic features using React, TypeScript, and Laravel Blade depending on project requirements. 
      Translated Figma designs into production-ready React components, implemented responsive and reusable UI, and ensured cross-browser compatibility. 
      Developed multi-tenant platforms with scalable and maintainable frontend architecture, collaborating with backend teams to deliver robust, dynamic user experiences.`,
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
  },
];

export const EDUCATION = [
  {
    degree: "Your Degree (e.g., B.Tech. in Computer Science)",
    institution: "Your University",
    institutionLink: "https://youruniversity.com/",
    period: "2020 - 2024",
    score: "XX % or GPA",
  },
  // Add more education as needed
];
