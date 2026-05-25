import React, { useState } from 'react';
import { products } from './data';
import { RankingCard } from './components/RankingCard';
import { DeepDiveSection } from './components/DeepDiveSection';
import { PopupModal } from './components/PopupModal';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  const [showDisclosure, setShowDisclosure] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Top Banner */}
      <header className="bg-white py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center text-[#2b4c7e] font-black text-[22px] tracking-tight uppercase">
              {/* Logo Graphic */}
              <ShoppingBag className="w-8 h-8 mr-2 text-[#e05243]" strokeWidth={2.5} />
              <span className="leading-none mt-1">ConsumerSkills</span>
            </div>
            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mt-1.5 text-center">
              Empowering Your Purchasing Decisions
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-[#0b121a] border-b border-[#2a3441] pt-6 pb-10 md:pt-14 md:pb-16 px-4 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[60%] bg-[#2b4c7e]/20 blur-[100px] rounded-full"></div>
          <div className="absolute top-[30%] -right-[10%] w-[40%] h-[70%] bg-[#e05243]/15 blur-[120px] rounded-full"></div>
          {/* Subtle Grid line pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0zOSAzOVYwaC0xdjM5SDB2MXozOSAzOXYxaC0xdi0xem0wIDBWMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          {/* Accent slashes */}
          <div className="absolute top-[-50px] right-[-50px] w-full h-full opacity-20 hidden md:block" style={{ backgroundImage: 'linear-gradient(45deg, transparent 45%, #2b4c7e 45%, #2b4c7e 55%, transparent 55%)', backgroundSize: '20px 20px' }}></div>
        </div>

        <div className="max-w-[1170px] mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-[13px] text-gray-400 mb-8 font-medium">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <a href="#" className="hover:text-white transition-colors">Health & Beauty</a>
            <span>›</span>
            <span className="text-gray-200">Dental Aesthetics</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center space-x-2 bg-blue-900/30 border border-blue-800/50 rounded-full px-3 py-1 mb-6 text-[13px] text-blue-300 font-bold tracking-wide uppercase">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Lab Tested & Verified</span>
              </div>
              
              <h1 className="text-4xl md:text-[48px] lg:text-[56px] font-black leading-[1.05] tracking-tight text-white mb-6 font-sans">
                The Best Snap-On Veneers of 2026: Expert Reviewed
              </h1>
              
              <p className="text-[18px] md:text-[20px] text-gray-400 leading-relaxed mb-8 max-w-3xl">
                We purchased, molded, and wore the top custom removable veneers on the market. Here is our definitive guide on which brands deliver <strong className="text-gray-200">the most natural look, secure fit, and highest durability</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-[14px]">
                <div className="flex items-center space-x-3">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" alt="Sarah Jenkins" className="w-10 h-10 rounded-full border-2 border-gray-600 object-cover" />
                  <div>
                    <div className="text-white font-bold">Sarah Jenkins</div>
                    <div className="text-gray-500">Lead Aesthetics Editor</div>
                  </div>
                </div>
                <div className="h-8 w-px bg-gray-700 hidden sm:block"></div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span>Updated: May 24, 2026</span>
                </div>
                <div className="h-8 w-px bg-gray-700 hidden sm:block"></div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <svg className="w-5 h-5 text-[#f6891f]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span>Fact Checked</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-[#151c24] border border-[#2a3441] rounded-xl p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="text-[13px] text-gray-400 uppercase tracking-wider font-bold mb-3 border-b border-gray-700 pb-3">Expert Consortium Score</div>
                <div className="flex items-end space-x-3 mb-2">
                  <span className="text-6xl font-black text-white leading-none">9.8</span>
                  <span className="text-xl text-gray-500 font-bold mb-1">/ 10</span>
                </div>
                <div className="flex text-[#f6891f] mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-[14px] text-gray-400">Based on independent review criteria and over 50 hours of continuous wear testing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <main className="max-w-[1170px] mx-auto px-4 lg:px-0 py-10 md:py-12">
        {/* Intro Text */}
        <div className="text-[18px] leading-[1.8] text-gray-800 space-y-6 mb-12">
          <h2 className="text-[22px] md:text-2xl font-bold text-gray-900 leading-snug mb-2">
            Our 2026 Review: Which Snap-On Veneer Delivers a Natural, Secure Smile Instantly?
          </h2>
          
          <p className="font-bold text-gray-900">
            Are you hesitant to smile openly, or finding yourself hiding your teeth in photos?
          </p>
          
          <p className="font-bold text-gray-900">
            Do issues like stains, chips, gaps, or minor misalignment make you feel self-conscious about your appearance?
          </p>
          
          <p className="font-bold text-gray-900">
            Has the high cost, lengthy timeline, or fear of traditional dentists prevented you from achieving a smile you love?
          </p>
          
          <p>
            If you said "yes," you are not alone. Masking your smile can diminish your self-assurance, complicate first impressions, and add unnecessary tension to social events. Like we always say, <strong className="font-bold text-gray-900">"True confidence stems from a smile you wear proudly."</strong>
          </p>
          
          <p>
            This is why the top-tier <strong className="font-bold text-gray-900">removable (snap-on) veneers</strong> of 2026 are lightyears ahead of basic plastic covers. Leading options rely on dental expertise, advanced CAD/CAM processes, and multi-layered materials to emulate real translucency. They provide a genuinely customized fit based on your exact impressions, supported by comprehensive remake policies and realistic shade choices—offering a cosmetic boost without any drills, needles, or clinic visits.
          </p>

          <p>
            Our reviewers rigorously tested top market contenders. We analyzed everything: aesthetic realism in both sunlight and indoor lighting, how firmly they sit during speech, structural resilience, delivery speed after impression approval, and the reliability of customer support.
          </p>

          <p>
            After thorough evaluation, <strong className="font-bold text-gray-900">one brand decisively took the lead</strong>—providing unparalleled visual authenticity, comfortable all-day grip, robust warranties, and a remarkably smooth ordering process.
          </p>

          <p>
            Read on for our detailed breakdown of the Top 5 Snap-On Veneers of 2026—<strong className="font-bold text-gray-900">discover which model achieved our #1 rating</strong>, who each brand serves best, and how you can take the first step toward a radiant new smile today.
          </p>

          <p className="font-bold text-gray-900">
            Below are our Top 5 Selections for the year, ending with a <a href="#full-review" className="text-blue-600 underline hover:text-blue-800">comprehensive deep dive into our overall winner</a>:
          </p>
        </div>

        {/* Product Rankings */}
        <section className="space-y-10">
          {products.map(product => (
            <RankingCard key={product.id} product={product} />
          ))}
        </section>

        {/* In-Depth Review Section (Sticky Sidebar) */}
        <DeepDiveSection />
      </main>
      
      <footer className="bg-[#1b222c] py-14 mt-12 text-center border-t border-[#1b222c]">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6">
            <a href="https://www.consumerskills.org/#about" className="text-white hover:text-gray-300 font-bold text-[15px]">About Us</a>
            <a href="https://www.consumerskills.org/privacy" className="text-white hover:text-gray-300 font-bold text-[15px]">Privacy Policy</a>
            <a href="https://www.consumerskills.org/#about" className="text-white hover:text-gray-300 font-bold text-[15px]">Terms of Use</a>
            <a href="https://www.consumerskills.org/#contact" className="text-white hover:text-gray-300 font-bold text-[15px]">Contact Us</a>
            <button 
              onClick={() => setShowDisclosure(true)}
              className="text-white hover:text-gray-300 font-bold text-[15px]"
            >
              Advertising Disclosure
            </button>
          </div>
          
          <p className="text-gray-300 text-[15px] mb-8">
            Copyright © 2026 ConsumerSkills.com All Rights Reserved
          </p>
          
          <p className="text-[#a0aab8] text-[13px] italic leading-relaxed max-w-6xl mx-auto">
            This website is not intended to provide medical advice or to take the place of medical advice and treatment from your personal physician. Visitors are advised to consult their own doctors or other qualified health professional regarding the treatment of medical conditions. The author shall not be held liable or responsible for any misunderstanding or misuse of the information contained on this site or for any loss, damage, or injury caused, or alleged to be caused, directly or indirectly by any treatment, action, or application of any food or food source discussed in this website. The U.S. Food and Drug Administration have not evaluated the statements on this website. The information is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </footer>

      {/* Exit Intent/Offers Popup */}
      <PopupModal />

      {/* Advertising Disclosure Modal */}
      {showDisclosure && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl p-6 md:p-8 relative">
            <button 
              onClick={() => setShowDisclosure(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Advertising Disclosure</h3>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
              We are a professional review site that receives compensation from the companies whose products we review. 
              We test each product thoroughly and give high marks to only the very best. We are independently owned and the opinions expressed here are our own.
            </p>
            <button
              onClick={() => setShowDisclosure(false)}
              className="mt-2 bg-gray-900 text-white px-6 py-2.5 rounded-md font-bold text-[14px] hover:bg-gray-800 transition-colors w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
