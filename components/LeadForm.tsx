
import React, { useState } from 'react';
import { FormData } from '../types';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    roles: '',
    agreed: true
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name) newErrors.name = 'Full name is required';
    
    if (!formData.email) {
      newErrors.email = 'Company email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    } else {
      const personalDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com'];
      const domain = formData.email.split('@')[1];
      if (personalDomains.includes(domain)) {
        newErrors.email = 'Please use your official company email';
      }
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit Indian phone number';
    }

    if (!formData.company) newErrors.company = 'Company name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // Simulate API Call
    try {
      // GOOGLE SHEETS INTEGRATION PLACEHOLDER
      // Replace with your Google Apps Script Web App URL
      // const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
      // await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: JSON.stringify(formData) });
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', roles: '', agreed: true });
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center border border-green-100 max-w-xl mx-auto">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-bold mb-4">Awesome! We've got your details.</h3>
        <p className="text-gray-600 mb-8">Our Corporate Relations team will call you within 6 hours during business hours (Mon-Sat, 9 AM - 7 PM IST).</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-blue-600 font-bold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-blue-50 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name*</label>
            <input 
              type="text" 
              placeholder="e.g., Rajesh Kumar"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Company Email*</label>
            <input 
              type="email" 
              placeholder="e.g., rajesh@company.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number*</label>
            <input 
              type="tel" 
              placeholder="e.g., 98765 43210"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Company Name*</label>
            <input 
              type="text" 
              placeholder="e.g., TechCorp Solutions"
              value={formData.company}
              onChange={e => setFormData({...formData, company: e.target.value})}
              className={`w-full px-4 py-3 rounded-xl border ${errors.company ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
            />
            {errors.company && <p className="text-red-500 text-xs mt-1 font-bold">{errors.company}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">What roles are you hiring for? (Optional)</label>
          <textarea 
            placeholder="e.g., 2 Senior Backend Developers, 1 DevOps Engineer"
            rows={3}
            value={formData.roles}
            onChange={e => setFormData({...formData, roles: e.target.value})}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
          />
        </div>

        <div className="flex items-start space-x-3">
          <input 
            type="checkbox" 
            checked={formData.agreed}
            onChange={e => setFormData({...formData, agreed: e.target.checked})}
            className="mt-1 w-5 h-5 text-blue-600 rounded cursor-pointer"
          />
          <span className="text-sm text-gray-600">I agree to receive communication from NxtWave regarding my hiring needs.</span>
        </div>

        {status === 'error' && (
          <p className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold">Something went wrong. Please try again or call us at 91644 75747.</p>
        )}

        <button 
          type="submit"
          disabled={status === 'loading'}
          className={`w-full py-4 rounded-xl font-bold text-white text-lg shadow-lg transition-all active:scale-95 ${status === 'loading' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200'}`}
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Submitting...
            </span>
          ) : 'Get a Callback Within 6 Hours →'}
        </button>
        
        <p className="text-center text-xs text-gray-500">
           🔒 Your information is secure. We'll call you within 6 hours during business hours (Mon-Sat, 9 AM - 7 PM IST).
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
