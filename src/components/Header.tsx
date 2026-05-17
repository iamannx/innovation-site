/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logo } from "./Logo";
import { motion } from "motion/react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-bg/95 backdrop-blur-md z-[1000] border-b-2 border-border px-6 md:px-8 flex justify-between items-center h-[90px] md:h-[140px]">
      <Logo size="text-5xl md:text-[81px]" />
      <nav className="flex gap-4 md:gap-12 text-[11px] font-black uppercase tracking-widest items-center">
        <a href="#mission" className="hover:text-accent transition-colors text-[14px] md:text-[18px]">Mission</a>
        <div className="flex gap-2 md:gap-4 items-center">
          <span className="text-gray-600 ml-[-25px]">/</span>
          <a
            href="#quiz"
            className="text-accent underline decoration-2 underline-offset-4 hover:decoration-4 transition-all uppercase text-[13px] md:text-[17px]"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
