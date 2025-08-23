'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { TextAnimate } from './magicui/text-animate';
import { Button } from './ui/button';

// Images
import Chat from '../../public/chat.png';
import Api from '../../public/Api.png';
import E_state from '../../public/E_state.png';
import HeathLink from '../../public/HealthLink.png';
import Typing from '../../public/tryping.png';
import E_commerence from '../../public/E_commerence.png'

const Section = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <section {...props}>{children}</section>
);

const projects = [
  {
    title: 'TurboType',
    description:
      'It is a typing platform in which people can calculate their typing speed and accuracy.',
    tech: ['Next.js', 'Tailwind CSS'],
    live: 'https://turbo-typer.vercel.app/',
    github: 'https://github.com/BharatKhatwani/TurboTyper',
    image: Typing,
    category: 'Frontend',
  },
  {
    title: 'HealthLink',
    description:
      'A full-stack hospital appointment system with role-based access, allowing patients to book and view appointments and doctors to manage bookings securely.',
    tech: ['MongoDB', 'Express.js', 'Node.js', 'React', 'Tailwind CSS'],
    live: 'https://hositpal-management.vercel.app',
    github: 'https://github.com/BharatKhatwani/Hositpal_Management',
    image: HeathLink,
    category: 'Full-stack',
  },
  {
    title: 'Secure File Sharing Api',
    description:
      'A secure backend REST API for uploading and sharing files with authentication using JWT and storage in MongoDB.',
    tech: ['MongoDB', 'JWT', 'Rest API'],
    live: 'https://github.com/BharatKhatwani/Secure-File-Sharing-App',
    github: 'https://github.com/BharatKhatwani/Secure-File-Sharing-App',
    image: Api,
    category: 'Backend',
  },
{
  title: 'E-commerce API',
  description:
    'A backend REST API for managing products, users, and orders with authentication using JWT and MongoDB.',
  tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
  github: 'https://github.com/BharatKhatwani/E_commerence_API',
  image: E_commerence,
  category: 'Backend',
}
,
  {
    title: 'QuickTalk Chat App',
    description:
      'A real-time chat application with Firebase Auth and Firestore supporting login, user presence, and chat features.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    live: 'https://final-chat-app-phi.vercel.app',
    github: 'https://github.com/BharatKhatwani/Final_ChatApp',
    image: Chat,
    category: 'Full-stack',
  },
  {
    title: 'E-state Website',
    description:
      'A sleek and animated real estate website frontend to showcase property listings using smooth transitions and modern UI.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    live: 'https://e-state-pi.vercel.app/',
    github: 'https://github.com/BharatKhatwani/E-state-',
    image: E_state,
    category: 'Frontend',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<'Full-stack' | 'Frontend' | 'Backend'>('Full-stack');

  // filtering logic
  const filteredProjects = projects.filter((project) => {
    if (filter === 'Full-stack') {
      return (
        project.category === 'Full-stack' 
       
      );
    }
    return project.category === filter;
  });

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
        <Button className='cursor-pointer' onClick={() => setFilter('Full-stack')}>Full-stack</Button>
        <Button className='cursor-pointer' onClick={() => setFilter('Frontend')}>Frontend</Button>
        <Button  className='cursor-pointer' onClick={() => setFilter('Backend')}>Backend</Button>
      </div>

      {/* Filtered Cards */}
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

             <div className="flex justify-between items-center mt-2 sm:mt-4">
  {/* Conditionally render LIVE LINK */}
  {project.category !== 'Backend' && (
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

  {/* GitHub link is always shown */}
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
