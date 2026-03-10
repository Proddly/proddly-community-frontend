import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] bg-size-[16px_16px] opacity-30 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-6 tracking-tight"
        >
          Ready to Build With Intent?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
        >
          Join The Proddly Community, a structured product ecosystem where builders turn ideas into real products, real traction, and real opportunities.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-6 items-center"
        >
          {/* Primary CTA */}
          <div className="w-full max-w-md">
            <a
              href="https://forms.gle/SZGY1LFVMTEYLkH2A"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('final_cta_builder')}
              className="w-full bg-primary-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-accent/90 transition-all shadow-xl shadow-primary-accent/30 flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              Join as a Builder — Start Building Today
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Secondary CTA */}
          <div className="w-full max-w-md">
            <a
              href="#membership"
              onClick={() => trackEvent('final_cta_partner')}
              className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-dark dark:text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all flex items-center justify-center"
            >
              Become a Partner
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
