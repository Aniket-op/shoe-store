"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Are all your sneakers authentic?",
    answer: "Yes, 100%. We have a strict, multi-step authentication process. Every pair that comes through our doors is meticulously inspected by our team of experts before being approved for sale."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 14-day return policy for store credit or exchange on unworn, pristine items with all original tags and packaging intact. Final sale items (including limited releases) cannot be returned."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide via DHL Express. International customers are responsible for any customs duties or taxes incurred upon delivery."
  },
  {
    question: "How long does shipping take?",
    answer: "Domestic orders typically arrive within 3-5 business days. International orders can take 5-10 business days depending on customs processing."
  },
  {
    question: "Can I cancel my order?",
    answer: "Orders can only be cancelled within 1 hour of placement, as we process and ship orders extremely quickly to ensure fast delivery."
  },
  {
    question: "How do pre-orders work?",
    answer: "Pre-orders secure your pair before the official release date. Payment is taken upfront, and the item will ship on or slightly after the official release date. Release dates are subject to change by the manufacturer."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-6">FAQ</h1>
          <p className="text-gray-500 text-lg font-light">
            Frequently asked questions about our products, shipping, and returns.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
            >
              <button
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg pr-8">{faq.question}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-black" />
                  ) : (
                    <Plus className="w-4 h-4 text-black" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide mb-4">Still have questions?</h2>
          <p className="text-gray-500 mb-8 font-light">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <a href="/contact" className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
