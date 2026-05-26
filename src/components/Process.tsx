"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardList, UserCheck, Mic2, ShieldCheck, Award } from "lucide-react";

const steps = [
  { title: "Assessment", icon: ClipboardList, desc: "We evaluate your current level." },
  { title: "Personalized Plan", icon: UserCheck, desc: "A curriculum tailored for you." },
  { title: "Daily Practice", icon: Mic2, desc: "Interactive speaking sessions." },
  { title: "Confidence Boost", icon: ShieldCheck, desc: "Overcoming fear of speaking." },
  { title: "Fluent Communication", icon: Award, desc: "Speak flawlessly anywhere." },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {

      // Animate the vertical line drawing down as user scrolls
      gsap.fromTo(".process-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );

      // Highlight each step icon + card as it enters the viewport
      document.querySelectorAll(".process-step").forEach((step, idx) => {
        const icon = step.querySelector(".step-icon");
        const card = step.querySelector(".step-card");

        // Initial hidden state
        gsap.set(icon, { scale: 0.6, opacity: 0.3 });
        gsap.set(card, { opacity: 0, x: idx % 2 === 0 ? 40 : -40 });

        // Animate in when scrolled to
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 72%",
            end: "top 40%",
            scrub: 0.5,
          },
        });

        tl.to(icon, {
          scale: 1.1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(2)",
        }, 0);

        tl.to(card, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power3.out",
        }, 0);

        // Dim when scrolled past
        ScrollTrigger.create({
          trigger: step,
          start: "bottom 50%",
          onEnter: () => {
            gsap.to(icon, { scale: 0.8, opacity: 0.4, duration: 0.3 });
            gsap.to(card, { opacity: 0.4, duration: 0.3 });
          },
          onLeaveBack: () => {
            gsap.to(icon, { scale: 1.1, opacity: 1, duration: 0.3 });
            gsap.to(card, { opacity: 1, duration: 0.3 });
          },
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 sm:py-24 relative bg-[#020817] z-10" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            The <span className="text-gradient-gold">English Talk</span> Pathway
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">A proven 5-step system to achieve fluency.</p>
        </div>

        <div className="relative">
          {/* Vertical Line Track (dimmed) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform md:-translate-x-1/2 rounded-full" />
          {/* Vertical Line Fill (draws as you scroll) */}
          <div className="process-line-fill absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-400 via-blue-400 to-yellow-400 transform md:-translate-x-1/2 rounded-full origin-top" />

          <div className="flex flex-col gap-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`process-step relative flex items-center flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Icon Marker */}
                  <div className="step-icon absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#020817] border-2 border-yellow-400 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(250,204,21,0.6)]">
                    <Icon size={20} className="text-yellow-400" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`step-card ml-12 sm:ml-16 md:ml-0 md:w-5/12 glass p-4 sm:p-6 rounded-2xl border border-white/5 hover:border-yellow-400/30 transition-colors duration-300 ${isEven ? "md:text-right" : "md:text-left"}`}
                  >
                    <div className="text-yellow-400 font-bold text-sm mb-2 tracking-widest uppercase">Step 0{idx + 1}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm sm:text-base">{step.desc}</p>
                  </div>

                  <div className="hidden md:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
