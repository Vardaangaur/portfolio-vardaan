export const HERO_CONTENT = `I am a passionate Full Stack Developer with a knack for crafting robust, scalable, and user-focused web applications. As a 3rd-year Computer Science student, I’ve honed my skills in front-end technologies like React and back-end frameworks such as Node.js, Express.js, MySQL, and MongoDB. My goal is to leverage technology to design meaningful digital experiences that solve real-world problems with efficiency and elegance.`;

export const ABOUT_TEXT = `I am a versatile Full Stack Developer driven by a deep curiosity for how things work and a commitment to building impactful digital solutions. Currently pursuing my B.Tech in Computer Science at GL Bajaj Institute of Technology and Management, I’ve gained hands-on experience across the MERN stack—React, Node.js, Express.js, and MongoDB—along with MySQL for structured data management. I thrive in collaborative, fast-paced environments, love solving complex problems, and constantly push myself to learn emerging tools and technologies. Outside coding, I enjoy exploring tech trends, contributing to open-source projects, and staying active.`;

// Empty for now – ready for future internships or work experience
export const EXPERIENCES = [];

// ---- PROJECTS ----
import project1 from "../assets/projects/project2.png"; // Skill Swap image
import project2 from "../assets/projects/project1.png"; // AI Interview Prep image
import project3 from "../assets/projects/project3.png"; // Day Planner image
import project4 from "../assets/projects/project4.png"; // Portfolio image

export const PROJECTS = [
  {
    title: "AI Interview Prep",
    description:
      "An AI-driven interview preparation platform that generates personalized technical questions and suggested answers using the Gemini API. Simulates realistic interviews to help users build confidence and track progress.",
    image: project1,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Gemini API"],
    github: "https://github.com/yourusername/ai-interview-app",
    demo: "https://ai-interview-app.vercel.app",
  },
  {
    title: "Skill Swap",
    description:
      "A MERN-based collaboration platform enabling users to connect and exchange skills or services seamlessly. Focused on community growth and real-world knowledge sharing without relying on Socket.io.",
    image: project2,
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/yourusername/skill-swap",
    demo: "https://skill-swap.vercel.app",
  },
  {
    title: "Day Planner",
    description:
      "A MERN-based task management application designed to help users organize and track their daily activities. Features CRUD operations, deadline tracking, and responsive UI built with React and Tailwind CSS.",
    image: project3,
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/yourusername/day-planner",
    demo: "https://day-planner.vercel.app",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern, animated portfolio website showcasing my skills, projects, and background. Built with React, Tailwind CSS, and Framer Motion for smooth transitions and an engaging user experience.",
    image: project4,
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.vercel.app",
  },
];


export const CONTACT = {
  address: "Greater Noida, India",
  phoneNo: "+91 8077317929",
  email: "vardaangaur777@gmail.com",
};
