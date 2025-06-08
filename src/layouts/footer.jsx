import React, { useEffect } from "react";
import { heroGradientTitle } from "../styles/gradients";
import Logo from "../assets/images/logos/logo-white.png";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  return (
    <footer
      className="px-4 pt-10 pb-6 m-3 text-xs text-white border rounded-xl backdrop-blur-md"
      style={{
        backgroundImage:
          "url('https://www.softconic-wp.egenslab.com/wp-content/plugins/softconic-core//inc/theme-options/images/footer/footer-bg.png'), linear-gradient(#1d1d1d, #1d1d1d)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* CTA SECTION - WITHIN CONTAINER */}
      <section className="container w-full mx-auto mb-10 px-lg">
        <div>
          <div className="flex flex-col items-center justify-between w-full px-8 py-10 text-white border bg-white/10 sm:flex-row rounded-2xl backdrop-filter backdrop-blur-md border-white/20">
            {/* CTA Text */}
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-extrabold leading-snug tracking-tight sm:text-4xl">
                LET'S BUILD SOMETHING{" "}
                <span className="font-normal outline-text">GREAT TOGETHER</span>
              </h2>
              <p className="max-w-lg mt-2 text-sm text-gray-300 sm:text-base">
                Ready to turn your ideas into reality? Connect with our team and
                let's get started today.
              </p>
            </div>

            {/* Icon Button */}
            <div className="flex items-center justify-center mt-6 transition-transform rounded-full sm:mt-0 w-14 h-14 bg-gradient-to-tr from-blue-500 to-red-500 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 7l-10 10m0-10h10v10"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Row */}
      <div className="flex flex-col items-center justify-between gap-6 mx-auto mb-8 max-w-7xl md:flex-row">
      <Link to="/">  <img src={Logo} alt="Nextwebi Logo" className="w-40 md:w-48" /></Link>
      </div>

      {/* Main Footer Columns */}
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {/* Services */}
        <div data-aos="fade-up" data-aos-delay="0">
          <h3 className={`mb-2 text-xl font-bold ${heroGradientTitle}`}>
            Services
          </h3>
          <ul className="space-y-0.5 text-sm">
            <li>Offshore Software Development</li>
            <li>Custom Software Development</li>
            <li>ERP Application Development</li>
            <li>CRM Application Development</li>
            <li>Mobile App Development</li>
            <li>Fullstack Development</li>
            <li>Ecommerce App Development</li>
          </ul>
        </div>

        {/* Hire Developers */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className={`mb-2 text-xl font-bold ${heroGradientTitle}`}>
            Hire Developers
          </h3>
          <ul className="space-y-0.5 text-sm">
            <li>Hire React Developers</li>
            <li>Hire Angular Developers</li>
            <li>Hire Vue.Js Developers</li>
            <li>Hire Next.Js Developers</li>
            <li>Hire Android Developers</li>
            <li>Hire Fullstack Developer</li>
            <li>Hire Flutter Developer</li>
            <li>Hire ASP.Net Developer</li>
          </ul>
        </div>

        {/* Learn */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className={`mb-2 text-xl font-bold ${heroGradientTitle}`}>
            Learn
          </h3>
          <ul className="space-y-0.5 text-sm">
            <li>Our Work</li>
            <li>About Us</li>
            <li>Case Studies</li>
            <li>Blogs</li>
            <li>Clients</li>
            <li>Career</li>
            <li>Contact Us</li>
            <li>Customer Onboarding</li>
            <li>Pay Online</li>
          </ul>
        </div>

        {/* Solutions */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className={`mb-2 text-xl font-bold ${heroGradientTitle}`}>
            Solutions
          </h3>
          <ul className="space-y-0.5 text-sm">
            <li>Retail eCommerce</li>
            <li>CRM</li>
            <li>B2B OMS</li>
            <li>Travel Solutions</li>
            <li>Hotels & Resorts</li>
            <li>Ed-Tech</li>
            <li>Job Portals</li>
          </ul>
        </div>

        {/* Our Offices */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className={`mb-2 text-xl font-bold ${heroGradientTitle}`}>
            Our Offices
          </h3>
          <div className="mb-3 text-sm">
            <div className="font-semibold ">India</div>
            <div>
              4th floor, MPark, 32/1, NCPR Industrial Layout,
              <br />
              Hoodi, Whitefield Main Road,
              <br />
              Bangalore - 560048.
            </div>
          </div>
          <div className="text-sm">
            <div className="font-semibold">UAE</div>
            <div>
              Office No.2042, ABN Group,
              <br />
              20th Floor, Burjuman Business Tower,
              <br />
              Al Mankhool, Burdubai Dubai.
            </div>
          </div>
        </div>

        {/* Contact */}
        <div data-aos="fade-up" data-aos-delay="500">
          <h3 className={`mb-2 text-xl font-bold ${heroGradientTitle}`}>
            Contact
          </h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center ">
              {/* <Icon icon="mdi:phone" className="text-green-400" /> */}
              <span>+91 76196 35111</span>
            </li>
            <li className="flex items-center ">
              {/* <Icon icon="mdi:email" className="text-blue-300" /> */}
              <span>projects@nextwebi.com</span>
            </li>
            <li className="flex items-center ">
              {/* <Icon icon="mdi:email" className="text-blue-300" /> */}
              <span className="font-semibold">Intl. D-U-N-S:</span>
              <span>860499014</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col items-center justify-between pt-4 mx-auto mt-8 text-xs text-gray-400 border-t border-gray-700 max-w-7xl md:flex-row">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <span>© 2025 Nextwebi IT Solutions. All Rights Reserved</span>
        </div>
        <div className="flex items-center gap-3 mt-4 text-lg md:mt-0">
          <a href="#" aria-label="Skype">
            <Icon icon="mdi:skype"  />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Icon icon="mdi:linkedin"  />
          </a>
          <a href="#" aria-label="Twitter">
            <Icon icon="mdi:twitter"  />
          </a>
          <a href="#" aria-label="Facebook">
            <Icon icon="mdi:facebook"  />
          </a>
          <a href="#" aria-label="Instagram">
            <Icon icon="mdi:instagram"  />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
