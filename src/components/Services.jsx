// import { OurServices } from "../data/service";

// function Services() {
//   return (
//     <div className="flex flex-col bg-[#F6EDE4]">
//       <div
//         style={{ fontFamily: "Raleway, sans‑serif" }}
//         className="flex text-3xl  justify-center my-20 text-[#3E2723] font-semibold"
//       >
//         Our Services
//       </div>

//       <div className="grid grid-cols-3 gap-2 mx-60">
//         {OurServices.map((sImg) => (
//           <div>
//             <img src={sImg.image} alt="" className="h-52 w-full" />
//             <span
//               style={{ fontFamily: "'Inter', sans-serif" }}
//               className="flex justify-center text-lg text-[#3E2723]"
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

function Services() {
  return (
    <div className="flex flex-col bg-[#F6EDE4]">
      <div
        style={{ fontFamily: "Raleway, sans-serif" }}
        className="flex text-3xl justify-center my-20 text-[#3E2723] font-semibold"
      >
        Our Services
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 mx-4 md:mx-60">
        {OurServices.map((sImg) => (
          <div key={sImg.title}>
            <img src={sImg.image} alt="" className="h-52 w-full object-cover" />
            <span
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="flex justify-center text-lg text-[#3E2723] mt-2"
            >
              {sImg.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
