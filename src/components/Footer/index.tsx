"use client";

export default function Footer() {
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
        className="relative bg-white w-full"
        style={{
          height: '348px'
        }}
      >
        {/* Product Space Logo */}
        <img
          src="/images/black-logo.svg"
          alt="Product Space Logo"
          className="absolute"
          style={{
            top: '37px',
            left: '56px'
          }}
        />
        
        {/* Product Space Text */}
        <div
          className="absolute"
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
          className="absolute"
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
          className="absolute"
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
          className="absolute"
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
            <a href="/what-is-product-space" className="hover:opacity-70 transition-opacity">
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
            <a href="/fellowship" className="hover:opacity-70 transition-opacity">
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
            <a href="/capstone" className="hover:opacity-70 transition-opacity">
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
            <a href="/client" className="hover:opacity-70 transition-opacity">
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
            <a href="/product" className="hover:opacity-70 transition-opacity">
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
          className="absolute"
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
            <a href="/email" className="hover:opacity-70 transition-opacity">
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
            <a href="/instagram" className="hover:opacity-70 transition-opacity">
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
            <a href="/linkedin" className="hover:opacity-70 transition-opacity">
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
            <a href="/tiktok" className="hover:opacity-70 transition-opacity">
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
                TikTok
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
