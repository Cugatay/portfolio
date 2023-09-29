import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Work() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // @ts-ignore
    offset: ["start end", "end start"],
  });

  const quotationOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const quotationScale = useTransform(scrollYProgress, [0.5, 0.6], [2, 1]);
  const quotationMarginLeft = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6],
    [0, 256, 0],
  );

  const uncleBenOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const uncleBenMarginLeft = useTransform(
    scrollYProgress,
    [0.4, 0.5],
    [0, 256],
  );

  const stickyTop = useTransform(scrollYProgress, [0.5, 0.6], ["40%", "15%"]);

  const remainingContentOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.65],
    [0, 1],
  );

  return (
    <section ref={ref} className="w-screen h-[200vh] bg-black px-20">
      {/* <div className="colorfulText max-w-4xl text-7xl leading-none font-bold"> */}

      <motion.div
        style={{ top: stickyTop }}
        className="sticky flex justify-between"
      >
        <div>
          <motion.div
            style={{
              opacity: quotationOpacity,
              scale: quotationScale,
              marginLeft: quotationMarginLeft,
            }}
            className="max-w-md text-4xl leading-10 font-bold"
          >
            <div className="colorfulText">
              With great projects come great resumes
            </div>
            <motion.div
              style={{
                opacity: uncleBenOpacity,
                marginLeft: uncleBenMarginLeft,
              }}
              className="text-right text-3xl leading-9 font-bold"
            >
              - Uncle Ben
            </motion.div>
          </motion.div>

          <motion.div
            style={{ opacity: remainingContentOpacity }}
            className="w-[33vw] min-w-full max-w-[492px] max-h-[55vh] overflow-y-auto mt-6 flex flex-wrap"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-1/3 pr-5">
                <div className="glass w-full aspect-square mb-5 rounded-3xl">
                  {i} hey
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div style={{ opacity: remainingContentOpacity }}>
          Right
        </motion.div>
      </motion.div>
    </section>
  );
}
