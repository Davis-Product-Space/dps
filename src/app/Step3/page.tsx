"use client";

import ProjectCarousel from "@/components/PathwaySteps/projectCarousel";
import ContactForm from "@/components/ContactForm";
import { clientProjects } from "@/data/24-25ProductSpace/clients/clientProjects";

export default function Step3Page() {
  return (
    <main className="min-h-screen bg-[#FDFAFF] text-[#3a3a3a] flex flex-col items-center justify-center">

      {/* 1. Header Section */}
      <section
        className="mt-[177px]"
        style={{
          height: '1230px',
          alignSelf: 'stretch'
        }}
      >
        {/* Step 3: Client */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '21px',
            justifyContent: 'center',
            width: '100%'
          }}
        >
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
            Step 3:
          </div>

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
            Client
          </div>
        </div>

        <div className="StepStaircase">
          {/* Client Staircase Image */}
          <div
            className="absolute"
            style={{
              left: '440px',
              top: '350px',
              zIndex: 3
            }}
          >
            <img
              src="/images/Client_Staricase.png"
              alt="Client Staircase"
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
              top: '717px',
              zIndex: 2
            }}
          >
            <img
              src="/images/homepage_background.svg"
              alt="Homepage Background"
              style={{
                transform: 'scale(2.2)',
                transformOrigin: 'center'
              }}
            />
          </div>

          {/* Homepage Background Gradient SVG */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{
              top: '717px',
              zIndex: 1
            }}
          >
            <img
              src="/images/homepage_bg_gradient.svg"
              alt="Homepage Background Gradient"
              style={{
                transform: 'scale(2.1)',
                transformOrigin: 'center'
              }}
            />
          </div>
        </div>
      </section>

      {/* 2. What is Client image section */}
      <section className="relative">
        <img
          src="/images/step3WhatIsClient.jpg"
          alt="What is Client"
          className="w-full h-auto"
        />

        {/* Pink/purple gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(102, 65, 123, 0.7) 0%, rgba(166, 116, 196, 0.3) 40%, transparent 70%)'
          }}
        />

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
          What is the Client Project?
        </div>
      </section>

      {/* 3. Text about the Client */}
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
              }}
            >
              The Client Project is the next step in your product journey. You'll work directly with a real company to solve real problems — applying the skills you built during Fellowship and Capstone to deliver product recommendations to an actual client. It's the closest thing to working as a product manager before you land your first role.
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
              Client Presentations
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
              At the end of the Client Project, teams present their findings and product recommendations directly to the client. You'll share the research, strategy, and designs you've developed over the course of the project. It's a chance to make a real impact and practice presenting like a product manager.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Client Project Archive */}
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
          Client Project Archive
        </div>

        {/* Client Projects */}
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
            Our Winter 2026 Client Projects
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
            Teams worked directly with real companies to deliver product recommendations.
          </div>

          {/* Client Projects Carousel */}
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
              projectTiles={clientProjects}
            />
          </div>
        </div>
      </section>

      {/* 5. Contact Form */}
      <section
        className="relative"
        style={{
          width: '100vw',
          height: 'auto',
          paddingTop: '150px',
          paddingBottom: '120px',
          backgroundColor: '#FAF6FC'
        }}
      >
        <ContactForm />
      </section>
    </main>
  );
}
