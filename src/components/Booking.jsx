import { useState } from "react";
import emailjs from "emailjs-com";

function Booking() {
  const [method, setMethod] = useState("whatsapp");
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    note: "",
  });

  const inputClass = `
  w-full px-4 py-3 rounded-lg border border-gray-300
  focus:outline-none focus:ring-2 transition
  ${method === "whatsapp" ? "focus:ring-green-500" : "focus:ring-pink-500"}
`;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (method === "whatsapp") {
      const phoneNumber = "2348063198345";

      const message = `
Hello, I would like to book an appointment.

Name: ${form.name}
Service: ${form.service}
Date: ${form.date}
Time: ${form.time}
Note: ${form.note}
      `;

      window
        .open(
          `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
          "_blank"
        )
        .then(() => {
          setSuccess(true);
        });
    }

    if (method === "email") {
      emailjs
        .send(
          "service_obw93gd",
          "template_xlkavvl",
          {
            name: form.name,
            email: form.email,
            phone: form.phone,
            service: form.service,
            date: form.date,
            time: form.time,
            note: form.note,
          },
          "7Dd4pQLfvrF5I_Jh7"
        )
        .then(() => {
          setSuccess(true);
        })
        .catch(() => {});
    }
  };

  return (
    <section className="bg-[#F6EDE4] py-10 px-6 ">
      <div
        style={{ fontFamily: "Raleway, sans-serif" }}
        className="flex text-3xl justify-center mb-10 text-[#3E2723] font-semibold"
      >
        Booking
      </div>

      <div className="max-w-2xl mx-auto bg-[#F6EDE4]/80 rounded-3xl shadow-sm backdrop-blur-sm p-10">
        <div className="text-center mb-8">
          <h2
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-3xl font-bold text-[#3E2723]"
          >
            Book an Appointment
          </h2>
          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-[#3E2723]/70 mt-2"
          >
            Choose how you would like to book
          </p>
        </div>

        {!success && (
          <div>
            <div className="flex justify-center mb-10">
              <div className="flex bg-gray-100 rounded-full p-1">
                <button
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  onClick={() => setMethod("whatsapp")}
                  disabled={success}
                  className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition ${
                    method === "whatsapp"
                      ? "bg-green-600 text-white"
                      : "text-gray-600"
                  }`}
                >
                  WhatsApp
                </button>

                <button
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  onClick={() => setMethod("email")}
                  disabled={success}
                  className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition ${
                    method === "email"
                      ? "bg-pink-600 text-white"
                      : "text-gray-600"
                  }`}
                >
                  Email
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
                className={`w-full px-4 ${inputClass} py-3 rounded-lg focus:outline-none focus:ring-2 `}
              />

              {method === "email" && (
                <>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    onChange={handleChange}
                    className={`w-full px-4 ${inputClass} py-3 rounded-lg focus:outline-none focus:ring-2 `}
                  />
                  <input
                    type="phone"
                    name="phone"
                    placeholder="Your Phone Number"
                    required
                    onChange={handleChange}
                    className={`w-full px-4 ${inputClass} py-3 rounded-lg focus:outline-none focus:ring-2 `}
                  />
                </>
              )}

              <select
                name="service"
                required
                onChange={handleChange}
                className={`w-full px-4 ${inputClass} py-3 rounded-lg focus:outline-none focus:ring-2 `}
              >
                <option value="">Select Service</option>
                <option>Manicure</option>
                <option>Pedicure</option>
                <option>Acrylic Nails</option>
                <option>Gel Nails</option>
              </select>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="date"
                  required
                  onChange={handleChange}
                  className={` ${inputClass} px-4 py-3 rounded-lg focus:outline-none focus:ring-2 `}
                />

                <input
                  type="time"
                  name="time"
                  required
                  onChange={handleChange}
                  className={` ${inputClass} px-4 py-3 rounded-lg focus:outline-none focus:ring-2 `}
                />
              </div>

              <textarea
                name="note"
                rows="3"
                placeholder="Any special requests?"
                onChange={handleChange}
                className={`w-full ${inputClass} px-4 py-3 rounded-lg  focus:ring-2 focus:outline-none`}
              />

              <button
                style={{ fontFamily: "'Inter', sans-serif" }}
                type="submit"
                className={`w-full py-3 rounded-full text-white font-medium transition ${
                  method === "whatsapp"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-pink-600 hover:bg-pink-700"
                }`}
              >
                Book via {method === "whatsapp" ? "WhatsApp" : "Email"}
              </button>
            </form>
          </div>
        )}

        {success && (
          <div className="mb-6 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-green-700 text-sm max-w-md mx-auto">
            Your booking request has been sent successfully. We will contact you
            shortly.
            <p className="text-center mt-2 text-green-800 font-medium">
              Refresh page to re-book
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Booking;
