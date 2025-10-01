'use client';

import React from 'react';
import { TextReveal } from "@/components/landing/TextReveal";
import { TimelineAnimation } from "@/components/landing/TimelineAnimation";
import { WhatWeOffer } from "@/components/landing/WhatWeOffer";

export default function HomeNewPage() {

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content Wrapper */}
      <main className="flex-grow">
        {/* Header Section */}
        <header 
        className="relative mx-auto w-full px-4
                   h-[800px] sm:h-[950px] md:h-[1100px] lg:h-[1251px] xl:h-[1251px]"
        style={{
          width: '100%',
          maxWidth: '1440px'
        }}
      >
        {/* Main Text */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 px-4"
          style={{
            top: '177px',
            width: '100%',
            maxWidth: '1200px'
          }}
        >
          <h1 
            className="text-center font-inter font-semibold leading-tight
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                       whitespace-normal sm:whitespace-nowrap"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'normal',
              fontWeight: 600
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
          className="absolute
                     top-[180px] sm:top-[220px] md:top-[350px] lg:top-[350px] xl:top-[350px]"
          style={{
            left: '30.56%', // 440px / 1440px = 30.56% for perfect desktop positioning
            zIndex: 3,
            width: '47.78%', // 688px / 1440px = 47.78% for perfect desktop sizing
            height: '627px',
            maxWidth: '688px',
            maxHeight: '627px'
          }}
        >
          <img 
            src="/images/homepage_ps_logo.svg" 
            alt="Product Space Logo"
            className="w-full h-full object-contain
                       scale-110 sm:scale-105 md:scale-100 lg:scale-100 xl:scale-100"
            style={{
              width: '100%',
              height: '100%'
            }}
          />
        </div>
        
        {/* Mobile Scroll Arrow Button - Only visible on mobile/small screens */}
        <button 
          className="absolute left-1/2 transform -translate-x-1/2 block md:hidden
                     w-12 h-12 bg-gradient-to-r from-[#D5A6D8] to-[#66417B] 
                     rounded-full flex items-center justify-center
                     shadow-lg hover:shadow-xl transition-all duration-300
                     hover:scale-105 active:scale-95"
          style={{
            top: '680px', // Moved further down for better spacing
            zIndex: 10
          }}
          onClick={() => {
            // Scroll to TextReveal section with precise positioning
            const textRevealSection = document.querySelector('section:nth-of-type(2)');
            if (textRevealSection) {
              const rect = textRevealSection.getBoundingClientRect();
              const scrollTop = window.pageYOffset + rect.top - 3000; // 100px offset from top
              window.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
              });
            }
          }}
        >
          {/* Down Arrow SVG with animation */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white animate-bounce"
            style={{
              animation: 'bounce 2s infinite'
            }}
          >
            <path 
              d="M12 5V19M12 19L5 12M12 19L19 12" 
              stroke="white" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        {/* Homepage Background SVG - Hidden on mobile */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 hidden md:block"
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
        
        {/* Homepage Background Gradient SVG - Layer Above - Hidden on mobile */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 hidden md:block"
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
        className="relative mx-auto w-full px-4
                   min-h-[800px] sm:min-h-[1000px] md:min-h-[1500px] lg:h-[2000px] xl:h-[2000px]"
        style={{
          maxWidth: '1440px'
        }}
      >
        <div 
          className="relative mx-auto w-full px-4
                     -mt-[200px] sm:-mt-[150px] md:mt-0
                     md:absolute md:left-1/2 md:transform md:-translate-x-1/2
                     md:top-[50px] lg:top-[50px] xl:top-[50px]"
          style={{
            maxWidth: '1200px' // Stretch the textbox width
          }}
        >
          <div
            className="w-full"
            style={{
              maxWidth: '1200px'
            }}
          >
            <TextReveal
              heading={
                <h2 className="text-center font-inter font-semibold
                               text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl
                               leading-tight mb-8"
                   style={{
                  color: '#3A3A3A',
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                     fontWeight: 600
                }}>
                  What Is Product Management?
                </h2>
              }
              content={[
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
        
        {/* Our Mission Box - Mobile: Below TextReveal, Desktop: Fixed at bottom */}
        <div className="block md:hidden mb-8 -mt-[100px]">
          <div
            className="mx-auto max-w-md"
            style={{
              borderRadius: '30px',
              background: '#FAF6FC',
              boxShadow: '0 6px 6px 0 rgba(0, 0, 0, 0.25)',
              display: 'flex',
              padding: '30px',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            {/* Our Mission Title */}
            <h2 
              className="text-center font-inter font-semibold
                         text-2xl sm:text-3xl md:text-4xl"
              style={{
                color: '#3A3A3A',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '1.2',
                margin: 0
              }}
            >
              Our Mission
            </h2>
            
            {/* Mission Description */}
            <p 
              className="text-center text-sm sm:text-base md:text-lg"
              style={{
                color: '#3A3A3A',
                fontFamily: '"M PLUS 1"',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '1.4',
                margin: 0
              }}
            >
              At Product Space, we're a national community of students with a mission to become the world's next generation of product leaders.
            </p>
            
            {/* Meet the Team Link */}
            <a 
              href="/about_new"
              className="text-center text-sm sm:text-base font-bold"
              style={{
                color: '#3A3A3A',
                fontFamily: '"M PLUS 1"',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '1.4',
                textDecoration: 'none',
                cursor: 'pointer',
                margin: 0
              }}
            >
              Meet the Team &gt;
            </a>
          </div>
        </div>

        {/* Fixed Centered Box at bottom of page - Desktop only */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2"
          style={{
               bottom: '50px',
               zIndex: 10
          }}
        >
          <div
            style={{
              borderRadius: '30px',
              background: '#FAF6FC',
              boxShadow: '0 6px 6px 0 rgba(0, 0, 0, 0.25)',
              display: 'flex',
              padding: '50px',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '25px',
              alignSelf: 'stretch'
            }}
          >
            {/* Our Mission Title */}
            <h2 
              style={{
                alignSelf: 'stretch',
                color: '#3A3A3A',
                textAlign: 'center',
                fontFamily: 'Inter',
                fontSize: '40px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '48.75px',
                margin: 0
              }}
            >
              Our Mission
            </h2>
            
            {/* Mission Description */}
            <p 
              style={{
                alignSelf: 'stretch',
                color: '#3A3A3A',
                textAlign: 'center',
                fontFamily: '"M PLUS 1"',
                fontSize: '22.5px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '32px',
                margin: 0
              }}
            >
              At Product Space, we're a national community of students with a mission to become the world's next generation of product leaders.
            </p>
            
            {/* Meet the Team Link */}
            <a 
              href="/about_new"
              style={{
                alignSelf: 'stretch',
                color: '#3A3A3A',
                textAlign: 'center',
                fontFamily: '"M PLUS 1"',
                fontSize: '18.5px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '32px',
                textDecoration: 'none',
                cursor: 'pointer',
                margin: 0
              }}
            >
              Meet the Team &gt;
            </a>
          </div>
        </div>
      </section>
      
      {/* New Section - 50px below the box */}
      <section 
        className="timeline-section-mobile"
        style={{
          position: 'relative', // Enable absolute positioning for children
          display: 'flex',
          width: '1440px',
          height: '1411px',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#FAF6FC',
          marginTop: '50px', // 50px spacing from previous content
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        {/* Recruitment Timeline Heading */}
        <h2 
          className="timeline-heading-mobile"
          style={{
            alignSelf: 'stretch',
            color: '#3A3A3A',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '40px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '48.75px',
            position: 'absolute',
            top: '150px',
            left: '0',
            right: '0',
            margin: 0
          }}
        >
          Recruitment Timeline
        </h2>
        
        {/* Recruitment Timeline Description */}
        <p 
          className="text-mobile-left"
          style={{
            width: '900px',
            color: '#3A3A3A',
            textAlign: 'center',
            fontFamily: '"M PLUS 1"',
            fontSize: '22.5px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '32px',
            position: 'absolute',
            top: '223.75px', // 150px + 48.75px (heading line-height) + 25px gap
            left: '50%',
            transform: 'translateX(-50%)',
            margin: 0
          }}
        >
          Interested in joining our fellowship? Something about check out the<br />
          <span className="text-mobile-left-second-line">timeline below to see our recruitment week schedule </span>
        </p>
        <div 
          className="w-full timeline-mobile-scale"
          style={{
            transform: 'scale(1)',
            transformOrigin: 'center',
            marginBottom: '0px'
          }}
        >
        <TimelineAnimation />
        </div>
        
        <style jsx>{`
          @media (max-width: 767px) {
            .timeline-mobile-scale {
              transform: scale(0.30) translateX(calc(-120% + 40px)) translateY(350px) !important;
              transform-origin: center !important;
              margin-bottom: 48px !important;
            }
            .text-mobile-left {
              font-size: 12px !important;
              transform: translateX(calc(-105% - 10px)) translateY(-120px) !important;
            }
            .text-mobile-left-second-line {
              display: inline-block;
              transform: translateX(0px) !important;
            }
            .timeline-heading-mobile {
              font-size: 18px !important;
              line-height: 22px !important;
              top: 80px !important;
              position: absolute !important;
              left: 50% !important;
              transform: translateX(-120%) !important;
              width: auto !important;
              display: block !important;
              z-index: 10 !important;
            }
            .timeline-section-mobile {
              height: 600px !important;
            }
            .whatweoffer-heading-mobile {
              font-size: 24px !important;
              line-height: 28px !important;
              position: absolute !important;
              left: 50% !important;
              transform: translateX(-200%) !important;
              width: auto !important;
              display: block !important;
              z-index: 10 !important;
            }
            .whatweoffer-section-mobile {
              transform: translateY(-800px) !important;
              height: auto !important;
              min-height: 1200px !important;
              padding: 0 10px !important;
              padding-bottom: 100px !important;
            }
            .mobile-whatweoffer-transform {
              position: fixed !important;
              top: -700px !important;
              left: 20px !important;
              transform: none !important;
            }
            .where-weve-gone-mobile {
              transform: translateY(-1000px) !important;
            }
            .mobile-spacing-adjustment {
              margin-top: -200px !important;
            }
          }
        `}</style>
      </section>

              {/* What we Offer Section */}
      <section 
        className="relative mx-auto whatweoffer-section-mobile"
        style={{
          width: '100%',
          maxWidth: '1440px',
          padding: '0 20px',
          boxSizing: 'border-box',
          minHeight: '900px',
          paddingBottom: '100px'
        }}
      >
        {/* What we Offer Heading */}
        <h2 
          className="whatweoffer-heading-mobile"
          style={{
            alignSelf: 'stretch',
            color: '#3A3A3A',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '40px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '48.75px',
            position: 'absolute',
            top: '150px',
            left: '0',
            right: '0',
            margin: 0
          }}
        >
          What We Offer
        </h2>
        
        {/* Mobile-only What We Offer Heading 
        <h2 
          className="block md:hidden mobile-whatweoffer-transform"
          style={{
            color: '#3A3A3A',
            textAlign: 'left',
            fontFamily: 'Inter',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '24px',
            position: 'absolute',
            top: '-120px',
            left: '125px',
            margin: 0,
            zIndex: 10
          }}
        >
          What We Offer
        </h2>*/}
        
        {/* WhatWeOffer Component */}
        <div style={{ 
          position: 'relative',
          top: '250px'
        }}>
          <WhatWeOffer />
        </div>
      </section>
      
      {/* Where We've Gone Section - Hidden on Mobile */}
      <div className="hidden md:block">
        <section 
          className="relative w-full"
          style={{
            height: '675px',
            background: '#FAF6FC',
            display: 'flex',
            padding: '150px 0',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '25px',
            alignSelf: 'stretch'
          }}
        >
        {/* Where We've Gone Text */}
        <div 
          style={{
            alignSelf: 'stretch',
            color: '#3A3A3A',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '40px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '48.75px'
          }}
        >
          Where We've Gone
        </div>
        
        {/* Company Logos Row */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
            width: '100%',
            marginTop: '65px'
          }}
        >
          <img 
            src="/images/CompanyLogos/tesla.png" 
            alt="Tesla"
            style={{ height: '75px', width: 'auto' }}
          />
          <img 
            src="/images/CompanyLogos/northrop.png" 
            alt="Northrop Grumman"
            style={{ height: '50px', width: 'auto' }}
          />
          <img 
            src="/images/CompanyLogos/amazon.png" 
            alt="Amazon"
            style={{ height: '50px', width: 'auto' }}
          />
          <img 
            src="/images/CompanyLogos/oracle.png" 
            alt="Oracle"
            style={{ height: '50px', width: 'auto' }}
          />
          <img 
            src="/images/CompanyLogos/servicenow.png" 
            alt="ServiceNow"
            style={{ height: '50px', width: 'auto' }}
          />
        </div>
        
        {/* Second Row Company Logos */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
            width: '100%',
            marginTop: '90px'
          }}
        >
          <img 
            src="/images/CompanyLogos/visa.png" 
            alt="Visa"
            style={{ height: '50px', width: 'auto' }}
          />
          <img 
            src="/images/CompanyLogos/deloitte.png" 
            alt="Deloitte"
            style={{ height: '40px', width: 'auto' }}
          />
          <img 
            src="/images/CompanyLogos/americanex.png" 
            alt="American Express"
            style={{ height: '60px', width: 'auto' }}
          />
          <img 
            src="/images/CompanyLogos/cisco.png" 
            alt="Cisco"
            style={{ height: '50px', width: 'auto' }}
          />
          <img 
            src="/images/CompanyLogos/walmart.png" 
            alt="Walmart"
            style={{ height: '50px', width: 'auto' }}
          />
        </div>
        </section>
      </div>
      </main>
    </div>
  );
}
