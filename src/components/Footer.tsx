/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="px-8 lg:px-12 py-4 flex justify-between items-center border-t-2 border-border">
      <div className="flex flex-col items-start">
        <Logo className="-ml-4" size="text-5xl md:text-[67px]" />
      </div>
      
      <div className="text-right">
        <p className="text-xs font-black">© {new Date().getFullYear()} KOPA</p>
      </div>
    </footer>
  );
}
