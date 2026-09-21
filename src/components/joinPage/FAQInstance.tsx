"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 8px 24px -4px rgba(102, 65, 123, 0.12)' }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="w-full max-w-[480px] rounded-xl bg-white border border-[#E0E0E0] shadow-sm transition-colors duration-200 overflow-hidden"
    >
      {/* Collapsible Button */}
      <button
        onClick={toggleExpanded}
        className="flex items-center justify-between w-full p-4 rounded-lg cursor-pointer"
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
          <motion.span 
            className="text-white font-bold text-lg inline-block"
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
          >
            +
          </motion.span>
        </div>
      </button>
      
      {/* Answer - Collapsible */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">
              <p 
                className="font-['M_PLUS_1'] text-[16px] font-normal leading-[24px] pt-2"
                style={{ 
                  color: '#000000'
                }}
              >
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
