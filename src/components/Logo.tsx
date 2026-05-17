/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export function Logo({ className = "", color = "text-accent", barColor = "bg-accent/20", size = "text-5xl" }: { className?: string; color?: string; barColor?: string; size?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex items-center gap-3 relative ${className}`}
    >
      <div className="flex flex-col items-center">
        <span className={`font-graffiti ${size} ${color} -rotate-3 hover:rotate-0 transition-transform cursor-default select-none tracking-tight pt-[15px]`}>
          KOPA
        </span>
      </div>
    </motion.div>
  );
}
