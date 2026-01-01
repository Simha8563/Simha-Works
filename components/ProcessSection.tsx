
import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Simple, Fast, Quality-Focused Process</h2>
        
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -z-10"></div>
          
          <div className="flex-1 px-4 text-center group">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">1</div>
            <h3 className="text-xl font-bold mb-3">Share Requirement</h3>
            <p className="text-gray-600 text-sm max-w-[200px] mx-auto mb-4">Brief 15-min discovery call to understand tech stack & role requirements.</p>
            <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase">Day 1</span>
          </div>

          <div className="flex-1 px-4 text-center group">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">2</div>
            <h3 className="text-xl font-bold mb-3">We Source & Assess</h3>
            <p className="text-gray-600 text-sm max-w-[200px] mx-auto mb-4">Every candidate goes through NxtMock & Topin Tech assessments.</p>
            <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase">Day 2-3</span>
          </div>

          <div className="flex-1 px-4 text-center group">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">3</div>
            <h3 className="text-xl font-bold mb-3">Interview Vetted Talent</h3>
            <p className="text-gray-600 text-sm max-w-[200px] mx-auto mb-4">Receive 8-10 profiles with full reports and interview recommendations.</p>
            <span className="inline-block px-3 py-1 bg-blue-100 rounded-full text-xs font-bold text-blue-600 uppercase">Day 3-5</span>
          </div>
        </div>

        <div className="mt-20 p-8 border border-blue-50 bg-blue-50/30 rounded-3xl max-w-3xl mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <p className="text-gray-700 font-medium text-left">
                <strong>Post-Hire Support:</strong> We coordinate interviews, manage offers, and provide check-ins at Day 7 & 15. Your hire is backed by our <strong>60-day replacement guarantee</strong>.
            </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
