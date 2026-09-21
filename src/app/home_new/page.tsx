'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TextReveal } from "@/components/landing/TextReveal";
import { TimelineAnimation } from "@/components/landing/TimelineAnimation";
import { WhatWeOffer } from "@/components/landing/WhatWeOffer";
import InteractivePSLogo from "@/components/landing/InteractivePSLogo";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AmbientGlow } from "@/components/motion/AmbientGlow";


export default function HomeNewPage() {
  const timelineSectionRef = useRef<HTMLElement>(null);
  const [timelineScale, setTimelineScale] = useState(1);

  useEffect(() => {
    const el = timelineSectionRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setTimelineScale(Math.min(width / 1440, 1));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AmbientGlow />
      {/* Main Content Wrapper */}
      <main className="flex-grow">
        {/* Header Section */}
        <header 
          className="relative mx-auto w-full px-4
                     h-[680px] sm:h-[820px] md:h-[1100px] lg:h-[1251px]"
          style={{
            width: '100%',
            maxWidth: '1440px'
          }}
        >
          {/* Main Text */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 px-4 top-[120px] sm:top-[140px] md:top-[177px]"
            style={{
              width: '100%',
              maxWidth: '1200px'
            }}
            initial={{ opacity: 0, y: 35, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
          </motion.div>
          
          {/* Homepage PS Logo SVG */}
          <div 
            className="absolute z-10
                       top-[220px] sm:top-[250px] md:top-[350px]
                       left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[30.56%]
                       w-[88vw] max-w-[340px] sm:max-w-[460px] md:w-[47.78%] md:max-w-[688px]
                       h-auto max-h-[627px] aspect-[688/627]"
          >
            <InteractivePSLogo
              className="w-full h-full object-contain"
              style={{
                width: '100%',
                height: '100%'
              }}
            />
          </div>
          
          {/* Mobile Scroll Arrow Button - Only visible on mobile/small screens */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="absolute left-1/2 transform -translate-x-1/2 block md:hidden
                       w-11 h-11 bg-gradient-to-r from-[#D5A6D8] to-[#66417B] 
                       rounded-full flex items-center justify-center
                       shadow-lg hover:shadow-xl transition-all duration-300
                       top-[570px] sm:top-[680px] md:top-[680px] z-20"
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
        </motion.button>
        
        {/* Homepage Background SVG - Hidden on mobile */}
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 hidden md:block"
          style={{
            top: '717px', // 177px (text position) + 540px = 717px
            zIndex: 2 // Ensures it appears below the gradient SVG
          }}
          animate={{
            y: [-6, 6, -6],
            scale: [1, 1.015, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
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
        </motion.div>
        
        {/* Homepage Background Gradient SVG - Layer Above - Hidden on mobile */}
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 hidden md:block"
          style={{
            top: '717px', // Same position as background SVG
            zIndex: 1 // Ensures it appears above the background SVG
          }}
          animate={{
            y: [6, -6, 6],
            scale: [1.015, 1, 1.015],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
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
        </motion.div>
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
          <ScrollReveal direction="up" distance={25}>
            <motion.div
              whileHover={{ y: -6, scale: 1.015, boxShadow: '0 16px 30px 0 rgba(102, 65, 123, 0.2)' }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
              <motion.a 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
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
              </motion.a>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Fixed Centered Box at bottom of page - Desktop only */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2"
          style={{
               bottom: '50px',
               zIndex: 10
          }}
        >
          <ScrollReveal direction="up" distance={30}>
            <motion.div
              whileHover={{ y: -6, scale: 1.01, boxShadow: '0 20px 40px -10px rgba(102, 65, 123, 0.25)' }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
              <motion.a 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
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
              </motion.a>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* New Section - 50px below the box */}
      <section
        ref={timelineSectionRef}
        style={{
          position: 'relative',
          width: '100%',
          height: `${1411 * timelineScale}px`,
          background: '#FAF6FC',
          marginTop: '50px',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            transform: `scale(${timelineScale})`,
            transformOrigin: 'top center',
            width: '1440px',
            position: 'absolute',
            left: '50%',
            marginLeft: '-720px',
            height: '1411px'
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
              top: '223.75px',
              left: '50%',
              transform: 'translateX(-50%)',
              margin: 0
            }}
          >
            Interested in joining our fellowship? Hover over our timeline steps to learn more!<br />
          </p>
          <TimelineAnimation />
        </div>
      </section>

      {/* What we Offer Section */}
      <section 
        className="relative mx-auto w-full max-w-[1440px] px-4 md:px-8 py-16 md:py-24"
      >
        {/* What we Offer Heading */}
        <ScrollReveal direction="up" distance={20}>
          <h2 
            className="text-center font-inter font-semibold text-3xl sm:text-4xl text-[#3A3A3A] mb-8 md:mb-14"
          >
            What We Offer
          </h2>
        </ScrollReveal>
        
        {/* WhatWeOffer Component */}
        <div className="relative w-full">
          <WhatWeOffer />
        </div>
      </section>
      
      {/* Where We've Gone Section - Active on All Devices */}
      <div className="w-full">
        <section 
          className="relative w-full bg-[#FAF6FC] flex flex-col items-center gap-6 py-12 md:py-[150px]"
        >
        {/* Where We've Gone Text */}
        <ScrollReveal direction="up" distance={20} className="w-full">
          <h2 
            className="text-center font-inter font-semibold text-2xl sm:text-3xl md:text-[40px] text-[#3A3A3A]"
          >
            Where We've Gone
          </h2>
        </ScrollReveal>
        
        {/* Continuous Studio Marquee Container */}
        <div className="relative w-full overflow-hidden mt-6 md:mt-10">
          {/* Gradient Edge Masks for seamless fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-[#FAF6FC] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-[#FAF6FC] to-transparent z-10" />

          {/* First Row Marquee (rolls left) */}
          <div className="animate-marquee-continuous flex items-center py-2 md:py-4">
            {[
              { src: "/images/CompanyLogos/tesla.png", alt: "Tesla" },
              { src: "/images/CompanyLogos/northrop.png", alt: "Northrop Grumman" },
              { src: "/images/CompanyLogos/amazon.png", alt: "Amazon" },
              { src: "/images/CompanyLogos/oracle.png", alt: "Oracle" },
              { src: "/images/CompanyLogos/servicenow.png", alt: "ServiceNow" },
              // Repeated for infinite loop
              { src: "/images/CompanyLogos/tesla.png", alt: "Tesla" },
              { src: "/images/CompanyLogos/northrop.png", alt: "Northrop Grumman" },
              { src: "/images/CompanyLogos/amazon.png", alt: "Amazon" },
              { src: "/images/CompanyLogos/oracle.png", alt: "Oracle" },
              { src: "/images/CompanyLogos/servicenow.png", alt: "ServiceNow" },
            ].map((logo, index) => (
              <motion.div
                key={`row1-${index}`}
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="shrink-0 mx-6 sm:mx-8 md:mx-10 cursor-pointer flex items-center justify-center"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-7 sm:h-10 md:h-12 w-auto object-contain transition-all duration-200 hover:drop-shadow-md" 
                />
              </motion.div>
            ))}
          </div>

          {/* Second Row Marquee (rolls right) */}
          <div className="animate-marquee-continuous-reverse flex items-center py-2 md:py-4 mt-4 md:mt-6">
            {[
              { src: "/images/CompanyLogos/visa.png", alt: "Visa" },
              { src: "/images/CompanyLogos/deloitte.png", alt: "Deloitte" },
              { src: "/images/CompanyLogos/americanex.png", alt: "American Express" },
              { src: "/images/CompanyLogos/cisco.png", alt: "Cisco" },
              { src: "/images/CompanyLogos/walmart.png", alt: "Walmart" },
              // Repeated for infinite loop
              { src: "/images/CompanyLogos/visa.png", alt: "Visa" },
              { src: "/images/CompanyLogos/deloitte.png", alt: "Deloitte" },
              { src: "/images/CompanyLogos/americanex.png", alt: "American Express" },
              { src: "/images/CompanyLogos/cisco.png", alt: "Cisco" },
              { src: "/images/CompanyLogos/walmart.png", alt: "Walmart" },
            ].map((logo, index) => (
              <motion.div
                key={`row2-${index}`}
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="shrink-0 mx-6 sm:mx-8 md:mx-10 cursor-pointer flex items-center justify-center"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-6 sm:h-9 md:h-11 w-auto object-contain transition-all duration-200 hover:drop-shadow-md" 
                />
              </motion.div>
            ))}
          </div>
        </div>
        </section>
      </div>
      </main>
    </div>
  );
}
