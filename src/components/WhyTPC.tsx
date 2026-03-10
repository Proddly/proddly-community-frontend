import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

export default function WhyTPC() {
  return (
    <section id="why-tpc" className="py-24 bg-[#0B1120] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why The Proddly Community Is Different
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Most online communities focus on conversation. <br />
            TPC is designed for execution and outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Typical Communities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-xl font-bold text-gray-400 mb-8 uppercase tracking-wider flex items-center gap-3">
              Typical Communities
            </h3>
            <ul className="space-y-6">
              {[
                "Random conversations without direction",
                "Endless webinars with little application",
                "Passive learning and content consumption",
                "Participation without accountability"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-400">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 text-red-400 mt-0.5">
                    <X size={14} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Proddly Community */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-primary-accent p-6 md:p-8 rounded-2xl shadow-2xl shadow-primary-accent/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            
            <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-wider flex items-center gap-3">
              The Proddly Community
            </h3>
            <ul className="space-y-6">
              {[
                "Structured programs designed for execution",
                "Defined roles that encourage meaningful contribution",
                "Collaborative problem-solving with peers and experts",
                "A system designed to turn ideas into real outcomes"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white font-medium">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-white mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 italic">
            TPC is designed for builders who want more than conversation — they want progress.
          </p>
        </div>
      </div>
    </section>
  );
}
