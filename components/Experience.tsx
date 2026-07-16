"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "UI/UX Designer",
      company: "LearniLM World",
      duration: "January 2026 - April 2026",
      desc: "Designed intuitive user interfaces and crafted engaging digital experiences for the startup platform. Collaborated closely with frontend developers to implement modern responsive design structures, user flows, and optimized components.",
    },
  ];

  return (
    <section id="experience" className="min-h-fit py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* --- Heading --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="font-baloo text-4xl md:text-5xl font-extrabold text-[#F5F5DC] tracking-wide">
            Experience
          </h2>
        </motion.div>

        {/* --- Timeline Structure --- */}
        <div className="relative ml-2 md:ml-4 space-y-12 py-4 w-full max-w-4xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="relative group w-full"
            >
              {/* Card Body */}
              <div className="flex flex-col space-y-2 bg-stone-900/40 border border-stone-800 rounded-2xl p-6 backdrop-blur-sm hover:border-[#F5F5DC]/40 transition-all duration-300 shadow-xl">
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    {/* Role Heading */}
                    <h3 className="font-baloo text-2xl font-bold text-white tracking-wide">
                      {exp.role}
                    </h3>
                    {/* Company */}
                    <p className="font-baloo text-lg text-amber-300 font-medium mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Duration Tag */}
                  <span className="font-baloo text-sm font-medium text-[#F5F5DC]/70 bg-stone-800/60 px-3 py-1 rounded-full border border-stone-700/50 self-start md:self-center">
                    {exp.duration}
                  </span>
                </div>

                {/* Description (If you uncomment it later, it will stay inside the neat box) */}
                {/* <p className="font-baloo text-base text-slate-300 leading-relaxed pt-2 font-normal">
                  {exp.desc}
                </p> */}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}