"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import i1 from "../assets/u2.jpeg"
import i2 from "../assets/u3.jpeg"
import i3 from "../assets/u4.jpeg"
import b1 from "../assets/b1.jpeg"
import b2 from "../assets/i1.png"
import b3 from "../assets/i2.jpeg"
import b4 from "../assets/i3.png"
import b5 from "../assets/b4.jpeg"
import b6 from "../assets/b5.jpeg"
import Image from "next/image";

const PROJECTS_DATA = {
  "UI/UX": [
    { id: 2, img: i2, link: "https://www.figma.com/proto/sjll5frrpFo8SWCZyuL5jy/Medical-Appointment-App?node-id=3-2&t=k5H5IZacQwViNhh6-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2" },
    { id: 1, img: i1, link: "https://www.behance.net/gallery/252810099/Gaming-Website" },
    { id: 3, img: i3, link: "https://www.behance.net/gallery/242691943/Web-Page-Designing" }
  ],
  "Illustrator": [
    { id: 5, img: b2, link: "https://www.behance.net/gallery/242685081/A-women-with-her-pet" },
    { id: 6, img: b3, link: "#" },
    { id: 7, img: b4, link: "https://www.behance.net/gallery/242679431/Vector-Illustration" },
  ],
  "Branding": [
    { id: 8, img: b1, link: "https://www.behance.net/gallery/242690769/Logo" },
    { id: 9, img: b5, link: "https://www.behance.net/gallery/252808607/Branding" },
    { id: 10, img: b6, link: "https://www.behance.net/gallery/242690869/Logo" },
  ]
};

type TabType = "UI/UX" | "Illustrator" | "Branding";

export default function Work() {
  const [activeTab, setActiveTab] = useState<TabType>("UI/UX");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const currentItems = PROJECTS_DATA[activeTab];

  const totalPages = Math.ceil(currentItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const visibleProjects = currentItems.slice(indexOfFirstItem, indexOfLastItem);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentPage(1); 
  };

  return (
    <section id="work" className="min-h-screen py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="font-baloo text-4xl md:text-5xl font-extrabold text-[#F5F5DC] tracking-wide">
            My Work
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 pb-6">
          {(Object.keys(PROJECTS_DATA) as TabType[]).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className="group flex items-center gap-3 cursor-pointer focus:outline-none"
              >
                <span className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive ? "bg-[#F5F5DC] scale-125 shadow-[0_0_10px_#F5F5DC]" : "bg-slate-700 group-hover:bg-slate-500"
                }`} />
                <span className={`font-baloo text-xl font-semibold transition-colors duration-200 ${
                  isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                }`}>
                  {tab}
                </span>
              </button>
            );
          })}
        </div>

        <div className="min-h-[420px] flex flex-col justify-between gap-12">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl p-4 backdrop-blur-sm flex flex-col space-y-4 transition-colors"
                >
                  <div className="group w-full aspect-[3/2] relative rounded-xl overflow-hidden bg-slate-800">
                    <div className="w-full h-full bg-slate-950 flex items-center justify-center border border-slate-800 text-slate-700 font-baloo relative">
                      
                      <Image 
                        src={project.img}  
                        alt=""
                        fill 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Black Overlay aur View Work Button */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center w-full h-full z-10 backdrop-blur-[2px]">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="translate-y-6 group-hover:translate-y-0 transition-all duration-300 px-6 py-2.5 bg-[#F5F5DC] text-black font-baloo font-bold text-lg rounded-full hover:scale-105 "
                        >
                          View Work
                        </a>
                      </div>

                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/*  Pagination Control Unit  */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 font-baloo text-sm font-medium hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-slate-900 transition-colors"
              >
                Previous
              </button>

              <span className="font-baloo text-slate-400 text-sm">
                Page <span className="text-white font-semibold">{currentPage}</span> of {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 font-baloo text-sm font-medium hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-slate-900 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}