/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";

export function Quiz() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    objectives: [] as string[],
    models: [] as string[],
    platforms: [] as string[],
    spend: "",
    message: "",
    name: "",
    email: "",
  });

  const toggleSelection = (item: string, field: keyof typeof formData) => {
    setFormData((prev) => {
      const current = prev[field] as string[];
      const updated = current.includes(item)
        ? current.filter((i) => i !== item)
        : [...current, item];
      return { ...prev, [field]: updated };
    });
  };

  const nextStep = (selection: string, field: string) => {
    setFormData((prev) => ({ ...prev, [field]: selection }));
    setStep((prev) => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // This creates the package to send to Web3Forms
    const submissionData = {
      ...formData,
      access_key: "52e43ecf-998b-4ad6-b7b0-9213e6222e2b",
      subject: "New KOPA Performance Audit Request",
      // These lines make the selected items readable in your email
      objectives: formData.objectives.join(", "),
      models: formData.models.join(", "),
      platforms: formData.platforms.join(", "),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Success! Your request has been sent. KOPA will be in touch shortly.");
        // Resets the quiz to the start
        setStep(1);
        setFormData({ objectives: [], models: [], platforms: [], spend: "", message: "", name: "", email: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending request. Check your internet connection.");
    }
  };

  return (
    <section id="quiz" className="px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-accent text-black overflow-hidden relative scroll-mt-[90px] md:scroll-mt-[140px]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 md:gap-16 items-center text-center">
        <div className="w-full flex flex-col items-center">
          <Logo color="text-black" barColor="bg-black/20" className="mb-4 md:mb-6" size="text-5xl md:text-[77px]" />
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-2 md:mb-4 opacity-60">Get In Touch</p>
          <h2 className="text-[28px] sm:text-[48px] md:text-[72px] lg:text-[102px] font-black uppercase leading-[0.85] mb-8 px-2">
            Modern Performance. <br className="hidden md:block" /> Measured Growth.
          </h2>
          <p className="font-bold uppercase text-xs md:text-sm tracking-widest max-w-xl mx-auto px-4">
            Stop guessing. Level up your marketing with innovative data-backed strategies.
          </p>
        </div>

        <div className="w-full max-w-4xl bg-black text-white p-6 sm:p-10 md:p-20 md:rotate-1 shadow-2xl min-h-[500px] md:min-h-[600px] flex flex-col justify-center text-left">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex flex-col border-b border-white/20 pb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-black text-xl md:text-2xl uppercase italic">What is your business model?</h3>
                    <span className="text-accent font-black text-sm md:text-base">01/05</span>
                  </div>
                  <p className="text-[10px] text-accent font-bold uppercase mt-1 tracking-widest">Select all that apply</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {["E-Commerce", "Lead Gen"].map((option) => (
                    <button
                      key={option}
                      onClick={() => toggleSelection(option, "objectives")}
                      className={`p-4 md:p-6 border-2 font-black uppercase text-left transition-all text-lg md:text-xl ${formData.objectives.includes(option)
                          ? "border-accent bg-accent text-black"
                          : "border-white/10 hover:border-white/40"
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={formData.objectives.length === 0}
                  className="w-full bg-white text-black py-4 md:py-6 font-black uppercase text-lg md:text-xl hover:bg-accent disabled:opacity-50 transition-colors"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex flex-col border-b border-white/20 pb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-black text-xl md:text-2xl uppercase italic">Key focus points?</h3>
                    <span className="text-accent font-black text-sm md:text-base">02/05</span>
                  </div>
                  <p className="text-[10px] text-accent font-bold uppercase mt-1 tracking-widest">Select all that apply</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {[
                    "Maximise ROI & Efficiency",
                    "Drive Conversion Volume",
                    "Enhance Lead & Customer Quality",
                    "Scale & Market Expansion",
                    "Brand Visibility & Awareness",
                    "Full-Funnel Strategy & Testing"
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => toggleSelection(option, "models")}
                      className={`p-4 md:p-6 border-2 font-black uppercase text-left transition-all text-base md:text-lg ${formData.models.includes(option)
                          ? "border-accent bg-accent text-black"
                          : "border-white/10 hover:border-white/40"
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(3)}
                  disabled={formData.models.length === 0}
                  className="w-full bg-white text-black py-4 md:py-6 font-black uppercase text-lg md:text-xl hover:bg-accent disabled:opacity-50 transition-colors"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex flex-col border-b border-white/20 pb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-black text-xl md:text-2xl uppercase italic">Channels?</h3>
                    <span className="text-accent font-black text-sm md:text-base">03/05</span>
                  </div>
                  <p className="text-[10px] text-accent font-bold uppercase mt-1 tracking-widest">Select all that apply</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {["Meta", "Google", "TikTok", "Pinterest", "Microsoft", "Reddit"].map((platform) => (
                    <button
                      key={platform}
                      onClick={() => toggleSelection(platform, "platforms")}
                      className={`p-4 md:p-6 border-2 font-black uppercase text-xs sm:text-sm transition-all ${formData.platforms.includes(platform)
                          ? "border-accent bg-accent text-black"
                          : "border-white/10 hover:border-white/40"
                        }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(4)}
                  disabled={formData.platforms.length === 0}
                  className="w-full bg-white text-black py-4 md:py-6 font-black uppercase text-lg md:text-xl hover:bg-accent disabled:opacity-50 transition-colors"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                  <h3 className="font-black text-xl md:text-2xl uppercase italic">Monthly Ad Spend?</h3>
                  <span className="text-accent font-black text-sm md:text-base">04/05</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {["£1k - £10k", "£10k - £50k", "£50k - £250k", "£250k+"].map((option) => (
                    <button
                      key={option}
                      onClick={() => nextStep(option, "spend")}
                      className="group flex items-center justify-between border-b-2 border-white/10 p-4 md:p-6 hover:border-accent transition-colors text-left"
                    >
                      <span className="font-black uppercase tracking-tighter text-xl md:text-2xl group-hover:text-accent transition-colors">{option}</span>
                      <span className="text-2xl md:text-3xl group-hover:translate-x-2 transition-transform">→</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                  <h3 className="font-black text-xl md:text-2xl uppercase italic">Final Details.</h3>
                  <span className="text-accent font-black text-sm md:text-base">05/05</span>
                </div>
                <form onSubmit={handleSubmit} className="grid gap-4 md:gap-6">
                  <textarea
                    placeholder="TELL US MORE ABOUT YOUR GOALS..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-b-2 border-white/20 p-3 md:p-4 outline-none font-bold placeholder-gray-600 bg-transparent text-lg md:text-xl focus:border-accent transition-colors uppercase h-24 md:h-32 resize-none"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <input
                      type="text"
                      placeholder="NAME"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-b-2 border-white/20 p-3 md:p-4 outline-none font-bold placeholder-gray-600 bg-transparent text-lg md:text-xl focus:border-accent transition-colors uppercase"
                    />
                    <input
                      type="email"
                      placeholder="WORK EMAIL"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-b-2 border-white/20 p-3 md:p-4 outline-none font-bold placeholder-gray-600 bg-transparent text-lg md:text-xl focus:border-accent transition-colors uppercase"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-white text-black py-6 md:py-8 font-black text-2xl md:text-3xl hover:bg-accent hover:text-black transition uppercase mt-2 md:mt-4 tracking-tighter"
                  >
                    Connect
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>

  );
}
