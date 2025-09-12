'use client';

import React, { useRef } from 'react';
import ScrollBar from '@/components/landing/ScrollBar';
import WhatWeOfferReveal from '@/components/landing/WhatWeOfferReveal';
import { whatWeOfferPhases } from '@/data/what-we-offer-cards';

export function WhatWeOffer() {
  const whatWeOfferScrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={whatWeOfferScrollRef}
      className="relative h-auto lg:h-[300vh] w-full"
      style={{
        position: 'absolute',
        top: '223.75px', // 150px (heading top) + 48.75px (heading line-height) + 25px = 223.75px
        left: '0',
        right: '0'
      }}
    >
      <div className="lg:sticky lg:top-0 lg:h-screen flex items-center justify-center">
        {/* Main Container */}
        <div 
          style={{
            position: 'relative',
            width: '1440px',
            height: '100%'
          }}
        >
        {/* Left Side - Fellowship Staircase */}
        <div style={{ 
          position: 'absolute',
          left: '53px', // Right edge of logo (53px + 517px = 570px) is 100px from text boxes (670px)
          top: '99px' // 32px (Fellowship title height) + 7px (extra spacing) + 60px = 99px
        }}>
          <img 
            src="/images/fellowship_staircase.svg" 
            alt="Fellowship Staircase"
            style={{
              width: '517px',
              height: '427px'
            }}
          />
        </div>

          {/* Right Side - What We Offer Content */}
          <div style={{ 
            position: 'absolute',
            right: '100px',
            top: '0',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <WhatWeOfferReveal 
              targetRef={whatWeOfferScrollRef} 
              phases={whatWeOfferPhases} 
            />
            <div className="hidden lg:block" style={{ transform: 'translateY(300px)' }}>
              <ScrollBar 
                targetRef={whatWeOfferScrollRef} 
                totalItems={whatWeOfferPhases.length} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
