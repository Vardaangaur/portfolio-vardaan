import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. As a 3rd-year Computer Science student, I have developed strong skills in front-end technologies like React and back-end technologies such as Node.js, Express.js, MySQL, and MongoDB. My goal is to apply my knowledge to build innovative solutions that solve real-world problems while delivering exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. As a 3rd-year Computer Science student at GL Bajaj Institute of Technology and Management, I have gained hands-on experience with a variety of technologies, including React, Node.js, Express.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has grown into a commitment to building scalable and impactful digital solutions. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality results. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

// Empty for now – ready to be filled with internships or future work
export const EXPERIENCES = [];

export const PROJECTS = [
  {
    title: "Currency Converter",
    image: project1,
    description:
      "A web application that converts currencies in real-time using exchange rate APIs. Built with React and Tailwind CSS, featuring a clean UI and custom hooks.",
    technologies: ["React", "Tailwind CSS", "API Integration"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website to showcase my skills, projects, and contact information. Designed with modern UI principles for responsiveness and performance.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "E-Commerce Website",
    image: project3,
    description:
      "A fully functional e-commerce platform with product listing, shopping cart, and user authentication features.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project4,
    description:
      "An application for managing tasks and projects, with features like task creation, deadlines, and progress tracking.",
    technologies: ["React", "Node.js", "Express.js", "MySQL"],
  },
];

export const CONTACT = {
  address: "Greater Noida, India",
  phoneNo: "+91 8077317929", // optional, or keep blank
  email: "vardaangaur777@gmail.com", // replace with your email
};
