import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// @ts-ignore
import Typed from "typed.js";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Flawless animations",
        "Responsive designs",
        "Fast websites",
        "Clean code",
      ],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 200,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    // @ts-ignore
    offset: ["start end", "end start"],
  });

  // const meTextPos = useTransform(
  //   scrollYProgress,
  //   [0.2, 0.8, 0.9, 1],
  //   ["0%", "70%", "80%", "100%"]
  // );
  //
  // const meTextPos2 = useTransform(
  //   scrollYProgress,
  //   [0.2, 0.8, 0.9, 1],
  //   ["40%", "0%", "-10%", "-50%"]
  // );
  //
  // const textOpacities = useTransform(scrollYProgress, [0.2, 0.4, 1], [0, 1, 0]);
  //
  // const position = useTransform(
  //   scrollYProgress,
  //   (pos) =>
  //     // pos < 0.5 ? "sticky" : "absolute"
  //     "absolute"
  // );

  const meOpacity = useTransform(
    scrollYProgress,
    // [0.2, 0.5, 0.7, 1],
    [0.2, 0.5, 0.7, 0.9],
    [0, 1, 1, 0],
  );
  const meScale = useTransform(scrollYProgress, [0.2, 0.5, 0.7], [0.5, 1, 1]);

  const typedOpacity = useTransform(
    scrollYProgress,
    // [0.4, 0.5, 0.7, 1],
    [0.4, 0.5, 0.7, 0.9],
    [0, 1, 1, 0],
  );
  const typedMarginTop = useTransform(scrollYProgress, [0.4, 0.5], [0, 80]);

  // const marginLeft = useTransform(scrollYProgress, [0.5, 1], ["0%", "80%"]);

  return (
    <section
      ref={ref}
      className="w-screen h-[120vh] text-white relative bg-black mt-[120vh] text-7xl font-bold"
    >
      <div className="w-9/12 sticky top-[15%] mx-auto">
        <motion.div
          style={{ opacity: meOpacity, scale: meScale /* marginLeft */ }}
          className="max-w-6xl break-keep w-max"
        >
          I&apos;m a <span className="colorfulText">Frontend Engineer</span>{" "}
          from Turkey who likes to create unmatched experiences, even if you
          don’t want me to do!
        </motion.div>

        <motion.div
          style={{
            opacity: typedOpacity,
            // marginLeft,
            marginTop: typedMarginTop,
          }}
          className="break-keep w-max"
        >
          I just love <span className="font-extrabold" ref={typedRef} />
        </motion.div>
      </div>
    </section>
  );
}
