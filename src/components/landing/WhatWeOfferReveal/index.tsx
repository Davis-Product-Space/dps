"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

import { WhatWeOfferPhase } from "@/data/what-we-offer-cards";

interface WhatWeOfferRevealProps {
  targetRef: React.RefObject<HTMLElement | null>;
  phases: WhatWeOfferPhase[];
}

export default function WhatWeOfferReveal({ targetRef, phases }: WhatWeOfferRevealProps) {
  const localRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);

  useMotionValueEvent(springProgress, "change", (latest) => {
    // first time user enters the section
    if (!hasEntered && latest > 0) {
      setHasEntered(true);
    }

    // update index thresholds to show different phases
    // Calculate dynamic thresholds based on total phases (same logic as ScrollBar)
    const step = 1 / phases.length;
    let newIndex = 0;
    
    for (let i = 0; i < phases.length; i++) {
      if (latest >= i * step && latest < (i + 1) * step) {
        newIndex = i;
        break;
      } else if (latest >= (phases.length - 1) * step) {
        newIndex = phases.length - 1;
        break;
      }
    }
    
    setActiveIndex(newIndex);
  });

  if (phases.length === 0) return null;

  const currentPhase = phases[activeIndex];

  return (
    <div
      ref={localRef}
      className="relative"
      style={{
        width: '670px', // 2 cards (325px each) + gap (20px) = 670px
        height: '100%'
      }}
    >
      {/* if scroll hasn't started, show the first phase */}
      {!hasEntered && (
        <div>
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
            {phases[0].sectionTitle}
          </h3>

          {/* Feature Cards Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}
          >
            {phases[0].cards.map((card) => (
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
      )}

      {/* animate only once scroll starts */}
      <AnimatePresence initial={false} mode="wait">
        {hasEntered && (
          <motion.div
            key={currentPhase.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full"
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
              {currentPhase.sectionTitle}
            </h3>

            {/* Feature Cards Grid */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px'
              }}
            >
              {currentPhase.cards.map((card) => (
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
