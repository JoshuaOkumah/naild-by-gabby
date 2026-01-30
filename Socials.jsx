// import tiktok from "../assets/tiktok.png";

// function Socials() {
//   return (
//     <div className="bg-[#F6EDE4]">
//       <div className="flex flex-col items-center justify-between bg-[#F6EDE4]/90 shadow-sm backdrop-blur-sm px-4 md:px-8 py-4 rounded-3xl w-full max-w-7xl mx-auto gap-6">
//         {/* Title */}
//         <div
//           style={{ fontFamily: "Raleway, sans-serif" }}
//           className="flex flex-row justify-center text-[#3E2723] font-semibold text-3xl"
//         >
//           Social Media
//         </div>

//         {/* Button */}
//         <div className="flex justify-center w-full">
//           <button
//             style={{ fontFamily: "'Inter', sans-serif" }}
//             className="w-40 md:w-60 h-14 flex items-center justify-center font-bold text-white rounded-2xl bg-black shadow-[2px_2px_0_#FE2C55,-2px_-2px_0_#25F4EE] hover:shadow-[4px_4px_0_#FE2C55,-4px_-4px_0_#25F4EE] transition duration-200"
//           >
//             Tiktok
//           </button>
//         </div>

//         {/* Image */}
//         <img
//           src={tiktok}
//           alt=""
//           className="w-full max-w-md md:max-w-5xl object-contain"
//         />
//       </div>
//     </div>
//   );
// }

// export default Socials;

import tiktok from "../assets/tiktok.png";
import { motion } from "motion/react";

function Socials() {
  return (
    <div className="bg-[#F6EDE4] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-between bg-[#F6EDE4]/90 shadow-sm backdrop-blur-sm px-4 md:px-8 py-4 rounded-3xl w-full max-w-7xl mx-auto gap-6"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{ fontFamily: "Raleway, sans-serif" }}
          className="flex flex-row justify-center text-[#3E2723] font-semibold text-3xl"
        >
          Social Media
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className="flex justify-center w-full"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="w-40 md:w-60 h-14 flex items-center justify-center font-bold text-white rounded-2xl bg-black shadow-[2px_2px_0_#FE2C55,-2px_-2px_0_#25F4EE] hover:shadow-[4px_4px_0_#FE2C55,-4px_-4px_0_#25F4EE] transition duration-200"
          >
            Tiktok
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.img
          src={tiktok}
          alt=""
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md md:max-w-5xl object-contain"
        />
      </motion.div>
    </div>
  );
}

export default Socials;
