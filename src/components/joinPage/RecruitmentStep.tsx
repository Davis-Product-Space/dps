import { motion } from "framer-motion";

interface RecruitmentStepProps {
  title: string;
  description: string;
}

export default function RecruitmentStep({ title, description }: RecruitmentStepProps) {
  return (
    <motion.div 
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className="flex flex-col md:flex-row md:justify-between items-start md:items-center w-full max-w-[1064px] gap-2 md:gap-8 transition-opacity py-3 border-b border-[#3A3A3A]/10 last:border-b-0"
    >
      {/* Left text box - Step title */}
      <h3 
        className="font-inter text-xl sm:text-2xl md:text-[32px] font-semibold leading-tight text-[#3A3A3A] shrink-0"
      >
        {title}
      </h3>
      
      {/* Right text box - Description */}
      <p 
        className="font-['M_PLUS_1'] text-sm sm:text-base md:text-[22.5px] font-normal leading-relaxed text-[#3A3A3A] w-full md:w-[644px] md:ml-8"
        dangerouslySetInnerHTML={{
          __html: description.replace(
            /"([^"]+)"/g, 
            '<span style="color: #9965B7; text-decoration: underline;">$1</span>'
          )
        }}
      />
    </motion.div>
  );
}
