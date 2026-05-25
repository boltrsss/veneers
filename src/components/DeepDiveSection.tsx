import React from 'react';
import { products } from '../data';
import { RankingCard } from './RankingCard';

export const DeepDiveSection: React.FC = () => {
  const topProduct = products[0];
  const pros = topProduct.features.filter(f => f.isPositive);
  const cons = topProduct.features.filter(f => !f.isPositive);

  const fullWidthProduct = {
    ...topProduct,
    badge: 'BEST OVERALL SNAP-ON VENEERS',
    badgeStyle: 'full-width' as const,
    badgeColor: 'bg-[#509647]' // Matching the green color from screenshot
  };

  return (
    <div className="mt-16 pt-12 border-t-2 border-gray-100">
      {/* Top Pick Full Width Card */}
      <RankingCard product={fullWidthProduct} />

      <div id="full-review" className="flex flex-col lg:flex-row gap-8 mt-12">
        {/* Left Column: Article */}
        <div className="w-full lg:flex-1 text-gray-800">
        <h2 className="text-[22px] md:text-[34px] font-bold text-gray-900 leading-[1.15] tracking-tight mb-4 font-sans">
          We Purchased and Reviewed the Top-Selling Snap-On Veneers—Here is Why Shiny Smile is Our Top Choice:
        </h2>
        <div className="text-[14px] text-gray-500 mb-8 font-medium">
          Written By <span className="font-bold text-gray-700">Sarah Jenkins</span> – Updated <span className="font-bold text-gray-700">May 24, 2026</span>
        </div>

        <div className="space-y-6 text-[18px] leading-[1.75]">
          <p>
            Without a doubt, Shiny Smile Veneers proved to be the most outstanding snap-on veneer system we evaluated in 2026. It offers an incredibly <strong className="font-bold text-gray-900">authentic appearance, a reliable fit, all-day comfort</strong>, and extremely <strong className="font-bold text-gray-900">durable construction</strong> through a simple at-home process.
          </p>

          <img 
            src="/images/pic1.jpg" 
            alt="Before and After Shiny Smile Veneers" 
            className="w-full rounded shadow-sm border border-gray-200 mt-6 mb-6"
          />

          <p>
            We tested several snap-on brands in everyday scenarios—including video calls, bright sunlight photography, eating soft meals, drinking coffee, and long days of talking. Shiny Smile outperformed the competition by a significant margin in every test. It’s highly accessible, comfortable to wear, and looks incredibly convincing even up close. If you want to stop hiding your teeth and avoid bulky, poorly-fitted alternatives without waiting months, this is the solution.
          </p>

          <p>
            This brand has truly led our 2026 evaluations, securing enthusiastic reviews from customers seeking a <strong className="font-bold text-gray-900">rapid, non-invasive smile makeover</strong> without dentist visits, drills, or needles. Instead of the flat, artificial-looking plastics that peel at the edges, Shiny Smile prioritizes <strong className="font-bold text-gray-900">superior translucency, seamless gum blending, and excellent grip</strong>—requiring no special effort or compromise.
          </p>

          <h3 className="text-[22px] font-bold text-gray-900 mt-10 mb-5">
            Understanding Shiny Smile Veneers
          </h3>

          <img 
            src="/images/pic2.jpg" 
            alt="Shiny Smile Impression Kit" 
            className="w-full rounded shadow-sm border border-gray-200 mb-6"
          />

          <p>
            It is a <strong className="font-bold text-gray-900">custom-made, removable cosmetic arch</strong> designed to snap directly over your natural teeth, instantly concealing stains, gaps, missing teeth, and minor crookedness. You simply take your impressions at home, send them to the lab, and they create a personalized, ultra-thin set. You can snap it in for special occasions, photos, or daily wear for an instant confidence boost. Turnaround times are remarkably quick, often taking <strong className="font-bold text-gray-900">just around 2 weeks</strong> after impressions are approved, and they offer various <strong className="font-bold text-gray-900">shade choices</strong>. Note that it is a cosmetic accessory and does not treat dental health issues.
          </p>

          <h3 className="text-[22px] font-bold text-gray-900 mt-10 mb-5">
            Why Does Shiny Smile Stand Out?
          </h3>

          <div className="space-y-5">
            <div>
              <div className="flex items-start">
                 <span className="mt-1 mr-2 flex-shrink-0 text-[#42b55f]"><svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></span>
                 <strong className="text-gray-900 font-bold">Authentic visuals—both in person and on camera</strong>
              </div>
              <p className="ml-7 mt-0.5">Subtle color variations and <strong className="font-bold text-gray-900">multi-layered translucency</strong> allow the veneers to match natural enamel, avoiding the fake "overlay" look. They film beautifully under both natural sunlight and indoor lighting.</p>
            </div>
            
            <div>
              <div className="flex items-start">
                 <span className="mt-1 mr-2 flex-shrink-0 text-[#42b55f]"><svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></span>
                 <strong className="text-gray-900 font-bold">Secure and highly comfortable fit</strong>
              </div>
              <p className="ml-7 mt-0.5">The <strong className="font-bold text-gray-900">ultra-thin, precision-crafted design</strong> rests smoothly against your gums with contoured edges, which means less irritation and a much faster adjustment period for natural speech.</p>
            </div>

            <div>
              <div className="flex items-start">
                 <span className="mt-1 mr-2 flex-shrink-0 text-[#42b55f]"><svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></span>
                 <strong className="text-gray-900 font-bold">Firm grip across your entire smile</strong>
              </div>
              <p className="ml-7 mt-0.5">The holding power feels perfectly balanced—there are no unstable sections or loose ends, giving you total confidence while smiling, talking, and going about your day.</p>
            </div>

            <div>
              <div className="flex items-start">
                 <span className="mt-1 mr-2 flex-shrink-0 text-[#42b55f]"><svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></span>
                 <strong className="text-gray-900 font-bold">Engineered for everyday durability</strong>
              </div>
              <p className="ml-7 mt-0.5">Crafted from top-tier materials, the <strong className="font-bold text-gray-900">resilient structure</strong> and easy-to-clean exterior easily resist daily scratches and coffee/tea stains.</p>
            </div>

            <div>
              <div className="flex items-start">
                 <span className="mt-1 mr-2 flex-shrink-0 text-[#42b55f]"><svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></span>
                 <strong className="text-gray-900 font-bold">Streamlined process from impression to delivery</strong>
              </div>
              <p className="ml-7 mt-0.5">The impression kit includes highly detailed, foolproof instructions, reducing the chance of mistakes. Once your molds are approved, the manufacturing is swift and seamless.</p>
            </div>

            <div>
              <div className="flex items-start">
                 <span className="mt-1 mr-2 flex-shrink-0 text-[#42b55f]"><svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></span>
                 <strong className="text-gray-900 font-bold">Risk-free purchase structure</strong>
              </div>
              <p className="ml-7 mt-0.5">With an impressive <strong className="font-bold text-gray-900">3-year warranty, up to three complimentary remakes</strong> (for perfect fit adjustments), a generous <strong className="font-bold text-gray-900">60-day money-back guarantee</strong>, and <strong className="font-bold text-gray-900">flexible financing options</strong>, giving them a try is virtually risk-free.</p>
            </div>
          </div>

          <h3 className="text-[22px] font-bold text-gray-900 mt-10 mb-5">
            Performance Evaluation (Realism • Fit • Comfort • Durability • Quality)
          </h3>

          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mt-1 mr-2 flex-shrink-0 text-[#42b55f]"><svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></span>
              <span><strong className="text-gray-900 font-bold">Appearance:</strong> Transition edges vanish flawlessly; the natural shine prevents the dull, chalky aesthetic common in cheaper brands.</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 flex-shrink-0 text-[#42b55f]"><svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></span>
              <span><strong className="text-gray-900 font-bold">Precision:</strong> Hugs margins tightly to prevent micro-gaps, ensuring a confident, worry-free wear.</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 flex-shrink-0 text-[#42b55f]"><svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></span>
              <span><strong className="text-gray-900 font-bold">Feel:</strong> The slim profile makes talking a breeze; we noticed virtually zero friction on cheeks or gums after the initial break-in.</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 flex-shrink-0 text-[#42b55f]"><svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></span>
              <span><strong className="text-gray-900 font-bold">Resilience:</strong> Withstood everyday use exceptionally well, assuming reasonable eating habits and basic maintenance.</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 flex-shrink-0 text-[#42b55f]"><svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></span>
              <span><strong className="text-gray-900 font-bold">Craftsmanship:</strong> Immaculate polish and color consistency right out of the box, with absolutely no sharp edges or rough spots.</span>
            </li>
          </ul>

          <h3 className="text-[22px] font-bold text-gray-900 mt-10 mb-5">
            How Do They Deliver Such High Quality So Easily?
          </h3>

          <p>
            Most competitors force you to choose between cheap and flimsy or realistic but overly thick. Shiny Smile strikes the perfect balance with a <strong className="font-bold text-gray-900">precise, slim design</strong>, meticulous <strong className="font-bold text-gray-900">edge detailing</strong>, and <strong className="font-bold text-gray-900">reliable material quality</strong>—supported by an exceptional <strong className="font-bold text-gray-900">warranty</strong> and a <strong className="font-bold text-gray-900">comprehensive remake policy</strong> so you get the exact fit you need. Ultimately, it’s a remarkably <strong className="font-bold text-gray-900">user-friendly</strong> aesthetic enhancement that people rarely notice is a veneer.
          </p>

          <h3 className="text-[22px] font-bold text-gray-900 mt-10 mb-5">
            Where to Purchase (and How to Avoid Scams)
          </h3>

          <p>
            <strong className="font-bold text-gray-900">URGENT:</strong> Due to viral popularity, many cheap knock-offs have flooded the market. To guarantee authenticity, you must order directly from the <strong className="font-bold text-gray-900">official Shiny Smile Veneers website</strong>. Right now, they are offering massive discounts, a <strong className="font-bold text-gray-900">60-day refund policy</strong>, and <strong className="font-bold text-gray-900">expedited U.S. shipping</strong>. Buying directly is the only way to secure the <strong className="font-bold text-gray-900">3-year warranty</strong> and your <strong className="font-bold text-gray-900">three free adjustments</strong>.
          </p>

          <h3 className="text-[22px] font-bold text-gray-900 mt-10 mb-5">
            Final Verdict
          </h3>

          <p>
            <strong className="font-bold text-gray-900">The ultimate choice for natural aesthetics, customized fit, comfort, and longevity.</strong> If their website shows inventory and a discount is active, we highly recommend securing your kit immediately so you can start enjoying your new smile soon.
          </p>

          <div className="mt-8 mb-8">
            <a href="https://go.consumerskills.org/click" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline flex items-center text-[15.5px]">
              👉 Click here to check Shiny Smile Veneers availability & discounts today.
            </a>
          </div>

          <div className="bg-[#fcf8e3] border border-[#faebcc] p-6 rounded-sm mb-6 text-gray-800">
            <strong className="font-bold text-gray-900 block mb-3 text-[14px]">IMPORTANT INFORMATION!</strong>
            <p className="text-[14px] leading-relaxed">
              <strong className="font-bold text-gray-900">As of May 24, 2026</strong>, Following features in major media outlets, <a href="https://go.consumerskills.org/click" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:underline">Shiny Smile Veneers</a> has seen overwhelming demand. Thanks to thousands of positive reviews and brand confidence, they are temporarily offering first-time buyers an exclusive 40% discount on their order.
            </p>
          </div>

          <a 
            href="https://go.consumerskills.org/click"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#f6891f] hover:bg-[#e07715] transition-colors text-white font-bold text-[18px] py-4 px-6 rounded shadow-sm flex items-center justify-center mb-2"
          >
            CHECK AVAILABILITY & DISCOUNTS
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </a>

          <div className="text-center font-bold text-[13px] text-gray-900 mb-10">
            Save <span className="text-red-600 underline">40%</span> OFF — Sale Ends Soon!
          </div>

          <div className="flex bg-gray-100 p-6 rounded-sm gap-4 items-start">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" alt="Sarah Jenkins" className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
            <div>
              <div className="font-bold text-[16px] text-gray-900 mb-1">
                Written By: Sarah Jenkins — Snap-On Veneers & Smile Aesthetics Specialist
              </div>
              <div className="flex text-yellow-500 mb-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>
              <p className="text-[16px] text-gray-600 leading-relaxed">
                Sarah Jenkins has 12+ years evaluating removable snap-on veneers across leading brands. Her reviews focus on impression-kit accuracy, CAD/CAM fit tolerances, build durability and stain resistance, shade selection and translucency, edge finishing, retention and speech comfort, care requirements, warranty/remake terms, and turnaround time. Sarah translates rigorous checks and real-world wear trials into clear guidance—helping readers choose veneers that look convincingly natural, fit securely and comfortably, and hold up to everyday use.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Sticky Sidebar bg-white shadow-sm */}
      <div className="hidden lg:block lg:w-[320px] lg:shrink-0 relative">
        <div className="sticky top-6 border border-gray-200 bg-white p-6 shadow-sm rounded-sm">
          <div className="text-gray-800 text-[16px] mb-1 text-center font-medium">Overall Score</div>
          <div className="text-[64px] font-black text-gray-900 leading-none mb-1 tracking-tighter text-center">
            {topProduct.score}
          </div>
          <div className={`font-bold text-[17px] mb-1 text-center ${topProduct.ratingColor || 'text-green-700'}`}>
            {topProduct.ratingText}
          </div>
          
          <div className="flex space-x-1 mb-2 justify-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-[16px] text-gray-600 mb-6 font-medium text-center">
            User Ratings ({topProduct.reviewCount})
          </div>

          {/* Rating Bars */}
          <div className="space-y-3 mb-6">
            <div>
              <div className="flex justify-between text-[14px] font-bold text-gray-900 mb-1">
                <span>Quality</span>
                <span>10</span>
              </div>
              <div className="h-[8px] w-full bg-gray-200">
                <div className="h-full bg-green-700" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[14px] font-bold text-gray-900 mb-1">
                <span>Easy to Use</span>
                <span>10</span>
              </div>
              <div className="h-[8px] w-full bg-gray-200">
                <div className="h-full bg-green-700" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[14px] font-bold text-gray-900 mb-1">
                <span>Price</span>
                <span>9</span>
              </div>
              <div className="h-[8px] w-full bg-gray-200">
                <div className="h-full bg-green-700" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[14px] font-bold text-gray-900 mb-1">
                <span>Support</span>
                <span>9</span>
              </div>
              <div className="h-[8px] w-full bg-gray-200">
                <div className="h-full bg-green-700" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>

          <hr className="border-gray-200 my-5" />

          {/* PROS */}
          <div className="mb-5">
            <h4 className="text-[16px] font-bold text-gray-900 tracking-wider mb-3">PROS:</h4>
            <ul className="space-y-2.5">
              {pros.map((pro, idx) => (
                <li key={idx} className="flex items-start text-[16px] leading-snug text-gray-800">
                  <span className="mt-[1px] mr-1.5 flex-shrink-0">
                    <svg className="w-[15px] h-[15px] text-[#42b55f]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>
                    {pro.label && <strong className="text-gray-900 font-bold">{pro.label} </strong>}
                    {pro.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONS */}
          <div className="mb-6">
            <h4 className="text-[16px] font-bold text-gray-900 tracking-wider mb-2">CONS:</h4>
            <ul className="space-y-2">
              {cons.map((con, idx) => (
                <li key={idx} className="flex items-start text-[16px] leading-snug text-gray-800">
                  <span className="mt-[1px] mr-1.5 flex-shrink-0">
                    <svg className="w-[15px] h-[15px] text-[#db4e3d]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>
                    {con.label && <strong className="text-gray-900 font-bold">{con.label} </strong>}
                    {con.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <a 
            href={topProduct.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#f6891f] hover:bg-[#e07715] transition-colors text-white font-bold text-[14px] py-2.5 px-4 rounded shadow-sm flex items-center justify-center"
          >
            {topProduct.buttonText}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};
