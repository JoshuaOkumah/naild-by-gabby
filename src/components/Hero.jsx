// import Navbar from "./Navbar";
// import { motion } from "motion/react";
// import model from "../assets/model-abc.webp";

// function Hero() {
//   return (
//     <div className="bg-[#F6EDE4]">
//       <Navbar />

//       <div className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-16 py-12 gap-8 md:gap-16">
//         {/* TEXT BLOCK */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6">
//           <span
//             style={{ fontFamily: "Raleway, sans-serif" }}
//             className="text-2xl md:text-4xl text-[#3E2723] tracking-wider font-bold uppercase"
//           >
//             Get the Look you Love
//           </span>

//           <span
//             style={{ fontFamily: "Raleway, sans-serif" }}
//             className="text-3xl md:text-5xl text-[#3E2723] tracking-wider font-bold uppercase"
//           >
//             at Nail'd by Gabby
//           </span>

//           <button
//             style={{ fontFamily: "'Inter', sans-serif" }}
//             className="bg-[#3E2723] text-[#F6EDE4] px-6 py-2 rounded-3xl hover:bg-[#E6C48A] hover:text-[#3E2723] transition"
//           >
//             Book Now
//           </button>
//         </div>

//         {/* IMAGE */}
//         <div className="flex justify-center md:justify-end md:w-1/2">
//           <img
//             src={model}
//             alt="Nail Model"
//             className="w-full max-w-sm md:max-w-90 h-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import Navbar from "./Navbar";
import { motion, useScroll, useTransform } from "motion/react";
import model from "../assets/model-abc.webp";
import { useRef } from "react";

function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <div ref={heroRef} className="bg-[#F6EDE4] overflow-hidden">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-16 py-12 gap-8 md:gap-16">
        {/* TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontFamily: "Raleway, sans-serif" }}
            className="text-2xl md:text-4xl text-[#3E2723] tracking-wider font-bold uppercase"
          >
            Get the Look you Love
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ fontFamily: "Raleway, sans-serif" }}
            className="text-3xl md:text-5xl text-[#3E2723] tracking-wider font-bold uppercase"
          >
            at Nail'd by Gabby
          </motion.span>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="bg-[#3E2723] text-[#F6EDE4] px-6 py-2 rounded-3xl hover:bg-[#E6C48A] hover:text-[#3E2723] transition"
          >
            Book Now
          </motion.button>
        </motion.div>

        {/* IMAGE */}
        {/* <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="flex justify-center md:justify-end md:w-1/2"
        >
          <motion.img
            src={model}
            alt="Nail Model"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-sm md:max-w-90 h-auto"
          />
        </motion.div> */}
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="flex justify-center md:justify-end md:w-1/2"
        >
          <motion.img
            src={model}
            alt="Nail Model"
            initial={{
              opacity: 0,
              y: 120,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1], // smooth pop
            }}
            className="w-full max-w-sm md:max-w-90 h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
