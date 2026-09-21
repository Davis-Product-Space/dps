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
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '100px',
            gap: '50px'
          }}>
            {/* Fellowship Image */}
            <motion.div 
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
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '100px',
            gap: '50px'
          }}>
            {/* Capstone Image */}
            <motion.div 
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
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '100px',
            gap: '50px'
          }}>
            {/* Client Image */}
            <motion.div 
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
            transform: scale(0.8) translateY(-100px) !important;
            transform-origin: top center !important;
            width: 100% !important;
            margin-bottom: 200px !important;
            padding: 0 20px !important;
          }
          
          /* Hide images on mobile */
          .whatweoffer-mobile-scale img {
            display: none !important;
          }
          
          /* Make content take full width on mobile */
          .whatweoffer-mobile-scale > div {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          
          .whatweoffer-mobile-scale > div > div:last-child {
            flex: 1 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1024px) {
          .whatweoffer-mobile-scale {
            transform: scale(0.9) !important;
            transform-origin: top center !important;
          }
        }
      `}</style>
    </div>
  );
}