/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="px-6 md:px-8 lg:px-12 min-h-[75vh] md:min-h-screen flex flex-col justify-center relative overflow-hidden pt-40 md:pt-[240px] pb-16 md:pb-20 text-center">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-white/5 rounded-full scale-[1.5] -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-white/5 rounded-full scale-[1.2] -z-10"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-accent text-[10px] md:text-sm uppercase tracking-[0.3em] mb-6 md:mb-4"
        >
          13+ Years of Channel Mastery
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="massive-type mb-8 md:mb-12 text-[42px] sm:text-[64px] md:text-[90px] lg:text-[132px] max-w-full md:max-w-7xl mx-auto leading-[0.95] md:leading-[0.9]"
        >
          Next-Gen Marketing.<br className="hidden md:block" />
          Real-World <span className="highlight-tag">Growth.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl mx-auto px-4 mb-10 md:mb-0"
        >
          <p className="text-base md:text-3xl text-gray-400 leading-tight font-medium">
            Innovation-led PPC & Paid Social for brands that value{" "}
            <span className="text-white italic">movement</span> over vanity metrics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-6 md:mt-24 w-full flex flex-col items-center relative"
        >
          <a 
            href="#quiz" 
            className="btn-tag text-2xl md:text-5xl px-12 md:px-24 py-8 md:py-12 flex items-center justify-center group relative overflow-hidden transition-all hover:scale-[1.05] active:scale-[0.98] shadow-[0_0_50px_rgba(255,148,103,0.3)] hover:shadow-[0_0_80px_rgba(255,148,103,0.5)] bg-accent text-black"
          >
            <span className="relative z-10">Start Transformation</span>
            <motion.div 
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
