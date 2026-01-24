function About() {
  return (
    <section className="bg-[#F6EDE4] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-24">
        <h2
          style={{ fontFamily: "Raleway, sans-serif" }}
          className="text-3xl md:text-4xl font-semibold text-center text-[#3E2723] mb-10"
        >
          About Us
        </h2>

        <div
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="bg-[#F6EDE4]/90 backdrop-blur-sm shadow-sm rounded-2xl px-6 sm:px-10 md:px-16 py-10"
        >
          <p className="text-[#3E2723] text-base sm:text-lg leading-relaxed max-w-4xl mx-auto text-center">
            Welcome to <span className="font-semibold">Nail’d by Gabby</span>,
            your go-to nail salon in Raleigh, NC. At our cozy and stylish Nail
            Lab, we bring your nail visions to life, from classic manicures and
            pedicures to gel, acrylics, and custom nail art.
            <br />
            <br />
            Our skilled technicians are passionate about trends, precision, and
            personalized service. Every client leaves with nails that feel as
            amazing as they look.
            <br />
            <br />
            Cleanliness and hygiene are at the heart of everything we do. We use
            only high-quality products and follow strict sanitization standards
            so you can relax with confidence.
            <br />
            <br />
            Step into our modern, chic space and enjoy a calm, uplifting
            atmosphere while we pamper your hands and feet. Whether you love
            timeless elegance or bold creative designs,{" "}
            <span className="font-semibold">Nail’d by Gabby </span>
            is here to make your nails unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
