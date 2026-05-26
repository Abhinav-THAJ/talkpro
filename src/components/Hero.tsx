"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowRight, Play, Star } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(".hero-blob", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".hero-text-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-blob absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[80px] sm:blur-[100px] mix-blend-screen"></div>
        <div className="hero-blob absolute bottom-0 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div ref={textRef} className="flex flex-col items-start gap-4 sm:gap-6 pt-8 lg:pt-0">
          <div className="hero-text-line inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-blue-200">Premium EdTech Startup</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] text-white">
            <div className="hero-text-line overflow-hidden">Speak English</div>
            <div className="hero-text-line overflow-hidden text-gradient-gold">with Confidence</div>
          </h1>

          <p className="hero-text-line text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
            Transform your communication skills with personalized spoken English training designed to build confidence, fluency, and career growth.
          </p>

          <div className="hero-text-line flex flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-4">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(250,204,21,0.3)] text-sm sm:text-base">
              Join Now <ArrowRight size={18} />
            </button>
            <button className="glass hover:bg-white/10 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2 transition-all text-sm sm:text-base">
              <Play size={18} className="text-blue-400" /> Book Free Demo
            </button>
          </div>

          <div className="hero-text-line flex items-center gap-4 mt-4 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 w-full max-w-md">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#020817] bg-slate-800 overflow-hidden relative">
                  <Image src={`/images/testimonial.png`} alt="Student" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <span className="text-xs text-slate-400">500+ Confident Students</span>
            </div>
          </div>
        </div>

        {/* Hero Visuals — shown on lg+, hidden on mobile */}
        <div className="relative h-[300px] sm:h-[450px] lg:h-[600px] w-full hidden sm:block perspective-1000">
          <motion.div
            initial={{ rotateY: 20, opacity: 0, x: 50 }}
            animate={{ rotateY: 0, opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 rounded-2xl overflow-hidden glass-card p-2"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/images/hero.png"
                alt="Confident student speaking English"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-80"></div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-4 sm:-left-10 bottom-16 sm:bottom-24 glass-card p-3 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-xl sm:text-2xl">🎓</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm sm:text-base">Expert Mentorship</p>
                <p className="text-xs text-slate-300">Personalized Training</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 sm:-right-8 top-20 sm:top-32 glass-card p-3 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-sm sm:text-base">
                A+
              </div>
              <div>
                <p className="text-white font-bold text-sm sm:text-base">Fluency Guaranteed</p>
                <p className="text-xs text-slate-300">Practical Sessions</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
