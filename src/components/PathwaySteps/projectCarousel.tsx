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
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      img.onload = () => {
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
      };
    }
  }, [svgSrc]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: `${imageDimensions.width}px`,
        height: `${Math.min(imageDimensions.height + 293, 618)}px`,
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
            objectFit: 'contain'
          }} 
        />
      </div>
      
      {/* Overlay Component (overlaps bottom of SVG) */}
      <div
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 6.31%, #FFF 25.1%, #FFF 68.25%)',
          display: 'flex',
          width: `${imageDimensions.width}px`,
          height: '293px',
          padding: '30px 50px',
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
                fontSize: '40px',
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
                fontSize: '17.5px',
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
              fontSize: '22.5px',
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
              padding: '10px 20px',
              alignItems: 'center',
              gap: '15px',
              borderRadius: '20px',
              border: '0.5px solid #66417B',
              background: '#FFF',
              cursor: 'pointer'
            }}
          >
            <div
              style={{
                color: '#66417B',
                textAlign: 'center',
                fontFamily: '"M PLUS 1"',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '22.5px'
              }}
            >
              View Pitch Deck
            </div>
            
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="28.8" 
              height="28.8" 
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
            className="flex items-center gap-4 px-5 py-3 rounded-2xl cursor-pointer 
            bg-[#66417B] text-white hover:bg-purple-800 transition-colors duration-200"
          >
            <div
              style={{
                color: '#FAF6FC',
                textAlign: 'center',
                fontFamily: '"M PLUS 1"',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '22.5px'
              }}
            >
              View Designs
            </div>
            
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="28.8" 
              height="28.8" 
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
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);

  const tileGapPx = 78;
  const viewportWidthPx = 1440;
  const maxTileWidthPx = 950;

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

        {/* Overlay to position nav buttons relative to centered middle frame (950px wide) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '950px',
            height: '100%'
          }}
        >
          {/* Left Navigation Button - 15px left from middle frame's edge */}
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
              left: '-15px',
              top: '50%',
              transform: 'translateY(-50%)',
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

          {/* Right Navigation Button - 15px right from middle frame's edge */}
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
              right: '-15px',
              top: '50%',
              transform: 'translateY(-50%)',
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
    </div>
  );
}
