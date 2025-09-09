"use client";

import StepsStaircase from "@/components/StepsStaircase";

export default function Step1Page() {
  return (
    <main className="min-h-screen bg-[#FDFAFF] text-[#3a3a3a] flex flex-col items-center justify-center">
      
      {/* 1. First Section */}
      <section 
        className="mt-[77px]"
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

        <StepsStaircase 
          className="w-full h-full"
          topSvgSrc="/images/StaircaseVector-step1.svg"
          bottomSvgSrc="/images/FellowshipStaircase.svg"
          topSvgAlt="Step 1 Staircase Vector"
          bottomSvgAlt="Fellowship Staircase"
        />

      </section>
    </main>
  );
}