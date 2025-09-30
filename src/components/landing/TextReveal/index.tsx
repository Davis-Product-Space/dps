import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
                    {words.map((word, i) => {
                      const baseStart = 0.2;
                      const offset = (idx * 20 + i) / 150; // Adjusted for line-based spacing
                      const start = baseStart + offset;
                      const end = start + 3 / 150; // Wider span for each word reveal
                      const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);

                      return (
                        <motion.span
                          key={`${word}-${i}`}
                          style={{ opacity }}
                          className={i < words.length - 1 ? "mr-2" : ""}
                        >
                          {word}
                        </motion.span>
                      );
                    })}
                  </div>
                );
              } else {
                return (
                  <motion.div
                    key={`jsx-${idx}`}
                    className="flex justify-center items-center w-full"
                    style={{
                      opacity: useTransform(scrollYProgress, [0.85, 0.95], [0.3, 1]),
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
