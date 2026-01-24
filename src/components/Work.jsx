// import { OurWorks } from "../data/works";
// function Work() {
//   return (
//     <div className="flex flex-col bg-[#F6EDE4]">
//       <div
//         style={{ fontFamily: "Raleway, sans‑serif" }}
//         className="flex text-3xl  justify-center my-20 text-[#3E2723] font-semibold"
//       >
//         Our Work
//       </div>

//       <div className=" mx-40 w-full max-w-5xl h-120 rounded-xl">
//         <div className="grid grid-cols-4 gap-2 cursor-pointer">
//           {OurWorks.map((wImg) => (
//             <div className="overflow-hidden rounded-lg">
//               {" "}
//               <img
//                 src={wImg.image}
//                 loading="lazy"
//                 alt=""
//                 className="h-52 w-full object-cover
//                  transition-transform duration-300
//                  hover:scale-110"
//               />
//             </div>
//           ))}
//         </div>

//         {/* <div className="h-12" /> */}
//         {/* <button className="bg-blue-600 mx-140 cursor-pointer text-white px-4 py-2 rounded-4xl hover:bg-blue-700 transition">
//           View Work
//         </button> */}
//       </div>
//     </div>
//   );
// }
// export default Work;

import { OurWorks } from "../data/works";

function Work() {
  return (
    <div className="flex flex-col bg-[#F6EDE4]">
      <div
        style={{ fontFamily: "Raleway, sans-serif" }}
        className="flex text-3xl justify-center my-20 text-[#3E2723] font-semibold"
      >
        Our Work
      </div>

      <div className="w-full max-w-5xl mx-auto px-2 md:px-0 rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 cursor-pointer">
          {OurWorks.map((wImg, index) => (
            <div key={index} className="overflow-hidden rounded-lg aspect-4/3">
              <img
                src={wImg.image}
                loading="lazy"
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
