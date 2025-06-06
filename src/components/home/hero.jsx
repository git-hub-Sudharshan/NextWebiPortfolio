
import heroSection from "../../assets/images/5446991.jpg";

const Hero = () => {
  return (
    <section
      className="container mx-auto px-lg relative w-full h-[90vh] flex items-center justify-start bg-black rounded-bl-[12%] rounded-br-[12%]"
      style={{
        backgroundImage: `url(${heroSection})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Container for left/right alignment */}
      <div>
        <h1
          className="text-[3rem] sm:text-[4rem] md:text-[5rem] leading-[1.1] mb-6 font-bold -tracking-tight bg-gradient-to-br from-white via-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          Transform Your
          <br />
          Financial Future
        </h1>
        {/* Bottom small text */}
        <p className="max-w-xl mb-8 text-base text-white/80">
          Take the next step towards financial freedom with our expert guidance and personalized solutions.
        </p>
        {/* Two buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-2 text-base font-semibold text-white transition-all border border-blue-600 rounded-none shadow hover:bg-blue-50">
            Schedule an Appointment
          </button>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;