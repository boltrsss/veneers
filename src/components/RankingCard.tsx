import React from 'react';
import { ProductSpec } from '../types';
import { Trophy } from 'lucide-react';

export const RankingCard: React.FC<{ product: ProductSpec }> = ({ product }) => {
  const isTopPick = product.badgeStyle === 'top-pick' || !product.badgeStyle;
  const isFullWidth = product.badgeStyle === 'full-width';

  return (
    <div
      className={`border rounded-sm flex flex-col mb-10 bg-white ${product.borderColor || 'border-gray-200'} ${isTopPick || isFullWidth ? 'shadow-md' : 'shadow-sm lg:shadow-none'} overflow-hidden relative`}
    >
      {/* Full-width Badge */}
      {isFullWidth && (
        <div className={`w-full text-center text-white py-1.5 md:py-2 font-bold flex items-center justify-center tracking-wide text-[14px] md:text-[15px] ${product.badgeColor || 'bg-[#4e9544]'}`}>
          <Trophy className="w-[18px] h-[18px] mr-2" />
          {product.badge}
          <Trophy className="w-[18px] h-[18px] ml-2" />
        </div>
      )}

      {/* Main Card Content */}
      <div className="flex flex-col lg:flex-row relative">
        {/* Top-left Corner Badge */}
        {!isFullWidth && isTopPick && (
          <div className={`absolute top-0 left-0 text-white px-4 py-1 text-[13px] md:text-sm font-bold tracking-wide z-10 ${product.badgeColor || 'bg-green-700'}`}>
            {product.badge}
          </div>
        )}
        {!isFullWidth && !isTopPick && (
          <div className="absolute top-0 left-0 bg-[#b3b3b3] text-white px-3 py-1 text-sm font-bold z-10">
            {product.badge}
          </div>
        )}

        {/* Image Column */}
        <div className={`w-full lg:w-[28%] p-6 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 ${(isTopPick || isFullWidth) ? 'pt-14 bg-gray-50' : 'pt-12 bg-white'}`}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className={`max-w-full h-auto ${(isTopPick || isFullWidth) ? 'object-cover rounded shadow-sm border border-gray-200' : 'object-contain w-[90%] max-w-[200px] max-h-[160px]'}`}
          />
        </div>

        {/* Details Column */}
        <div className={`w-full lg:w-[47%] p-6 md:p-8 ${(isTopPick || isFullWidth) ? 'pt-10 lg:pt-8' : ''} bg-white border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col`}>
          <h3 className={`text-xl md:text-2xl font-bold text-gray-900 font-sans ${(isTopPick || isFullWidth) ? 'mb-6' : 'mb-3'}`}>
          {product.name}
        </h3>
        
        {!isTopPick && <hr className="border-gray-200 text-gray-200 mb-5" />}
        
        <ul className="space-y-2 flex-grow">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-[14.5px] leading-snug text-gray-800">
              <span className="mt-0.5 mr-2 flex-shrink-0">
                {feature.isPositive ? (
                  <svg className="w-[18px] h-[18px] text-[#42b55f]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-[18px] h-[18px] text-[#db4e3d]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
              <span>
                {feature.label && <strong className="text-gray-900 font-bold">{feature.label} </strong>}
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Score Column */}
      <div className={`w-full lg:w-[25%] p-6 flex flex-col items-center justify-center text-center ${isTopPick ? 'bg-gray-50/50' : 'bg-white'}`}>
        <div className="text-gray-800 text-[15px] mb-1">Overall Score</div>
        <div className="text-[64px] font-black text-gray-900 leading-none mb-1 tracking-tighter">
          {product.score}
        </div>
        <div className={`font-bold text-lg mb-1 ${product.ratingColor || 'text-green-700'}`}>
          {product.ratingText}
        </div>
        
        {/* Stars */}
        <div className="flex space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-6 h-6 ${(product.starCount ?? 5) > i ? 'text-yellow-400' : 'text-gray-300'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <div className="text-[13px] text-gray-800 mb-5 font-medium">
          User Ratings ({product.reviewCount})
        </div>

        <a 
          href={product.link}
          className="w-[90%] mx-auto bg-[#f6891f] hover:bg-[#e07715] transition-colors text-white font-bold md:text-[15px] py-2.5 px-4 rounded shadow-sm flex items-center justify-center mb-1"
        >
          {product.buttonText}
          <svg className="w-[18px] h-[18px] ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </a>

        {product.discountText && (
          <div className="w-[90%] mx-auto mt-2 bg-[#db4e3d] text-white py-1.5 px-2 rounded-sm text-center shadow-sm relative overflow-hidden">
            <div className="font-bold text-[14.5px] leading-tight z-10 relative">{product.discountText}</div>
            <div className="text-[12px] font-semibold leading-tight mt-0.5 z-10 relative">Sale Ends:<br/> {product.discountEnds}</div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};
