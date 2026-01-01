
import React from 'react';

const TechSection: React.FC = () => {
  return (
    <section id="assessment" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powered by Proprietary Assessment Technology</h2>
          <p className="text-xl text-gray-400">Our platform combines AI interviewing with rigorous technical testing to ensure quality.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 flex flex-col items-center text-center">
            <div className="w-full h-48 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
               <div className="absolute top-4 left-4 flex space-x-1">
                 <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                 <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
               </div>
               <div className="text-blue-200 opacity-20 text-xs font-mono p-4">
                 {"{ analyzing_communication: true, tone_analysis: 0.89, clarity_score: 'A' }"}
               </div>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-white mb-2">NxtMock</span>
                  <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">AI Interviewer</span>
               </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">NxtMock - AI Interview Simulation</h3>
            <ul className="space-y-3 text-left w-full text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-blue-500 font-bold">✓</span>
                <span>30-45 minute conversational AI interview</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-500 font-bold">✓</span>
                <span>Tests communication clarity & problem-solving approach</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-500 font-bold">✓</span>
                <span>Detailed report with qualitative feedback</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 flex flex-col items-center text-center">
            <div className="w-full h-48 bg-gradient-to-br from-emerald-900 to-teal-900 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 p-4 font-mono text-[10px] text-emerald-400 opacity-20 leading-relaxed text-left overflow-hidden">
                    {"function solve(arr) { \n return arr.filter(x => x % 2 === 0)\n.reduce((a, b) => a + b, 0); \n}"}
                    <br/>
                    {"// Performance: 1.2ms \n// Space: O(N)"}
                </div>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-white mb-2">Topin Tech</span>
                  <span className="text-emerald-400 text-sm font-bold uppercase tracking-widest">Skill Validator</span>
               </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Topin Tech - Technical Assessment</h3>
            <ul className="space-y-3 text-left w-full text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Role-specific coding challenges & system design</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Customized to your exact tech stack (React, Node, etc.)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Evaluates real-world logic over theoretical knowledge</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-400 text-xl font-bold italic">
            "Assessment scores give you a 60-70% probability of interview success vs. 20-30% industry average."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
