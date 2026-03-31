"use client";

import { useRef } from "react";
import { ImageMarqueeDemo } from "@/components/AboutPage/Marquee_new/image-marquee";
// Import the AnimatedProjects component from its file
import { AnimatedProjects } from "@/components/AboutPage/AnimateProjects";
// Import the projects data from your data file
import { projects } from "@/data/24-25ProductSpace/projects-info";

import { board } from "@/data/25-26ProductSpace/board";
import { declassifyTeam } from "@/data/24-25ProductSpace/Spring25Fellows/TeamDeClassify";
import { heardTeam } from "@/data/24-25ProductSpace/Spring25Fellows/TeamHeard";
import { honeTeam } from "@/data/24-25ProductSpace/Spring25Fellows/TeamHone";
import { mooveTeam } from "@/data/24-25ProductSpace/Spring25Fellows/TeamMOOVE";

import FlipProfile from "@/components/AboutPage/FlipProfile";
import StatsCard from "@/components/AboutPage/StatsCard";
import ProfileGrid from "@/components/AboutPage/ProfileGrid";

import ProjectCarousel from "@/components/PathwaySteps/projectCarousel";
import { springProjects } from "@/data/24-25ProductSpace/capstones/springProjects";


export default function AboutNewPage() {
  const spring25Teams = [
    { teamName: "DeClassify", members: declassifyTeam },
    { teamName: "Heard", members: heardTeam },
    { teamName: "Hone", members: honeTeam },
    { teamName: "MOOVE", members: mooveTeam },
  ];
  return (
    <div className="w-full bg-[#FAF6FC]" style={{ paddingBottom: '150px' }}>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/images/capstone-pic.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Text positioned 10% from the top of the screen */}
        <div 
          className="relative z-10 flex justify-center w-full h-full px-8"
          style={{ paddingTop: '20vh' }}
        >
          <h1 
            style={{
              color: '#FFF',
              fontFamily: 'Inter',
              fontSize: '60px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '73.125px',
              textAlign: 'center'
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
        <div className="flex justify-center">
          <div style={{ width: '900px' }}>
            <h2 
              style={{
                color: '#000000',
                textAlign: 'center',
                fontFamily: 'Inter',
                fontSize: '36px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '48.75px',
                marginBottom: '71px'
              }}
            >
              Meet the Board!
            </h2>
          </div>
        </div>
        <div className="flex justify-center px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full justify-items-center">
              {board.map((member, i) => (
                <FlipProfile key={i} {...member} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Meet the Spring 2025 Fellows - commented out, not used this cycle */}
      {/* <section
        className="flex justify-center px-4 sm:px-8 md:px-16 lg:px-32"
        style={{
          paddingTop: '150px',
          paddingBottom: '150px',
          alignItems: 'center',
          gap: '10px',
          alignSelf: 'stretch'
        }}
      >
          <div
            className="w-full max-w-5xl"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '52px'
            }}
          >
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
               Meet the Spring 2025 Fellows!
             </h2>

           {spring25Teams.map((team, teamIndex) => (
             <div key={teamIndex} style={{ alignSelf: 'stretch' }}>
               <h3
                 style={{
                   color: '#3A3A3A',
                   textAlign: 'center',
                   fontFamily: '"M PLUS 1"',
                   fontSize: '22.5px',
                   fontStyle: 'normal',
                   fontWeight: 600,
                   lineHeight: '32px',
                   marginBottom: '32px'
                 }}
               >
                 Team {team.teamName}
               </h3>
               <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-[25px] w-full justify-items-center">
                 {team.members.map((member, i: number) => (
                   <FlipProfile key={`${team.teamName}-${i}`} {...member} />
                 ))}
               </div>
             </div>
           ))}

         </div>
     </section> */}

        
        {/* New section below Fellows */}
        <section className="flex flex-col justify-center" style={{ marginTop: '180px' }}>
          <div className="flex justify-center">
            <div style={{ width: '900px' }}>
              <h2 
                style={{
                  color: '#3A3A3A',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '40px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '48.75px',
                  marginBottom: '71px'
                }}
              >
                Here are the Spring Projects!
              </h2>
            </div>
          </div>
          <div className="flex justify-center">
            <ProjectCarousel 
                  projectTiles={springProjects}
            /> 
          </div>
        </section>
    </div>
  );
}