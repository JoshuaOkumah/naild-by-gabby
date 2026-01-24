// import Navbar from "./Navbar";
// import model from "../assets/model-abc.webp";
// function Hero() {
//   return (
//     <div className="bg-[#F6EDE4]">
//       <Navbar />
//       <div className="flex flex-row justify-between px-16">
//         <div className="left-h uppercase flex flex-col  gap-3 my-50">
//           <span
//             style={{ fontFamily: "Raleway, sans‑serif" }}
//             className="text-5xl  text-[#3E2723] tracking-wider font-bold uppercase"
//           >
//             Get the Look you Love
//           </span>
//           <span
//             style={{ fontFamily: "Raleway, sans‑serif" }}
//             className="text-5xl  text-[#3E2723] tracking-wider font-bold uppercase"
//           >
//             at Nail'd by gabby
//           </span>
//           <button
//             style={{ fontFamily: "'Inter', sans-serif" }}
//             className="bg-[#3E2723] cursor-pointer text-[#F6EDE4] px-4 py-2 w-30 rounded-4xl  hover:bg-[#E6C484] hover:text-[#3E2723] transition"
//           >
//             Book Now
//           </button>
//         </div>

//         <div className="right-h flex flex-row gap-15">
//           <img src={model} alt="" className="w-90 h-120" />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Hero;

import Navbar from "./Navbar";
import model from "../assets/model-abc.webp";

function Hero() {
  return (
    <div className="bg-[#F6EDE4]">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-16 py-12 gap-8 md:gap-16">
        {/* TEXT BLOCK */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6">
          <span
            style={{ fontFamily: "Raleway, sans-serif" }}
            className="text-2xl md:text-4xl text-[#3E2723] tracking-wider font-bold uppercase"
          >
            Get the Look you Love
          </span>

          <span
            style={{ fontFamily: "Raleway, sans-serif" }}
            className="text-3xl md:text-5xl text-[#3E2723] tracking-wider font-bold uppercase"
          >
            at Nail'd by Gabby
          </span>

          <button
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="bg-[#3E2723] text-[#F6EDE4] px-6 py-2 rounded-3xl hover:bg-[#E6C48A] hover:text-[#3E2723] transition"
          >
            Book Now
          </button>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end md:w-1/2">
          <img
            src={model}
            alt="Nail Model"
            className="w-full max-w-sm md:max-w-90 h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
