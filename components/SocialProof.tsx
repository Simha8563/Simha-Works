
import React from 'react';

const SocialProof: React.FC = () => {
  const clients = [
    "EY", "HTC Global", "Blend", "Lloyds", "Kult", "Evya",
    "Cubic Corporation", "Stackfusion Private Limited",
    "Everest IMS Technologies", "Ashling Partners", "Right Data",
    "VegEase", "Spritle Software"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by 2,300+ Companies Across India</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">From global giants to high-growth startups, we are the preferred hiring partner for elite tech talent.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6 border border-gray-100 rounded-3xl bg-gray-50">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">16,000+</div>
            <p className="text-gray-600 font-bold uppercase text-xs tracking-wider">Successful Placements</p>
          </div>
          <div className="text-center p-6 border border-gray-100 rounded-3xl bg-gray-50">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">2,300+</div>
            <p className="text-gray-600 font-bold uppercase text-xs tracking-wider">Companies Served</p>
          </div>
          <div className="text-center p-6 border border-gray-100 rounded-3xl bg-gray-50">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">70%</div>
            <p className="text-gray-600 font-bold uppercase text-xs tracking-wider">Repeat Client Rate</p>
          </div>
          <div className="text-center p-6 border border-gray-100 rounded-3xl bg-gray-50">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">3-5 Days</div>
            <p className="text-gray-600 font-bold uppercase text-xs tracking-wider">First Batch Delivery</p>
          </div>
        </div>

        <div className="mb-20">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            {clients.map((client, idx) => (
              <span key={idx} className="text-xl font-black text-gray-800 tracking-tighter uppercase whitespace-nowrap">
                {client}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 italic flex flex-col">
            <div className="mb-4 text-blue-600">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8v8h6c0 2.2-1.8 4-4 4v2c3.3 0 6-2.7 6-6V8h-8zm12 0v8h6c0 2.2-1.8 4-4 4v2c3.3 0 6-2.7 6-6V8h-8z"></path></svg>
            </div>
            <p className="text-gray-700 mb-6 flex-grow font-medium">"NxtWave cut our screening time by 80%. Every candidate they sent was interview-ready. Filled 3 backend roles in under a month."</p>
            <div>
              <p className="font-bold text-gray-900">— Priya Sharma</p>
              <p className="text-sm text-gray-500">Talent Acquisition Lead, FinTech Scale-up</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 italic flex flex-col">
            <div className="mb-4 text-blue-600">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8v8h6c0 2.2-1.8 4-4 4v2c3.3 0 6-2.7 6-6V8h-8zm12 0v8h6c0 2.2-1.8 4-4 4v2c3.3 0 6-2.7 6-6V8h-8z"></path></svg>
            </div>
            <p className="text-gray-700 mb-6 flex-grow font-medium">"The assessment reports gave us confidence even before the first call. Quality was noticeably better than other agencies we've worked with."</p>
            <div>
              <p className="font-bold text-gray-900">— Rahul Mehta</p>
              <p className="text-sm text-gray-500">Engineering Manager, SaaS Growth Co.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 italic flex flex-col">
            <div className="mb-4 text-blue-600">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8v8h6c0 2.2-1.8 4-4 4v2c3.3 0 6-2.7 6-6V8h-8zm12 0v8h6c0 2.2-1.8 4-4 4v2c3.3 0 6-2.7 6-6V8h-8z"></path></svg>
            </div>
            <p className="text-gray-700 mb-6 flex-grow font-medium">"Transparent pricing, fast turnaround, and most importantly - candidates who could actually code. Highly recommend."</p>
            <div>
              <p className="font-bold text-gray-900">— S. Venkatesh</p>
              <p className="text-sm text-gray-500">CTO, EdTech Platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
