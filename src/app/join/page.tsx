"use client";

import Image from "next/image";
import ArrowIcon from "@/assets/icons/arrow_function.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import RecruitmentStep from "@/components/joinPage/RecruitmentStep";
import FAQInstance from "@/components/joinPage/FAQInstance";
import { TimelineAnimation } from "@/components/landing/TimelineAnimation";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AmbientGlow } from "@/components/motion/AmbientGlow";



export default function JoinNewPage() {
  const faqs = [
    {
      question: "What is Product Space?",
      answer: "Product Space is a student-run product management fellowship that provides hands-on experience in product development."
    },
    {
      question: "How long is the fellowship?",
      answer: "The fall fellowship will run for 8 weeks encompassing all workshops and the capstone project."
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
    <main className="min-h-screen bg-[#FDFAFF] text-[#3a3a3a] flex flex-col items-center justify-center relative overflow-x-hidden">
      <AmbientGlow />
      
      {/* 1. background image */}
      <section 
        className="relative w-full max-w-[1549px] h-[480px] sm:h-[620px] md:h-[800px] lg:h-[900px] flex-shrink-0 overflow-hidden flex flex-col items-center justify-center"
      >
        {/* Background image that spans the entire section */}
        <img
          src="/images/join-header-pic.png"
          alt="Join header background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Content overlay */}
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-inter text-3xl sm:text-5xl md:text-[60px] font-semibold leading-tight drop-shadow-md"
          >
            Join Product Space!
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="mt-6 sm:mt-8"
          >
            <Link 
              href="/application"
              className="inline-flex px-5 py-3 items-center gap-3 sm:gap-[15px] rounded-[20px] bg-[#66417B] hover:bg-[#5a3769] transition-colors cursor-pointer shadow-[0_6px_20px_rgba(102,65,123,0.3)]"
            >
              <span className="text-[#FAF6FC] text-center font-['M_PLUS_1'] text-base sm:text-xl md:text-[22.5px] font-normal leading-normal">
                Fellowship Applications Open!
              </span>
              <ArrowIcon className="w-6 h-6 sm:w-8 sm:h-8" style={{ minWidth: '24px', minHeight: '24px', transform: 'translateY(1px)' }} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Recruitment Timeline Section*/}
      <section
        className="w-full flex flex-col items-center py-16 md:py-[150px] px-4 bg-[#FAF6FC] overflow-hidden"
      >
        <ScrollReveal direction="up" distance={25} className="w-full">
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="font-inter text-2xl sm:text-3xl md:text-[40px] font-semibold text-[#3A3A3A] leading-tight">
              Recruitment Timeline
            </h2>
            <p className="font-['M_PLUS_1'] text-base sm:text-lg md:text-[22.5px] text-[#3A3A3A] leading-relaxed">
              Interested in joining our fellowship? Hover over our timeline steps to learn more!
            </p>
          </div>
        </ScrollReveal>
        
        {/* Timeline Container with horizontal scroll on mobile */}
        <div className="w-full max-w-[1440px] overflow-x-auto pb-6 scrollbar-thin">
          <div className="min-w-[1100px] md:min-w-full flex justify-center">
            <div style={{ height: '821px', width: '1440px', position: 'relative' }}>
              <div style={{ transform: 'translateY(-400px)' }}>
                <TimelineAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. Recruitment Process Section*/}
      <ScrollReveal direction="up" distance={30} className="w-full max-w-6xl">
        <section className="my-12 md:my-[71px] px-4 sm:px-6 md:px-8">
          <motion.div
            whileHover={{ y: -4, boxShadow: '0 16px 36px 0 rgba(102, 65, 123, 0.18)' }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full p-6 sm:p-10 md:p-[50px_80px] flex flex-col items-center gap-6 md:gap-8 rounded-[30px] bg-[#FAF6FC] shadow-[0_6px_6px_0_rgba(0,0,0,0.25)]"
          >
            <h2 className="text-center font-inter text-2xl sm:text-3xl md:text-[40px] font-semibold text-[#3A3A3A] leading-tight">
              Recruitment Process
            </h2>

            {/* Process Details Section */}
            <div className="w-full flex flex-col items-start gap-4 sm:gap-6 text-[#3a3a3a]">
              <RecruitmentStep 
                title="Step 1: Questionnaire"
                description="Answer 2 300 word questions on the application form by Oct 8th so we can get to know you! This should take about 30 minutes to complete."
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
          </motion.div>
        </section>
      </ScrollReveal>

      {/* 4. Middle of Page Image*/}
      <ScrollReveal direction="up" distance={20} className="w-full">
        <section className="w-full">
          <img
            src="/images/join-mid-page-pic.png"
            alt="Join middle page image"
            className="w-full h-auto object-cover max-h-[600px]"
          />
        </section>
      </ScrollReveal>

      {/* 5. FAQ Section*/}
      <ScrollReveal direction="up" distance={30} className="w-full">
        <section className="w-full bg-[#FAF6FC] py-16 md:py-[150px] px-4">
          {/* Title */}
          <h2 className="text-center font-inter text-2xl sm:text-3xl md:text-[40px] font-semibold text-[#3A3A3A] leading-tight mb-8 md:mb-12">
            Frequently Asked Questions
          </h2>

          {/* Map of 6 components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-12 lg:gap-x-20 md:gap-y-6 w-full max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full flex justify-center">
                <FAQInstance question={faq.question} answer={faq.answer} />
              </div> 
            ))}
          </div>

          {/* Subtitle */}
          <h3 className="mt-12 md:mt-20 text-center font-inter text-xl sm:text-2xl md:text-[32px] font-semibold text-[#3A3A3A]">
            Still have questions?
          </h3>

          {/* Textbox */}
          <div className="mt-4 md:mt-8 flex justify-center px-4">
            <p className="w-full max-w-3xl text-center font-['M_PLUS_1'] text-sm sm:text-base md:text-[22.5px] font-normal leading-relaxed text-[#3A3A3A]">
              Schedule a coffee chat with one of our board members{" "}
              <Link
                href="/about_new#section3"
                className="text-[#9965B7] underline hover:text-[#7a4e94]"
              >
                here
              </Link>{" "}
              or send us a message through email or Instagram! We’ll get back to you
              within 24 hours and answer any concerns you may have. Coffee chats about the
              application will be open from the beginning of Fall Quarter until Wednesday
              10/08!
            </p>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}