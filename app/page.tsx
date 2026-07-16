"use client"; 

import Image from "next/image";
import PP from '../assets/silpa1.png';
import Work1 from '../assets/b2.jpeg'; 
import Work2 from '../assets/u1.jpeg';
import Work3 from '../assets/b3.jpeg';
import PaperTexture from '../assets/papertexture.jpg';

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image 
          src={PaperTexture} 
          alt="texture" 
          fill
          priority
          className="object-cover opacity-15 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 w-full">
        
        <Navbar />

        {/* Main Sections Body */}
        <main className="max-w-[1820px] mx-auto px-4 md:px-8">

          <section className="min-h-fit md:min-h-screen flex flex-col items-center justify-start pt-32 md:pt-36 pb-12 md:pb-0 select-none relative overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-2">
              
              <div className="font-viner flex flex-col items-center text-center justify-center text-5xl md:text-[8rem] font-bold tracking-wider leading-none -space-y-4 md:-space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full drop-shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
                >
                  Graphic
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  style={{ WebkitTextStroke: "2px white" }}
                  className="w-full text-transparent select-none drop-shadow-[0_4px_12px_rgba(255,255,255,0.05)]"
                >
                  Designer
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="pointer-events-auto relative"
              >
                <Image 
                  className="w-40 h-40 md:w-72 md:h-92 opacity-95 -mt-14 md:-mt-26 object-cover drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
                  src={PP} 
                  alt="Profile" 
                />
              </motion.div>

            </div>
          </section>

          {/* --- Who I Am Section --- */}
          <section id="about" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
              
              {/* Left Column: Intro Text */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col space-y-6"
              >
                <h2 className="font-baloo text-4xl md:text-5xl md:text-left text-center font-extrabold text-[#F5F5DC] tracking-wide">
                  Who I am
                </h2>
                
                <div className="font-baloo text-lg md:text-xl text-slate-300 leading-relaxed space-y-4 font-normal">
                  <p>
                    Hi, I'm <span className="text-white font-semibold">Silpa Vishwakarma</span>, a passionate Graphic & UI/UX Designer creating modern and visually engaging digital experiences.
                  </p>
                  <p>
                    I specialize in website design, mobile app interfaces, branding, illustrations, posters, and digital artwork.
                  </p>
                </div>

                {/* --- Action Buttons --- */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  
                  {/* Download Resume Button */}
                  <motion.a 
                    href="/Silpa_Resume.pdf"
                    download="Silpa_Vishwakarma_Resume.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 border border-[#F5F5DC] text-white font-baloo font-bold text-lg rounded-xl  transition-shadow"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    Download Resume
                  </motion.a>

                </div>
              </motion.div>

              {/* Right Column: Cards Stack Layout */}
              <div className="relative flex items-center justify-center h-[400px] sm:h-[500px] w-full group">
                
                {/* Card 1: Right Stack */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 20, x: 50, y: -20 }}
                  whileHover={{ scale: 1.05, rotate: 25, zIndex: 40 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 60 }}
                  className="absolute w-48 h-64 sm:w-60 sm:h-80 bg-slate-900 border border-slate-700 hover:border-2 hover:border-black rounded-2xl overflow-hidden shadow-2xl z-10 origin-bottom"
                >
                  <Image src={Work3} alt="Work 3" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                </motion.div>

                {/* Card 2: Left Base Stack */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -15, x: -60, y: 10 }}
                  whileHover={{ scale: 1.05, rotate: -20, zIndex: 40 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 60, delay: 0.1 }}
                  className="absolute w-48 h-64 sm:w-60 sm:h-80 bg-slate-900 border border-slate-700 hover:border-2 hover:border-black rounded-2xl overflow-hidden shadow-2xl z-20 origin-bottom"
                >
                  <Image src={Work1} alt="Work 1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                </motion.div>

                {/* Card 3: Main Center Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 5, x: 0, y: -10 }}
                  whileHover={{ scale: 1.08, rotate: 0, zIndex: 40 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
                  className="absolute w-52 h-72 sm:w-64 sm:h-88 bg-slate-800 hover:border-2 hover:border-black rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-30 origin-bottom"
                >
                  <Image src={Work2} alt="Work 2" className="w-full h-full object-cover" />
                </motion.div>

              </div>
            </div>
          </section>

          {/* Skills Section*/}
          <Skills />

          {/* Work */}
          <Work/>

          {/* Experience */}
          <Experience/>

          {/* Contact */}
          <Contact/>

        </main>
      </div>

    </div>
  );
}