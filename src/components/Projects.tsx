'use client';

import React from 'react';
import Image from 'next/image'; // ✅ Import next/image
import { FaGithub } from 'react-icons/fa';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { TextAnimate } from './magicui/text-animate';

// ✅ Imported images
import Chat from '../../public/Chat.png';
import Api from '../../public/Api.png';
import E_state from '../../public/E_state.png';
import HeathLink from '../../public/HealthLink.png';

const Section = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <section {...props}>{children}</section>
);

// ✅ Project array with images
const projects = [
  {
    title: 'HealthLink',
    description:
      'A full-stack hospital appointment system with role-based access, allowing patients to book and view appointments and doctors to manage bookings securely.',
    tech: ['MongoDB', 'Express.js', 'Node.js', 'React', 'Tailwind CSS'],
    live: 'https://hositpal-management.vercel.app',
    github: 'https://github.com/BharatKhatwani/Hositpal_Management',
    image: HeathLink,
  },
  {
    title: 'Secure File Sharing Api',
    description:
      'A secure backend REST API for uploading and sharing files with authentication using JWT and storage in MongoDB.',
    tech: ['MongoDB', 'JWT', 'Rest API'],
    live: 'https://github.com/BharatKhatwani/Secure-File-Sharing-App',
    github: 'https://github.com/BharatKhatwani/Secure-File-Sharing-App',
    image: Api,
  },
  {
    title: 'QuickTalk Chat App',
    description:
      'A real-time chat application with Firebase Auth and Firestore supporting login, user presence, and chat features.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    live: 'https://final-chat-app-phi.vercel.app',
    github: 'https://github.com/BharatKhatwani/Final_ChatApp',
    image: Chat,
  },
  {
    title: 'E-state Website',
    description:
      'A sleek and animated real estate website frontend to showcase property listings using smooth transitions and modern UI.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    live: 'https://e-state-pi.vercel.app/',
    github: 'https://github.com/BharatKhatwani/E-state-',
    image: E_state,
  },
];

export default function Projects() {
  return (
    <Section id="projects" className="px-4 py-16">
      <TextAnimate
        animation="blurInUp"
        by="character"
        once
        className="text-7xl sm:text-5xl font-bold mb-12 text-center"
      >
        PROJECTS
      </TextAnimate>

      <div className="flex flex-wrap justify-center gap-8 py-10 px-4">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold">
                {project.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  width={600}
                  height={400}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-200 dark:bg-white/10 px-2 py-1 rounded"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white underline"
                >
                  LIVE LINK →
                </CardItem>

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
