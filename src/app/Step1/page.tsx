"use client";

import Link from "next/link";
import FlipProfile from "@/components/AboutPage/FlipProfile";
import ArrowIcon from "@/assets/icons/arrow_function.svg";

import { speakers } from "@/data/25-26ProductSpace/speakers";

import { declassifyTeam } from "@/data/24-25ProductSpace/Spring25Fellows/TeamDeClassify";
import { heardTeam } from "@/data/24-25ProductSpace/Spring25Fellows/TeamHeard";
import { honeTeam } from "@/data/24-25ProductSpace/Spring25Fellows/TeamHone";
import { mooveTeam } from "@/data/24-25ProductSpace/Spring25Fellows/TeamMOOVE";

import { curateTeam } from "@/data/24-25ProductSpace/Fall24Fellows/TeamCurate";
import { previewTeam } from "@/data/24-25ProductSpace/Fall24Fellows/TeamPreview";
import { scrapsTeam } from "@/data/24-25ProductSpace/Fall24Fellows/TeamScraps";
import { syncTeam } from "@/data/24-25ProductSpace/Fall24Fellows/TeamSync";

//import { mentors } from "@/data/25-26Mentors";




export default function Step1Page() {
  const weeklyWorkshops = [
    { week: "Week 0", title: "Introduction to Product Management" },
    { week: "Week 1", title: "User Research & Product Definition" },
    { week: "Week 2", title: "Competitive & Market Analysis" },
    { week: "Week 3", title: "Prioritization & Feasibility" },
    { week: "Week 4", title: "PM Documentation Essentials" },
    { week: "Week 5", title: "Product Design Fundamentals" },
    { week: "Week 6", title: "Usability Testing & Iteration" },
    { week: "Week 7", title: "Go-to-Market Strategy & Marketing" }
  ];

  const spring25Teams = [
    { teamName: "DeClassify", members: declassifyTeam },
    { teamName: "Heard", members: heardTeam },
    { teamName: "Hone", members: honeTeam },
    { teamName: "MOOVE", members: mooveTeam },
  ];

  const fall24Teams = [
    { teamName: "Curate", members: curateTeam },
    { teamName: "Preview", members: previewTeam },
    { teamName: "Scraps", members: scrapsTeam },
    { teamName: "Sync", members: syncTeam },
  ];

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
        {/*Step1: Fellowship*/}
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
            Step 1:
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
            Fellowship
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
                src="/images/FellowshipStaircase.svg" 
                alt="Product School Logo"
                style={{
                width: '688px',
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

      {/*2. What is fellowship image section*/}
      <section className="relative">
        <img
          src="/images/step1WhatIsFellowship.png"
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
          What is the Fellowship?
        </div>
      </section>

        {/*3. Large Section all about Fellowship*/}
        <section
          style={{
            display: 'flex',
            padding: '150px 210px',
            alignItems: 'center',
            gap: '10px',
            alignSelf: 'stretch',
            background: '#FAF6FC'
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '1020px',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '150px'
            }}
          >
            {/*First div*/}
            <p
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
              The Fellowship is an immersive, hands-on program in which you learn product management by doing product management. Over the course of seven weeks, fellows attend workshops led by industry professionals and gain exposure to the tools, frameworks, and thinking needed to take a product from idea to launch.
            </p>
            
             {/*2nd div*/}
            <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '52px',
                  alignSelf: 'stretch'
                }}
            >
                {/* First sub div */}
                <div
                  style={{
                    display: 'flex',
                    width: '368px',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '25px'
                  }}
                >
                  <h3
                    style={{
                      color: '#3A3A3A',
                      fontFamily: 'Inter',
                      fontSize: '40px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '48.75px'
                    }}
                  >
                    What You&apos;ll Learn
                  </h3>
                  
                  <p
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
                    Each week of Fellowship takes you through a different stage of the product life cycle. One day is dedicated to an interactive workshop, and the other is a work session where you and your group apply those concepts to your Capstone project.
                  </p>
                </div>
                
                {/* Second sub div */}
                <div
                  style={{
                    display: 'flex',
                    width: '600px',
                    alignItems: 'flex-start',
                    alignContent: 'flex-start',
                    gap: '20px',
                    flexWrap: 'wrap'
                  }}
                >
                  {/* 4x2 Grid of sub components */}
                  {weeklyWorkshops.map((workshop, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        width: '290px',
                        padding: '20px',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flexShrink: 0,
                        borderRadius: '10px',
                        background: '#FFF'
                      }}
                    >
                      <p
                        style={{
                          alignSelf: 'stretch',
                          color: '#3A3A3A',
                          fontFamily: '"M PLUS 1"',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: 'normal'
                        }}
                      >
                        {workshop.week}
                      </p>
                      
                      <p
                        style={{
                          alignSelf: 'stretch',
                          color: '#3A3A3A',
                          fontFamily: '"M PLUS 1"',
                          fontSize: '22.5px',
                          fontStyle: 'normal',
                          fontWeight: 700,
                          lineHeight: '32px'
                        }}
                      >
                        {workshop.title}
                      </p>
                    </div>
                  ))}
                </div>
            </div>

          {/*3rd div*/}
          <div
           style={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'flex-start',
               gap: '50px',
               alignSelf: 'stretch'
           }}
           >
               {/* First sub div */}
               <div
                 style={{
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'flex-start',
                   gap: '25px',
                   alignSelf: 'stretch'
                 }}
               >
                 <h3
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
                   Who You&apos;ll Learn From
                 </h3>
                 
                 <p
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
                   You&apos;ll learn directly from people who do this work every day. Our workshop speakers and Capstone mentors are from the world&apos;s top technology companies. Our speakers lead workshops case-study style, walking you through real problems they&apos;ve solved on the job. For the Capstone, you&apos;ll work closely with mentors who provide one-on-one guidance as you and your team bring your product to life.
                 </p>
               </div>
               
               {/* Second sub div */}
               <div
                 style={{
                   display: 'grid',
                   gridTemplateColumns: 'repeat(4, 1fr)',
                   gap: '40px 40px',
                   rowGap: '120px',
                   alignSelf: 'stretch'
                 }}
               >
                 {/* 2x4 Grid of mentor images */}
                 {speakers.map((speaker, index) => (
                   <div key={index} style={{ width: '225px', height: '225px' }}>
                     <FlipProfile 
                       name={speaker.name}
                       title={`${speaker.title} @ ${speaker.company}`}
                       imageSrc={speaker.imageSrc}
                       backImageSrc={speaker.backImageSrc}
                     />
                   </div>
                 ))}
               </div>
          </div>
          
          {/*4rd div*/}
          <div
             style={{
               display: 'flex',
               width: '900px',
               flexDirection: 'column',
               alignItems: 'center',
               gap: '50px'
             }}
           >
             {/* First sub div */}
             <div
               style={{
                 width: '900px',
                 height: '138px',
                 display: 'flex',
                 flexDirection: 'column',
                 gap: '25px'
               }}
             >
               <h3
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
                 Join Us!
               </h3>
               
               <p
                 style={{
                   width: '900px',
                   color: '#3A3A3A',
                   textAlign: 'center',
                   fontFamily: '"M PLUS 1"',
                   fontSize: '22.5px',
                   fontStyle: 'normal',
                   fontWeight: 400,
                   lineHeight: '32px'
                 }}
               >
                 Fellowship applications open Week 1 of the Fall Quarter for all UC Davis students! <br />
                 Keep an eye out for recruitment events on our Instagram @davisproductspace!
               </p>
             </div>
             
             {/* Second sub div */}
             <Link
               href="/application"
               style={{
                 display: 'flex',
                 padding: '12px 20px',
                 alignItems: 'center',
                 gap: '15px',
                 borderRadius: '20px',
                 background: '#66417B',
                 textDecoration: 'none',
                 cursor: 'pointer'
               }}
               className="hover:bg-[#5a3769] transition-colors"
             >
               <span
                 style={{
                   color: '#FAF6FC',
                   textAlign: 'center',
                   fontFamily: '"M PLUS 1"',
                   fontSize: '22.5px',
                   fontStyle: 'normal',
                   fontWeight: 400,
                   lineHeight: '22.5px'
                 }}
               >
                 Apply Now!
               </span>
               
               <ArrowIcon className="w-8 h-8" style={{ minWidth: '32px', minHeight: '32px', transform: 'translateY(2px)' }} />
             </Link>
          </div>
          
        </div>
      </section>

      {/*4. Meet the spring 2025 fellows!*/}
      <section
        style={{
          display: 'flex',
          padding: '150px 210px',
          alignItems: 'center',
          gap: '10px',
          alignSelf: 'stretch'
        }}
      >
          <div
            style={{
              display: 'flex',
              width: '1020px',
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
               <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-[25px] w-full">
                 {team.members.map((member, i: number) => (
                   <FlipProfile key={`${team.teamName}-${i}`} {...member} />
                 ))}
               </div>
             </div>
           ))}
          
         </div>
     </section>

      {/*5. Meet the fall 2024 fellows!*/}
      <section
       style={{
         display: 'flex',
         padding: '150px 210px',
         alignItems: 'center',
         gap: '10px',
         alignSelf: 'stretch'
       }}
     >
         <div
           style={{
             display: 'flex',
             width: '1020px',
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
              Meet the Fall 2024 Fellows!
            </h2>
          
           {fall24Teams.map((team, teamIndex) => (
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
               <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-[25px] w-full">
                 {team.members.map((member, i: number) => (
                   <FlipProfile key={`${team.teamName}-${i}`} {...member} />
                 ))}
               </div>
             </div>
           ))}
          
         </div>
     </section>
    </main>
  );
}