'use client'
import { motion } from "framer-motion";

export default function Skills() {
    const skills = [
    {
      name: "Figma",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path fill="#F24E1E" d="M12 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          <path fill="#A259FF" d="M6 12a3 3 0 0 0 6 0V9H6v3Z"/>
          <path fill="#1ABC9C" d="M12 12a3 3 0 0 0 6 0V9h-6v3Z"/>
          <path fill="#18A0FB" d="M18 6a3 3 0 0 1-6 0V9h6V6Z"/>
          <path fill="#0ACF83" d="M6 18a3 3 0 0 0 3 3 3 3 0 0 0 3-3v-3H9a3 3 0 0 0-3 3Z"/>
        </svg>
      )
    },
    {
      name: "Illustrator",
      icon: (
        <div className="w-12 h-12 bg-[#331C00] border-2 border-[#FF9A00] rounded-xl flex items-center justify-center font-bold text-[#FF9A00] text-xl font-sans">
          Ai
        </div>
      )
    },
    {
      name: "Photoshop",
      icon: (
        <div className="w-12 h-12 bg-[#001C26] border-2 border-[#00C8FF] rounded-xl flex items-center justify-center font-bold text-[#00C8FF] text-xl font-sans">
          Ps
        </div>
      )
    },
    {
      name: "InDesign",
      icon: (
        <div className="w-12 h-12 bg-[#26000C] border-2 border-[#FF3366] rounded-xl flex items-center justify-center font-bold text-[#FF3366] text-xl font-sans">
          Id
        </div>
      )
    },
    {
      name: "Premiere Pro",
      icon: (
        <div className="w-12 h-12 bg-[#24002B] border-2 border-[#EA77FF] rounded-xl flex items-center justify-center font-bold text-[#EA77FF] text-xl font-sans">
          Pr
        </div>
      )
    }
  ];
  return (
    <section id="skills" className="min-h-[70vh] flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-20 relative overflow-hidden">
          <div className="w-full max-w-7xl flex flex-col space-y-12">
            
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h2 className="font-baloo text-4xl md:text-5xl font-extrabold text-[#F5F5DC] tracking-wide">
                My Toolkit
              </h2>
              {/* <p className="text-slate-400 font-baloo mt-2 text-lg">
                The software and creative tools I use to bring ideas to life.
              </p> */}
            </motion.div>

            {/* Skills Container Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  // whileHover={{ y: -8 }}
                  className={`group relative flex flex-col items-center justify-center p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 `}
                >
                  {/* Custom Background Glow Effect */}
                  {/* <div className={`absolute inset-0 w-full h-full rounded-2xl blur-[24px] transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none ${skill.glowColor}`} /> */}

                  {/* Icon Wrapper */}
                  <div className="relative z-10 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <span className="relative z-10 font-baloo font-medium text-lg text-slate-300 group-hover:text-white transition-colors duration-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
  )
}

