
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-2xl font-bold tracking-tight text-white font-poppins">NxtWave</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              NxtWave is India's leading assessment-first tech recruitment platform. Founded by IITians and ex-Amazon professionals, we've successfully placed 16,000+ tech professionals across 2,300+ companies.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#assessment" className="hover:text-blue-400 transition-colors">Assessment Process</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-3">
                <span className="text-blue-500">📧</span>
                <span>hiring@nxtwave.tech</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-500">📞</span>
                <span>91644 75747</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-500">📍</span>
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 NxtWave. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
