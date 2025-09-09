'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { TextAnimate } from './magicui/text-animate';
import { Button } from './ui/button';

// Project Images
import PayLock from '../../public/PayLock.png';
import Chat from '../../public/chat.png';
import Api from '../../public/Api.png';
import E_state from '../../public/E_state.png';
import Typing from '../../public/tryping.png';
import E_commerence from '../../public/E_commerence.png';

// Section wrapper
const Section = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <section {...props}>{children}</section>
);

// Project type definition
interface Project {
  title: string;
  description: string;
  tech: string[];
  live?: string;
  github: string;
  image: StaticImageData;
  category: 'Full-stack' | 'Frontend' | 'Backend';
}

// Project data
const projects: Project[] = [
  {
    title: 'TurboType',
    description:
      'A typing platform for calculating typing speed and accuracy in real-time.',
    tech: ['Next.js', 'Tailwind CSS'],
    live: 'https://turbo-typer.vercel.app/',
    github: 'https://github.com/BharatKhatwani/TurboTyper',
    image: Typing,
    category: 'Frontend',
  },
  {
    title: 'PayLock',
    description:
      'A secure and lightning-fast digital wallet system for modern payments. Ensures safe transactions, quick transfers, and a clean, user-friendly interface.',
    tech: ['Prisma', 'PostgreSQL', 'Next.js', 'CI/CD', 'Tailwind CSS', 'Framer Motion', 'Recoil',  ' Turborepo monorepo'],
    live: 'https://paylock-jet.vercel.app',
    github: 'https://github.com/BharatKhatwani/PayLock',
    image: PayLock,
    category: 'Full-stack',
  },
  {
    title: 'Secure File Sharing API',
    description:
      'A secure backend REST API for uploading and sharing files with JWT authentication and MongoDB storage.',
    tech: ['MongoDB', 'JWT', 'REST API'],
    github: 'https://github.com/BharatKhatwani/Secure-File-Sharing-App',
    image: Api,
    category: 'Backend',
  },
  {
    title: 'E-commerce API',
    description:
      'A backend REST API for managing products, users, and orders with JWT authentication and MongoDB.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
    github: 'https://github.com/BharatKhatwani/E_commerence_API',
    image: E_commerence,
    category: 'Backend',
  },
  {
    title: 'QuickTalk Chat App',
    description:
      'A real-time chat application using Firebase Auth and Firestore supporting login, user presence, and chat features.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    live: 'https://final-chat-app-phi.vercel.app',
    github: 'https://github.com/BharatKhatwani/Final_ChatApp',
    image: Chat,
    category: 'Full-stack',
  },
  {
    title: 'E-state Website',
    description:
      'A sleek, animated real estate frontend showcasing property listings with smooth transitions and modern UI.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    live: 'https://e-state-pi.vercel.app/',
    github: 'https://github.com/BharatKhatwani/E-state-',
    image: E_state,
    category: 'Frontend',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<'Full-stack' | 'Frontend' | 'Backend'>('Full-stack');

  // Filtered projects
  const filteredProjects = projects.filter((project) => project.category === filter);

  return (
    <Section id="projects" className="px-4 py-12 scroll-mt-28">
      <TextAnimate
        animation="blurInUp"
        by="character"
        once
        className="text-4xl sm:text-5xl font-bold mb-6 text-center"
      >
        PROJECTS
      </TextAnimate>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 py-6 px-2 items-center">
        {['Full-stack', 'Frontend', 'Backend'].map((cat) => (
          <Button
            key={cat}
            onClick={() => setFilter(cat as 'Full-stack' | 'Frontend' | 'Backend')}
            className={`cursor-pointer ${
              filter === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-black dark:bg-gray-800 dark:text-white'
            }`}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-y-6 gap-x-4 sm:gap-8 py-6 px-2">
        {filteredProjects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-3 sm:p-4 border">
              <CardItem translateZ="50" className="text-xl font-bold">
                {project.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-1 sm:mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-2 sm:mt-4">
                <Image
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  width={600}
                  height={400}
                  className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-4">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-200 dark:bg-white/10 px-2 py-1 rounded"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between items-center mt-2 sm:mt-4">
                {project.live && project.category !== 'Backend' && (
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white underline"
                  >
                    LIVE LINK →
                  </CardItem>
                )}
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <FaGithub /> GitHub
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </Section>
  );
}
