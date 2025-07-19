'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimate } from '@/components/magicui/text-animate';

const experiences = [
  {
    company: 'BAD TALK',
    role: 'Web Developer Intern',
    duration: 'June 2024 – August 2024',
    bullets: [
      'Developed a dynamic event registration website supporting 500+ users, improving event management efficiency.',
      'Integrated Firebase for real-time database synchronization and authentication, including an auto-confirmation email system.',
      'Created a fully responsive, mobile-first UI using React and Shadcn UI, enhancing user experience across devices.',
    ],
  },
];

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="px-4 py-20"
    >
      <TextAnimate
        animation="blurInUp"
        by="character"
        className="text-4xl text-black dark:text-white mb-12 text-center"
      >
        EXPERIENCE
      </TextAnimate>

      <div className="relative border-l border-gray-300 dark:border-gray-700 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-12 ml-4">
            <div className="absolute w-3 h-3 bg-sky-500 rounded-full -left-1.5 top-2.5 z-10" />

          <motion.section
  className="max-w-3xl mx-auto mt-12 px-4 sm:px-6 py-10 border rounded-xl shadow-md text-center bg-white text-gray-800 border-gray-300 dark:bg-black dark:text-gray-200 dark:border-gray-700"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  whileHover={{
    y: -4,
    boxShadow: '0 8px 20px rgba(78, 195, 255, 0.4)',
  }}
>
  <div className="flex justify-between items-center flex-wrap">
    <div className="text-xl font-semibold text-green-500 dark:text-green-400">
      {exp.company}
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
      {exp.duration}
    </div>
  </div>

  <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
    {exp.bullets.map((point, i) => (
      <li key={i}>{point}</li>
    ))}
  </ul>
</motion.section>  {/* ✅ Correct closing tag */}

          </div>
        ))}
      </div>
    </motion.div>
  );
}
