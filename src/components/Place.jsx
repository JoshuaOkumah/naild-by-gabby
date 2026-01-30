// import logo from "../assets/logo.png";

// function Place() {
//   return (
//     <div className="bg-[#F6EDE4] px-4 py-4 md:px-8 md:py-6">
//       <div className="flex flex-col md:flex-row items-center justify-between bg-[#F6EDE4]/80 shadow-sm backdrop-blur-sm rounded-xl px-4 py-4 md:px-8 md:py-4 w-full max-w-7xl mx-auto gap-4 md:gap-0">
//         {/* Logo */}
//         <img src="" alt="brand-logo" className="h-16 md:h-30 w-auto" />

//         {/* Address */}
//         <div
//           style={{ fontFamily: "Raleway, sans-serif" }}
//           className="flex flex-col text-[#3E2723] text-center md:text-md md:text-left"
//         >
//           <span>9414 Falls of Neuse Rd Ste 100,</span>
//           <span>Raleigh, NC 27615</span>
//         </div>

//         {/* Button */}
//         <button
//           style={{ fontFamily: "'Inter', sans-serif" }}
//           className="bg-[#3E2723] text-[#F6EDE4] px-6 py-2 rounded-3xl hover:bg-[#E6C484] hover:text-[#3E2723] transition w-full md:w-auto"
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Place;

import logo from "../assets/logo.png";
import { motion } from "motion/react";

function Place() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-[#F6EDE4] px-4 py-4 md:px-8 md:py-6"
    >
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#F6EDE4]/80 shadow-sm backdrop-blur-sm rounded-xl px-4 py-4 md:px-8 md:py-4 w-full max-w-7xl mx-auto gap-4 md:gap-0">
        {/* Logo */}
        <motion.img
          src={logo}
          alt="brand-logo"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-16 md:h-30 w-auto"
        />

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          style={{ fontFamily: "Raleway, sans-serif" }}
          className="flex flex-col text-[#3E2723] text-center md:text-md md:text-left"
        >
          <span>9414 Falls of Neuse Rd Ste 100,</span>
          <span>Raleigh, NC 27615</span>
        </motion.div>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="bg-[#3E2723] text-[#F6EDE4] px-6 py-2 rounded-3xl hover:bg-[#E6C484] hover:text-[#3E2723] transition w-full md:w-auto"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Place;
