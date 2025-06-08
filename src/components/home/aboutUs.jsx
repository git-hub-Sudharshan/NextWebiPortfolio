
import { headings } from "../../styles/gradients";
import AboutUsBg from "../../assets/images/aboutus.jpg";

import Marqueelogo from "./marqueelogo"; // Adjust the import path as necessary

const AboutCompany = () => {
  
  return (
    <section
      className="w-full px-6 pt-24 text-center bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${AboutUsBg})` }}
    >
      <div className="max-w-3xl mx-auto space-y-6 rounded-xl">
        
        {/* Super Charged with Thunder Icon */}
        <div className="flex items-center justify-center space-x-2 text-lg font-medium text-black">
          {/* Thunder Icon SVG with yellow color */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="none"
          >
            <path d="M7 2L3 14h6l-1 8 10-12h-6l1-8z" />
          </svg>
          <span>Super Charged</span>
        </div>

        <h2 className={`text-3xl md:text-4xl font-bold ${headings}`}>
          Trusted by 600+ Startups and
          <br />
          Enterprises across 20+ Nations
        </h2>
        
        <p className="text-base leading-relaxed text-gray-900">
          Nextwebi delivers high-end IT solutions to businesses and offers the
          best class web solutions for your business that helps you to succeed
          remarkably in your ventures. Through our agile digital methodology and
          practice of constant innovation with domain expertise, we aim to
          deliver unparalleled customer satisfaction through our services.
        </p>
        <div>
          <div className="flex items-center justify-center ">
            <div className="relative group">
              <button className="relative inline-block p-px font-semibold leading-6 text-white transition-transform duration-300 ease-in-out bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Learn about us more
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

        <>
<Marqueelogo/>
  
  
    </>
    </section>
  );
};

export default AboutCompany;

