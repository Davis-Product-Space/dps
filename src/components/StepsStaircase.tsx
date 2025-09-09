"use client";

interface StepsStaircaseProps {
  className?: string;
  topSvgSrc: string;
  bottomSvgSrc: string;
  topSvgAlt?: string;
  bottomSvgAlt?: string;
}

export default function StepsStaircase({ 
  className = "", 
  topSvgSrc, 
  bottomSvgSrc, 
  topSvgAlt = "Top Staircase Vector",
  bottomSvgAlt = "Bottom Staircase"
}: StepsStaircaseProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Bottom SVG */}
      <div
        className="absolute"
        style={{
          width: '587.988px',
          height: '518.978px',
          right: '362px', // Right edge is 362px from right of page
          left: '490px',  // Left edge is 490px from left of page
          bottom: '0'     // Position at bottom
        }}
      >
        <img
          src={bottomSvgSrc}
          alt={bottomSvgAlt}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Top SVG (overlapping) */}
      <div
        className="absolute"
        style={{
          width: '1734.396px',
          height: '712.434px',
          right: '362px', // Right edge is 362px from right of page
          left: '490px',  // Left edge is 490px from left of page
          bottom: '0'     // Position at bottom, will overlap
        }}
      >
        <img
          src={topSvgSrc}
          alt={topSvgAlt}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
