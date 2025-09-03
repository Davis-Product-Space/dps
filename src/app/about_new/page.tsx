"use client";

import { useRef } from "react";
import { ImageMarqueeDemo } from "@/components/AboutPage/Marquee_new/image-marquee";
// Import the AnimatedProjects component from its file
import { AnimatedProjects } from "@/components/AboutPage/AnimateProjects";
// Import the projects data from your data file
import { projects } from "@/data/ProductSpace24-25/projects-info";

import { board } from "@/data/ProductSpace24-25/board";
import { previewTeam } from "@/data/ProductSpace24-25/Fellows/TeamPreview";
import { syncTeam } from "@/data/ProductSpace24-25/Fellows/TeamSync";
import { curateTeam } from "@/data/ProductSpace24-25/Fellows/TeamCurate";
import { scrapsTeam } from "@/data/ProductSpace24-25/Fellows/TeamScraps";

import FlipProfile from "@/components/AboutPage/FlipProfile";
import StatsCard from "@/components/AboutPage/StatsCard";
import ProfileGrid from "@/components/AboutPage/ProfileGrid";

export default function AboutNewPage() {
  return (
    <div className="w-full bg-white">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/images/capstone-pic.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Text positioned exactly as specified */}
        <div 
          className="relative z-10"
          style={{
            position: 'absolute',
            top: '185.25px',
            left: '327px'
          }}
        >
          <h1 
            style={{
              color: '#FFF',
              fontFamily: 'Inter',
              fontSize: '60px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '73.125px'
            }}
          >
            Meet Davis Product Space!
          </h1>
        </div>
      </div>
      <section className="flex justify-center" style={{ marginTop: '90px' }}>
        <div style={{ width: '900px' }}>
          <h2 
            style={{
              color: '#3A3A3A',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '48.75px'
            }}
          >
            Who We Are
          </h2>
          <p 
            style={{
              color: '#3A3A3A',
              textAlign: 'center',
              fontFamily: 'var(--font-m-plus-1)',
              fontSize: '22.5px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '32px',
              marginTop: '10px'
            }}
          >
            At Product Space, we're a national community of students with a mission to become the world's next generation of product leaders.
          </p>
        </div>
      </section>
      <section style={{ marginTop: '31px' }}>
          <ImageMarqueeDemo />
      </section>
      
      {/* New section 184px below marquee */}
      <section style={{ marginTop: '184px' }}>
        <div id="section3" className="flex justify-center">
          <div style={{ width: '1440px' }}>
          <div className="text-left max-w-3xl space-y-4" style={{ paddingLeft: '203px', paddingRight: '202px' }}>
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold mb-8 whitespace-nowrap text-left w-full">
              Meet the Board!
            </h2>
            <p className="text-[20px] font-medium leading-normal mb-8">Leadership</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[25px] w-full" style={{ paddingLeft: '203px', paddingRight: '202px' }}>
            {board.map((member, i) => (
              <FlipProfile key={i} {...member} />
            ))}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

