"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ImageMarqueeDemo } from "@/components/AboutPage/Marquee_new/image-marquee";
// Import the AnimatedProjects component from its file
import { AnimatedProjects } from "@/components/AboutPage/AnimateProjects";
// Import the projects data from your data file
import { projects } from "@/data/24-25ProductSpace/projects-info";

import { board } from "@/data/26-27ProductSpace/board";
import { declassifyTeam } from "@/data/24-25ProductSpace/Spring25Fellows/TeamDeClassify";
import { heardTeam } from "@/data/24-25ProductSpace/Spring25Fellows/TeamHeard";
import { honeTeam } from "@/data/24-25ProductSpace/Spring25Fellows/TeamHone";
import { mooveTeam } from "@/data/24-25ProductSpace/Spring25Fellows/TeamMOOVE";

import FlipProfile from "@/components/AboutPage/FlipProfile";
import StatsCard from "@/components/AboutPage/StatsCard";
import ProfileGrid from "@/components/AboutPage/ProfileGrid";

import ProjectCarousel from "@/components/PathwaySteps/projectCarousel";
import { springProjects } from "@/data/24-25ProductSpace/capstones/springProjects";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AmbientGlow } from "@/components/motion/AmbientGlow";


export default function AboutNewPage() {
  const spring25Teams = [
    { teamName: "DeClassify", members: declassifyTeam },
    { teamName: "Heard", members: heardTeam },
    { teamName: "Hone", members: honeTeam },
    { teamName: "MOOVE", members: mooveTeam },
  ];
  return (
    <div className="w-full bg-[#FAF6FC]" style={{ paddingBottom: '150px' }}>
      <AmbientGlow />
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
        
        {/* Text positioned centered in viewport */}
        <div 
          className="relative z-10 flex justify-center items-center w-full h-full px-4 sm:px-8"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-inter text-3xl sm:text-5xl md:text-[60px] font-semibold leading-tight text-center max-w-4xl drop-shadow-md"
          >
            Meet Davis Product Space!
          </motion.h1>
        </div>
      </div>
      <ScrollReveal direction="up" distance={25}>
        <section className="flex justify-center px-4 mt-16 md:mt-[90px]">
          <div className="w-full max-w-[900px] text-center">
            <h2 
              className="text-[#3A3A3A] font-inter text-2xl sm:text-3xl md:text-[40px] font-semibold leading-tight"
            >
              Who We Are
            </h2>
            <p 
              className="text-[#3A3A3A] font-['M_PLUS_1'] text-base sm:text-lg md:text-[22.5px] font-normal leading-relaxed mt-3"
            >
              At Product Space, we're a national community of students with a mission to become the world's next generation of product leaders.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <section className="mt-8 md:mt-[31px]">
          <ImageMarqueeDemo />
      </section>
      
      {/* New section below marquee */}
      <ScrollReveal direction="up" distance={30}>
        <section className="mt-16 md:mt-[184px]">
          <div className="flex justify-center px-4">
            <div className="w-full max-w-[900px] text-center mb-8 md:mb-[71px]">
              <h2 
                className="text-[#000000] font-inter text-2xl sm:text-3xl md:text-[36px] font-semibold leading-tight"
              >
                Meet the Board!
              </h2>
            </div>
          </div>
          <div className="flex justify-center px-4 sm:px-8 md:px-16 lg:px-32">
            <div className="w-full max-w-5xl">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 w-full justify-items-center">
                {board.map((member, i) => (
                  <FlipProfile key={i} {...member} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
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
        <ScrollReveal direction="up" distance={30}>
          <section className="flex flex-col justify-center mt-16 md:mt-[180px] overflow-hidden">
            <div className="flex justify-center px-4">
              <div className="w-full max-w-[900px] text-center mb-8 md:mb-[71px]">
                <h2 
                  className="text-[#3A3A3A] font-inter text-2xl sm:text-3xl md:text-[40px] font-semibold leading-tight"
                >
                  Here are the Spring Projects!
                </h2>
              </div>
            </div>
            <div className="flex justify-center w-full overflow-x-auto pb-4">
              <ProjectCarousel 
                projectTiles={springProjects}
              /> 
            </div>
          </section>
        </ScrollReveal>
    </div>
  );
}