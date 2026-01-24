// import logo from "../assets/logo.png";
// import { SiTiktok } from "react-icons/si";
// import { FaInstagram, FaFacebook } from "react-icons/fa";
// import { Locate, LocateIcon, Mail, Map, MapPin, Phone } from "lucide-react";
// function Footer() {
//   return (
//     <div className="flex flex-col bg-amber-400 text-lg gap-2">
//       <img src={logo} alt="brand-logo" />
//       <span style={{ fontFamily: "'Inter', sans-serif" }} className="px-8 ">
//         Nail'd by Gabby in Abuad, Oyo is the premier destination for luxury nail
//         services in a modern, relaxing setting. Whether you’re after a classic
//         French manicure, a bold custom design, or a top-tier luxury pedicure
//         service, we make sure you leave feeling refreshed and flawless. At
//         Nail'd by Gabby, nails aren’t just done, they’re designed. Come
//         experience the creativity, quality, and service that make us more than
//         the best in Abuad: we’re the blueprint of the state.{" "}
//       </span>
//       <div className="flex flex-row px-8 gap-4 justify-center ">
//         <div className="rounded-full bg-blue-700 w-auto px-4 py-4 cursor-pointer">
//           <FaFacebook />
//         </div>
//         <div className="rounded-full bg-blue-700 w-auto px-4 py-4 cursor-pointer">
//           <FaInstagram />
//         </div>
//         <div className="bg-red-600 rounded-full w-auto px-4 py-4 cursor-pointer">
//           <SiTiktok />
//         </div>
//       </div>
//       <div className="px-8 flex flex-col gap-4">
//         <h2>Contact Us</h2>
//         <div className="flex flex-row">
//           <Phone />
//           <span>+234 806 319 8345</span>
//         </div>
//         <div className="flex flex-row">
//           <Mail />
//           <span>example34@gmail.com</span>
//         </div>
//         <div className="flex flex-row">
//           <MapPin />
//           <span>Abuad</span>
//         </div>
//       </div>
//       <div className="px-8 flex flex-col gap-4">
//         <h2>Business hours</h2>
//         <span>Mon - Sat: 9:30 AM - 7:00 PM</span>
//         <span>Sun: 12:00 PM - 5:00 PM</span>
//       </div>
//       <div className="px-8">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14842.468833163604!2d6.999451604305854!3d5.380795654171765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10425dc4e702bca7%3A0xff31d7886ce2b34d!2sFUTO%20ICT%20Building!5e0!3m2!1sen!2sng!4v1769210630710!5m2!1sen!2sng"
//           width="440"
//           height="400"
//           style={{ border: 0 }}
//           allowfullscreen=""
//           loading="lazy"
//           referrerpolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//       <div className="bg-[#F6EDE4] px-4 py-4 md:px-8 md:py-6">
//         <div className="flex flex-col md:flex-row items-center justify-between bg-[#F6EDE4]/80 shadow-sm backdrop-blur-sm rounded-xl px-4 py-4 md:px-8 md:py-4 w-full max-w-7xl mx-auto gap-4 md:gap-0">
//           © 2026 NAIL'D BY GABBY design by jsh_script • All Rights Reserved |
//           nail salon in Abuad | best nail salon in Abuad
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Footer;

import logo from "../assets/logo.png";
import { SiTiktok } from "react-icons/si";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#F6EDE4] text-[#3E2723]">
      <div className="max-w-7xl mx-auto px-6  grid gap-12 md:grid-cols-3">
        {/* Brand + Description */}
        <div className="flex flex-col gap-6">
          <img src="" alt="brand-logo" className="w-40" />

          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-sm leading-relaxed text-[#3E2723]/90"
          >
            Nail'd by Gabby in Abuad, Oyo is the premier destination for luxury
            nail services in a modern, relaxing setting. Whether you’re after a
            classic French manicure, bold custom designs, or a luxury pedicure,
            we make sure you leave flawless. Nails aren’t just done — they’re
            designed.
          </p>

          {/* Socials */}
          <div className="flex gap-4">
            <div className="p-3 rounded-full bg-[#3E2723] text-[#F6EDE4] hover:bg-[#E6C48A] hover:text-[#3E2723] transition cursor-pointer">
              <FaFacebook />
            </div>
            <div className="p-3 rounded-full bg-[#3E2723] text-[#F6EDE4] hover:bg-[#E6C48A] hover:text-[#3E2723] transition cursor-pointer">
              <FaInstagram />
            </div>
            <div className="p-3 rounded-full bg-[#3E2723] text-[#F6EDE4] hover:bg-[#E6C48A] hover:text-[#3E2723] transition cursor-pointer">
              <SiTiktok />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-lg">Contact Us</h2>

          <div className="flex items-center gap-3 text-sm">
            <Phone size={18} />
            <span>+234 806 319 8345</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Mail size={18} />
            <span>example34@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <MapPin size={18} />
            <span>Abuad, Oyo State</span>
          </div>
        </div>

        {/* Hours + Map */}
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-lg">Business Hours</h2>

          <div className="text-sm space-y-1">
            <p>Mon – Sat: 9:30 AM – 7:00 PM</p>
            <p>Sun: 12:00 PM – 5:00 PM</p>
          </div>

          <iframe
            className="w-full h-56 rounded-xl shadow-sm"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14842.468833163604!2d6.999451604305854!3d5.380795654171765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10425dc4e702bca7%3A0xff31d7886ce2b34d!2sFUTO%20ICT%20Building!5e0!3m2!1sen!2sng!4v1769210630710!5m2!1sen!2sng"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3E2723]/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-[#3E2723]/70">
          © 2026 Nail'd by Gabby • Designed by jsh_script • All Rights Reserved
          <br />
          Nail salon in Abuad • Best nail salon in Oyo State
        </div>
      </div>
    </footer>
  );
}

export default Footer;
