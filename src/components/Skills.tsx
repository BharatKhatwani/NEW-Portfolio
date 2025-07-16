'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimate } from './magicui/text-animate';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaHtml5, FaJava } from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
} from 'react-icons/si';

// Optional: Replace Section with a div if not defined
const Section = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <section {...props}>{children}</section>
);

const skills = [
  { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} color="#339933" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" /> },
  { name: 'Express', icon: <SiExpress size={40} color="#ffffff" /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#06B6D4" /> },
  { name: 'Git', icon: <FaGitAlt size={40} color="#F05032" /> },
  { name: 'Java', icon: <FaJava size={40} color="#007396" /> },
  { name: 'Redux', icon: <SiRedux size={40} color="#764ABC" /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34F26" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} color="white" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} color="#336791" /> },
  { name: 'Prisma', icon: <SiPrisma size={40} color="#0C344B" /> },
  { name: 'Docker', icon: <FaDocker size={40} color="#0db7ed" /> },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-16"
    >
      <TextAnimate
        animation="blurInUp"
        by="character"
        once
        className="text-4xl sm:text-5xl font-bold mb-12 text-center"
      >
        Technologies
      </TextAnimate>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {skills.map(({ name, icon }, index) => (
          <motion.div
            key={name}
            className="flex flex-col items-center justify-center bg-[#121212] rounded-xl p-6 shadow-md hover:scale-110 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ width: '110px' }}
          >
            {icon}
            <p className="mt-2 text-white font-medium text-sm text-center">{name}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
