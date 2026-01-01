
import React from 'react';

interface ServiceAreasProps {
  onCtaClick: () => void;
}

const ServiceAreas: React.FC<ServiceAreasProps> = ({ onCtaClick }) => {
  const roles = [
    "Backend (Node, Python, Java)", "Frontend (React, Angular)", "Full Stack Engineers", 
    "DevOps & Cloud", "Data Science & Data Engineering", "Mobile (iOS, Android)",
    "QA / Automation", "Engineering Managers"
  ];
  const industries = [
    "Fintech & Banking", "SaaS & Enterprise", "E-commerce", "HealthTech",
    "EdTech", "Logistics", "Agritech", "AI / ML Startups"
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We Specialize in Tech Hiring Across All Domains</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center text-blue-600">
              <span className="mr-3 p-2 bg-blue-100 rounded-lg">💻</span>
              Tech Roles We Fill
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {roles.map((role, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  <span className="font-medium">{role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center text-blue-600">
              <span className="mr-3 p-2 bg-blue-100 rounded-lg">🏢</span>
              Industries We Serve
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {industries.map((ind, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  <span className="font-medium">{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
            <button 
              onClick={onCtaClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
            >
              Find Pre-Assessed Talent for Your Role →
            </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
