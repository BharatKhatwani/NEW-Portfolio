'use client';

import Link from 'next/link';
import { CiLight } from "react-icons/ci";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // close menu on click
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved) setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black text-black dark:text-white z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={'/'} className="text-xl font-bold">
          B.K
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li><button onClick={() => scrollTo('home')} className="hover:text-blue-400 transition">Home</button></li>
          <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
          <li><button onClick={() => scrollTo('skills')} className="hover:text-blue-400 transition">Skills</button></li>
          <li><button onClick={() => scrollTo('projects')} className="hover:text-blue-400 transition">Projects</button></li>
          <li><button onClick={() => scrollTo('contact')} className="hover:text-blue-400 transition">Contact</button></li>
        </ul>

        {/* Theme Toggle + Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-2xl p-2 rounded-full hover:bg-white/10 transition"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <CiLight /> : <FaMoon />}
          </button>

          {/* Hamburger Menu (Mobile only) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-6 py-4 space-y-4 text-center font-medium shadow-md">
          <button onClick={() => scrollTo('home')} className="block w-full hover:text-blue-400">Home</button>
          <Link href="/about" className="block w-full hover:text-blue-400" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <button onClick={() => scrollTo('skills')} className="block w-full hover:text-blue-400">Skills</button>
          <button onClick={() => scrollTo('projects')} className="block w-full hover:text-blue-400">Projects</button>
          <button onClick={() => scrollTo('contact')} className="block w-full hover:text-blue-400">Contact</button>
        </div>
      )}
    </header>
  );
}
