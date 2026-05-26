"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Personalized Training",
  "Confidence-building system",
  "Student transformation philosophy",
  "Real-world communication",
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(".about-image-card",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image — on mobile shown after text */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full about-image-card order-2 lg:order-1">
            <div className="absolute inset-0 bg-blue-600/10 rounded-3xl -rotate-3 scale-105 transition-transform duration-500 hover:rotate-0"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/about.png"
                alt="English trainer mentoring student"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 glass-card p-4 sm:p-6 rounded-2xl w-48 sm:w-64 shadow-2xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-2xl sm:text-4xl font-bold text-yellow-400">10k+</div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">Students Transformed Worldwide</p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4 sm:gap-6 order-1 lg:order-2">
            <div className="about-content inline-block text-blue-400 font-semibold tracking-wider uppercase text-sm">
              Our Mission
            </div>
            <h2 className="about-content text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
              More than just English. <br />
              <span className="text-gradient">We build Confidence.</span>
            </h2>
            <p className="about-content text-base sm:text-lg text-slate-300 leading-relaxed">
              At English Talk Academy, we don&apos;t just teach grammar. We transform your communication skills with a personalized approach designed to shatter hesitation and build unshakeable confidence in every aspect of your life.
            </p>

            <ul className="about-content flex flex-col gap-3 sm:gap-4 mt-2 sm:mt-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="text-yellow-400 shrink-0" size={20} />
                  <span className="text-base sm:text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="about-content mt-4 sm:mt-6">
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-all text-sm sm:text-base">
                Discover Our Method
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
