
import React, { useState } from 'react';
import { FAQItem } from '../types';

const FAQ_DATA: FAQItem[] = [
  {
    question: "How is NxtWave different from other recruitment agencies?",
    answer: "We're assessment-first. Every candidate is tested via NxtMock (AI interview) and Topin Tech before you see them. You get 8-10 vetted profiles with detailed reports, not 50 unscreened resumes. This saves you 15+ hours of screening time per role."
  },
  {
    question: "What's the typical timeline from requirement to first profiles?",
    answer: "3-5 days for the first batch of pre-assessed profiles. Most roles are filled within 30-45 days from start to joining, depending on your decision timeline."
  },
  {
    question: "What does the 6% + GST fee cover?",
    answer: "Complete end-to-end service: sourcing, screening, assessment, profile curation, interview coordination, offer management, and post-hire support (Day 7 & 15 check-ins), plus a 60-day replacement guarantee."
  },
  {
    question: "What if the candidate doesn't work out?",
    answer: "We offer a 60-day replacement guarantee. If the candidate leaves or is asked to leave within this period, we'll provide a free replacement."
  },
  {
    question: "How many candidates will I need to interview?",
    answer: "On average, clients interview 5-8 of our pre-assessed candidates to make 1-2 hires. Our process increases the interview-to-offer ratio to 30-40%."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Common Questions Answered</h2>
        
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 font-bold text-lg flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              >
                <span>{item.question}</span>
                <span className={`transform transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === idx && (
                <div className="p-6 text-gray-600 bg-gray-50 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
