
import React from 'react';
import { ICONS } from '../constants';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sound Familiar? The Broken Hiring Process</h2>
          <p className="text-lg text-gray-600 font-medium">Traditional recruitment is costing you more than just placement fees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:shadow-lg transition-shadow">
            <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center">
              <ICONS.Overwhelmed />
            </div>
            <h3 className="text-xl font-bold mb-4">Resume Overload</h3>
            <p className="text-gray-600">Your team wastes 20+ hours screening 50-100 resumes. Most don't match requirements. Quality is hit-or-miss.</p>
          </div>

          <div className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:shadow-lg transition-shadow">
            <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center">
              <ICONS.Clock />
            </div>
            <h3 className="text-xl font-bold mb-4">Endless Delays</h3>
            <p className="text-gray-600">Agencies take 3-4 weeks for first profiles. Your roles stay open for months while competitors hire your target talent.</p>
          </div>

          <div className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:shadow-lg transition-shadow">
            <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center">
              <ICONS.MoneyBurn />
            </div>
            <h3 className="text-xl font-bold mb-4">High Costs, Low ROI</h3>
            <p className="text-gray-600">Pay 8-10% fees for unvetted candidates. 70% get rejected in first round. You're paying for quantity, not quality.</p>
          </div>
        </div>

        <div className="mt-16 p-8 bg-blue-600 rounded-3xl text-center text-white">
          <p className="text-2xl font-bold">
            "On average, companies spend 42 days and ₹50,000+ per tech hire. What if you could cut both in half?"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
