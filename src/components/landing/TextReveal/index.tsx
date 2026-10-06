import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
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
  progress: MotionValue<number>;
  isLast: boolean;
}) {
  const baseStart = 0.16;
  const offset = (lineIndex * 20 + index) / 150;
  const start = baseStart + offset;
  const end = start + 3 / 150;
  const opacity = useTransform(progress, [start, end], [0.3, 1]);

  return (
    <motion.span
      data-reveal-word
      style={{ opacity }}
      className={isLast ? "" : "mr-2"}
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Measure only the distance where the section is pinned. The default
    // viewport offsets advance progress before the sticky section reaches the
    // top and after it starts leaving, which lets the page escape too early.
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      data-text-reveal
      className="relative h-[300vh] sm:h-[240vh] lg:h-[220vh]"
    >
      <div className="sticky top-0 h-screen supports-[height:100svh]:h-[100svh] flex items-center justify-center">
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
                    data-reveal-final
                    className="flex justify-center items-center w-full"
                    style={{
                      // Finish before the sticky interval ends so the completed
                      // statement remains visible briefly before normal scroll resumes.
                      opacity: useTransform(scrollYProgress, [0.78, 0.9], [0.3, 1]),
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
