import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { membershipTiers, builderParticipationPaths, partnerParticipationPaths, MembershipTier } from '../data/membership';
import Modal from './ui/Modal';
import { trackEvent } from '../utils/analytics';

export default function Membership() {
  const [showBuilderPathsModal, setShowBuilderPathsModal] = useState(false);
  const [showPartnerPathsModal, setShowPartnerPathsModal] = useState(false);

  const handleTierClick = (tier: MembershipTier) => {
    trackEvent('membership_tier_click', { tier: tier.name });
    // In a real app, this would route to a form
    console.log(`Routing to registration for ${tier.name}`);
  };

  return (
    <section id="membership" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            Choose Your Layer of Participation
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            The Proddly Community is structured around two participation layers, Builders and Partners, each designed to contribute to the ecosystem in different ways.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {membershipTiers.map((tier) => (
            <motion.div
              key={tier.id}
              whileHover={{ y: -8 }}
              className={`relative p-6 md:p-8 rounded-2xl border flex flex-col ${
                tier.highlight 
                  ? 'bg-white dark:bg-gray-800 border-primary-accent shadow-xl shadow-primary-accent/10 dark:shadow-primary-accent/20 ring-1 ring-primary-accent/20'  
                  : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary-dark mb-2">{tier.name}</h3>
                <p className={`font-medium uppercase tracking-wide text-sm mb-4 ${
                  tier.highlight ? 'text-primary-accent' : 'text-secondary-accent'
                }`}>
                  {tier.tagline}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {tier.description}
                </p>
                
                {tier.id === 'builder' && (
                  <button 
                    onClick={() => setShowBuilderPathsModal(true)}
                    className="mt-4 text-sm text-primary-accent font-semibold hover:text-primary-dark underline underline-offset-4 flex items-center gap-1 cursor-pointer"
                  >
                    View Participation Paths <ArrowRight size={14} />
                  </button>
                )}

                {tier.id === 'partner' && (
                  <button 
                    onClick={() => setShowPartnerPathsModal(true)}
                    className="mt-4 text-sm text-secondary-accent font-semibold hover:text-primary-dark underline underline-offset-4 flex items-center gap-1 cursor-pointer"
                  >
                    View Participation Paths <ArrowRight size={14} />
                  </button>
                )}
              </div>

              <ul className="space-y-4 mb-8 grow">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      tier.highlight ? 'bg-primary-accent/10 dark:bg-primary-accent/20 text-primary-accent dark:text-secondary-accent' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-text-dark text-sm font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.id === 'builder' ? "https://forms.gle/SZGY1LFVMTEYLkH2A" : "#"}
                target={tier.id === 'builder' ? "_blank" : undefined}
                rel={tier.id === 'builder' ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (tier.id !== 'builder') {
                    e.preventDefault();
                    handleTierClick(tier);
                  } else {
                    trackEvent('membership_tier_click', { tier: tier.name });
                  }
                }}
                className={`w-full py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                  tier.highlight
                    ? 'bg-primary-accent text-white hover:bg-primary-accent/90 shadow-lg shadow-primary-accent/25'
                    : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {tier.cta}
                {tier.highlight && <ArrowRight size={18} />}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Builder Participation Paths Modal */}
      <Modal
        isOpen={showBuilderPathsModal}
        onClose={() => setShowBuilderPathsModal(false)}
        title="Builder Participation Paths" children={undefined}>
        <p className="text-text-secondary mb-6">
          All individuals join the community as TPC Builders. Within the Builder layer there are two participation paths:
        </p>
        <div className="space-y-6">
          {builderParticipationPaths.map((path, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700">
              <h4 className="font-bold text-primary-dark text-lg mb-2">{path.name}</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {path.description}
              </p>
            </div>
          ))}
        </div>
      </Modal>

      {/* Partner Participation Paths Modal */}
      <Modal
        isOpen={showPartnerPathsModal}
        onClose={() => setShowPartnerPathsModal(false)}
        title="Partner Participation Paths" children={undefined}      >
        <p className="text-text-secondary mb-6">
          Partners play a crucial role in supporting the ecosystem. There are four key ways to participate as a partner:
        </p>
        <div className="space-y-6">
          {partnerParticipationPaths.map((path, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700">
              <h4 className="font-bold text-primary-dark text-lg mb-2">{path.name}</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {path.description}
              </p>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
}
