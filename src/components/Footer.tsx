import { Linkedin, Mail, Instagram, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-gray-800 pt-16 pb-8">
      <div className="w-full px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Left Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="https://lh3.googleusercontent.com/d/1Ii7fXl7uTb7eNPCkyEkZfYZVTB6hfGA8" alt="Proddly Logo" referrerPolicy="no-referrer" className="h-8 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The Proddly Community is a structured product ecosystem helping builders move from ideas to execution.
            </p>
          </div>

          {/* Middle Column */}
          <div>
            <h4 className="font-bold text-white mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-primary-accent transition-colors">About</a></li>
              <li><a href="#programs" className="hover:text-primary-accent transition-colors">Programs</a></li>
              <li><a href="#membership" className="hover:text-primary-accent transition-colors">Membership</a></li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} The Proddly Community — All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://x.com/proddlyHQ" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-gray-500 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/proddlyhq/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/proddlyhq?igsh=ZXNreHhjYXVhbTI4" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.proddly.com/" target="_blank" rel="noopener noreferrer" aria-label="Website" className="text-gray-500 hover:text-white transition-colors">
              <Globe size={20} />
            </a>
            <a href="mailto:tpcommunity@proddly.com" aria-label="Email" className="text-gray-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
