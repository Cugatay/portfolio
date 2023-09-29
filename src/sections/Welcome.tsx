import GoButton from "@/components/GoButton";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Welcome() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // @ts-ignore
    offset: ["end end", "end start"],
  });

  const heyMarginLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const meMarginLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);
  const nerdieMarginLeft = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-50%"]
  );
  const contactsMarginLeft = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-40%"]
  );
  const buttonMarginLeft = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-30%"]
  );

  const heyOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const meOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const nerdieOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const contactsOpacity = useTransform(scrollYProgress, [0, 1.1], [1, 0]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 1.3], [1, 0]);

  // const backgroundOpacity = useTransform(scrollYProgress, [0.3, 1], [0.2, 0.2]);

  // const sectionPosition = useTransform(scrollYProgress, (pos) =>
  //   pos === 1 ? "relative" : "fixed"
  // );

  return (
    <section
      // style={{ position: sectionPosition }}
      ref={ref}
      className="w-screen h-screen fixed top-0 -z-10 flex bg-black flex-col justify-center overflow-hidden"
    >
      {/* <motion.img */}
      <img
        // style={{ opacity: backgroundOpacity }}
        className="w-7/12 -z-10 bg-blue-500 absolute left-0 right-0 top-0 bottom-0 m-auto opacity-20"
        // h-[150%]
        src="/background.jpg"
        alt="background"
      />

      <div className="w-8/12 mx-auto">
        <div>
          <motion.div
            className="text-8xl leading-none font-bold"
            style={{ opacity: heyOpacity, marginLeft: heyMarginLeft }}
          >
            Hey!
          </motion.div>
          <motion.div
            style={{ opacity: meOpacity, marginLeft: meMarginLeft }}
            className="text-8xl leading-none font-bold"
          >
            I&lsquo;m Cagatay
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: nerdieOpacity, marginLeft: nerdieMarginLeft }}
          className="max-w-xl text-3xl my-10 leading-9 font-semibold text-gray-300"
        >
          If the world ever needs a nerd savior who likes coding and bringing
          tasteful interfaces to life, it’s me!
        </motion.div>

        <motion.div
          style={{ opacity: contactsOpacity, marginLeft: contactsMarginLeft }}
          className="flex items-center space-x-10"
        >
          <img src="/icons/github.svg" alt="github" />
          <img src="/icons/mail.svg" alt="mail" />
          <img src="/icons/linkedin.svg" alt="linkedin" />
        </motion.div>

        <motion.div
          style={{ opacity: buttonOpacity, marginLeft: buttonMarginLeft }}
        >
          <GoButton className="mt-10">RESUME</GoButton>
        </motion.div>
      </div>
    </section>
  );
}
