/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Membership from './components/Membership';
import Programs from './components/Programs';
import WhyTPC from './components/WhyTPC';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-light-bg font-sans text-text-dark selection:bg-primary-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Membership />
        <Programs />
        <WhyTPC />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
