import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function RevealWord({
  word,
  index,
  lineIndex,
  progress,
  isLast,
}: {
  word: string;
  index: number;
  lineIndex: number;
  progress: any;
  isLast: boolean;
}) {
  const baseStart = 0.2;
  const offset = (lineIndex * 20 + index) / 150;
  const start = baseStart + offset;
  const end = start + 4 / 150;
  const opacity = useTransform(progress, [start, end], [0.25, 1]);
  const y = useTransform(progress, [start, end], [6, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block ${isLast ? "" : "mr-2"}`}
    >
      {word}
    </motion.span>
  );
}

export function TextReveal({
  heading,
  content,
}: {
  heading?: React.ReactNode;
  content: (string | React.ReactNode)[];
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div ref={containerRef} className="relative h-[300vh] sm:h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-full space-y-6 px-2 md:px-4">
          {/* animated heading if provided */}
          {heading && (
            <motion.div
              style={{
                opacity: useTransform(scrollYProgress, [0.05, 0.15], [0.3, 1]),
                y: useTransform(scrollYProgress, [0.05, 0.15], [10, 0]),
              }}
              className="text-[1.5rem] md:text-[2.75rem] font-semibold leading-tight bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent transition-transform duration-300 text-center"
            >
              {heading}
            </motion.div>
          )}

          {/* animated paragraph */}
          <div 
            className="text-center space-y-4 flex flex-col items-center
                       text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                       font-semibold leading-tight"
            style={{
              color: '#3A3A3A',
              textAlign: 'center',
              fontFamily: '"M PLUS 1"',
              fontStyle: 'normal',
              fontWeight: 600
            }}
          >
            {content.map((chunk, idx) => {
              if (typeof chunk === "string") {
                const words = chunk.split(" ");
                return (
                  <div key={`line-${idx}`} className="flex justify-center items-center w-full flex-wrap">
                    {words.map((word, i) => (
                      <RevealWord
                        key={`${word}-${i}`}
                        word={word}
                        index={i}
                        lineIndex={idx}
                        progress={scrollYProgress}
                        isLast={i === words.length - 1}
                      />
                    ))}
                  </div>
                );
              } else {
                return (
                  <motion.div
                    key={`jsx-${idx}`}
                    className="flex justify-center items-center w-full"
                    style={{
                      opacity: useTransform(scrollYProgress, [0.85, 0.95], [0.3, 1]),
                      y: useTransform(scrollYProgress, [0.85, 0.95], [8, 0]),
                    }}
                  >
                    {chunk}
                  </motion.div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
