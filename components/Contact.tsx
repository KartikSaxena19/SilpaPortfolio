"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import last from "../assets/last.png"

export default function Contact() {
  const socials = [
    {
      name: "Behance",
      url: "https://www.behance.net/munchkkinvdesign",
      icon: (
        <svg className="w-8 h-8 fill-current text-[#0057ff]" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-11.23 2.158H7.322v1.763h3.448c.559 0 1.012-.132 1.359-.396.347-.265.52-.647.52-1.147 0-.462-.164-.816-.492-1.06-.328-.245-.776-.36-1.346-.36zm-.493-4.665H7.322v1.547h3.04c.483 0 .862-.112 1.137-.336.275-.224.412-.533.412-.927 0-.395-.138-.69-.413-.886-.275-.197-.674-.298-1.197-.298zm7.55 4.316h-4.322c.036.657.25 1.164.644 1.522.393.357.942.536 1.646.536.88 0 1.528-.328 1.944-.984h1.96c-.328.878-.925 1.59-1.79 2.137-.866.547-1.916.82-3.15.82-1.748 0-3.125-.532-4.133-1.595-1.007-1.063-1.51-2.497-1.51-4.305 0-1.82.49-3.264 1.47-4.333.98-1.07 2.308-1.604 3.984-1.604 1.63 0 2.915.51 3.856 1.53 1.01 1.096 1.494 2.58 1.442 4.45h-.74zm-4.225-1.59h2.376c-.024-.555-.183-.974-.476-1.258-.293-.284-.68-.426-1.16-.426-.49 0-.888.147-1.192.443-.304.296-.487.696-.548 1.24zM14.654 7.69h3.764v1.078h-3.764V7.69z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/silpa-vishwakarma-2886b7325/",
      icon: (
        <svg className="w-8 h-8 fill-current text-[#0077b5]" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_munchkkin_/",
      icon: (
        <svg className="w-8 h-8 fill-current text-[#e1306c]" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: "Mail",
      url: "mailto:vishwakarmasilpa2002@gmail.com",
      icon: (
        <svg className="w-8 h-8 fill-current text-[#EA4335]" viewBox="0 0 24 24">
          <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.38l-9 5.65-9-5.65V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.85.65-1.5 1.5-1.5H3.6l8.4 5.25 8.4-5.25h2.1c.85 0 1.5.65 1.5 1.5z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="min-h-[70vh] py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden w-full max-w-7xl mx-auto">
      
      {/* 2-Column Grid Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* --- Left Column: Image --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden   group"
        >
          <Image
            src={last}
            alt="Contact Art"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        {/* --- Right Column: Text & Icons --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-10"
        >
          {/* Heading */}
          <div className="text-center md:text-left w-full">
            <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F5F5DC] tracking-wide">
              Contact Me
            </h2>
            
          </div>

          {/* Clickable Icons Grid */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start w-full">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center p-5 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl  transition-all duration-300 hover:scale-110 "
              >
                <div className="relative z-10 transition-transform duration-200">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </motion.div>

      </div>

      

    </section>
  );
}