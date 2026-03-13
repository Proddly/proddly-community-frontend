import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { programs, Program } from '../data/programs';
import Modal from './ui/Modal';
import { trackEvent } from '../utils/analytics';

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleProgramClick = (program: Program) => {
    trackEvent('program_learn_more', { program: program.name });
    setSelectedProgram(program);
  };

  const handleCtaClick = (program: Program) => {
    trackEvent('program_cta_click', { program: program.name });
    // Route to program registration
  };

  return (
    <section id="programs" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            Community Programs
          </h2>
          <p className="text-lg text-text-secondary mb-4">
            Programs are the execution engine of The Proddly Community.
          </p>
          <p className="text-text-secondary">
            Each program is designed to move builders from insight to action through structured sessions and real-world problem solving.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary-dark mb-2">{program.name}</h3>
                <p className="text-primary-accent dark:text-secondary-accent font-medium text-sm mb-4">{program.tagline}</p>
                <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary bg-gray-50 dark:bg-gray-700 py-2 px-3 rounded-lg w-fit">
                  <Calendar size={14} />
                  {program.schedule}
                </div>
              </div>

              <div className="grow">
                {/* Short description for card */}
                <p className="text-text-secondary text-sm line-clamp-3 mb-4">
                  {program.description}
                </p>
                <button
                  onClick={() => handleProgramClick(program)}
                  className="text-sm font-semibold text-primary-dark underline decoration-gray-300 dark:decoration-gray-600 underline-offset-4 hover:text-primary-accent dark:hover:text-secondary-accent hover:decoration-primary-accent dark:hover:decoration-secondary-accent transition-all cursor-pointer"
                >
                  Learn More
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                <button
                  onClick={() => handleCtaClick(program)}
                  className="w-full py-3 rounded-lg bg-white dark:bg-gray-700 border border-primary-dark dark:border-gray-500 text-primary-dark dark:text-gray-200 font-semibold hover:bg-primary-dark dark:hover:bg-gray-600 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  {program.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      <Modal
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
        title={selectedProgram?.name || ''}      >
        <p className="text-primary-accent dark:text-secondary-accent font-medium text-lg mb-4">
          {selectedProgram?.tagline}
        </p>
        <p className="text-text-secondary leading-relaxed mb-6">
          {selectedProgram?.description}
        </p>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6">
          <h4 className="font-bold text-primary-dark mb-4 text-sm uppercase tracking-wide">Key Takeaways</h4>
          <ul className="space-y-3">
            {selectedProgram?.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-dark dark:text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-accent dark:bg-secondary-accent mt-1.5 shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between bg-primary-accent/10 dark:bg-primary-accent/20 p-4 rounded-lg border border-primary-accent/10 dark:border-primary-accent/20">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary-accent dark:text-secondary-accent">
            <Calendar size={16} />
            {selectedProgram?.schedule}
          </div>
          <button
            onClick={() => selectedProgram && handleCtaClick(selectedProgram)}
            className="text-sm font-bold text-white bg-primary-accent px-4 py-2 rounded-md hover:bg-primary-accent/90 transition-colors flex items-center gap-1"
          >
            {selectedProgram?.cta} <ArrowRight size={14} />
          </button>
        </div>
      </Modal>
    </section>
  );
}
