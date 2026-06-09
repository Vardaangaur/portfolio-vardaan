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
    title: "Polling App",
    description:
      "A full-stack polling platform where users can create polls, vote, bookmark polls, and view results. Features JWT authentication, user profiles, poll analytics, and a responsive user interface.",
    image: project1,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/Vardaangaur/Polling-App",
  },
  {
    title: "AI Interview Prep",
    description:
      "An AI-powered interview preparation platform that generates personalized technical questions and suggested answers using the Gemini API. Helps users practice interviews, improve confidence, and track progress through simulated interview sessions.",
    image: project2,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
    ],
    github: "https://github.com/Vardaangaur/Preply-AI",
  },
  {
    title: "Loom Chat",
    description:
      "A real-time chat application enabling instant messaging between users. Features secure authentication, online user presence, responsive design, and seamless communication using Socket.io.",
    image: project3,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
    ],
    github: "https://github.com/Vardaangaur/Loom-Chat",
  },
  {
    title: "Skill Swap",
    description:
      "A MERN-based collaboration platform that enables users to exchange skills and services. Includes profile management, skill listings, and community-driven interactions for knowledge sharing and networking.",
    image: project4,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/Vardaangaur/Skillo",
  },
];


export const CONTACT = {
  address: "Greater Noida, India",
  phoneNo: "+91 8077317929",
  email: "vardaangaur777@gmail.com",
};
