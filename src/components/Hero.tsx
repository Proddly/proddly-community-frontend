import { motion } from 'motion/react';
import { ArrowRight, Layers, Code, Rocket, Users, MessageSquare, Zap } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import blackImageOne from '/assets/optimized_black-image-one.webp'
import blackImageTwo from '/assets/optimized_black-image-two.webp'
import blackImageThree from '/assets/optimized_black-image-three.webp'
import blackImageFour from '/assets/optimized_black-image-four.webp'
import blackImageFive from '/assets/optimized_black-image-five.webp'
import blackImageSix from '/assets/optimized_black-image-six.webp'
import blackImageSeven from '/assets/optimized_black-image-seven.webp'
import blackImageEight from '/assets/optimized_black-image-eight.webp'
import blackImageNine from '/assets/optimized_black-image-nine.webp'

// Avatar component for the visual
const Avatar = ({ src, className, delay = 0 }: { src: string; className?: string; delay?: number }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: 1,
      opacity: 1,
      y: [0, -15, 5, -10, 0],
      x: [0, 10, -5, 8, 0],
      rotate: [0, 5, -5, 3, 0]
    }}
    transition={{
      scale: { type: "spring", stiffness: 260, damping: 20, delay },
      opacity: { duration: 0.5, delay },
      y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: delay },
      x: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: delay + 1 },
      rotate: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }
    }}
    className={`absolute w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 shadow-md overflow-hidden bg-gray-100 dark:bg-gray-700 ${className}`}
  >
    <img src={src} alt="Community Member" className="w-full h-full object-cover" />
  </motion.div>
);

// Floating badge component
const FloatingBadge = ({ icon: Icon, text, className, delay = 0 }: { icon: any; text: string; className?: string; delay?: number }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{
      scale: 1,
      opacity: 1,
      y: [0, -10, 0]
    }}
    transition={{
      scale: { type: "spring", stiffness: 200, damping: 20, delay },
      opacity: { duration: 0.5, delay },
      y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }
    }}
    className={`absolute px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-2 text-xs font-semibold text-primary-dark dark:text-white ${className}`}
  >
    <div className="p-1 bg-primary-accent/10 dark:bg-primary-accent/20 rounded-full text-primary-accent">
      <Icon size={12} />
    </div>
    {text}
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white dark:bg-gray-900">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-150 h-150 rounded-full bg-primary-accent/5 dark:bg-primary-accent/10 blur-3xl opacity-70" />
        <div className="absolute top-[40%] -left-[10%] w-125 h-125 rounded-full bg-secondary-accent/5 dark:bg-secondary-accent/10 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-dark tracking-tight mb-6 leading-[1.1]">
                Where Ideas <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-accent to-secondary-accent">
                  Become Products.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Join the ecosystem designed for execution. We provide the structure, mentorship, and community you need to validate your ideas and ship real products.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <a
                  href="https://forms.gle/SZGY1LFVMTEYLkH2A"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('hero_cta_primary')}
                  className="w-full sm:w-auto bg-primary-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-accent/90 transition-all shadow-lg shadow-primary-accent/25 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                >
                  Join as a Builder
                  <ArrowRight size={20} />
                </a>
                <a
                  href="#membership"
                  onClick={() => trackEvent('hero_cta_secondary')}
                  className="w-full sm:w-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-dark dark:text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all flex items-center justify-center"
                >
                  Become a Partner
                </a>
              </div>
            </motion.div>
          </div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-2xl lg:max-w-none"
          >
            <div className="mobileHeroWrap relative h-80 w-70 md:w-full md:h-full lg:h-full lg:w-full aspect-square md:aspect-4/3 lg:aspect-square xl:aspect-4/3 bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xl p-8 flex flex-col justify-between overflow-hidden group">

              {/* Abstract UI Representation of Ecosystem */}
              <div className="grid grid-cols-2 gap-4 h-full relative z-10">

                {/* Ideation Stage */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 flex flex-col items-center justify-center gap-3 relative"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-accent/10 dark:bg-primary-accent/20 flex items-center justify-center text-primary-accent dark:text-secondary-accent">
                    <Layers size={24} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-sm font-bold text-gray-800 dark:text-gray-200">Ideation</div>
                  <div className="w-16 h-2 bg-gray-100 dark:bg-gray-700 rounded-full"></div>

                  {/* Community Elements */}
                  <Avatar src={blackImageOne} className="-top-4 -right-4" delay={0.4} />
                  <Avatar src={blackImageTwo} className="-bottom-4 -left-4" delay={0.5} />
                  <Avatar src={blackImageThree} className="top-1/2 -right-6" delay={1.1} />
                  <FloatingBadge icon={MessageSquare} text="Feedback" className="-right-16 top-2" delay={0.6} />
                </motion.div>

                {/* Build Stage */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 flex flex-col items-center justify-center gap-3 mt-8 relative"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-accent/10 dark:bg-primary-accent/20 flex items-center justify-center text-primary-accent dark:text-secondary-accent">
                    <Code size={24} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-sm font-bold text-gray-800 dark:text-gray-200">Build</div>
                  <div className="w-16 h-2 bg-gray-100 dark:bg-gray-700 rounded-full"></div>

                  {/* Community Elements */}
                  <Avatar src={blackImageFour} className="-top-4 -left-4" delay={0.7} />
                  <Avatar src={blackImageFive} className="bottom-8 -right-5" delay={1.2} />
                  <FloatingBadge icon={Users} text="Collab" className="-left-12 bottom-4" delay={0.8} />
                </motion.div>

                {/* Launch Stage */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 flex flex-col items-center justify-center gap-3 -mt-8 relative"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-accent/10 dark:bg-primary-accent/20 flex items-center justify-center text-primary-accent dark:text-secondary-accent">
                    <Rocket size={24} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-sm font-bold text-gray-800 dark:text-gray-200">Launch</div>
                  <div className="w-16 h-2 bg-gray-100 dark:bg-gray-700 rounded-full"></div>

                  {/* Community Elements */}
                  <Avatar src={blackImageSix} className="-bottom-4 -right-4" delay={0.9} />
                  <Avatar src={blackImageSeven} className="-top-3 left-4" delay={1.3} />
                  <FloatingBadge icon={Zap} text="Traction" className="-right-10 top-0" delay={1.0} />
                </motion.div>

                {/* Outcome Stage */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="outcomeContainer bg-[#0B1120] rounded-2xl shadow-lg 
                             p-4 sm:p-6 md:p-8 
                             flex flex-col items-center justify-center gap-3  
                             text-white h-20 md:h-full lg:h-full relative overflow-hidden w-full max-w-sm mx-auto"
                >
                  {/* Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary-accent/20 to-transparent pointer-events-none" />

                  {/* Title - Responsive font sizing */}
                  <h3 className="text-lg sm:text-xl lg:text-3xl font-bold relative z-10 text-center">
                    Outcome
                  </h3>

                  {/* Description - Responsive text and line heights */}
                  <p className="text-[0.6rem] -mt-2 lg:mt-0 sm:text-sm text-gray-400 text-center relative z-10 leading-relaxed">
                    Real Products.<br className="hidden sm:block" /> Real Growth.
                  </p>

                  {/* Community Elements - Responsive Avatar sizes */}
                  <div className="flex -space-x-2 -mt-2 lg:mt-2 sm:mt-4 relative z-10">
                    <img
                      src={blackImageEight}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-primary-dark object-cover"
                      alt="User avatar 1"
                    />
                    <img
                      src={blackImageNine}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-primary-dark object-cover"
                      alt="User avatar 2"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/54.jpg"
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-primary-dark object-cover"
                      alt="User avatar 3"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Connecting Lines (Decorative) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M25,25 Q50,50 75,75"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                  className="text-primary-accent"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  d="M75,25 Q50,50 25,75"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                  className="text-secondary-accent"
                />
              </svg>

              {/* Pulse Effects for "Aliveness" */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <motion.div
                  animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-linear-to-tr from-primary-accent/5 to-transparent rounded-3xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
