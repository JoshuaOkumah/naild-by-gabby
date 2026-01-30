// import { OurWorks } from "../data/works";

// function Work() {
//   return (
//     <div className="flex flex-col bg-[#F6EDE4]">
//       <div
//         style={{ fontFamily: "Raleway, sans-serif" }}
//         className="flex text-3xl justify-center my-20 text-[#3E2723] font-semibold"
//       >
//         Our Work
//       </div>

//       <div className="w-full max-w-5xl mx-auto px-2 md:px-0 rounded-xl">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 cursor-pointer">
//           {OurWorks.map((wImg, index) => (
//             <div key={index} className="overflow-hidden rounded-lg aspect-4/3">
//               <img
//                 src={wImg.image}
//                 loading="lazy"
//                 alt=""
//                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Work;

import { OurWorks } from "../data/works";
import { motion } from "motion/react";

const directions = [
  { x: -120, y: 0, rotate: -6 }, // left
  { x: 120, y: 0, rotate: 6 }, // right
  { x: 0, y: -120, rotate: -4 }, // top
  { x: 0, y: 120, rotate: 4 }, // bottom
];

function Work() {
  return (
    <div className="flex flex-col bg-[#F6EDE4] overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ fontFamily: "Raleway, sans-serif" }}
        className="flex text-3xl justify-center my-20 text-[#3E2723] font-semibold"
      >
        Our Work
      </motion.div>

      <div className="w-full max-w-5xl mx-auto px-2 md:px-0 rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 cursor-pointer">
          {OurWorks.map((wImg, index) => {
            const dir = directions[index % directions.length];

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: dir.x,
                  y: dir.y,
                  rotate: dir.rotate,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1], // luxury easing
                }}
                className="overflow-hidden rounded-lg aspect-4/3"
              >
                <motion.img
                  src={wImg.image}
                  loading="lazy"
                  alt=""
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
