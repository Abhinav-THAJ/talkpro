"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Users, Headphones, Trophy, BookOpen, ThumbsUp } from "lucide-react";
import Image from "next/image";

const reasons = [
  { title: "Personalized Sessions", icon: Users, desc: "Tailored to your specific needs." },
  { title: "Flexible Timings", icon: Clock, desc: "Learn when it suits you best." },
  { title: "Practical Training", icon: BookOpen, desc: "Focus on real-world conversations." },
  { title: "Confidence Building", icon: Trophy, desc: "Shatter hesitation forever." },
  { title: "Interactive Learning", icon: Headphones, desc: "Engaging and modern methodology." },
  { title: "Student Support", icon: ThumbsUp, desc: "We are with you at every step." },
];

export default function WhyChoose() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".reason-card", 
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-6 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
              Why Choose <br /><span className="text-yellow-400">English Talk?</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              We go beyond traditional teaching. Our system is engineered for guaranteed transformation.
            </p>

            <div className="relative h-48 sm:h-64 mt-2 sm:mt-8 rounded-2xl overflow-hidden glass-card">
              <Image src="/images/why.png" alt="Why choose us" fill className="object-cover opacity-80" />
            </div>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div key={idx} className="reason-card glass p-4 sm:p-6 rounded-xl border border-white/5 hover:border-blue-500/30 hover:bg-blue-900/10 transition-all duration-300 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:scale-110 transition-all mb-3 sm:mb-4">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{reason.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400">{reason.desc}</p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
