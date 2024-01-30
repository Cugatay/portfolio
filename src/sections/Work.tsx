import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // @ts-ignore
    offset: ["start end", "end start"],
  });

  const quotationOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const quotationScale = useTransform(scrollYProgress, [0.3, 0.4], [2, 1]);
  const quotationMarginLeft = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4],
    [0, 256, 0],
  );

  const uncleBenOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const uncleBenMarginLeft = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    [0, 256],
  );

  const stickyTop = useTransform(
    scrollYProgress,
    // [0.5, 0.6, 1],
    // ["40%", "15%", "-20%"],
    [0.3, 0.4],
    ["40%", "15%"],
  );

  const remainingContentOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [0, 1],
  );

  const leftMarginTop = useTransform(scrollYProgress, [0.4, 1], ["0%", "-60%"]);

  return (
    <section ref={ref} className="w-screen h-[200vh] bg-black px-20">
      <motion.div
        style={{
          top: stickyTop,
        }}
        className="w-full h-max flex justify-between sticky leading-10 font-bold"
      >
        <motion.div
          style={{
            marginLeft: quotationMarginLeft,
            opacity: quotationOpacity,
            scale: quotationScale,
            marginTop: leftMarginTop,
          }}
          className="max-w-md mb-32 h-max sticky leading-10 font-bold"
        >
          <div className="colorfulText text-4xl">
            With great projects come great resumes
          </div>

          <motion.div
            style={{
              opacity: uncleBenOpacity,
              marginLeft: uncleBenMarginLeft,
            }}
            className="text-right leading-9 text-3xl font-bold"
          >
            - Uncle Ben
          </motion.div>

          <motion.div style={{ opacity: remainingContentOpacity }}></motion.div>
          <motion.div
            style={{ opacity: remainingContentOpacity }}
            className="w-[33vw] min-w-full max-w-[492px] h-0 amax-h-[55vh] mt-6 flex flex-wrap"
            onClick={() => console.log("hey")}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-1/3 pr-5">
                <div className="glass w-full aspect-square mb-5 rounded-3xl">
                  {i} hey
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            opacity: remainingContentOpacity,
          }}
          className="flex-1 flex flex-col items-center bg-red-500 mt-12"
        >
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
