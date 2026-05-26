"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Sharma",
    role: "Software Engineer",
    text: "Before English Talk, I hesitated to speak in meetings. Now, I lead them. The transformation is surreal.",
  },
  {
    name: "Sneha Kapoor",
    role: "Marketing Manager",
    text: "The personalized mentorship completely changed my approach to client presentations. Highly recommended!",
  },
  {
    name: "Amit Patel",
    role: "College Student",
    text: "I cracked my first job interview all thanks to the interview prep course. My confidence is at an all-time high.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="success" className="py-16 sm:py-24 relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-900/10 via-[#020817] to-[#020817]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-10 sm:mb-16">
          Voices of <span className="text-gradient-gold">Success</span>
        </h2>

        <div className="relative min-h-[240px] sm:h-[300px] flex items-center justify-center">
          <Quote className="absolute top-0 left-1/2 -translate-x-1/2 text-white/5 w-20 sm:w-32 h-20 sm:h-32 rotate-180" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 max-w-2xl px-2"
            >
              <p className="text-lg sm:text-2xl lg:text-3xl text-slate-200 font-heading leading-relaxed mb-6 sm:mb-8">
                &quot;{testimonials[current].text}&quot;
              </p>
              <div>
                <div className="font-bold text-white text-base sm:text-lg">{testimonials[current].name}</div>
                <div className="text-yellow-400 text-sm">{testimonials[current].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-6 sm:mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${current === idx ? "bg-yellow-400 w-8" : "bg-white/20 hover:bg-white/40 w-3"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
