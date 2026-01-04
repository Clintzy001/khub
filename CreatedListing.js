import React, { useState } from 'react';
import { X, Check, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

const CreateListing = ({ onClose }) => {
  const [plan, setPlan] = useState('basic');
  const [title, setTitle] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Your Details
  const bankInfo = {
    accNo: "6119361548",
    name: "Clinton Chukwuebuka Oleka",
    bank: "OPay",
    whatsapp: "2347051337399"
  };

  const prices = {
    basic: "2,000",
    featured: "5,000"
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hello Clinton! I've just transferred ₦${prices[plan]} for my JOBHUB listing: "${title}". I'm sending the receipt now for approval.`;
    window.open(`https://wa.me/${bankInfo.whatsapp}?text=${encodeURIComponent(message)}`);
    onClose(); // Close the modal after sending
  };

  // SUCCESS VIEW
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-black mb-2" style={{ color: '#4A148C' }}>Order Initiated!</h2>
        <p className="text-gray-500 mb-8 text-sm">
          To make your listing go live, please complete the WhatsApp step to send your proof of payment.
        </p>
        <button 
          onClick={handleWhatsAppRedirect}
          className="w-full py-4 rounded-2xl text-white font-bold flex items-center justify-center gap-3 shadow-lg active:scale-95 transition bg-[#25D366]"
        >
          <MessageCircle className="w-5 h-5" /> Open WhatsApp Now
        </button>
      </div>
    );
  }

  // FORM VIEW
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 animate-in slide-in-from-bottom duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-black text-gray-900">New Listing</h2>
        <button onClick={onClose} className="p-2 bg-gray-100 rounded-full">
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="space-y-4 flex-1 overflow-y-auto">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Title</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. iPhone 13 or Graphics Designer" 
            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-purple-800 transition-all" 
          />
        </div>

        <div className="p-5 rounded-2xl border-2 border-dashed border-purple-200 bg-purple-50">
          <h3 className="font-bold text-purple-900 text-sm mb-3">STEP 1: TRANSFER TO OPAY</h3>
          <div className="space-y-1 text-sm text-gray-700">
            <p className="flex justify-between"><span>Bank:</span> <strong>{bankInfo.bank}</strong></p>
            <p className="flex justify-between"><span>Number:</span> <strong className="text-lg">{bankInfo.accNo}</strong></p>
            <p className="flex justify-between"><span>Name:</span> <strong>{bankInfo.name}</strong></p>
          </div>
        </div>

        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Step 2: Select Plan</label>
        <div className="grid grid-cols-2 gap-4">
          <div 
            onClick={() => setPlan('basic')}
            className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${plan === 'basic' ? 'border-purple-800 bg-purple-50 shadow-md' : 'border-gray-100 bg-white'}`}
          >
            <h4 className="font-bold text-sm">Basic</h4>
            <p className="text-xl font-black text-purple-900">₦{prices.basic}</p>
            <p className="text-[10px] text-gray-400">Live for 7 days</p>
          </div>
          
          <div 
            onClick={() => setPlan('featured')}
            className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${plan === 'featured' ? 'border-purple-800 bg-purple-50 shadow-md' : 'border-gray-100 bg-white'}`}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-sm">Featured</h4>
              {plan === 'featured' && <Check className="w-4 h-4 text-purple-800" />}
            </div>
            <p className="text-xl font-black text-purple-900">₦{prices.featured}</p>
            <p className="text-[10px] text-gray-400">Top of feed</p>
          </div>
        </div>
      </div>

      <button 
        className="w-full py-4 rounded-2xl text-white font-bold text-lg shadow-xl mt-6 active:scale-95 transition"
        style={{ backgroundColor: '#4A148C' }}
        onClick={() => setIsSubmitted(true)}
        disabled={!title}
      >
        I have paid ₦{plan === 'basic' ? prices.basic : prices.featured}
      </button>
    </div>
  );
};

export default CreateListing;
