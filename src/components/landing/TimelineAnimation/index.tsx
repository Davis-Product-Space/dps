'use client';

import React from 'react';

export function TimelineAnimation() {
  const handlePrismHover = (isHovering: boolean, type: 'applications-due' | 'product-pitch' | 'interviews' | 'pm-panel' | 'info-sessions') => {
    if (type === 'applications-due') {
      const line4 = document.querySelector('.line-4') as HTMLElement;
      const prismContainer = document.querySelector('.prism-container') as HTMLElement;
      const appsDueText = document.querySelector('.applications-due-text') as HTMLElement;
      const tbdText = document.querySelector('.applications-due-tbd') as HTMLElement;
      const hoverParagraph = document.querySelector('.applications-due-paragraph') as HTMLElement;
      
      if (line4) {
        line4.style.opacity = isHovering ? '0' : '1';
      }
      
      if (prismContainer) {
        if (isHovering) {
          prismContainer.style.opacity = '1';
          prismContainer.style.clipPath = 'inset(0% 0 0 0)';
        } else {
          prismContainer.style.opacity = '0';
          prismContainer.style.clipPath = 'inset(100% 0 0 0)';
        }
      }
      
      if (appsDueText) {
        appsDueText.style.transform = isHovering ? 'translateY(-200px) translateX(-50%)' : 'translateY(0) translateX(-50%)';
      }
      
      if (tbdText) {
        tbdText.style.transform = isHovering ? 'translateY(-200px) translateX(-50%)' : 'translateY(0) translateX(-50%)';
      }
      
      if (hoverParagraph) {
        if (isHovering) {
          hoverParagraph.style.opacity = '1';
          hoverParagraph.style.transform = 'translateY(-200px) translateX(-50%)';
        } else {
          hoverParagraph.style.opacity = '0';
          hoverParagraph.style.transform = 'translateY(0) translateX(-50%)';
        }
      }
    } else if (type === 'product-pitch') {
      const line5 = document.querySelector('.line-5') as HTMLElement;
      const productPrismContainer = document.querySelector('.product-pitch-prism-container') as HTMLElement;
      const productPitchText = document.querySelector('.product-pitch-text') as HTMLElement;
      const productPitchDate = document.querySelector('.product-pitch-date') as HTMLElement;
      const productPitchInvite = document.querySelector('.product-pitch-invite') as HTMLElement;
      const productHoverParagraph = document.querySelector('.product-pitch-paragraph') as HTMLElement;
      
      if (line5) {
        line5.style.opacity = isHovering ? '0' : '1';
      }
      
      if (productPrismContainer) {
        if (isHovering) {
          productPrismContainer.style.opacity = '1';
          productPrismContainer.style.clipPath = 'inset(0% 0 0 0)';
        } else {
          productPrismContainer.style.opacity = '0';
          productPrismContainer.style.clipPath = 'inset(100% 0 0 0)';
        }
      }
      
      if (productPitchText) {
        productPitchText.style.transform = isHovering ? 'translateY(-200px) translateX(-50%)' : 'translateY(0) translateX(-50%)';
      }
      
      if (productPitchDate) {
        productPitchDate.style.transform = isHovering ? 'translateY(-200px) translateX(-50%)' : 'translateY(0) translateX(-50%)';
      }
      
      if (productPitchInvite) {
        productPitchInvite.style.transform = isHovering ? 'translateY(-200px) translateX(-50%)' : 'translateY(0) translateX(-50%)';
      }
      
      if (productHoverParagraph) {
        if (isHovering) {
          productHoverParagraph.style.opacity = '1';
          productHoverParagraph.style.transform = 'translateY(-200px) translateX(-50%)';
        } else {
          productHoverParagraph.style.opacity = '0';
          productHoverParagraph.style.transform = 'translateY(0) translateX(-50%)';
        }
      }
    } else if (type === 'interviews') {
      const line6 = document.querySelector('.line-6') as HTMLElement;
      const interviewsPrismContainer = document.querySelector('.interviews-prism-container') as HTMLElement;
      const interviewsText = document.querySelector('.interviews-text') as HTMLElement;
      const interviewsDate = document.querySelector('.interviews-date') as HTMLElement;
      const interviewsInvite = document.querySelector('.interviews-invite') as HTMLElement;
      const interviewsHoverParagraph = document.querySelector('.interviews-paragraph') as HTMLElement;
      
      if (line6) {
        line6.style.opacity = isHovering ? '0' : '1';
      }
      
      if (interviewsPrismContainer) {
        if (isHovering) {
          interviewsPrismContainer.style.opacity = '1';
          interviewsPrismContainer.style.clipPath = 'inset(0% 0 0 0)';
        } else {
          interviewsPrismContainer.style.opacity = '0';
          interviewsPrismContainer.style.clipPath = 'inset(100% 0 0 0)';
        }
      }
      
      if (interviewsText) {
        interviewsText.style.transform = isHovering ? 'translateY(-200px) translateX(-50%)' : 'translateY(0) translateX(-50%)';
      }
      
      if (interviewsDate) {
        interviewsDate.style.transform = isHovering ? 'translateY(-200px) translateX(-50%)' : 'translateY(0) translateX(-50%)';
      }
      
      if (interviewsInvite) {
        interviewsInvite.style.transform = isHovering ? 'translateY(-200px) translateX(-50%)' : 'translateY(0) translateX(-50%)';
      }
      
      if (interviewsHoverParagraph) {
        if (isHovering) {
          interviewsHoverParagraph.style.opacity = '1';
          interviewsHoverParagraph.style.transform = 'translateY(-200px) translateX(-50%)';
        } else {
          interviewsHoverParagraph.style.opacity = '0';
          interviewsHoverParagraph.style.transform = 'translateY(0) translateX(-50%)';
        }
      }
    } else if (type === 'pm-panel') {
      const line3 = document.querySelector('.line-3') as HTMLElement;
      const pmPanelPrismContainer = document.querySelector('.pm-panel-prism-container') as HTMLElement;
      const pmPanelText = document.querySelector('.pm-panel-text') as HTMLElement;
      const pmPanelDate = document.querySelector('.pm-panel-date') as HTMLElement;
      const pmPanelHoverParagraph = document.querySelector('.pm-panel-paragraph') as HTMLElement;
      
      if (line3) {
        line3.style.opacity = isHovering ? '0' : '1';
      }
      
      if (pmPanelPrismContainer) {
        if (isHovering) {
          pmPanelPrismContainer.style.opacity = '1';
          pmPanelPrismContainer.style.clipPath = 'inset(0% 0 0 0)';
        } else {
          pmPanelPrismContainer.style.opacity = '0';
          pmPanelPrismContainer.style.clipPath = 'inset(100% 0 0 0)';
        }
      }
      
      if (pmPanelText) {
        pmPanelText.style.transform = isHovering ? 'translateY(-200px) translateX(-50%)' : 'translateY(0) translateX(-50%)';
      }
      
      if (pmPanelDate) {
        pmPanelDate.style.transform = isHovering ? 'translateY(-200px) translateX(-50%)' : 'translateY(0) translateX(-50%)';
      }
      
      if (pmPanelHoverParagraph) {
        if (isHovering) {
          pmPanelHoverParagraph.style.opacity = '1';
          pmPanelHoverParagraph.style.transform = 'translateY(-200px) translateX(-50%)';
        } else {
          pmPanelHoverParagraph.style.opacity = '0';
          pmPanelHoverParagraph.style.transform = 'translateY(0) translateX(-50%)';
        }
      }
    } else if (type === 'info-sessions') {
      const line2 = document.querySelector('.line-2') as HTMLElement;
      const infoSessionsPrismContainer = document.querySelector('.info-sessions-prism-container') as HTMLElement;
      const infoSessionsText = document.querySelector('.info-sessions-text') as HTMLElement;
      const infoSessionsDate = document.querySelector('.info-sessions-date') as HTMLElement;
      const infoSessionsHoverParagraph = document.querySelector('.info-sessions-paragraph') as HTMLElement;
      
      if (line2) {
        line2.style.opacity = isHovering ? '0' : '1';
      }
      
      if (infoSessionsPrismContainer) {
        if (isHovering) {
          infoSessionsPrismContainer.style.opacity = '1';
          infoSessionsPrismContainer.style.clipPath = 'inset(0% 0 0 0)';
        } else {
          infoSessionsPrismContainer.style.opacity = '0';
          infoSessionsPrismContainer.style.clipPath = 'inset(100% 0 0 0)';
        }
      }
      
      if (infoSessionsText) {
        infoSessionsText.style.transform = isHovering ? 'translateY(-200px) translateX(-50%)' : 'translateY(0) translateX(-50%)';
      }
      
      if (infoSessionsDate) {
        infoSessionsDate.style.transform = isHovering ? 'translateY(-200px) translateX(-50%)' : 'translateY(0) translateX(-50%)';
      }
      
      if (infoSessionsHoverParagraph) {
        if (isHovering) {
          infoSessionsHoverParagraph.style.opacity = '1';
          infoSessionsHoverParagraph.style.transform = 'translateY(-200px) translateX(-50%)';
        } else {
          infoSessionsHoverParagraph.style.opacity = '0';
          infoSessionsHoverParagraph.style.transform = 'translateY(0) translateX(-50%)';
        }
      }
    }
  };

  return (
    <div>
      {/* Homepage Background - Individual Shapes */}
      <div 
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            top: '550px',
            zIndex: 2,
            transform: 'scale(1)',
            transformOrigin: 'center'
          }}
        >
          <svg width="1440" height="713" viewBox="0 0 1440 713" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Big Bottom Right */}
            <path d="M1091.24 710.378C1098.89 713.089 1108.45 713.122 1116.15 710.462L1276.85 656.718C1284.26 654.157 1288.81 649.488 1288.81 644.443V538.956C1288.81 533.934 1284.3 529.284 1276.95 526.715L1112.94 471.356C1109.7 470.225 1105.6 471.593 1105.6 473.804L1105.6 591.595L928.305 651.499C923.941 652.911 923.818 656.563 928.082 658.076L1091.24 710.378Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Product Pitch - hover trigger only */}
            <path 
              d="M918.999 519.191L1088.1 461.953L1088.1 346.705C1088.1 344.319 1083.74 342.808 1080.18 343.96L934.07 387.127C924.772 390.135 918.999 395.869 918.999 402.095L918.999 519.191Z" 
              fill="white" 
              stroke="black" 
              strokeWidth="1"
              className="cursor-pointer transition-opacity duration-300 hover:opacity-0"
              onMouseEnter={() => handlePrismHover(true, 'product-pitch')}
              onMouseLeave={() => handlePrismHover(false, 'product-pitch')}
            />
            
            {/* Triangle Right Below Product Pitch */}
            <path d="M1088.1 471.072L931.789 524.021L1088.1 576.209L1088.1 471.072Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Triangle Left Below Product Pitch */}
            <path d="M919 638.712C919 640.445 922.167 641.544 924.758 640.711L1088.1 585.611L918.999 528.182L919 638.712Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Big Below Interviews */}
            <path d="M1480.39 452.944C1480.53 457.741 1475.66 462.062 1467.72 464.195L1299.05 509.617C1291.41 511.671 1282.08 511.383 1274.52 508.859L1117.84 456.075C1111.24 453.563 1105.6 449.229 1105.6 444.61L1105.61 343.108C1105.58 341.085 1109.74 339.922 1113.05 341.028L1289.52 399.968L1470.34 350.162C1474.7 348.905 1480.23 350.676 1480.31 353.352L1480.39 452.944Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Above Interviews Right */}
            <path d="M1458.38 338.991C1460.98 339.859 1461 341.834 1458.42 342.582L1291.94 388.516L1291.94 283.684L1458.38 338.991Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Interviews - hover trigger only */}
            <path 
              d="M1120.12 332.103L1279.76 288.257L1279.75 384.711L1120.12 332.103Z" 
              fill="white" 
              stroke="black" 
              strokeWidth="1"
              className="cursor-pointer transition-opacity duration-300 hover:opacity-0"
              onMouseEnter={() => handlePrismHover(true, 'interviews')}
              onMouseLeave={() => handlePrismHover(false, 'interviews')}
            />
            
            {/* Most Top on Right */}
            <path 
              d="M1273.38 277.132L1100.74 324.588L928.098 266.92C924.524 265.726 924.504 263.006 928.061 261.98L1076.79 220.834C1086.07 218.156 1097.63 218.427 1106.96 221.542L1273.38 277.132Z" 
              fill="white" 
              stroke="black" 
              strokeWidth="1"
              style={{ zIndex: 300 }}
            />
            
            {/* Big under Applications Due */}
            <path d="M903.392 495.944C903.525 500.741 898.659 505.061 890.72 507.195L722.053 552.617C714.408 554.671 705.076 554.382 697.518 551.858L540.839 499.075C534.237 496.562 528.6 492.228 528.6 487.61L528.608 386.108C528.579 384.085 532.739 382.922 536.05 384.028L712.522 442.967L893.339 393.161C897.697 391.904 903.231 393.676 903.306 396.352L903.392 495.944Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Applications Due - with 3D prism hover effect */}
            <g id="applications-due-prism">
              {/* Original flat shape - hover trigger */}
              <path 
                d="M881.381 381.991C883.977 382.858 883.996 384.833 881.416 385.582L714.942 431.515L714.937 326.684L881.381 381.991Z" 
                fill="white" 
                stroke="black" 
                strokeWidth="1"
                className="cursor-pointer transition-opacity duration-300 hover:opacity-0"
                onMouseEnter={() => handlePrismHover(true, 'applications-due')}
                onMouseLeave={() => handlePrismHover(false, 'applications-due')}
              />
              
              {/* 3D Triangular Prism - rises from bottom with clip-path animation */}
              <g 
                className="prism-container pointer-events-none"
                style={{
                  opacity: 0,
                  clipPath: 'inset(100% 0 0 0)', // Start completely clipped from bottom
                  transition: 'opacity 0.3s ease, clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: 50
                }}
              >
                {/* Bottom face of prism */}
                <path 
                  d="M881.381 381.991C883.977 382.858 883.996 384.833 881.416 385.582L714.942 431.515L714.937 326.684L881.381 381.991Z" 
                  fill="#B085D1" 
                  stroke="black" 
                  strokeWidth="1"
                />
                
                {/* Top face of prism (extruded up by 300px - even taller) */}
                <path 
                  d="M881.381 81.991C883.977 82.858 883.996 84.833 881.416 85.582L714.942 131.515L714.937 26.684L881.381 81.991Z" 
                  fill="#F8F4FF" 
                  stroke="black" 
                  strokeWidth="1"
                />
                
                {/* Left side face */}
                <path 
                  d="M714.937 326.684L714.937 26.684L881.381 81.991L881.381 381.991L714.937 326.684Z" 
                  fill="white" 
                  stroke="black" 
                  strokeWidth="1"
                />
                
                {/* Right side face */}
                <path 
                  d="M881.381 381.991L881.381 81.991L881.416 85.582L881.416 385.582L881.381 381.991Z" 
                  fill="#9B6BB9" 
                  stroke="black" 
                  strokeWidth="1"
                />
                
                {/* Back side face */}
                <path 
                  d="M881.416 385.582L881.416 85.582L714.942 131.515L714.942 431.515L881.416 385.582Z" 
                  fill="#9161AD" 
                  stroke="black" 
                  strokeWidth="1"
                />
                
                {/* Glow effect */}
                <filter id="prismGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </g>
            </g>
            
            {/* Left Applications Due */}
            <path d="M543.116 375.102L702.757 331.256L702.751 427.71L543.116 375.102Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* PM Panel & Workshop - hover trigger only */}
            <path 
              d="M696.376 320.132L523.736 367.587L351.096 309.92C347.522 308.726 347.502 306.006 351.059 304.979L499.788 263.834C509.071 261.155 520.628 261.426 529.955 264.542L696.376 320.132Z" 
              fill="white" 
              stroke="black" 
              strokeWidth="1"
              className="cursor-pointer transition-opacity duration-300 hover:opacity-0"
              onMouseEnter={() => handlePrismHover(true, 'pm-panel')}
              onMouseLeave={() => handlePrismHover(false, 'pm-panel')}
            />
            
            {/* Shape 13 - Middle Left Large Box */}
            <path d="M315.242 320.623C322.887 317.911 332.453 317.878 340.15 320.538L500.85 374.283C508.263 376.843 512.813 381.512 512.813 386.557V492.044C512.813 497.066 508.305 501.716 500.947 504.285L336.942 559.645C333.703 560.775 329.597 559.407 329.597 557.196L329.596 439.405L152.305 379.501C147.941 378.089 147.818 374.437 152.082 372.924L315.242 320.623Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Shape 14 - Middle Left Medium Box Bottom */}
            <path d="M142.999 511.809L312.104 569.047L312.103 684.296C312.103 686.681 307.738 688.192 304.176 687.04L158.07 637.873C148.772 634.866 142.999 629.131 142.999 622.905L142.999 511.809Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Shape 15 - Middle Left Medium Box Face */}
            <path d="M312.103 559.929L155.789 506.979L312.103 454.792L312.103 559.929Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Shape 16 - Middle Left Medium Box Side */}
            <path d="M143 392.288C143 390.555 146.167 389.456 148.758 390.289L312.102 445.389L142.999 502.818L143 392.288Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Shape 17 - Top Left Large Box */}
            <path d="M-58.9973 58.0329C-59.1309 53.2361 -54.2642 48.9153 -46.3251 46.782L122.342 1.36013C129.987 -0.694216 139.319 -0.40573 146.876 2.11861L303.555 54.9019C310.157 57.4145 315.794 61.7484 315.794 66.3667L315.786 167.869C315.816 169.892 311.656 171.055 308.345 169.949L131.872 111.009L-48.9446 160.815C-53.3025 162.072 -58.8365 160.301 -58.911 157.625L-58.9973 58.0329Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Shape 18 - Top Left Small Box Top */}
            <path d="M-36.987 171.986C-39.5827 171.119 -39.6018 169.144 -37.0217 168.395L129.453 122.461L129.457 227.293L-36.987 171.986Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Shape 19 - Top Left Small Box Side */}
            <path d="M301.279 178.874L141.638 222.721L141.643 126.267L301.279 178.874Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Info Sessions - hover trigger only */}
            <path 
              d="M148.019 233.845L320.658 186.389L493.299 244.057C496.872 245.251 496.893 247.971 493.336 248.997L344.607 290.143C335.323 292.822 323.767 292.50 314.44 289.435L148.019 233.845Z" 
              fill="white" 
              stroke="black" 
              strokeWidth="1"
              className="cursor-pointer transition-opacity duration-300 hover:opacity-0"
              onMouseEnter={() => handlePrismHover(true, 'info-sessions')}
              onMouseLeave={() => handlePrismHover(false, 'info-sessions')}
            />
            
            {/* Shape 21 - Bottom Left Large Box */}
            <path d="M-253.997 493.944C-254.131 498.741 -249.264 503.062 -241.325 505.195L-72.6583 550.617C-65.013 552.671 -55.6812 552.383 -48.124 549.859L108.555 497.075C115.157 494.563 120.794 490.229 120.794 485.61L120.786 384.108C120.816 382.085 116.656 380.922 113.345 382.028L-63.1276 440.968L-243.945 391.162C-248.302 389.905 -253.837 391.676 -253.911 394.352L-253.997 493.944Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Shape 22 - Bottom Left Small Box Top */}
            <path d="M-231.987 379.991C-234.583 380.859 -234.602 382.834 -232.022 383.582L-65.5472 429.516L-65.5426 324.684L-231.987 379.991Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Shape 23 - Bottom Left Small Box Side */}
            <path d="M106.279 373.103L-53.3623 329.257L-53.3567 425.711L106.279 373.103Z" fill="white" stroke="black" strokeWidth="1"/>
            
            {/* Shape 24 - Bottom Left Small Box Base */}
            <path d="M-46.9812 318.132L125.658 365.588L298.299 307.92C301.872 306.726 301.893 304.006 298.336 302.98L149.607 251.834C140.323 249.156 128.767 249.427 119.40 252.542L-46.9812 318.132Z" fill="white" stroke="black" strokeWidth="1"/>
          </svg>
        </div>
        
        {/* Product Pitch 3D Prism - Separate container for proper z-index layering */}
        <div 
          className="absolute"
          style={{
            top: '550px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            pointerEvents: 'none'
          }}
        >
          <svg width="1440" height="713" viewBox="0 0 1440 713" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g 
              className="product-pitch-prism-container"
              style={{
                opacity: 0,
                clipPath: 'inset(100% 0 0 0)',
                transition: 'opacity 0.3s ease, clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Bottom face of prism */}
              <path 
                d="M918.999 519.191L1088.1 461.953L1088.1 346.705C1088.1 344.319 1083.74 342.808 1080.18 343.96L934.07 387.127C924.772 390.135 918.999 395.869 918.999 402.095L918.999 519.191Z" 
                fill="#B085D1" 
                stroke="black" 
                strokeWidth="1"
              />
              
              {/* Top face of prism (extruded up by 300px) */}
              <path 
                d="M918.999 219.191L1088.1 161.953L1088.1 46.705C1088.1 44.319 1083.74 42.808 1080.18 43.96L934.07 87.127C924.772 90.135 918.999 95.869 918.999 102.095L918.999 219.191Z" 
                fill="white" 
                stroke="black" 
                strokeWidth="1"
              />
              
              {/* Left side face */}
              <path 
                d="M918.999 519.191L918.999 219.191L1088.1 161.953L1088.1 461.953L918.999 519.191Z" 
                fill="white" 
                stroke="black" 
                strokeWidth="1"
              />
              
              {/* Right side face */}
              <path 
                d="M1088.1 346.705L1088.1 46.705L1088.1 161.953L1088.1 461.953L1088.1 346.705Z" 
                fill="#9B6BB9" 
                stroke="black" 
                strokeWidth="1"
              />
              
              {/* Back side face */}
              <path 
                d="M918.999 519.191L918.999 219.191L1088.1 161.953L1088.1 461.953L918.999 519.191Z" 
                fill="#9161AD" 
                stroke="black" 
                strokeWidth="1"
              />
            </g>
          </svg>
        </div>
        
        {/* Interviews 3D Prism - Separate container for proper z-index layering */}
        <div 
          className="absolute"
          style={{
            top: '550px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            pointerEvents: 'none'
          }}
        >
          <svg width="1440" height="713" viewBox="0 0 1440 713" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g 
              className="interviews-prism-container"
              style={{
                opacity: 0,
                clipPath: 'inset(100% 0 0 0)',
                transition: 'opacity 0.3s ease, clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Bottom face of prism */}
              <path 
                d="M1120.12 332.103L1279.76 288.257L1279.75 384.711L1120.12 332.103Z" 
                fill="#B085D1" 
                stroke="black" 
                strokeWidth="1"
              />
              
              {/* Top face of prism (extruded up by 250px) */}
              <path 
                d="M1120.12 82.103L1279.76 38.257L1279.75 134.711L1120.12 82.103Z" 
                fill="white" 
                stroke="black" 
                strokeWidth="1"
              />
              
              {/* Left side face */}
              <path 
                d="M1120.12 332.103L1120.12 82.103L1279.76 38.257L1279.76 288.257L1120.12 332.103Z" 
                fill="white" 
                stroke="black" 
                strokeWidth="1"
              />
              
              {/* Right side face */}
              <path 
                d="M1279.75 384.711L1279.75 134.711L1279.76 38.257L1279.76 288.257L1279.75 384.711Z" 
                fill="#9B6BB9" 
                stroke="black" 
                strokeWidth="1"
              />
              
              {/* Back side face */}
              <path 
                d="M1279.75 384.711L1279.75 134.711L1120.12 82.103L1120.12 332.103L1279.75 384.711Z" 
                fill="#9161AD" 
                stroke="black" 
                strokeWidth="1"
              />
            </g>
          </svg>
        </div>
        
        {/* PM Panel & Workshop 3D Prism - Separate container for proper z-index layering */}
        <div 
          className="absolute"
          style={{
            top: '550px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            pointerEvents: 'none'
          }}
        >
          <svg width="1440" height="713" viewBox="0 0 1440 713" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g 
              className="pm-panel-prism-container"
              style={{
                opacity: 0,
                clipPath: 'inset(100% 0 0 0)',
                transition: 'opacity 0.3s ease, clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Bottom face of prism */}
              <path 
                d="M696.376 320.132L523.736 367.587L351.096 309.92C347.522 308.726 347.502 306.006 351.059 304.979L499.788 263.834C509.071 261.155 520.628 261.426 529.955 264.542L696.376 320.132Z" 
                fill="#B085D1" 
                stroke="white" 
                strokeWidth="1"
              />
              
              {/* Top face of prism (extruded up by 250px) */}
              <path 
                d="M696.376 70.132L523.736 117.587L351.096 59.92C347.522 58.726 347.502 56.006 351.059 54.979L499.788 13.834C509.071 11.155 520.628 11.426 529.955 14.542L696.376 70.132Z" 
                fill="white" 
                stroke="black" 
                strokeWidth="1"
              />
              
              {/* Left side face */}
              <path 
                d="M351.096 309.92L351.096 59.92L696.376 70.132L696.376 320.132L351.096 309.92Z" 
                fill="white" 
                stroke="white" 
                strokeWidth="1"
              />
              
              {/* Right side face */}
              <path 
                d="M696.376 320.132L696.376 70.132L523.736 117.587L523.736 367.587L696.376 320.132Z" 
                fill="#9B6BB9" 
                stroke="black" 
                strokeWidth="1"
              />
              
              {/* Back side face */}
              <path 
                d="M523.736 367.587L523.736 117.587L351.096 59.92L351.096 309.92L523.736 367.587Z" 
                fill="#9161AD" 
                stroke="black" 
                strokeWidth="1"
              />
            </g>
          </svg>
        </div>
        
        {/* Info Sessions 3D Prism - Separate container for proper z-index layering */}
        <div 
          className="absolute"
          style={{
            top: '550px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            pointerEvents: 'none'
          }}
        >
          <svg width="1440" height="713" viewBox="0 0 1440 713" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g 
              className="info-sessions-prism-container"
              style={{
                opacity: 0,
                clipPath: 'inset(100% 0 0 0)',
                transition: 'opacity 0.3s ease, clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Bottom face of prism - exact copy of Info Sessions shape */}
              <path 
                d="M148.019 233.845L320.658 186.389L493.299 244.057C496.872 245.251 496.893 247.971 493.336 248.997L344.607 290.143C335.323 292.822 323.767 292.50 314.44 289.435L148.019 233.845Z" 
                fill="#9161AD" 
                stroke="black" 
                strokeWidth="1"
              />
              
              {/* Top face of prism (extruded up by 150px) */}
              <path 
                d="M148.019 83.845L320.658 36.389L493.299 94.057C496.872 95.251 496.893 97.971 493.336 98.997L344.607 140.143C335.323 142.822 323.767 142.50 314.44 139.435L148.019 83.845Z" 
                fill="white" 
                stroke="black" 
                strokeWidth="1"
              />
              
              {/* Left side face */}
              <path 
                d="M148.019 233.845L148.019 83.845L314.44 139.435L314.44 289.435L148.019 233.845Z" 
                fill="#9161AD" 
                stroke="black" 
                strokeWidth="1"
              />
              
              {/* Right side face */}
              <path 
                d="M493.299 244.057L493.299 94.057L493.336 98.997L493.336 248.997L493.299 244.057Z" 
                fill="#9161AD" 
                stroke="black" 
                strokeWidth="1"
              />
              
              {/* Curved back face */}
              <path 
                d="M493.336 248.997L493.336 98.997L344.607 140.143L344.607 290.143L493.336 248.997Z" 
                fill="#9161AD" 
                stroke="black" 
                strokeWidth="1"
              />
            </g>
          </svg>
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
         
         {/* Timeline Vertical Lines - Individual Lines with Pixel Control */}
         <div 
           className="absolute"
           style={{
             top: '500px',
             left: '50%',
             transform: 'translateX(-60%)',
             zIndex: 3
           }}
         >
           {/* Applications Open Text - 17.5px above Line 1 */}
           <div 
             style={{
               position: 'absolute',
               left: '-547.5px', // Same x position as Line 1
               top: '-35px', // 17.5px above Line 1 (0px - 17.5px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '22.5px',
               fontStyle: 'normal',
               fontWeight: 700,
               lineHeight: '32px',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             Applications Open
           </div>

           <div 
             style={{
               position: 'absolute',
               left: '-547.5px', // Same x position as Line 6
               top: '-55px', // 3px above Interviews (230px - 3px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             TBD
           </div>

           {/* Line 1 - leftmost - Now you can move by exact pixels */}
           <div 
             style={{
               position: 'absolute',
               left: '-547.5px', // Equivalent to x1="470.5" * 2 (scaled)
               top: '0px', // Equivalent to y2="17.5" * 2 (scaled)
               width: '1px',
               height: '340.5px', // Height calculated from y1-y2 scaled
               backgroundColor: 'black'
             }}
           />
           
           {/* Info Sessions Text - 17.5px above Line 2 */}
           <div 
             className="info-sessions-text"
             style={{
               position: 'absolute',
               left: '-388px', // Same x position as Line 2
               top: '30px', // 17.5px above Line 2 (65px - 17.5px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '22.5px',
               fontStyle: 'normal',
               fontWeight: 700,
               lineHeight: '32px',
               whiteSpace: 'nowrap', // Prevents text wrapping
               transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             Info Sessions
           </div>

           <div 
             className="info-sessions-date"
             style={{
               position: 'absolute',
               left: '-388px', // Same x position as Line 2
               top: '10px', // 3px above Info Sessions text
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap', // Prevents text wrapping
               transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             TBD
           </div>

           {/* Info Sessions Hover Paragraph - appears during animation */}
           <div 
             className="info-sessions-paragraph"
             style={{
               position: 'absolute',
               left: '-388px', // Same x position as Line 2
               top: '55px', // Below the Info Sessions text
               transform: 'translateX(-50%)',
               width: '300px',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: '22px',
               opacity: 0,
               transition: 'opacity 0.4s ease 0.2s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             Discover our community and learn about opportunities to develop your product management skills in an interactive setting.
           </div>

           {/* Line 2 */}
           <div 
             className="line-2"
             style={{
               position: 'absolute',
               left: '-388px', // x1="160" * 2
               top: '65px', // y2="139" * 2
               width: '1px',
               height: '211px', // (350.5-139) * 2
               backgroundColor: 'black',
               transition: 'opacity 0.5s ease'
             }}
           />
           
           {/* PM Panel & Workshop Text - 35px above Line 3 */}
           <div 
             className="pm-panel-text"
             style={{
               position: 'absolute',
               left: '-197px', // Same x position as Line 3
               top: '75px', // 35px above Line 3 (120px - 35px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '22.5px',
               fontStyle: 'normal',
               fontWeight: 700,
               lineHeight: '32px',
               whiteSpace: 'nowrap', // Prevents text wrapping
               transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             PM Panel & Workshop
           </div>

           <div 
             className="pm-panel-date"
             style={{
               position: 'absolute',
               left: '-197px', // Same x position as Line 3
               top: '55px', // 3px above PM Panel text
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap', // Prevents text wrapping
               transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             TBD
           </div>

           {/* PM Panel & Workshop Hover Paragraph - appears during animation */}
           <div 
             className="pm-panel-paragraph"
             style={{
               position: 'absolute',
               left: '-197px', // Same x position as Line 3
               top: '110px', // Below the PM Panel text
               transform: 'translateX(-50%)',
               width: '300px',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: '22px',
               opacity: 0,
               transition: 'opacity 0.4s ease 0.2s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             Learn from industry leaders and sharpen your product management skills through hands-on workshops and panel discussions.
           </div>

           {/* Line 3 */}
           <div 
             className="line-3"
             style={{
               position: 'absolute',
               left: '-197px', // x1="353" * 2
               top: '120px', // y2="302.5" * 2
               width: '1px',
               height: '234px', // (427-302.5) * 2
               backgroundColor: 'black',
               transition: 'opacity 0.5s ease'
             }}
           />
           
           {/* Applications Due Text - centered around Line 4 */}
           <div 
             className="applications-due-text"
             style={{
               position: 'absolute',
               left: '75px', // Same x position as Line 4
               top: '105px', // 35px above Line 4 (140px - 35px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '22.5px',
               fontStyle: 'normal',
               fontWeight: 700,
               lineHeight: '32px',
               whiteSpace: 'nowrap', // Prevents text wrapping
               transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             Applications Due
           </div>

           {/* TBD Text above Applications Due */}
           <div 
             className="applications-due-tbd"
             style={{
               position: 'absolute',
               left: '75px', // Same x position as Line 4
               top: '85px', // Above the Applications Due text
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap', // Prevents text wrapping
               transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             TBD
           </div>

           {/* Hover Paragraph - appears below during animation */}
           <div 
             className="applications-due-paragraph"
             style={{
               position: 'absolute',
               left: '75px', // Same x position as Line 4
               top: '140px', // Below the Applications Due text
               transform: 'translateX(-50%)',
               width: '300px',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: '22px',
               opacity: 0,
               transition: 'opacity 0.4s ease 0.2s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             Submit your application and join our community of aspiring product leaders. We'll review your submission and get back to you soon.
           </div>

           {/* Line 4 - center */}
           <div 
             style={{
               position: 'absolute',
               left: '75px', // x1="596" * 2
               top: '140px', // y2="186" * 2
               width: '1px',
               height: '284px', // (491-186) * 2
               backgroundColor: 'black',
               transition: 'opacity 0.5s ease'
             }}
             className="line-4"
           />
           

           {/* Product Pitch Text - 5px above (By invite) */}
           <div 
             className="product-pitch-text"
             style={{
               position: 'absolute',
               left: '285px', // Same x position as Line 5
               top: '115px', // 5px above (By invite) (148px - 5px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '22.5px',
               fontStyle: 'normal',
               fontWeight: 700,
               lineHeight: '32px',
               whiteSpace: 'nowrap', // Prevents text wrapping
               transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             Product Pitch
           </div>

           {/* Date/Time Text - 3px above Product Pitch */}
           <div 
             className="product-pitch-date"
             style={{
               position: 'absolute',
               left: '285px', // Same x position as Line 5
               top: '95px', // 3px above Product Pitch (143px - 3px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap', // Prevents text wrapping
               transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             Sat, 8/11 @ 11am
           </div>

           {/* Product Pitch (By invite) Text */}
           <div 
             className="product-pitch-invite"
             style={{
               position: 'absolute',
               left: '285px', // Same x position as Line 5
               top: '148px', // Below Product Pitch text
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap', // Prevents text wrapping
               transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             (By invite)
           </div>

           {/* Product Pitch Hover Paragraph - appears during animation */}
           <div 
             className="product-pitch-paragraph"
             style={{
               position: 'absolute',
               left: '285px', // Same x position as Line 5
               top: '175px', // Below the invite text
               transform: 'translateX(-50%)',
               width: '300px',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: '22px',
               opacity: 0,
               transition: 'opacity 0.4s ease 0.2s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             Present your product idea to our panel of experts and showcase your product management skills in action.
           </div>

           {/* Line 5 */}
           <div 
             className="line-5"
             style={{
               position: 'absolute',
               left: '285px', // x1="814.5" * 2
               top: '183px', // y2="328" * 2
               width: '1px',
               height: '265px', // (546-328) * 2
               backgroundColor: 'black',
               transition: 'opacity 0.5s ease'
             }}
           />
           
           {/* (By invite) Text - 35px above Line 6 */}
           <div 
             className="interviews-invite"
             style={{
               position: 'absolute',
               left: '550px', // Same x position as Line 6
               top: '150px', // 35px above Line 6 (270px - 35px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap', // Prevents text wrapping
               transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             (By invite)
           </div>

           {/* Interviews Text - 5px above (By invite) */}
           <div 
             className="interviews-text"
             style={{
               position: 'absolute',
               left: '550px', // Same x position as Line 6
               top: '117px', // 5px above (By invite) (235px - 5px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '22.5px',
               fontStyle: 'normal',
               fontWeight: 700,
               lineHeight: '32px',
               whiteSpace: 'nowrap', // Prevents text wrapping
               transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             Interviews
           </div>

           {/* TBD Text - 3px above Interviews */}
           <div 
             className="interviews-date"
             style={{
               position: 'absolute',
               left: '550px', // Same x position as Line 6
               top: '97px', // 3px above Interviews (230px - 3px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap', // Prevents text wrapping
               transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             TBD
           </div>

           {/* Interviews Hover Paragraph - appears during animation */}
           <div 
             className="interviews-paragraph"
             style={{
               position: 'absolute',
               left: '550px', // Same x position as Line 6
               top: '175px', // Below the invite text
               transform: 'translateX(-50%)',
               width: '300px',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: '22px',
               opacity: 0,
               transition: 'opacity 0.4s ease 0.2s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
               zIndex: 10
             }}
           >
             Join our final round of interviews and demonstrate your passion for product management in a collaborative setting.
           </div>

           {/* Line 6 */}
           <div 
             className="line-6"
             style={{
               position: 'absolute',
               left: '550px', // x1="953" * 2
               top: '185px', // y2="110" * 2
               width: '1px',
               height: '211px', // (377.5-110) * 2
               backgroundColor: 'black',
               transition: 'opacity 0.5s ease'
             }}
           />
         </div>
      </div>
    );
}

export default TimelineAnimation;
