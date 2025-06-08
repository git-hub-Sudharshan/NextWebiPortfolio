import React, { useEffect } from "react";
import AOS from "aos";
import { heroGradientTitle } from "../../styles/gradients"; // Adjust path if needed

import heroSection from "../../assets/images/heroSectionFlip.jpg";


const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative  w-full h-[90vh] flex items-center justify-start bg-black animate-bg-pan"
      style={{
        backgroundImage: `url(${heroSection})`,
        backgroundSize: "cover",
        backgroundPosition: "60% center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Container for left/right alignment */}
      <div className="container relative z-10 mx-auto px-lg">
        <h1
          data-aos="fade-up"
          className={`text-[3rem] sm:text-[4rem] md:text-[4rem] leading-[1.1] mb-6 font-bold -tracking-tight ${heroGradientTitle}`}
        > 
         Custom Software and 
          <br />
         ERP Solutions Company
        </h1>
        {/* Bottom small text */}
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="max-w-xl mb-8 text-base text-white/80"
        >
          Take the next step towards financial freedom with our expert guidance and personalized solutions.
        </p>
        <div data-aos="fade-up" data-aos-delay="300">
          <button className="cssbuttons-io-button">
            Schedule an Appoinment
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      {/* Full width animated SVG wave at the bottom */}
      <div className="absolute left-0 right-0 w-full pointer-events-none -bottom-1">
        <svg
          className="w-full"
          style={{ display: "block" }}
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(255, 255, 255, 1)" offset="0%"></stop>
              <stop stopColor="rgba(239,239,239,1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="white"
            d="M0,112L17.1,109.3C34.3,107,69,101,103,98.7C137.1,96,171,96,206,96C240,96,274,96,309,96C342.9,96,377,96,411,80C445.7,64,480,32,514,40C548.6,48,583,96,617,117.3C651.4,139,686,133,720,128C754.3,123,789,117,823,98.7C857.1,80,891,48,926,45.3C960,43,994,69,1029,82.7C1062.9,96,1097,96,1131,82.7C1165.7,69,1200,43,1234,37.3C1268.6,32,1303,48,1337,48C1371.4,48,1406,32,1440,32C1474.3,32,1509,48,1543,66.7C1577.1,85,1611,107,1646,117.3C1680,128,1714,128,1749,128C1782.9,128,1817,128,1851,109.3C1885.7,91,1920,53,1954,37.3C1988.6,21,2023,27,2057,29.3C2091.4,32,2126,32,2160,50.7C2194.3,69,2229,107,2263,101.3C2297.1,96,2331,48,2366,42.7C2400,37,2434,75,2451,93.3L2468.6,112L2468.6,160L2451.4,160C2434.3,160,2400,160,2366,160C2331.4,160,2297,160,2263,160C2228.6,160,2194,160,2160,160C2125.7,160,2091,160,2057,160C2022.9,160,1989,160,1954,160C1920,160,1886,160,1851,160C1817.1,160,1783,160,1749,160C1714.3,160,1680,160,1646,160C1611.4,160,1577,160,1543,160C1508.6,160,1474,160,1440,160C1405.7,160,1371,160,1337,160C1302.9,160,1269,160,1234,160C1200,160,1166,160,1131,160C1097.1,160,1063,160,1029,160C994.3,160,960,160,926,160C891.4,160,857,160,823,160C788.6,160,754,160,720,160C685.7,160,651,160,617,160C582.9,160,549,160,514,160C480,160,446,160,411,160C377.1,160,343,160,309,160C274.3,160,240,160,206,160C171.4,160,137,160,103,160C68.6,160,34,160,17,160L0,160Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;