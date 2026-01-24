// import logo from "../assets/logo.png";
// function Place() {
//   return (
//     <div className="bg-[#F6EDE4]">
//     <div className="flex items-center justify-between bg-[#F6EDE4]/80 shadow-sm backdrop-blur-sm px-8 py-4 rounded-xl w-7xl mx-8">
//       <img src={logo} alt="brand-logo" className="h-30 w-auto" />

//       <div style={{ fontFamily: "Raleway, sans‑serif" }} className="flex flex-col text-[#3E2723]  text-md text-center">
//         <span>9414 Falls of Neuse Rd Ste 100,</span>
//         <span>Raleigh, NC 27615</span>
//       </div>

//       <button  style={{ fontFamily: "'Inter', sans-serif", }} className=" bg-[#3E2723] text-[#F6EDE4] px-4 py-2 rounded-4xl hover:bg-[#E6C484] cursor-pointer hover:text-[#3E2723]  transition">
//         Book Now
//       </button>
//     </div>
//    </div>
//   );
// }
// export default Place;

import logo from "../assets/logo.png";

function Place() {
  return (
    <div className="bg-[#F6EDE4] px-4 py-4 md:px-8 md:py-6">
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#F6EDE4]/80 shadow-sm backdrop-blur-sm rounded-xl px-4 py-4 md:px-8 md:py-4 w-full max-w-7xl mx-auto gap-4 md:gap-0">
        {/* Logo */}
        <img src="" alt="brand-logo" className="h-16 md:h-30 w-auto" />

        {/* Address */}
        <div
          style={{ fontFamily: "Raleway, sans-serif" }}
          className="flex flex-col text-[#3E2723] text-center md:text-md md:text-left"
        >
          <span>9414 Falls of Neuse Rd Ste 100,</span>
          <span>Raleigh, NC 27615</span>
        </div>

        {/* Button */}
        <button
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="bg-[#3E2723] text-[#F6EDE4] px-6 py-2 rounded-3xl hover:bg-[#E6C484] hover:text-[#3E2723] transition w-full md:w-auto"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Place;
