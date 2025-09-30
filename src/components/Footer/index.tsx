"use client";

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  
  // Color constants
  const LIGHT_PURPLE = '#FAF6FC';
  const WHITE = '#FFFFFF';
  
  // Page-specific background colors
  const getPageBackgroundColor = () => {
    switch (pathname) {
      case '/join':
        return LIGHT_PURPLE; // Matches FAQ section background
      case '/about':
      case '/about_new':
        return LIGHT_PURPLE; // Light purple background for about pages
      case '/':
      case '/home_new':
        return LIGHT_PURPLE; // Light purple background for home
      case '/Step1':
        return LIGHT_PURPLE; // Light purple for step pages
      case '/Step2':
        return LIGHT_PURPLE; // Light purple for step pages
      case '/Step3':
        return LIGHT_PURPLE; // Light purple for step pages
      case '/Step4':
        return WHITE
      default:
        return LIGHT_PURPLE; // Default fallback color
    }
  };
  
  const pageBackgroundColor = getPageBackgroundColor();
  return (
    <footer className="w-full">
      {/* Top border line */}
      <div 
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: '#000000'
        }}
      />
      <div 
        className="relative w-full footer-container"
        style={{
          height: '348px',
          backgroundColor: pageBackgroundColor
        }}
      >
        {/* Product Space Logo */}
        <img
          src="/images/black-logo.svg"
          alt="Product Space Logo"
          className="absolute footer-logo"
          style={{
            top: '37px',
            left: '56px'
          }}
        />
        
        {/* Product Space Text */}
        <div
          className="absolute footer-title"
          style={{
            top: '100px',
            left: '56px',
            color: '#3A3A3A',
            textAlign: 'center',
            fontFamily: '"M PLUS 1"',
            fontSize: '22.5px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '32px'
          }}
        >
          Product Space
        </div>
        
        {/* Catchphrase Text */}
        <div
          className="absolute footer-catchphrase"
          style={{
            top: '132px',
            left: '56px',
            color: '#3A3A3A',
            fontFamily: '"M PLUS 1"',
            fontSize: '18.5px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '32px'
          }}
        >
          Do we have a catchphrase
        </div>
        
        {/* Copyright Text */}
        <div
          className="absolute footer-copyright"
          style={{
            top: '222px',
            left: '56px',
            color: '#3A3A3A',
            fontFamily: '"M PLUS 1"',
            fontSize: '18.5px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '32px'
          }}
        >
          @ 2025 Davis Product Space. All Rights Reserved
        </div>
        
        {/* About Column */}
        <div
          className="absolute footer-about"
          style={{
            top: '38px',
            left: '1008px'
          }}
        >
          {/* About Title */}
          <div
            style={{
              color: '#3A3A3A',
              fontFamily: '"M PLUS 1"',
              fontSize: '18.5px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '32px'
            }}
          >
            About
          </div>
          
          {/* About Links List */}
          <div className="flex flex-col space-y-4 mt-2">
            <a href="/about_new" className="hover:opacity-70 transition-opacity">
              <span
                style={{
                  color: '#3A3A3A',
                  fontFamily: '"M PLUS 1"',
                  fontSize: '18.5px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '32px'
                }}
              >
                What is Product Space?
              </span>
            </a>
            <a href="/Step1" className="hover:opacity-70 transition-opacity">
              <span
                style={{
                  color: '#3A3A3A',
                  fontFamily: '"M PLUS 1"',
                  fontSize: '18.5px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '32px'
                }}
              >
                Fellowship
              </span>
            </a>
            <a href="/Step2" className="hover:opacity-70 transition-opacity">
              <span
                style={{
                  color: '#3A3A3A',
                  fontFamily: '"M PLUS 1"',
                  fontSize: '18.5px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '32px'
                }}
              >
                Capstone
              </span>
            </a>
            <a href="/Step3" className="hover:opacity-70 transition-opacity">
              <span
                style={{
                  color: '#3A3A3A',
                  fontFamily: '"M PLUS 1"',
                  fontSize: '18.5px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '32px'
                }}
              >
                Client
              </span>
            </a>
            <a href="/Step4" className="hover:opacity-70 transition-opacity">
              <span
                style={{
                  color: '#3A3A3A',
                  fontFamily: '"M PLUS 1"',
                  fontSize: '18.5px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '32px'
                }}
              >
                Product
              </span>
            </a>
          </div>
        </div>
        
        {/* Connect Column */}
        <div
          className="absolute footer-connect"
          style={{
            top: '38px',
            left: '1248px'
          }}
        >
          {/* Connect Title */}
          <div
            style={{
              color: '#3A3A3A',
              fontFamily: '"M PLUS 1"',
              fontSize: '18.5px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '32px'
            }}
          >
            Connect
          </div>
          
          {/* Connect Links List */}
          <div className="flex flex-col space-y-4 mt-2">
            <a href="mailto:davisproductspace@gmail.com" aria-label="Email" className="hover:opacity-70 transition-opacity">
              <span
                style={{
                  color: '#3A3A3A',
                  fontFamily: '"M PLUS 1"',
                  fontSize: '18.5px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '32px'
                }}
              >
                Email
              </span>
            </a>
            <a href="https://instagram.com/davisproductspace" target="_blank" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
              <span
                style={{
                  color: '#3A3A3A',
                  fontFamily: '"M PLUS 1"',
                  fontSize: '18.5px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '32px'
                }}
              >
                Instagram
              </span>
            </a>
            <a href="https://www.linkedin.com/company/davisproductspace" target="_blank" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
              <span
                style={{
                  color: '#3A3A3A',
                  fontFamily: '"M PLUS 1"',
                  fontSize: '18.5px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '32px'
                }}
              >
                LinkedIn
              </span>
            </a>
          </div>
        </div>
        <style jsx>{`
          @media (max-width: 767px) {
            .footer-container { height: 180px !important; }
            .footer-logo { top: 8px !important; left: 12px !important; transform: scale(0.6); transform-origin: top left; }
            .footer-title { top: 46px !important; left: 12px !important; font-size: 11px !important; line-height: 14px !important; text-align: left !important; }
            .footer-catchphrase { top: 60px !important; left: 12px !important; font-size: 10px !important; line-height: 12px !important; text-align: left !important; }
            /* Move About/Connect to top-right */
            .footer-about { top: 8px !important; right: 76px !important; left: auto !important; text-align: right; }
            .footer-about div, .footer-about span { font-size: 10px !important; line-height: 12px !important; }
            .footer-about .mt-2 { margin-top: 10px !important; }
            .footer-about .space-y-4 > * + * { margin-top: 0px !important; }
            .footer-connect { top: 8px !important; right: 10px !important; left: auto !important; transform: none; text-align: right; }
            .footer-connect div, .footer-connect span { font-size: 10px !important; line-height: 12px !important; }
            .footer-connect .mt-2 { margin-top: 10px !important; }
            .footer-connect .space-y-4 > * + * { margin-top: 0px !important; }
            .footer-copyright { top: 146px !important; left: 12px !important; font-size: 9.5px !important; line-height: 12px !important; width: calc(100vw - 24px) !important; white-space: normal !important; text-align: left !important; }
          }
        `}</style>
      </div>
    </footer>
  );
}
