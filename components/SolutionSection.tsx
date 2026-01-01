
import React from 'react';
import { ICONS } from '../constants';

const SolutionSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The NxtWave Difference: Assessment-First Recruitment</h2>
          <p className="text-lg text-gray-600">We don't just find resumes; we validate expertise before you even see a profile.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="flex space-x-6 p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600">
              <ICONS.CheckShield />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Pre-Assessed Candidates</h3>
              <p className="text-gray-600">Every profile includes NxtMock (AI-powered interview simulation) and Topin Tech results. Only see proven talent.</p>
            </div>
          </div>

          <div className="flex space-x-6 p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600">
              <ICONS.Target />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Quality Over Quantity</h3>
              <p className="text-gray-600">We send 8-10 highly relevant, vetted profiles - not 50 resumes. Each profile is interview-ready with scores.</p>
            </div>
          </div>

          <div className="flex space-x-6 p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600">
              <ICONS.Rocket />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast Delivery</h3>
              <p className="text-gray-600">First batch of pre-assessed profiles in 3-5 days. We maintain a pool of assessed talent ready to match.</p>
            </div>
          </div>

          <div className="flex space-x-6 p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600">
              <ICONS.Rupee />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Just 6% + GST (market charges 8.33% to 18%+). Save significantly per hire with a 60-day replacement guarantee.</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 min-w-[700px]">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="p-6 font-bold">What You Get</th>
                <th className="p-6 font-bold">Traditional Agency</th>
                <th className="p-6 font-bold bg-blue-600">NxtWave Hiring</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-6 font-bold text-gray-700">Profiles Shared</td>
                <td className="p-6 text-gray-600">50-100 raw resumes</td>
                <td className="p-6 font-bold text-blue-700">8-10 pre-assessed profiles</td>
              </tr>
              <tr>
                <td className="p-6 font-bold text-gray-700">Assessment</td>
                <td className="p-6 text-gray-600">None (you screen)</td>
                <td className="p-6 font-bold text-blue-700">NxtMock + Topin Tech reports</td>
              </tr>
              <tr>
                <td className="p-6 font-bold text-gray-700">First Batch Timeline</td>
                <td className="p-6 text-gray-600">3-4 weeks</td>
                <td className="p-6 font-bold text-blue-700">3-5 days</td>
              </tr>
              <tr>
                <td className="p-6 font-bold text-gray-700">Interview-Ready Rate</td>
                <td className="p-6 text-gray-600">20-30%</td>
                <td className="p-6 font-bold text-blue-700">60-70%</td>
              </tr>
              <tr>
                <td className="p-6 font-bold text-gray-700">Service Fee</td>
                <td className="p-6 text-gray-600">8.33% - 18% + GST</td>
                <td className="p-6 font-bold text-blue-700 text-xl">6% + GST</td>
              </tr>
              <tr>
                <td className="p-6 font-bold text-gray-700">Replacement Policy</td>
                <td className="p-6 text-gray-600">Varies (30-45 days)</td>
                <td className="p-6 font-bold text-blue-700">60-Day Guarantee</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
