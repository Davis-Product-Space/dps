"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from "next/link";

interface ProjectTileProps {
  svgSrc: string;
  title: string;
  groupMembers: string;
  shortDescription: string;
  onViewPitchDeck?: string;
  onViewDesigns?: string;
}

interface ProjectCarouselProps {
  projectTiles: ProjectTileProps[];
}

function ProjectTile({ svgSrc, title, groupMembers, shortDescription, onViewPitchDeck, onViewDesigns }: ProjectTileProps) {
  const [imageDimensions, setImageDimensions] = useState({ width: 950, height: 618 });
  const [isMobile, setIsMobile] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      img.onload = () => {
        if (isMobile) {
          // Fixed dimensions for mobile (like Hone card)
          setImageDimensions({ width: 350, height: 200 });
        } else {
          // Dynamic sizing for desktop (original implementation)
          const maxWidth = 950;
          const maxHeight = 610;
          const aspectRatio = img.naturalWidth / img.naturalHeight;
          
          let width = maxWidth;
          let height = maxWidth / aspectRatio;
          
          if (height > maxHeight) {
            height = maxHeight;
            width = maxHeight * aspectRatio;
          }
          
          setImageDimensions({ width, height });
        }
      };
    }
  }, [svgSrc, isMobile]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: `${imageDimensions.width}px`,
        height: isMobile 
          ? `${imageDimensions.height + 250}px` 
          : `${Math.min(imageDimensions.height + 293, 618)}px`,
        borderRadius: '15px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 8px 10px 0 rgba(0, 0, 0, 0.25)',
        //border: '2px solid #000000'
      }}
    >
      {/* SVG Image */}
      <div
        style={{
          width: `${imageDimensions.width}px`,
          height: `${imageDimensions.height}px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 8px 10px 0 rgba(0, 0, 0, 0.25)'
        }}
      >
        <img 
          ref={imgRef}
          src={svgSrc} 
          alt={title} 
          style={{ 
            width: `${imageDimensions.width}px`,
            height: `${imageDimensions.height}px`,
            objectFit: isMobile ? 'cover' : 'contain',
            objectPosition: isMobile ? 'top' : 'center'
          }} 
        />
      </div>
      
      {/* Overlay Component (overlaps bottom of SVG) */}
      <div
        style={{
          background: isMobile 
            ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 15%, #FFF 40%, #FFF 100%)'
            : 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 6.31%, #FFF 25.1%, #FFF 68.25%)',
          display: 'flex',
          width: `${imageDimensions.width}px`,
          height: isMobile ? '250px' : '293px',
          padding: isMobile ? '20px 30px' : '30px 50px',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          gap: '15px',
          position: 'absolute',
          left: 0,
          bottom: 0
        }}
      >
        {/* First div */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '8px',
            alignSelf: 'stretch'
          }}
        >
          {/* Title and Group Members */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              alignSelf: 'stretch'
            }}
          >
            <div
              style={{
                color: '#3A3A3A',
                fontFamily: 'Inter',
                fontSize: isMobile ? '28px' : '40px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
                alignSelf: 'stretch'
              }}
            >
              {title}
            </div>
            
            <div
              style={{
                color: '#3A3A3A',
                fontFamily: '"M PLUS 1"',
                fontSize: isMobile ? '14px' : '17.5px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                alignSelf: 'stretch'
              }}
            >
              {groupMembers}
            </div>
          </div>
          
          {/* Short Description */}
          <div
            style={{
              color: '#3A3A3A',
              fontFamily: '"M PLUS 1"',
              fontSize: isMobile ? '16px' : '22.5px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              alignSelf: 'stretch'
            }}
          >
            {shortDescription}
          </div>
        </div>
        
        {/* Second div - Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '18px'
          }}
        >
          {/* View Pitch Deck Button */}
          <a
            href={onViewPitchDeck}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              padding: isMobile ? '8px 16px' : '10px 20px',
              alignItems: 'center',
              gap: isMobile ? '10px' : '15px',
              borderRadius: '20px',
              border: '0.5px solid #66417B',
              background: '#FFF',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            //bolds text on hover
            onMouseEnter={(e) => {
              const textElement = e.currentTarget.querySelector('div');
              if (textElement) textElement.style.fontWeight = '600';
            }}
            onMouseLeave={(e) => {
              const textElement = e.currentTarget.querySelector('div');
              if (textElement) textElement.style.fontWeight = '400';
            }}
          >
            <div
              style={{
                color: '#66417B',
                textAlign: 'center',
                fontFamily: '"M PLUS 1"',
                fontSize: isMobile ? '14px' : '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: isMobile ? '20px' : '22.5px'
              }}
            >
              View Pitch Deck
            </div>
            
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width={isMobile ? "24" : "28.8"} 
              height={isMobile ? "24" : "28.8"} 
              viewBox="0 0 29 29" 
              fill="none"
            >
              <circle cx="14.4" cy="14.6" r="14.4" fill="#66417B"/>
              <path d="M11.52 8.11987L18 14.5999L11.52 21.0799" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          
          {/* View Designs Button */}
          <a
            href={onViewDesigns}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              padding: isMobile ? '8px 16px' : '12px 20px',
              alignItems: 'center',
              gap: isMobile ? '10px' : '16px',
              borderRadius: '16px',
              cursor: 'pointer',
              background: '#66417B',
              color: '#FAF6FC',
              transition: 'all 0.2s ease'
            }}
            //bolds text on hover
            onMouseEnter={(e) => {
              const textElement = e.currentTarget.querySelector('div');
              if (textElement) textElement.style.fontWeight = '600';
            }}
            onMouseLeave={(e) => {
              const textElement = e.currentTarget.querySelector('div');
              if (textElement) textElement.style.fontWeight = '400';
            }}
          >
            <div
              style={{
                color: '#FAF6FC',
                textAlign: 'center',
                fontFamily: '"M PLUS 1"',
                fontSize: isMobile ? '14px' : '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: isMobile ? '20px' : '22.5px'
              }}
            >
              View Designs
            </div>
            
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width={isMobile ? "24" : "28.8"} 
              height={isMobile ? "24" : "28.8"} 
              viewBox="0 0 30 29" 
              fill="none"
            >
              <circle cx="15.1998" cy="14.6" r="14.4" fill="#A674C4"/>
              <path d="M12.3198 8.11987L18.7998 14.5999L12.3198 21.0799" stroke="#FAF6FC" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCarousel({ projectTiles }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because we add a duplicate at the beginning
  const [tileWidths, setTileWidths] = useState<number[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);

  const tileGapPx = 78;
  const viewportWidthPx = 1440;
  const maxTileWidthPx = 950;

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Create infinite loop by duplicating tiles
  // Memoize so the array identity is stable across renders
  const infiniteTiles = useMemo(() => [
    projectTiles[projectTiles.length - 1],
    ...projectTiles,
    projectTiles[0]
  ], [projectTiles]);

  // Calculate center offset based on current tile's actual width
  const currentTileWidth = tileWidths[currentIndex] || maxTileWidthPx;
  const centerOffsetPx = (viewportWidthPx - currentTileWidth) / 2;

  // Update tile widths when tiles mount or on resize
  useEffect(() => {
    const updateWidths = () => {
      const widths = tileRefs.current.map(ref => ref?.offsetWidth || maxTileWidthPx);
      // Avoid unnecessary state updates to prevent render loops
      const hasChanged =
        widths.length !== tileWidths.length ||
        widths.some((w, i) => w !== tileWidths[i]);
      if (hasChanged) {
        setTileWidths(widths);
      }
    };

    updateWidths();
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, [projectTiles, tileWidths.length]);

  // Handle infinite loop transitions
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      if (currentIndex === 0) {
        // If we're at the duplicate at the beginning, jump to the real last tile
        setCurrentIndex(projectTiles.length);
      } else if (currentIndex === infiniteTiles.length - 1) {
        // If we're at the duplicate at the end, jump to the real first tile
        setCurrentIndex(1);
      }
      setIsTransitioning(false);
    }, 300); // Match the transition duration

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, projectTiles.length, infiniteTiles.length]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Mobile layout: Static stacked cards
  if (isMobile) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '100vw',
          padding: '0 16px',
          gap: '40px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {projectTiles.map((tile, index) => (
          <div
            key={`mobile-${tile.title}-${index}`}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <ProjectTile
              svgSrc={tile.svgSrc}
              title={tile.title}
              groupMembers={tile.groupMembers}
              shortDescription={tile.shortDescription}
              onViewPitchDeck={tile.onViewPitchDeck}
              onViewDesigns={tile.onViewDesigns}
            />
          </div>
        ))}
      </div>
    );
  }

  // Desktop layout: Carousel (original implementation)
  return (
    <div
      style={{
        display: 'flex',
        width: '1440px',
        height: '618px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Carousel Container */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '2px 0'
        }}
      >
        {/* SVG Container - wider to show partial views and extra gap past clickers */}
        <div
          style={{
            display: 'flex',
            width: '1414px', // 950 + 2*(168 + 15 + ~49 button width)
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              gap: `${tileGapPx}px`,
              transform: `translateX(${centerOffsetPx - currentIndex * (maxTileWidthPx + tileGapPx)}px)`,
              transition: isTransitioning ? 'transform 0.3s ease-in-out' : 'none'
            }}
          >
            {infiniteTiles.map((tile, index) => (
              <div
                key={`${tile.title}-${index}`}
                ref={(el) => { tileRefs.current[index] = el; }}
                style={{
                  width: 'auto',
                  height: '100%',
                  flexShrink: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    opacity: index === currentIndex ? 1 : 0.3
                  }}
                >
                  <ProjectTile
                    svgSrc={tile.svgSrc}
                    title={tile.title}
                    groupMembers={tile.groupMembers}
                    shortDescription={tile.shortDescription}
                    onViewPitchDeck={tile.onViewPitchDeck}
                    onViewDesigns={tile.onViewDesigns}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Navigation Button - positioned without blocking overlay */}
        <div
          onClick={goToPrevious}
          style={{
            display: 'flex',
            padding: '10px',
            alignItems: 'center',
            gap: '15px',
            borderRadius: '20px',
            background: '#66417B',
            cursor: 'pointer',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            top: '50%',
            marginLeft: '-475px', // Half of 950px to position at left edge
            zIndex: 10
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28.8" 
            height="28.8" 
            viewBox="0 0 29 30" 
            fill="none"
          >
            <circle cx="14.4" cy="14.4" r="14.4" transform="matrix(-1 0 0 1 29 0.600098)" fill="#A674C4"/>
            <path d="M17.48 8.52002L11 15L17.48 21.48" stroke="#FAF6FC" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Right Navigation Button - positioned without blocking overlay */}
        <div
          onClick={goToNext}
          style={{
            display: 'flex',
            padding: '10px',
            alignItems: 'center',
            gap: '15px',
            borderRadius: '20px',
            background: '#66417B',
            cursor: 'pointer',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            top: '50%',
            marginLeft: '475px', // Half of 950px to position at right edge
            zIndex: 10
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28.8" 
            height="28.8" 
            viewBox="0 0 29 30" 
            fill="none"
          >
            <circle cx="14.4" cy="15.0001" r="14.4" fill="#A674C4"/>
            <path d="M11.5195 8.52002L17.9995 15L11.5195 21.48" stroke="#FAF6FC" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
