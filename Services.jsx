// import { OurServices } from "../data/service";

// function Services() {
//   return (
//     <div className="flex flex-col bg-[#F6EDE4]">
//       <div
//         style={{ fontFamily: "Raleway, sans-serif" }}
//         className="flex text-3xl justify-center my-20 text-[#3E2723] font-semibold"
//       >
//         Our Services
//       </div>

//       {/* Responsive grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 mx-4 md:mx-60">
//         {OurServices.map((sImg) => (
//           <div key={sImg.title}>
//             <img src={sImg.image} alt="" className="h-52 w-full object-cover" />
//             <span
//               style={{ fontFamily: "'Inter', sans-serif" }}
//               className="flex justify-center text-lg text-[#3E2723] mt-2"
//             >
//               {sImg.title}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Services;

import { OurServices } from "../data/service";
import { motion } from "motion/react";

function Services() {
  return (
    <div className="flex flex-col bg-[#F6EDE4] overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ fontFamily: "Raleway, sans-serif" }}
        className="flex text-3xl justify-center my-20 text-[#3E2723] font-semibold"
      >
        Our Services
      </motion.div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 mx-4 md:mx-60"
      >
        {OurServices.map((sImg) => (
          <motion.div
            key={sImg.title}
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.85,
                y: 40,
              },
              show: {
                opacity: 1,
                scale: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1], // luxury pop
            }}
          >
            <img src={sImg.image} alt="" className="h-52 w-full object-cover" />

            <span
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="flex justify-center text-lg text-[#3E2723] mt-2"
            >
              {sImg.title}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
