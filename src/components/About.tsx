import { useState } from 'react';
import { motion } from 'motion/react';
import { Layout, Users, Award, TrendingUp, ArrowDown } from 'lucide-react';
import { pillars, Pillar } from '../data/pillars';
import Modal from './ui/Modal';
import { trackEvent } from '../utils/analytics';

const iconMap = {
  Layout: Layout,
  Users: Users,
  Award: Award,
  TrendingUp: TrendingUp,
};

export default function About() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);

  const handlePillarClick = (pillar: Pillar) => {
    trackEvent('pillar_click', { pillar: pillar.title });
    setSelectedPillar(pillar);
  };

  return (
    <section id="about" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            What is The Proddly Community (TPC)?
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            The Proddly Community (TPC) is a structured ecosystem for product builders, founders, and professionals who want to move from ideas to execution.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            Unlike typical online communities that revolve around conversation, TPC is designed around program-driven progress and measurable outcomes. Inside TPC, learning is tied directly to doing.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.iconName];
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer group"
                onClick={() => handlePillarClick(pillar)}
              >
                <div className="w-12 h-12 bg-primary-accent/10 dark:bg-primary-accent/20 rounded-lg flex items-center justify-center text-primary-accent dark:text-secondary-accent mb-4 group-hover:bg-primary-accent group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">{pillar.title}</h3>
                <p className="text-sm text-text-secondary line-clamp-3">
                  {pillar.description}
                </p>
                <div className="mt-4 text-primary-accent text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowDown size={14} className="-rotate-90" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Ecosystem Flow Visual */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-primary-dark mb-8">Community Pipeline</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-3">
              <div className="px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg font-semibold text-text-dark dark:text-white border border-gray-200 dark:border-gray-600">
                Builders / Partners
              </div>
            </div>

            {/* Arrow */}
            <div className="text-gray-300 dark:text-gray-600">
              <ArrowDown size={24} className="md:-rotate-90" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-3">
              <div className="px-6 py-3 bg-primary-accent/10 dark:bg-primary-accent/20 rounded-lg font-semibold text-primary-accent dark:text-secondary-accent border border-primary-accent/10 dark:border-primary-accent/20">
                Programs
              </div>
            </div>

            {/* Arrow */}
            <div className="text-gray-300 dark:text-gray-600">
              <ArrowDown size={24} className="md:-rotate-90" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-3">
              <div className="px-6 py-3 bg-[#0B1120] rounded-lg font-semibold text-white border border-[#0B1120]">
                Outcomes
              </div>
            </div>
          </div>
          
          <p className="mt-10 text-sm text-text-secondary italic">
            TPC operates as the Proddly subsidiary, supporting builders with programs, mentorship, and structured collaboration.
          </p>
        </div>
      </div>

      {/* Modal for Pillar Details */}
      <Modal
        isOpen={!!selectedPillar}
        onClose={() => setSelectedPillar(null)}
        title={selectedPillar?.title || ''}      >
        <p className="text-text-secondary leading-relaxed text-lg">
          {selectedPillar?.description}
        </p>
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
          <h4 className="font-semibold text-primary-dark mb-2">Why this matters</h4>
          <p className="text-sm text-text-secondary">
            This pillar ensures that every member of TPC is not just consuming content, but actively moving towards a tangible goal. It separates TPC from passive communities.
          </p>
        </div>
      </Modal>
    </section>
  );
}
