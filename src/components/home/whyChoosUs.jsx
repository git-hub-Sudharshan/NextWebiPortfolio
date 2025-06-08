import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { heroGradientTitle } from "../../styles/gradients";
import GoogleReview from "./review";
import CountUp from "../../commonComponents/counter";

const accordionItems = [
  {
    id: 1,
    title: "NDA Protected Projects",
    icon: "mdi:shield-lock",
    content:
      "We sign digital NDAs before project kickoff to ensure your IP stays safe and confidential throughout the project lifecycle.",
  },
  {
    id: 2,
    title: "Global Client Base",
    icon: "mdi:earth",
    content:
      "600+ relationships built across 20+ countries with trust, transparency, and long-term partnerships.",
  },
  {
    id: 3,
    title: "e-Diligence with Quality & Security Standards",
    icon: "mdi:certificate-outline",
    content:
      "We follow strict QA processes and compliance standards to ensure each delivery meets high quality and security benchmarks.",
  },
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="text-white rounded-[2rem] px-lg py-16 container mx-auto">
      <div className="bg-[#0f0f11] sm:p-16 px-4 py-8 rounded-3xl">
        <div className="grid items-center grid-cols-1 gap-10 mx-auto max-w-7xl md:grid-cols-2">
          {/* Accordion Section */}
        <div className="space-y-6">
  {accordionItems.map((item) => (
    <div
      key={item.id}
      className={`rounded-xl transition-all duration-300 ${
        activeIndex === item.id
          ? "bg-gradient-to-r from-blue-500 to-pink-500"
          : "bg-[#1c1c1e]"
      }`}
    >
      <button
        className="flex items-center justify-between w-full px-4 py-4 text-base font-semibold text-left sm:px-6 sm:py-5 sm:text-lg focus:outline-none"
        onClick={() =>
          setActiveIndex(activeIndex === item.id ? null : item.id)
        }
      >
        <span className="flex items-center gap-3 sm:gap-4">
          <Icon icon={item.icon} className="text-lg text-white sm:text-xl" />
          {item.title}
        </span>
        <span className="text-xl sm:text-2xl">
          {activeIndex === item.id ? "▲" : "▼"}
        </span>
      </button>
      <div
        className={`px-4 sm:px-6 text-white overflow-hidden transition-all duration-300 ${
          activeIndex === item.id
            ? "max-h-[200px] sm:max-h-[300px] opacity-100 pb-4"
            : "max-h-0 opacity-0 pb-0"
        }`}
      >
        <p className="text-sm leading-relaxed">{item.content}</p>
      </div>
    </div>
  ))}
</div>


          {/* Text & Counters Section */}
          <div data-aos="fade-up" data-aos-delay="500">
            <div className="mb-6">
              <p className="mb-2 font-semibold text-pink-500">
                ★ WHY CHOOSE US
              </p>
              <h2 className="mb-4 text-4xl font-bold leading-snug">
                Why choose{" "}
                <span className={`${heroGradientTitle}`}>NextWebi</span> as your
                digital partner?
              </h2>
              <p className="text-gray-300">
                We help you scale with reliable tech, transparent execution, and
                deep industry expertise. Your success is our top
                priority—delivered with agility and trust.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 mt-10 text-center border-t border-gray-700">
              <div>
                <h3 className="text-3xl font-bold">
                  <CountUp
                    from={0}
                    to={1600}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  +
                </h3>
                <p className="mt-1 text-sm">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">
                  <CountUp
                    from={0}
                    to={20}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  +
                </h3>
                <p className="mt-1 text-sm">Countries Served</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">
                  <CountUp
                    from={0}
                    to={98}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  %
                </h3>
                <p className="mt-1 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GoogleReview />
    </section>
  );
};

export default WhyChooseUs;
