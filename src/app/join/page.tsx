"use client";

import Image from "next/image";
import Link from "next/link";
import RecruitmentStep from "@/components/joinPage/RecruitmentStep";
import FAQInstance from "@/components/joinPage/FAQInstance";

export default function JoinNewPage() {
  const faqs = [
    {
      question: "What is Product Space?",
      answer: "Product Space is a student-run product management fellowship that provides hands-on experience in product development."
    },
    {
      question: "How long is the fellowship?",
      answer: "The fellowship runs for one academic quarter, typically 10-12 weeks."
    },
    {
      question: "What are the requirements?",
      answer: "Open to all UC Davis students with a passion for product management and innovation."
    },
    {
      question: "Is there a cost to participate?",
      answer: "The fellowship is completely free for all selected participants."
    },
    {
      question: "What will I learn?",
      answer: "You'll learn product strategy, user research, prototyping, and working with real companies."
    },
    {
      question: "How do I apply?",
      answer: "Fill out the application form and complete the recruitment process outlined above."
    }
  ];
  
  return (
    <main className="min-h-screen bg-[#FDFAFF] text-[#3a3a3a] flex flex-col items-center justify-center">
      
      {/* 1. background image */}
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

      {/* 2. Recruitment Timeline Section*/}
      <section
        style={{
          display: 'flex',
          padding: '150px 0',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '50px',
          alignSelf: 'stretch',
          background: '#FAF6FC'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '25px',
            alignSelf: 'stretch'
          }}
        >
          <h2
            style={{
              alignSelf: 'stretch',
              color: '#3A3A3A',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '48.75px'
            }}
          >
            Recruitment Timeline
          </h2>
          
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
            Interested in joining our fellowship? Something about check out the timeline below to see our recruitment week schedule but im really bad at writing these kind of text on the spot
          </p>
        </div>
        
        <div
          style={{
            height: '821px',
            alignSelf: 'stretch'
          }}
        >
          {/*TODOOO PAste the staircase vector here instead of THE IMAGE*/}
          <img
            src="/images/StaircaseVector.png"
            alt="Recruitment Timeline Staircase"
            className="w-full h-full object-contain"
          />
        </div>
      </section>
      
      {/* 3. Recruitment Process Section*/}
      <section 
        className="mt-[71px] mb-[71px]"
        style={{
          padding: '0 88px'
        }}
      >
        <div
          style={{
            display: 'flex',
            padding: '50px 100px',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '25px',
            borderRadius: '30px',
            background: '#FAF6FC',
            boxShadow: '0 6px 6px 0 rgba(0, 0, 0, 0.25)'
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
              display: 'flex',
              width: '1064px',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '21px',
              color: '#3a3a3a'
            }}
          >
          {/* Step List Map*/}
          <RecruitmentStep 
            title="Step 1: Questionnaire"
            description="Answer 2 300 word questions on the application form &quot;here&quot; by DATE/XXX so we can get to know you! This should take about 30 minutes to complete."
          />
          
          <RecruitmentStep 
            title="Step 2: Product Pitch"
            description="After reading your applications, we will invite you to an hour-long product pitch session where you'll get a preview of what you'll do during the fellowship!"
          />
          
          <RecruitmentStep 
          title="Step 3: Interviews"
          description="If we think you'd be a good fit after the Product Pitch, you'll be asked to schedule a short interview as the final stage of the recruitment."
          />
        
          <RecruitmentStep 
            title="Step 4: Confirmation"
            description="If you're accepted, you'll receive an email asking you to confirm your place in the fellowship. Reply to the email to officially join Product Space!"
          />
        </div>
        </div>
      </section>

      {/* 3. Middle of Page Image*/}
      <section>
        <img
          src="/images/join-mid-page-pic.png"
          alt="Join middle page image"
          className="w-full"
        />

      </section>

      {/* 4. FAQ Section*/}
      <section
        className="mt-[60px]"
        style={{
          width: '1440px',
          height: '972px',
          flexShrink: 0,
          background: '#FAF6FC'
      }}>
        {/* Title */}
        <h2 className="text-center font-inter text-[40px] font-semibold leading-[48.75px] text-[#3A3A3A]">
          Frequently Asked Questions
        </h2>

        {/* Map of 6 components */}
        <div 
          className="mt-[33px] grid grid-cols-2 gap-x-[152px] gap-y-[37px] w-[1064px] mx-auto"
        >
          {faqs.map((faq, index) => (
            <div key={index} className="col-auto row-auto">
              <FAQInstance question={faq.question} answer={faq.answer} />
            </div> 
          ))}
        </div>

        {/* Subtitle */}
        <h3 className="mt-[90px] text-center font-inter text-[32px] font-semibold leading-[48.75px] text-[#3A3A3A]">
          Still have questions?
        </h3>

        {/* Textbox */}
        <div className="mt-[30px] flex justify-center">
          <p className="w-[900px] font-['M_PLUS_1'] text-[22.5px] not-italic font-normal leading-[32px] text-[#3A3A3A]">
            Schedule a coffee chat with one of our board members{" "}
            <Link
              href="/about_new#section3"
              className="text-[#9965B7] underline hover:text-[#7a4e94]"
            >
              here
            </Link>{" "}
            or send us a message through email or Instagram! We’ll get back to you
            within 24 hours and answer any concerns you may have. Coffee chats about the
            application will be open from the beginning of Fall Quarter until Someday
            XX/XX!
          </p>
        </div>
      </section>
    </main>
  );
}