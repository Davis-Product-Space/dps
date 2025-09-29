'use client';

import React from 'react';
import { TextReveal } from "@/components/landing/TextReveal";
import { TimelineAnimation } from "@/components/landing/TimelineAnimation";
import { WhatWeOffer } from "@/components/landing/WhatWeOffer";

export default function HomeNewPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header 
        className="relative mx-auto"
        style={{
          width: '100%',
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
            alt="Product Space Logo"
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
          height: '2000px', // Increased height to add more space below TextReveal
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
        
        {/* Fixed Centered Box at bottom of page */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            bottom: '50px', // 50px from bottom of viewport
            zIndex: 10 // Ensure it appears above other content
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
          Interested in joining our fellowship? Something about check out the timeline below to see our recruitment week schedule but im really bad at writing these kind of text on the spot
        </p>
        <TimelineAnimation />
      </section>

              {/* What we Offer Section */}
              <section 
                className="relative mx-auto"
                style={{
                  width: '1440px',
                  height: '3097px'
                }}
              >
        {/* What we Offer Heading */}
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
            position: 'absolute',
            top: '150px',
            left: '0',
            right: '0',
            margin: 0
          }}
        >
          What We Offer
        </h2>
        
        {/* WhatWeOffer Component */}
        <WhatWeOffer />
      </section>
      
      {/* Where We've Gone Section */}
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
  );
}
