import React from 'react';
import DeveloperCard from '../Component/DeveloperCard';

const stories = () => {
   const developers = [
     {
       id: 1,
       name: "Rafi Hossain",
       designation: "Frontend Developer",
       company: "AssetVerse",
       experience: "1.5 Years",
       skills: ["JavaScript", "React", "Node.js", "Express.js"],
       story:
         "A self-taught frontend developer focused on building fast, responsive, and user-friendly web applications.",
     },
     {
       id: 2,
       name: "Ayaan Rahman",
       designation: "Full Stack Developer",
       company: "TechNova Solutions",
       experience: "3 Years",
       skills: ["JavaScript", "React", "Node.js", "Express.js"],
       story:
         "Enjoys working across the stack, building scalable applications and solving real-world problems.",
     },
     {
       id: 3,
       name: "Nusrat Jahan",
       designation: "Backend Developer",
       company: "CodeCraft Ltd",
       experience: "2 Years",
       skills: ["JavaScript", "Node.js", "Express.js"],
       story:
         "Specializes in REST APIs and backend logic with a strong focus on performance and security.",
     },
     {
       id: 4,
       name: "Tanvir Ahmed",
       designation: "MERN Stack Developer",
       company: "DevStory",
       experience: "4 Years",
       skills: ["JavaScript", "React", "Node.js", "Express.js"],
       story:
         "Experienced MERN developer passionate about clean code, mentoring, and full-stack development.",
     },
     {
       id: 5,
       name: "Sadia Islam",
       designation: "Junior Frontend Developer",
       company: "UIVerse",
       experience: "1 Year",
       skills: ["JavaScript", "React"],
       story:
         "A creative frontend developer who loves turning designs into interactive and accessible user interfaces.",
     },
     {
       id: 6,
       name: "Imran Hossain",
       designation: "Node.js Developer",
       company: "BackendHub",
       experience: "2.5 Years",
       skills: ["JavaScript", "Node.js", "Express.js"],
       story:
         "Focused on building efficient server-side applications and scalable API architectures.",
     },
     {
       id: 7,
       name: "Farzana Akter",
       designation: "Full Stack Developer",
       company: "WebSpark",
       experience: "3.5 Years",
       skills: ["JavaScript", "React", "Node.js", "Express.js"],
       story:
         "Passionate about creating full-stack web solutions with great user experience and clean backend logic.",
     },
     {
       id: 8,
       name: "Shakib Hasan",
       designation: "React Developer",
       company: "FrontLab",
       experience: "2 Years",
       skills: ["JavaScript", "React"],
       story:
         "Loves working with React and modern frontend tools to build fast and scalable interfaces.",
     },
     {
       id: 9,
       name: "Mim Rahman",
       designation: "Software Engineer",
       company: "CloudTech",
       experience: "5 Years",
       skills: ["JavaScript", "React", "Node.js", "Express.js"],
       story:
         "A seasoned engineer with experience in designing robust systems and leading development teams.",
     },
     {
       id: 10,
       name: "Arif Khan",
       designation: "MERN Stack Developer",
       company: "NextGen IT",
       experience: "2 Years",
       skills: ["JavaScript", "React", "Node.js", "Express.js"],
       story:
         "Driven by curiosity and continuous learning, building modern web applications with the MERN stack.",
     },
   ];
    return (
      <div className="grid grid-cols-3  gap-5">
        {developers.map((developer) => (
          <DeveloperCard
            key={developer.id}
            developer={developer}
          ></DeveloperCard>
        ))}
      </div>
    );
};

export default stories;