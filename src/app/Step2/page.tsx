"use client";

import Image from "next/image";
import StepsStaircase from "@/components/StepsStaircase";
import FlipProfile from "@/components/AboutPage/FlipProfile";
import ProjectCarousel from "@/components/PathwaySteps/projectCarousel";

import { declassifyTeam } from "@/data/ProductSpace24-25/Spring25Fellows/TeamDeClassify";
import { heardTeam } from "@/data/ProductSpace24-25/Spring25Fellows/TeamHeard";
import { honeTeam } from "@/data/ProductSpace24-25/Spring25Fellows/TeamHone";
import { mooveTeam } from "@/data/ProductSpace24-25/Spring25Fellows/TeamMOOVE";

import { curateTeam } from "@/data/ProductSpace24-25/Fall24Fellows/TeamCurate";
import { previewTeam } from "@/data/ProductSpace24-25/Fall24Fellows/TeamPreview";
import { scrapsTeam } from "@/data/ProductSpace24-25/Fall24Fellows/TeamScraps";
import { syncTeam } from "@/data/ProductSpace24-25/Fall24Fellows/TeamSync";

import { springProjects } from "@/data/capstones/springProjects";
import { fallProjects } from "@/data/capstones/fallProjects";


export default function Step2Page() {

  return (
    <main className="min-h-screen bg-[#FDFAFF] text-[#3a3a3a] flex flex-col items-center justify-center">
      
      {/* 1. First Section */}
      <section 
        className="mt-[177px]"
        style={{
          height: '1230px',
          alignSelf: 'stretch'
        }}
      >
        {/*Step1: Capstone*/}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '21px',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          {/* First text box */}
          <div
            style={{
              color: '#3A3A3A',
              fontFamily: 'Inter',
              fontSize: '80px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '97.5px'
            }}
          >
            Step 2:
          </div>
          
          {/* Second text box */}
          <div
            style={{
              fontFamily: 'Inter',
              fontSize: '80px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '97.5px',
              background: 'linear-gradient(75deg, #D5A6D8 9.75%, #A674C4 33.03%, #66417B 87.51%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Capstone
          </div>
        </div>

        {/*TODO: make this into a component*/}    
        <div className="StepStaircase">
            {/* Homepage PS Logo SVG */}
            <div 
            className="absolute"
            style={{
                left: '440px', // Left edge positioned exactly 519.42px from left side of page
                top: '360px', // 177px (text position) + 80px = 257px
                zIndex: 3 // Ensures it appears above both background SVGs
            }}
            >
            <img 
                src="/images/CapstoneStaircase.svg" 
                alt="Product School Logo"
                style={{
                width: '663px',
                height: '627px'
                }}
            />
            </div>
            
            {/* Homepage Background SVG */}
            <div 
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{
                top: '717px', // 177px (text position) + 540px = 717px
                zIndex: 2 // Ensures it appears below the gradient SVG
            }}
            >
            <img 
                src="/images/homepage_background.svg" 
                alt="Homepage Background"
                style={{
                transform: 'scale(2)', // This will make it 2x bigger
                transformOrigin: 'center' // Scale from the center
                }}
            />
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
        </div>
      </section>

      {/*2. What is Capstone image section*/}
      <section className="relative">
        <img
          src="/images/step2WhatIsCapstone.png"
          alt="What is Fellowship"
          className="w-full h-auto"
        />
        
        {/* Text overlay on top of imagein bottom left corner */}
        <div
          className="absolute"
          style={{
            left: '20px',
            bottom: '15px',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '100px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '97.5px'
          }}
        >
          What is the Capstone?
        </div>
      </section>

      

      {/*3. Text abt the capstone!*/}
      <section
        style={{
          display: 'flex',
          padding: '150px',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '150px',
          alignSelf: 'stretch'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '150px',
            width: '100%',
            backgroundColor: '#F8F9FA',
            padding: '50px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '10px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              width: '1020px'
            }}
          >
            <div
              style={{
                color: '#3A3A3A',
                fontFamily: '"M PLUS 1"',
                fontSize: '22.5px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '32px'
                //width: '1020px'
              }}
            >
              The Capstone is where you put it all together. Over seven weeks, you'll work in a small team to take an idea through the full product lifecycle with guidance from an industry mentor. Along the way, you'll develop practical skills to carry you into future projects, internships, and roles. No coding skills required.
            </div>
          </div>
          
          <div
            style={{
              display: 'flex',
              width: '1020px',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '25px'
            }}
          >
            <div
              style={{
                color: '#3A3A3A',
                fontFamily: 'Inter',
                fontSize: '40px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '48.75px'
              }}
            >
              Capstone Presentations
            </div>
            
            <div
              style={{
                alignSelf: 'stretch',
                color: '#3A3A3A',
                fontFamily: '"M PLUS 1"',
                fontSize: '22.5px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '32px'
              }}
            >
              At the end of Fellowship, teams pitch their Capstone projects to a panel of product managers & professionals. You'll share the product ideas you've researched, designed, and refined over seven weeks. It's a chance to celebrate what you've built and practice presenting like a product manager.
            </div>
          </div>
        </div>
     </section>

    {/*4 Capstone Archive*/}
    <section
       style={{
         display: 'flex',
         padding: '150px 0',
         flexDirection: 'column',
         alignItems: 'flex-start',
         gap: '50px',
         alignSelf: 'stretch',
         background: ''
       }}
    >
        <div
           style={{
             color: '#3A3A3A',
             textAlign: 'center',
             fontFamily: 'Inter',
             fontSize: '60px',
             fontStyle: 'normal',
             fontWeight: 600,
             lineHeight: 'normal',
             alignSelf: 'stretch'
           }}
        >
           Capstone Archive
        </div>
        
        {/* Spring Projects */}
        <div
          style={{
            display: 'flex',
            width: '1440px',
            padding: '0 123px',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '25px'
          }}
        >
          <div
            style={{
              color: '#3A3A3A',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal'
            }}
          >
            Our Spring 2025 Projects
          </div>
          
          <div
            style={{
              color: '#3A3A3A',
              textAlign: 'center',
              fontFamily: '"M PLUS 1"',
              fontSize: '22.5px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal'
            }}
          >
            Prompt: Ideate and design a software product to improve the experience of a UC Davis student.
          </div>
          
          {/* Spring Projects Carousel */}
          <div
            style={{
              display: 'flex',
              width: '1440px',
              height: '618px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '15px',
              position: 'relative',
              zIndex: 10
            }}
          >
            <ProjectCarousel 
                projectTiles={springProjects}
            />
          </div>
        </div>

        {/* Fall Projects */}
        <div
          style={{
            display: 'flex',
            width: '1440px',
            padding: '0 123px',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '25px'
          }}
        >
          <div
            style={{
              color: '#3A3A3A',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal'
            }}
          >
            Our Fall 2024 Projects
          </div>
          
          <div
            style={{
              color: '#3A3A3A',
              textAlign: 'center',
              fontFamily: '"M PLUS 1"',
              fontSize: '22.5px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal'
            }}
          >
            Prompt: Develop a product enhancement for one of Meta’s social platforms.          </div>
          
          {/* Fall Projects Carousel */}
          <div
            style={{
              display: 'flex',
              width: '1440px',
              height: '618px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '15px'
            }}
          >
            <ProjectCarousel 
                projectTiles={fallProjects}
            />            
          </div>
        </div>
        
    </section>
    </main>
  );
}