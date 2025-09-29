'use client';

import React from 'react';
import { whatWeOfferPhases } from '@/data/what-we-offer-cards';

export function WhatWeOffer() {
  return (
    <div className="relative w-full" style={{ paddingBottom: '150px' }}>
      {/* Main Container */}
      <div 
        style={{
          position: 'relative',
          width: '1440px',
          maxWidth: '100vw',
          margin: '0 auto'
        }}
      >
        {/* Left Side - Fellowship Staircase */}
        <div style={{ 
          position: 'absolute',
          left: '53px',
          top: '300px' // Move staircase further down
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

        {/* Left Side - Capstone Staircase */}
        <div style={{ 
          position: 'absolute',
          left: '53px',
          top: '1020px' // 1000px + 20px = 1020px below Fellowship staircase
        }}>
          <img 
            src="/images/CapstoneStaircase.svg" 
            alt="Capstone Staircase"
            style={{
              width: '517px',
              height: '427px'
            }}
          />
        </div>

        {/* Left Side - Client Staircase */}
        <div style={{ 
          position: 'absolute',
          left: '53px',
          top: '1720px' // Move way down + 20px
        }}>
          <img 
            src="/images/Client_Staricase.png" 
            alt="Client Staircase"
            style={{
              width: '517px',
              height: '427px'
            }}
          />
        </div>

        {/* Left Side - Product Staircase */}
        <div style={{ 
          position: 'absolute',
          left: '-20px', // Moved further left (past the left edge)
          top: '2420px' // Moved down an additional 100px
        }}>
          <img 
            src="/images/Product_Staricase.svg" 
            alt="Product Staircase"
            style={{
              width: '620px', // Made bigger (increased from 517px)
              height: '512px' // Made bigger (increased from 427px)
            }}
          />
        </div>

        {/* Right Side - Static Phases */}
        <div style={{ 
          position: 'absolute',
          right: '100px',
          top: '198.75px', // 150px (heading top) + 48.75px (heading line-height) = 198.75px
          width: '670px', // 2 cards (325px each) + gap (20px) = 670px
          textAlign: 'right'
        }}>
          {whatWeOfferPhases.map((phase, index) => (
            <div 
              key={phase.key}
              style={{ 
                marginBottom: index < whatWeOfferPhases.length - 1 ? '150px' : '0px'
              }}
            >
              {/* Section Title */}
              <h3 
                style={{
                  color: '#3A3A3A',
                  fontFamily: 'Inter',
                  fontSize: '32px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '39px',
                  marginBottom: '25px',
                  textAlign: 'center'
                }}
              >
                {phase.sectionTitle}
              </h3>

              {/* Feature Cards Grid */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px'
                }}
              >
                {phase.cards.map((card) => (
                  <div key={card.id} style={{
                    display: 'flex',
                    width: '325px',
                    padding: '21px 25px',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '11px',
                    borderRadius: '10px',
                    background: '#FAF6FC',
                    textAlign: 'center'
                  }}>
                    <img 
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}