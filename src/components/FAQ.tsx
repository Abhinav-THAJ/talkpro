"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "Is this for beginners or advanced learners?", answer: "Our courses are customized. We assess your level first and design a curriculum that suits your exact needs, whether you are starting fresh or polishing your corporate communication." },
  { question: "How long does it take to see results?", answer: "Most students notice a significant boost in confidence within the first 2 weeks. Complete fluency usually takes 3 to 6 months depending on your dedication and practice." },
  { question: "Do you provide recorded sessions?", answer: "Yes, all our online classes are recorded and available in your student dashboard for revision anytime." },
  { question: "Are the trainers certified?", answer: "Absolutely. Our mentors are highly certified professionals with years of experience in corporate communication and public speaking." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-3 sm:mb-4">
          Got <span className="text-gradient">Questions?</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">Everything you need to know about our academy.</p>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="glass border border-white/10 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="font-semibold text-sm sm:text-lg text-white text-left">{faq.question}</span>
              <motion.div
                animate={{ rotate: open === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-yellow-400" />
              </motion.div>
            </button>
            <AnimatePresence>
              {open === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-slate-400 leading-relaxed border-t border-white/5 pt-3 sm:pt-4 text-sm sm:text-base">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
