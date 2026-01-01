
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="inline-block px-4 py-1.5 mb-6 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase">
            Assessment-First Tech Recruitment
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-[1.15] mb-6">
            Tired of Screening 50 <span className="text-blue-600">Irrelevant Resumes?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8">
            Get 8-10 pre-assessed, interview-ready tech candidates in just 3-5 days.
          </p>
          
          <ul className="space-y-4 mb-10">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </span>
              <span className="text-lg text-gray-700 font-semibold">Pre-vetted via NxtMock + Topin Tech</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </span>
              <span className="text-lg text-gray-700 font-semibold">Save 15+ hours of screening time per role</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </span>
              <span className="text-lg text-gray-700 font-semibold">16,000+ Placements | 70% Repeat Client Rate</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={onCtaClick}
              className="bg-blue-600 text-white text-lg px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 active:scale-95"
            >
              Get Pre-Assessed Candidates →
            </button>
            <div className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-xl bg-white/50">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i+10}/40/40`} className="w-8 h-8 rounded-full border-2 border-white" alt="Avatar" />
                ))}
              </div>
              <p className="text-sm text-gray-600 font-medium leading-tight">
                Trusted by 2,300+<br/>Companies in India
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-blue-400/10 blur-3xl rounded-full"></div>
          <div className="relative bg-white p-6 rounded-3xl shadow-2xl border border-blue-50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Candidate Analytics</span>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-blue-900">NxtMock Score</span>
                  <span className="text-xs font-bold bg-blue-600 text-white px-2 py-0.5 rounded">9.2/10</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-green-900">Technical Assessment</span>
                  <span className="text-xs font-bold bg-green-600 text-white px-2 py-0.5 rounded">8.8/10</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 border border-gray-100 rounded-2xl">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Fast-Track Delivery</p>
                  <p className="text-sm font-bold text-gray-900">Batch 1: Ready in 3 Days</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-around flex-wrap gap-4 grayscale opacity-60">
                <span className="font-bold text-gray-800 text-sm">EY</span>
                <span className="font-bold text-gray-800 text-sm">HTC Global</span>
                <span className="font-bold text-gray-800 text-sm">Blend</span>
                <span className="font-bold text-gray-800 text-sm">Lloyds</span>
                <span className="font-bold text-gray-800 text-sm">Kult</span>
                <span className="font-bold text-gray-800 text-sm">Evya</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
