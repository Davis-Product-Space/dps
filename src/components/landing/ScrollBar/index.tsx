"use client";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

interface ScrollBarProps {
  targetRef: React.RefObject<HTMLElement | null>;
  totalItems?: number;
}

export default function ScrollBar({ targetRef, totalItems = 3 }: ScrollBarProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculate dynamic thresholds based on total items
    const step = 1 / totalItems;
    let newIndex = 0;
    
    for (let i = 0; i < totalItems; i++) {
      if (latest >= i * step && latest < (i + 1) * step) {
        newIndex = i;
        break;
      } else if (latest >= (totalItems - 1) * step) {
        newIndex = totalItems - 1;
        break;
      }
    }
    
    setActiveIndex(newIndex);
  });

  return (
    <div className="absolute top-1/2 right-[-2rem] translate-y-[-50%] flex flex-col items-center gap-2 z-50 text-white font-medium text-xs tracking-wide">
      {/* current card number */}
      <div className="text-[#e06287]">{`0${Math.max(1, activeIndex + 1 - 6)}`}</div>

      {/* scroll track */}
      <div className="relative w-[1.5px] h-[425px] bg-white/20 overflow-hidden rounded-full">
        <motion.div
          className="absolute top-0 bg-gradient-to-b from-[#E06287] to-[#765DF2] w-full"
          style={{ height: fillHeight }}
        />
      </div>

      {/* total cards */}
      <div className="text-[#765df2]">04</div>
    </div>
  );
}
