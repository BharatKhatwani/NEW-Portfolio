'use client';

import { TypeAnimation } from 'react-type-animation';
import IconCloudDemo from './magicui/Icons';

import { ShinyButton } from '@/components/magicui/shiny-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import SpotlightBackground from '@/components/shared/SpotlightPreview'
import { useEffect } from 'react';

export default function Home() {
useEffect(() => {
  const id = localStorage.getItem('scrollToId');
  if (id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    localStorage.removeItem('scrollToId');
  }
}, []);


  

  return (
 <main id="home" className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10 pt-24 md:pt-0">

      <SpotlightBackground/>
      <section  className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-6xl">

        {/* Left Side - Text + Buttons */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            HEY, I AM{' '}
            <TextAnimate animation="blurInUp" by="character" once className='text-green-500'>
              BHARAT KHATWANI
            </TextAnimate>
          </h1>

          <TypeAnimation
            sequence={[
              'Software Developer', 1200,
              'Full Stack Developer', 1200,
              'Problem Solver', 1200,
              'Fitness Freak', 1200,
            ]}
            wrapper="span"
            speed={40}
            className="text-xl md:text-3xl  mb-8 mt-2 inline-block"
            repeat={Infinity}
          />

     <div className="flex flex-wrap justify-center md:justify-start gap-6 text-lg">
  <a
  href="https://mail.google.com/mail/?view=cm&to=bharatkhatwani796@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
>
  <MdEmail size={20} /> Email
</a>


  <a
    href="https://leetcode.com/u/bharatkhatwani/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
  >
    <SiLeetcode size={20} /> LeetCode
  </a>

  <a
    href="https://www.linkedin.com/in/bharat-khatwani-864616257/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
  >
    <FaLinkedin size={20} /> LinkedIn
  </a>

  <a
    href="https://x.com/BharatKhatwan13"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
  >
    <FaSquareXTwitter size={20} /> Twitter
  </a>

  <a
    href="https://github.com/BharatKhatwani"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
  >
    <FaGithub size={20} /> GitHub
  </a>
</div>



          <div className="flex flex-wrap gap-4 md:justify-start justify-center">
           <a
  href="https://drive.google.com/file/d/1JZywFRBcf7WbynV4xikc_zr7XMetdiMi/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <ShinyButton>
    VIEW RESUME
  </ShinyButton>
</a>

           
          </div>
        </div>

        {/* Right Side - Icon Cloud */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
            <IconCloudDemo />
          </div>
        </div>

      </section>
    </main>
  );
}