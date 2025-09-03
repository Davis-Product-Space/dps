"use client";

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

        <div
          style={{
            width: '587.988px',
            height: '518.978px',
            flexShrink: 0,
            justifyContent: 'center'
          }}
        >
          <img
            src="/images/FellowshipStaircase.svg"
            alt="Fellowship Staircase"
            className="w-full h-full object-contain"
          />
        </div>

        <div
          style={{
            //width: '1734.396px',
            height: '712.434px',
            alignSelf: 'stretch'
            }}
        >
          <img
            src="/images/StaircaseVector-step1.svg"
            alt="Step 1 Staircase Vector"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

    </main>
  );
}