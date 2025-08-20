'use client';

import React from 'react';
import { TextReveal } from "@/components/landing/TextReveal";

export default function HomeNewPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header 
        className="relative mx-auto"
        style={{
          width: '1440px',
          height: '1251px',
          maxWidth: '100vw'
        }}
      >
        {/* Main Text */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            top: '177px'
          }}
        >
          <h1 
            className="text-center whitespace-nowrap"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '80px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '97.5px'
            }}
          >
            <span style={{ color: '#3A3A3A' }}>Your Pathway to </span>
            <span 
              style={{
                background: 'linear-gradient(75deg, #D5A6D8 9.75%, #A674C4 33.03%, #66417B 87.51%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Product.
            </span>
          </h1>
        </div>
        
        {/* Homepage PS Logo SVG */}
        <div 
          className="absolute"
          style={{
            left: '440px', // Left edge positioned exactly 519.42px from left side of page
            top: '350px', // 177px (text position) + 80px = 257px
            zIndex: 3 // Ensures it appears above both background SVGs
          }}
        >
          <img 
            src="/images/homepage_ps_logo.svg" 
            alt="Product School Logo"
            style={{
              width: '688px',
              height: '627px'
            }}
          />
        </div>
        
        {/* Homepage Background SVG */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            top: '717px', // 177px (text position) + 540px = 717px
            zIndex: 2 // Ensures it appears below the gradient SVG
          }}
        >
          <img 
            src="/images/homepage_background.svg" 
            alt="Homepage Background"
            style={{
              transform: 'scale(2)', // This will make it 2x bigger
              transformOrigin: 'center' // Scale from the center
            }}
          />
        </div>
        
        {/* Homepage Background Gradient SVG - Layer Above */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            top: '717px', // Same position as background SVG
            zIndex: 1 // Ensures it appears above the background SVG
          }}
        >
          <img 
            src="/images/homepage_bg_gradient.svg" 
            alt="Homepage Background Gradient"
            style={{
              transform: 'scale(2)', // This will make it 2x bigger
              transformOrigin: 'center' // Scale from the center
            }}
          />
        </div>
      </header>
      
      {/* Second Section - What is Product Management */}
      <section 
        className="relative mx-auto"
        style={{
          width: '1440px',
          height: '2000px', // Give the section some height
        }}
      >
        <div 
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            top: '50px', // Position text 50px from top of this section
            width: '1200px' // Stretch the textbox width
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '1200px'
            }}
          >
            <TextReveal
              heading={
                <h2 style={{
                  color: '#3A3A3A',
                  textAlign: 'center',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '40px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '48.75px',
                  marginBottom: '30px'
                }}>
                  What Is Product Management?
                </h2>
              }
              content={[
                "A product manager is the CEO of a product.",
                "A product manager communicate with users to understand their needs.",
                "A product manager come up with solutions that address them.",
                "A product manager collaborate with designers, engineers, and marketers.",
                "A product manager transforms those ideas into",
                <span
                  key="highlight"
                  className="bg-gradient-to-l from-[#E06287] to-[#765DF2] bg-clip-text text-transparent font-semibold"
                >
                  products that people love.
                </span>,
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
