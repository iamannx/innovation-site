/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export function Origin() {
  return (
    <section id="mission" className="px-6 md:px-8 lg:px-12 py-20 md:py-32 border-t-2 border-border flex flex-col gap-16 md:gap-24 font-inter scroll-mt-[90px] md:scroll-mt-[140px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-4 flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="block text-[13px] md:text-[15px] uppercase font-black text-gray-600 tracking-widest mb-1">Copa (Welsh)</span>
              <span className="text-4xl md:text-5xl font-black text-accent leading-none">Summit</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="block text-[13px] md:text-[15px] uppercase font-black text-gray-600 tracking-widest mb-1">Kopā (Latvian)</span>
              <span className="text-4xl md:text-5xl font-black text-accent leading-none">Together</span>
            </motion.div>
          </div>
          <div className="h-px w-24 bg-border"></div>
          <p className="text-sm font-bold text-gray-500 leading-tight uppercase tracking-[0.2em]">
            The Peak of Performance. <br />Driven Side-by-Side.
          </p>
        </div>
        
        <div className="lg:col-span-8">
          <p className="text-[14px] md:text-[20px] uppercase font-black tracking-[0.3em] md:tracking-[0.4em] text-accent mb-4 md:mb-6">Our Roots & Mission</p>
          <p className="text-4xl md:text-6xl font-black leading-tight text-white mb-8 md:mb-10 italic uppercase">
            Technical Mastery. <br className="hidden sm:block" /> High-Impact Growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-l-2 border-border pl-6 md:pl-12">
            <p className="text-base md:text-lg font-medium leading-relaxed text-gray-400">
              KOPA represents a perfect synergy between our vision of achieving paid media excellence and our Latvian-Welsh heritage. This dual identity defines our straightforward approach, allowing us to work side-by-side with brands to drive the results that actually move the needle.
            </p>
            <p className="text-base md:text-lg font-medium leading-relaxed text-gray-400">
              As <span className="text-white">fully accredited specialists</span> with over 13 years of combined expertise, we've streamlined the agency model to ensure you get more for your money. By removing the red tape, we guarantee your investment is focused entirely on technical depth and high-performance activities that grow your brand.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-border pt-16 md:pt-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4 md:space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-black uppercase italic leading-none text-accent">Industry <br className="hidden sm:block" /> Leading.</h3>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            We bypass standard constraints to provide <span className="text-white">bespoke strategies</span> and <span className="text-white">custom scripting</span>. We don't wait for industry trends. We set them by being early adopters of advanced beta features and data-driven testing.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4 md:space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-black uppercase italic leading-none text-accent">Bespoke <br className="hidden sm:block" /> Solutions.</h3>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            No copy-and-paste processes. Everything is tailored to your unique model, including deep <span className="text-white">CRM integrations</span> that ensure we're measuring real performance, not just reporting on vanity metrics.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-4 md:mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group ring-1 ring-border hover:ring-accent/50 transition-all duration-500 p-8 md:p-12 bg-zinc-900/30"
        >
          <div className="absolute -top-4 left-6 md:left-8 bg-black border border-border px-3 py-1 z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent whitespace-nowrap">Anna // Co-Founder</span>
          </div>
          <p className="text-base md:text-lg lg:text-xl font-medium text-gray-300 italic leading-relaxed relative">
            <span className="text-4xl text-accent/20 absolute -top-4 -left-4 md:-left-6 font-serif">"</span>
            Having spent years agency-side, I became increasingly aware of the friction caused by outdated, rigid processes that lag behind latest cutting-edge methods. It was professionally challenging to see vital innovation work stalled by internal sign-off layers, resulting in clear wastage of retainer hours. We forged KOPA to eliminate these barriers, refocusing every hour on the high-impact activities that actually move the needle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="relative group ring-1 ring-border hover:ring-accent/50 transition-all duration-500 p-8 md:p-12 bg-zinc-900/30"
        >
          <div className="absolute -top-4 left-6 md:left-8 bg-black border border-border px-3 py-1 z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent whitespace-nowrap">Jacob // Co-Founder</span>
          </div>
          <p className="text-base md:text-lg lg:text-xl font-medium text-gray-300 italic leading-relaxed relative">
            <span className="text-4xl text-accent/20 absolute -top-4 -left-4 md:-left-6 font-serif">"</span>
            Across multiple agencies, we saw generic, cut-and-paste solutions that consistently fell short of truly addressing client needs. I knew we could deliver significantly more value within allocated hours if we prioritised technical depth over internal red tape. At KOPA, every account receives the bespoke TLC it deserves, driven by a desire to push the envelope with pioneering strategy you won't find anywhere else.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
