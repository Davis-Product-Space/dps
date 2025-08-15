"use client";

import Image from "next/image";
import { ImageMarqueeDemo } from "@/components/AboutPage/Marquee/image-marquee";
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
import ProfileGrid from "@/components/AboutPage/ProfileGrid";

export default function JoinNewPage() {
  return (
    <main className="min-h-screen bg-[#FDFAFF] text-[#3a3a3a] flex flex-col items-center justify-center">
      {/* background image */}
      <section 
        className="relative w-[1549px] h-[1023px] flex-shrink-0"
        style={{ aspectRatio: "374/247" }}
      >
        {/* Background image that spans the entire section */}
        <img
          src="/images/join-header-pic.png"
          alt="Join header background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Content overlay - you can add text or other elements here */}
        <div className="absolute top-[225.25px] left-1/2 transform -translate-x-1/2 z-10 text-center">
          <h1 className="text-white font-inter text-[60px] font-semibold leading-[73.125px]">
            Join Product Space!
          </h1>
        </div>
        <div className="absolute top-[312.125px] left-1/2 transform -translate-x-1/2 z-10 inline-flex px-5 py-3 items-center gap-[15px] rounded-[20px] bg-[#66417B]">
          <span className="text-[#FAF6FC] text-center font-['M_PLUS_1'] text-[22.5px] font-normal leading-[22.5px]">
            Fellowship Applications Open!
          </span>
            <Image 
              src="src/assets/icons/click-arrow-right.svg" 
              alt="Click arrow right"
              width={34.56}
              height={34.56}
              className="w-[34.56px] h-[34.56px]"
            />
        </div>
      </section>
      
      {/* Recruitment Process Section*/}
      <section className="mt-[71px]">
        <div 
          className="inline-flex flex-col justify-center items-center"
          style={{
            padding: '0 188px',
            gap: '30px'
          }}
        >
          <h2 
            className="text-center font-inter text-[40px] font-semibold leading-[48.75px]"
            style={{ color: '#3A3A3A' }}
          >
            Recruitment Process
          </h2>
          {/* Process Details Section */}
          <div 
            className="flex flex-col items-start"
            style={{
              width: '1064px',
              gap: '21px'
            }}
          >
                         {/* Step List */}
             <div 
               className="flex flex-col items-center"
               style={{
                 marginTop: '30px',
                 gap: '68px'
               }}
             >
                               {/* Step 1 */}
                <div className="flex items-start" style={{ width: '922px' }}>
                  <h3 
                    className="font-inter text-[32px] font-semibold leading-[48.75px]"
                    style={{ 
                      color: '#3A3A3A', 
                      whiteSpace: 'nowrap',
                      flexShrink: 0
                    }}
                  >
                    Step 1: Questionnaire
                  </h3>
                  <p 
                    className="font-['M_PLUS_1'] text-[22.5px] font-normal leading-[32px]"
                    style={{ 
                      color: '#3A3A3A',
                      width: '644px',
                      flexShrink: 0,
                      marginLeft: '90px'
                    }}
                  >
                    Answer 2 300 word questions on the application form here by DATE/XXX so we can get to know you! This should take about 30 minutes to complete.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex items-start" style={{ width: '922px' }}>
                  <h3 
                    className="font-inter text-[32px] font-semibold leading-[48.75px]"
                    style={{ 
                      color: '#3A3A3A', 
                      whiteSpace: 'nowrap',
                      flexShrink: 0
                    }}
                  >
                    Step 2: Product Pitch
                  </h3>
                  <p 
                    className="font-['M_PLUS_1'] text-[22.5px] font-normal leading-[32px]"
                    style={{ 
                      color: '#3A3A3A',
                      width: '644px',
                      flexShrink: 0,
                      marginLeft: '90px'
                    }}
                  >
                    After reading your applications, we will invite you to an hour-long product pitch session where you&apos;ll get a preview of what you&apos;ll do during the fellowship!
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex items-start" style={{ width: '922px' }}>
                  <h3 
                    className="font-inter text-[32px] font-semibold leading-[48.75px]"
                    style={{ 
                      color: '#3A3A3A', 
                      whiteSpace: 'nowrap',
                      flexShrink: 0
                    }}
                  >
                    Step 3: Interviews
                  </h3>
                  <p 
                    className="font-['M_PLUS_1'] text-[22.5px] font-normal leading-[32px]"
                    style={{ 
                      color: '#3A3A3A',
                      width: '644px',
                      flexShrink: 0,
                      marginLeft: '137px'
                    }}
                  >
                    If we think you&apos;d be a good fit after the Product Pitch, you&apos;ll be asked to schedule a short interview as the final stage of the recruitment.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="flex items-start" style={{ width: '922px' }}>
                  <h3 
                    className="font-inter text-[32px] font-semibold leading-[48.75px]"
                    style={{ 
                      color: '#3A3A3A', 
                      whiteSpace: 'nowrap',
                      flexShrink: 0
                    }}
                  >
                    Step 4: Confirmation
                  </h3>
                  <p 
                    className="font-['M_PLUS_1'] text-[22.5px] font-normal leading-[32px]"
                    style={{ 
                      color: '#3A3A3A',
                      width: '644px',
                      flexShrink: 0,
                      marginLeft: '90px'
                    }}
                  >
                    If you&apos;re accepted, you&apos;ll receive an email asking you to confirm your place in the fellowship. Reply to the email to officially join Product Space!
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* hero Section */}
      <section className="md:min-h-screen relative w-full overflow-hidden">
        <img
          src="/images/about-header.svg"
          alt="stacked logos background"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />
        <div className="hidden md:flex w-full absolute bottom-[7rem] z-10 justify-center items-center">
          <ImageMarqueeDemo />
        </div>
      </section>

      {/* Page Container */}
      <div className="w-full px-4 sm:px-[7.5rem]">
        {/* <section className="flex flex-col items-start">
          <p className="text-[#3A3A3A] font-inter text-[16px] font-medium leading-normal">
            Nationwide, Product Space is home to...
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-[60px] space-y-[32px] sm:space-y-0 w-full">
            <StatsCard value="15+" label="Chapters" />
            <StatsCard value="500+" label="Students" />
            <StatsCard value="1000+" label="Alumni" />
          </div>
        </section> */}

        {/* Leadership Section */}
        <section>
          <div className="text-left max-w-3xl space-y-4">
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold mb-8 whitespace-nowrap text-left w-full">
              Meet the Davis Squad!
            </h2>
            <p className="text-[20px] font-medium leading-normal mb-8">Leadership</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {board.map((member, i) => (
              <FlipProfile key={i} {...member} />
            ))}
          </div>
        </section>

        {/* Fall '24 Fellows Section */}
        <section className="flex flex-col justify-between mb-[160px] mt-[80px]">
          <h2 className="text-[12px] sm:text-[20px] md:text-[24px] font-semibold whitespace-nowrap text-left w-full">
            Meet the Fall 2024 Fellows!
          </h2>
          <ProfileGrid
            title="Team Preview"
            data={previewTeam}
            ProfileComponent={FlipProfile}
          />
          <ProfileGrid
            title="Team Scraps"
            data={scrapsTeam}
            ProfileComponent={FlipProfile}
          />
          <ProfileGrid
            title="Team Sync"
            data={syncTeam}
            ProfileComponent={FlipProfile}
          />
          <ProfileGrid
            title="Team Curate"
            data={curateTeam}
            ProfileComponent={FlipProfile}
          />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen justify-center items-center text-left max-w-3xl space-y-4 mt-[144px]">
          <p className="text-[#3A3A3A] text-[16px] font-medium leading-normal">
            Curious about the Capstone? Check out...
          </p>
          <h2 className="mt-[12px] text-[36px] font-semibold leading-normal bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent">
            Our Fall ’24 Projects
          </h2>
          <p className="mt-[16px] text-[#3A3A3A] text-[16px] font-medium leading-normal">
            Prompt: Develop a product enhancement for one of Meta’s social media platforms.
          </p>
          <div className="mt-[48px]">
            <AnimatedProjects projects={projects} />
          </div>
        </section>
      </div>
    </main>
  );
}