"use client";

import { useState, useEffect } from "react";
import Logo from "@/assets/logo/ps-logo.svg";
import NavMenu from "@/assets/icons/nav-menu.svg";
import ArrowIcon from "@/assets/icons/arrow_function.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [

  { name: "Home", href: "/home_new" },
  { name: "About", href: "/about_new" },
  { name: "Join", href: "/join" },
  { name: "Pathway", href: "/pathway", hasDropdown: true }
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [pathwayDropdownOpen, setPathwayDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const togglePathwayDropdown = () => setPathwayDropdownOpen((prev) => !prev);

  // Close dropdown when pathname changes
  useEffect(() => {
    setPathwayDropdownOpen(false);
  }, [pathname]);

  // Check if we're on home, about, join, or application pages
  const isTransparentNavbar = pathname === '/home_new' || pathname === '/about_new' || pathname === '/join' || pathname === '/application';
  // Check if we're specifically on the home page
  const isHomePage = pathname === '/home_new';

  return (
    <nav 
      className="fixed md:absolute top-0 left-0 w-full z-50 bg-white md:bg-transparent"
      style={{
        backgroundColor: isTransparentNavbar ? 'transparent' : 'white',
        borderTop: isTransparentNavbar ? 'none' : '1px solid #3A3A3A',
        borderBottom: isTransparentNavbar ? 'none' : '1px solid #3A3A3A'
      }}
    >
      <div className="flex items-center justify-between px-6 sm:px-[7.5rem] py-4">
        {/* Logo */}
        <div className="flex items-center md:-ml-8" style={{ marginLeft: '0px' }}>
          <Link href="/" className="flex items-center">
            <Logo className="w-8 h-8" />
          </Link>
        </div>

        {/* Right Side Navigation Group */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Desktop Nav Links */}
          <div className="flex items-center space-x-8">
            {navLinks.map(({ name, href, hasDropdown }) => {
            const isActive = pathname === href;
              
              if (hasDropdown && name === "Pathway") {
                return (
                  <div key={name} className="relative">
                    <button
                      onClick={togglePathwayDropdown}
                      className="flex items-center space-x-1"
                      style={{
                        color: '#3A3A3A',
                        fontFamily: '"M PLUS 1", sans-serif',
                        fontSize: '18px',
                        fontWeight: isActive ? '600' : '400',
                        transition: 'font-weight 0.2s ease'
                      }}
                    >
                      
                      <span>{name}</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 4.5L6 7.5L9 4.5" stroke="#3A3A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    
                    {/* Pathway Dropdown */}
                    <div 
                      className={`absolute top-full left-0 mt-6 transition-all duration-200 ease-in-out transform ${
                        pathwayDropdownOpen 
                          ? 'opacity-100 translate-y-0 scale-100' 
                          : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                      }`}
                      style={{
                        minWidth: '280px',
                        zIndex: 1000,
                        backgroundColor: isHomePage ? 'white' : (isTransparentNavbar ? '#3A3A3A' : 'white'),
                        borderRadius: isTransparentNavbar ? '12px' : '8px',
                        boxShadow: isHomePage ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : (isTransparentNavbar ? 'none' : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'),
                        border: isTransparentNavbar ? '1px solid #3A3A3A' : '1px solid #e5e7eb',
                        padding: '16px 24px'
                      }}
                    >
                        {/* Header */}
                        <div 
                          className="mb-4"
                          style={{
                            color: isHomePage ? '#2A2A2A' : (isTransparentNavbar ? 'white' : '#2A2A2A'),
                            fontFamily: '"M PLUS 1", sans-serif',
                            fontSize: '18px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal'
                          }}
                        >
                          Your Pathway to Product
                        </div>
                        
                        {/* Steps */}
                        <div className="space-y-4">
                          {/* Step 1 */}
                          <div>
                            <Link 
                              href="/Step1"
                              className="block"
                              onClick={() => setPathwayDropdownOpen(false)}
                            >
                              <div
                                style={{
                                  color: isTransparentNavbar ? 'white' : '#2A2A2A',
                                  fontFamily: '"M PLUS 1", sans-serif',
                                  fontSize: '18px',
                                  fontStyle: 'normal',
                                  fontWeight: 400,
                                  lineHeight: 'normal',
                                  marginBottom: '4px'
                                }}
                              >
                                Step 1: Fellowship
                              </div>
                              <div
                                style={{
                                  color: '#9966B7',
                                  fontFamily: '"M PLUS 1", sans-serif',
                                  fontSize: '14px',
                                  fontStyle: 'normal',
                                  fontWeight: 400,
                                  lineHeight: '32px'
                                }}
                              >
                                Learning Product Management
                              </div>
                            </Link>
                          </div>
                          
                          {/* Step 2 */}
                          <div>
                            <Link 
                              href="/Step2"
                              className="block"
                              onClick={() => setPathwayDropdownOpen(false)}
                            >
                              <div
                                style={{
                                  color: isTransparentNavbar ? 'white' : '#2A2A2A',
                                  fontFamily: '"M PLUS 1", sans-serif',
                                  fontSize: '18px',
                                  fontStyle: 'normal',
                                  fontWeight: 400,
                                  lineHeight: 'normal',
                                  marginBottom: '4px'
                                }}
                              >
                                Step 2: Capstone
                              </div>
                              <div
                                style={{
                                  color: '#9966B7',
                                  fontFamily: '"M PLUS 1", sans-serif',
                                  fontSize: '14px',
                                  fontStyle: 'normal',
                                  fontWeight: 400,
                                  lineHeight: '32px'
                                }}
                              >
                                Practicing Product Management
                              </div>
                            </Link>
                          </div>
                          
                          {/* Step 3 */}
                          <div>
                            <Link 
                              href="/Step3"
                              className="block"
                              onClick={() => setPathwayDropdownOpen(false)}
                            >
                              <div
                                style={{
                                  color: isTransparentNavbar ? 'white' : '#2A2A2A',
                                  fontFamily: '"M PLUS 1", sans-serif',
                                  fontSize: '18px',
                                  fontStyle: 'normal',
                                  fontWeight: 400,
                                  lineHeight: 'normal',
                                  marginBottom: '4px'
                                }}
                              >
                                Step 3: Client
                              </div>
                              <div
                                style={{
                                  color: '#9966B7',
                                  fontFamily: '"M PLUS 1", sans-serif',
                                  fontSize: '14px',
                                  fontStyle: 'normal',
                                  fontWeight: 400,
                                  lineHeight: '32px'
                                }}
                              >
                                Applying Product Management
                              </div>
                            </Link>
                          </div>
                          
                          {/* Step 4 */}
                          <div>
                            <Link 
                              href="/Step4"
                              className="block"
                              onClick={() => setPathwayDropdownOpen(false)}
                            >
                              <div
                                style={{
                                  color: isTransparentNavbar ? 'white' : '#2A2A2A',
                                  fontFamily: '"M PLUS 1", sans-serif',
                                  fontSize: '18px',
                                  fontStyle: 'normal',
                                  fontWeight: 400,
                                  lineHeight: 'normal',
                                  marginBottom: '4px'
                                }}
                              >
                                Step 4: Product
                              </div>
                              <div
                                style={{
                                  color: '#9966B7',
                                  fontFamily: '"M PLUS 1", sans-serif',
                                  fontSize: '14px',
                                  fontStyle: 'normal',
                                  fontWeight: 400,
                                  lineHeight: '32px'
                                }}
                              >
                                Working Product Management
                              </div>
                            </Link>
                          </div>
                        </div>
                    </div>
                  </div>
                );
              }
              
              return (
                <Link key={name} href={href} className="flex items-center space-x-1">
                <span
                    style={{
                      color: '#3A3A3A',
                      fontFamily: '"M PLUS 1", sans-serif',
                      fontSize: '18px',
                      fontWeight: isActive ? '600' : '400',
                      transition: 'font-weight 0.2s ease'
                    }}
                >
                  {name}
                </span>
              </Link>
            );
          })}
          </div>

          {/* Join Us Button */}
          <Link 
            href="/join"
            className="flex items-center px-6 py-3 text-white font-medium transition-all hover:opacity-90"
            style={{
              backgroundColor: '#66417B',
              borderRadius: '20px',
              fontFamily: '"M PLUS 1", sans-serif',
              fontSize: '16px'
            }}
          >
            <span className="mr-2 -mt-0.5">Join us!</span>
            <ArrowIcon className="w-8 h-8" style={{ minWidth: '32px', minHeight: '32px' }} />
          </Link>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden ml-auto z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <NavMenu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white opacity-[85%] z-40 flex flex-col items-center justify-center space-y-8 text-[22px] text-gray-800 font-medium md:hidden">
          <Link
            href="/home_new"
            onClick={() => setMenuOpen(false)}
            className={`transition-all ${
              pathname === '/home_new' ? "font-bold underline" : "hover:font-bold"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about_new"
            onClick={() => setMenuOpen(false)}
            className={`transition-all ${
              pathname === '/about_new' ? "font-bold underline" : "hover:font-bold"
            }`}
          >
            About
          </Link>
          <Link
            href="/application"
            onClick={() => setMenuOpen(false)}
            className={`transition-all ${
              pathname === '/application' ? "font-bold underline" : "hover:font-bold"
            }`}
          >
            Apply
          </Link>
        </div>
      )}
    </nav>
  );
}
