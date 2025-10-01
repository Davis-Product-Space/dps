"use client";

import { useState } from 'react';

interface FAQInstanceProps {
  question: string;
  answer: string;
}

export default function FAQInstance({ question, answer }: FAQInstanceProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="w-full rounded-lg border transition-all duration-200 hover:shadow-md"
      style={{
        width: '456px',
        gridRow: '1 / span 1',
        gridColumn: '1 / span 1',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E0E0E0',
      }}
    >
      {/* Collapsible Button */}
      <button
        onClick={toggleExpanded}
        className="flex items-center justify-between w-full p-4 rounded-lg"
        style={{
          minHeight: '60px',
        }}
      >
        {/* Question */}
        <h3 
          className="font-inter text-[18px] font-semibold leading-normal text-left flex-1 pr-4"
          style={{ 
            color: '#000000'
          }}
        >
          {question}
        </h3>
        
        {/* Plus/Minus Icon */}
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200"
          style={{
            background: 'linear-gradient(135deg, #9965B7 0%, #7a4e94 100%)',
          }}
        >
          <span 
            className="text-white font-bold text-lg transition-transform duration-200"
            style={{
              transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            +
          </span>
        </div>
      </button>
      
      {/* Answer - Collapsible */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isExpanded ? '200px' : '0px',
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div 
          className="px-4 pb-4"
        >
          <p 
            className="font-['M_PLUS_1'] text-[16px] font-normal leading-[24px] pt-2"
            style={{ 
              color: '#000000'
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
