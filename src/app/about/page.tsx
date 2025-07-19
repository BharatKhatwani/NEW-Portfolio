'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TextAnimate } from '@/components/magicui/text-animate';
import Experience from '@/components/Experience';
import SpotlightBackground from '@/components/shared/SpotlightPreview'

const About = () => {
  return (
    <div className="overflow-hidden px-4 py-10 pt-24">
      <SpotlightBackground/>
      <TextAnimate
        animation="blurInUp"
        by="character"
        className="text-4xl text-black dark:text-white mb-8 text-center"
      >
        ABOUT ME
      </TextAnimate>

     <motion.section
  className="max-w-3xl mx-auto mt-10 px-3 sm:px-4 py-6 border rounded-xl shadow-md text-center bg-white text-gray-800 border-gray-300 dark:bg-black dark:text-gray-200 dark:border-gray-700"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  whileHover={{
    y: -4,
    boxShadow: '0 8px 20px rgba(78, 195, 255, 0.4)',
  }}
>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed tracking-wide text-left">
           I’m <span className="text-green-600 dark:text-green-400 font-bold">Bharat Khatwani</span> from <span className="font-semibold">Chhindwara, Madhya Pradesh, India</span>.
          <span className="block mt-2"> Final-year Computer Science & Engineering (AIML specialization) student at IPS Academy, Indore.</span>

          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li> Solved 400+ problems on  <span className="font-semibold"><a href="https://leetcode.com/u/bharatkhatwani/" className="underline" target="_blank" rel="noopener noreferrer">LeetCode</a></span>.</li>
            <li> Solved 200+ problems on<span className="font-semibold"><a href="https://www.geeksforgeeks.org/user/bharatkhasczn/" className="underline" target="_blank" rel="noopener noreferrer"> GeeksforGeeks (GFG)</a></span>.</li>
            <li> Built an <span className="font-semibold">Aircraft Tracking App</span> during a college-level hackathon.</li>
            <li> Hands-on experience with <span className="font-semibold">MERN stack</span> full-stack development.</li>
            <li> Currently learning <span className="font-semibold">Next.js, DevOps, and AWS</span>.</li>
            <li> Passionate about <span className="font-semibold">clean code, performance, and solving real-world problems</span>.</li>
          </ul>
        </p>

        {/* Social Links */}
       
        <div className="mt-10 border-t border-gray-300 dark:border-gray-700 w-20 mx-auto" />
      </motion.section>
     
    </div>
  );
};

export default About;
