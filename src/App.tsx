/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Origin } from "./components/Origin";
import { Quiz } from "./components/Quiz";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-black">
      <div className="wall-texture" />
      
      <Header />
      
      <main>
        <Hero />
        <Services />
        <Origin />
        <Quiz />
      </main>
      
      <Footer />
    </div>
  );
}
