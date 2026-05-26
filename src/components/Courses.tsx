"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, BookOpen, Users, Briefcase, Mic, Sparkles, ArrowUpRight } from "lucide-react";

const courses = [
  { title: "Spoken English", icon: MessageCircle, desc: "Master fluent daily conversations." },
  { title: "Grammar Training", icon: BookOpen, desc: "Build a strong foundation in English." },
  { title: "Personality Development", icon: Sparkles, desc: "Enhance your overall presence." },
  { title: "Interview Preparation", icon: Briefcase, desc: "Crack your dream job with confidence." },
  { title: "Public Speaking", icon: Mic, desc: "Speak fearlessly in front of any crowd." },
  { title: "Communication Skills", icon: Users, desc: "Connect better in personal & professional life." },
];

export default function Courses() {
  return (
    <section id="courses" className="py-16 sm:py-24 relative bg-[#050b1f]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050b1f] to-[#050b1f]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 sm:mb-6">
            Premium <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Choose from our specialized programs designed to accelerate your growth and build lasting confidence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {courses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 sm:p-8 group relative overflow-hidden cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 sm:mb-6 text-blue-400 group-hover:text-yellow-400 group-hover:bg-yellow-400/10 transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 font-heading">{course.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base mb-4 sm:mb-6">{course.desc}</p>

                  <div className="flex items-center text-sm font-semibold text-yellow-400 gap-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    Explore Course <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
