/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      title: "Omnichannel Specialism",
      description: "As fully accredited experts across Meta, Google, TikTok, and more, we deploy cross-channel signal recovery to capture intent wherever it surfaces in 2026.",
    },
    {
      title: "Creative-First",
      description: "Algorithmic resonance is the new targeting. We utilise high-velocity testing and AI production to find the creative hooks that drive performance.",
    },
    {
      title: "E-Commerce Systems",
      description: "SKU-level optimisation and predictive ROAS models. We build high-efficiency revenue engines that scale winners at algorithmic speed.",
    },
    {
      title: "Performance Lead Gen",
      description: "Optimising for sales outcomes, not just volume. Deep CRM integration allows us to feed high-intent signals back into bidding algorithms.",
    },
    {
      title: "Market Entry",
      description: "Aggressive disruption for emerging challengers. We build the foundational equity required to go from zero to market authority at aggressive pace.",
    },
    {
      title: "Plateau Breakthrough",
      description: "Revitalising flatlined performance and stagnant accounts. We break through plateaus by auditing technical decay and refreshing strategic hooks.",
    }
  ];

  return (
    <section id="services" className="px-6 md:px-8 lg:px-12 pt-12 pb-20 md:pt-20 md:pb-32 bg-[#050505]">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-black uppercase mb-12 md:mb-16 border-b-2 border-border pb-4 inline-block"
      >
        Channel Specialism & Strategy
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card border-l-4 border-accent p-8 md:p-10 hover:bg-white/5 transition-colors"
          >
            <h3 className="font-black uppercase text-lg md:text-xl mb-4 md:mb-6 text-accent">{service.title}</h3>
            <p className="text-gray-400 text-base md:text-lg leading-tight font-medium">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
