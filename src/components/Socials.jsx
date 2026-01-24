// import tiktok from "../assets/tiktok.png";

// function Socials() {
//     return <div className=" bg-[#F6EDE4]">
//     <div className="flex flex-col  items-center justify-between  bg-[#F6EDE4]/90 shadow-sm backdrop-blur-sm  px-8 py-4 rounded-3xl w-7xl mx-8">
//      <div style={{ fontFamily: "Raleway, sans‑serif" }} className="flex flex-row justify-center  text-[#3E2723] font-semibold text-3xl">Social Media</div>
//      <div className="flex flex-col">
//         <div className="flex flex-row justify-center my-10 ">
//         <button  style={{ fontFamily: "'Inter', sans-serif", }}
//   class="w-30 h-14 flex items-center justify-center
//   font-bold text-white rounded-2xl bg-black
//   shadow-[2px_2px_0_#FE2C55,-2px_-2px_0_#25F4EE]
//   hover:shadow-[4px_4px_0_#FE2C55,-4px_-4px_0_#25F4EE]
//   transition duration-200">
//   Tiktok
// </button>
//  </div>

//         <img src={tiktok} alt="" className="w-5xl mx-30" />
//      </div>
//     </div>
//     </div>;
// }
// export default Socials;

import tiktok from "../assets/tiktok.png";

function Socials() {
  return (
    <div className="bg-[#F6EDE4]">
      <div className="flex flex-col items-center justify-between bg-[#F6EDE4]/90 shadow-sm backdrop-blur-sm px-4 md:px-8 py-4 rounded-3xl w-full max-w-7xl mx-auto gap-6">
        {/* Title */}
        <div
          style={{ fontFamily: "Raleway, sans-serif" }}
          className="flex flex-row justify-center text-[#3E2723] font-semibold text-3xl"
        >
          Social Media
        </div>

        {/* Button */}
        <div className="flex justify-center w-full">
          <button
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="w-40 md:w-60 h-14 flex items-center justify-center font-bold text-white rounded-2xl bg-black shadow-[2px_2px_0_#FE2C55,-2px_-2px_0_#25F4EE] hover:shadow-[4px_4px_0_#FE2C55,-4px_-4px_0_#25F4EE] transition duration-200"
          >
            Tiktok
          </button>
        </div>

        {/* Image */}
        <img
          src={tiktok}
          alt=""
          className="w-full max-w-md md:max-w-5xl object-contain"
        />
      </div>
    </div>
  );
}

export default Socials;
