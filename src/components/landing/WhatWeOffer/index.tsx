'use client';

import React from 'react';
import { whatWeOfferPhases } from '@/data/what-we-offer-cards';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function WhatWeOffer() {
  return (
    <div className="relative w-full" style={{ paddingBottom: '150px' }}>
      {/* Main Container */}
      <div 
        className="whatweoffer-mobile-scale"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100vw',
          margin: '0 auto',
          padding: '0 20px'
        }}
      >
        {/* Row 1: Fellowship */}
        <ScrollReveal direction="up" distance={30}>
          <div 
            className="whatweoffer-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '100px',
              gap: '50px'
            }}
          >
            {/* Fellowship Image */}
            <motion.div 
              className="whatweoffer-staircase-img"
              style={{ flex: '0 0 auto', maxWidth: '40%' }}
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="/images/fellowship_staircase.svg" 
                alt="Fellowship Staircase"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '517px'
                }}
              />
            </motion.div>
            
            {/* Fellowship Content */}
            <div style={{ flex: '1', minWidth: '0' }}>
              <h3 
                className="whatweoffer-section-title"
                style={{
                  color: '#3A3A3A',
                  fontFamily: 'Inter',
                  fontSize: '32px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '39px',
                  marginBottom: '25px',
                  textAlign: 'center',
                  width: '100%'
                }}
              >
                {whatWeOfferPhases[0].sectionTitle}
              </h3>
              
              <div 
                className="whatweoffer-card-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px'
                }}
              >
                {whatWeOfferPhases[0].cards.map((card) => (
                  <motion.div 
                    key={card.id}
                    whileHover={{ 
                      y: -6, 
                      scale: 1.02,
                      boxShadow: '0 16px 30px -8px rgba(102, 65, 123, 0.16)' 
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    style={{
                      display: 'flex',
                      padding: '21px 25px',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '11px',
                      borderRadius: '10px',
                      background: '#FAF6FC',
                      textAlign: 'center',
                      cursor: 'default',
                      transition: 'background-color 0.2s ease',
                    }}
                  >
                    <motion.img 
                      whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                      transition={{ duration: 0.3 }}
                      src={card.icon}
                      alt={card.title}
                      style={{
                        width: '69px',
                        height: '68px'
                      }}
                    />
                    <h4 style={{
                      color: '#3A3A3A',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 1"',
                      fontSize: '22.5px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: '32px',
                      margin: 0
                    }}>
                      {card.title}
                    </h4>
                    <p style={{
                      color: '#3A3A3A',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 1"',
                      fontSize: '18px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                      margin: 0
                    }}>
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Row 2: Capstone */}
        <ScrollReveal direction="up" distance={30} delay={0.1}>
          <div 
            className="whatweoffer-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '100px',
              gap: '50px'
            }}
          >
            {/* Capstone Image */}
            <motion.div 
              className="whatweoffer-staircase-img"
              style={{ flex: '0 0 auto', maxWidth: '40%' }}
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="/images/CapstoneStaircase.svg" 
                alt="Capstone Staircase"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '517px'
                }}
              />
            </motion.div>
            
            {/* Capstone Content */}
            <div style={{ flex: '1', minWidth: '0' }}>
              <h3 
                className="whatweoffer-section-title"
                style={{
                  color: '#3A3A3A',
                  fontFamily: 'Inter',
                  fontSize: '32px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '39px',
                  marginBottom: '25px',
                  textAlign: 'center',
                  width: '100%'
                }}
              >
                {whatWeOfferPhases[1].sectionTitle}
              </h3>
              
              <div 
                className="whatweoffer-card-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px'
                }}
              >
                {whatWeOfferPhases[1].cards.map((card) => (
                  <motion.div 
                    key={card.id}
                    whileHover={{ 
                      y: -6, 
                      scale: 1.02,
                      boxShadow: '0 16px 30px -8px rgba(102, 65, 123, 0.16)' 
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    style={{
                      display: 'flex',
                      padding: '21px 25px',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '11px',
                      borderRadius: '10px',
                      background: '#FAF6FC',
                      textAlign: 'center',
                      cursor: 'default',
                      transition: 'background-color 0.2s ease',
                    }}
                  >
                    <motion.img 
                      whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                      transition={{ duration: 0.3 }}
                      src={card.icon}
                      alt={card.title}
                      style={{
                        width: '69px',
                        height: '68px'
                      }}
                    />
                    <h4 style={{
                      color: '#3A3A3A',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 1"',
                      fontSize: '22.5px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: '32px',
                      margin: 0
                    }}>
                      {card.title}
                    </h4>
                    <p style={{
                      color: '#3A3A3A',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 1"',
                      fontSize: '18px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                      margin: 0
                    }}>
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Row 3: Client */}
        <ScrollReveal direction="up" distance={30} delay={0.15}>
          <div 
            className="whatweoffer-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '100px',
              gap: '50px'
            }}
          >
            {/* Client Image */}
            <motion.div 
              className="whatweoffer-staircase-img"
              style={{ flex: '0 0 auto', maxWidth: '40%' }}
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="/images/Client_Staricase.png" 
                alt="Client Staircase"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '517px'
                }}
              />
            </motion.div>
            
            {/* Client Content */}
            <div style={{ flex: '1', minWidth: '0' }}>
              <h3 
                className="whatweoffer-section-title"
                style={{
                  color: '#3A3A3A',
                  fontFamily: 'Inter',
                  fontSize: '32px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '39px',
                  marginBottom: '25px',
                  textAlign: 'center',
                  width: '100%'
                }}
              >
                {whatWeOfferPhases[2].sectionTitle}
              </h3>
              
              <div 
                className="whatweoffer-card-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px'
                }}
              >
                {whatWeOfferPhases[2].cards.map((card) => (
                  <motion.div 
                    key={card.id}
                    whileHover={{ 
                      y: -6, 
                      scale: 1.02,
                      boxShadow: '0 16px 30px -8px rgba(102, 65, 123, 0.16)' 
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    style={{
                      display: 'flex',
                      padding: '21px 25px',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '11px',
                      borderRadius: '10px',
                      background: '#FAF6FC',
                      textAlign: 'center',
                      cursor: 'default',
                      transition: 'background-color 0.2s ease',
                    }}
                  >
                    <motion.img 
                      whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                      transition={{ duration: 0.3 }}
                      src={card.icon}
                      alt={card.title}
                      style={{
                        width: '69px',
                        height: '68px'
                      }}
                    />
                    <h4 style={{
                      color: '#3A3A3A',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 1"',
                      fontSize: '22.5px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: '32px',
                      margin: 0
                    }}>
                      {card.title}
                    </h4>
                    <p style={{
                      color: '#3A3A3A',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 1"',
                      fontSize: '18px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                      margin: 0
                    }}>
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      
      <style jsx>{`
        @media (max-width: 767px) {
          .whatweoffer-mobile-scale {
            width: 100% !important;
            padding: 0 12px !important;
          }
          
          /* Only hide the large staircase illustrations on mobile, keep card icons visible */
          .whatweoffer-staircase-img {
            display: none !important;
          }
          
          /* Make content take full width on mobile */
          .whatweoffer-row {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 24px !important;
            margin-bottom: 60px !important;
          }
          
          .whatweoffer-card-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          .whatweoffer-section-title {
            font-size: 26px !important;
            line-height: 32px !important;
            margin-bottom: 16px !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1024px) {
          .whatweoffer-card-grid {
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}