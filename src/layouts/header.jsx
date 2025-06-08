import { useState, useRef, useEffect } from "react";
import { Link, useLocation,NavLink } from "react-router-dom";
import gsap from "gsap";
import LogoBefore from "../assets/images/logos/logo-white.png";
import LogoAfter from "../assets/images/logos/nextwebi-logo.png";
import { Icon } from "@iconify/react";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);
  const headerRef = useRef(null);

  // Initial header animation (only on homepage)
  useEffect(() => {
    if (!isHomePage) return;

    if (headerRef.current) {
      const children = Array.from(headerRef.current.children);
      children.forEach((child) => {
        child.style.opacity = "0";
      });

      gsap.set(headerRef.current, {
        clearProps: "all",
        overflow: "hidden",
        opacity: 1,
      });

      gsap.fromTo(
        headerRef.current,
        { scale: 0.7, filter: "blur(8px)" },
        {
          scale: 1.08,
          filter: "blur(0px)",
          duration: 0.5,
  ease: "power2.out",
          overflow: "hidden",
          onStart: () => {
            children.forEach((child) => {
              child.style.opacity = "0";
            });
          },
          onComplete: () => {
            gsap.to(headerRef.current, {
              scale: 1,
              duration: 0.25,
              ease: "elastic.out(1, 0.5)",
              onStart: () => {
                children.forEach((child) => {
                  child.style.opacity = "1";
                });
              },
              onComplete: () => {
                if (headerRef.current) headerRef.current.style.overflow = "";
              },
            });
          },
        }
      );
    }
  }, [isHomePage]);

  // Drawer animation
  useEffect(() => {
    if (open) {
      gsap.fromTo(
        drawerRef.current,
        {
          x: "100%",
          rotate: 30,
          scale: 0.8,
          opacity: 0.5,
          pointerEvents: "none",
        },
        {
          x: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "power4.out",
          pointerEvents: "auto",
        }
      );
    } else {
      gsap.to(drawerRef.current, {
        x: "130%",
        rotate: 20,
        scale: 0.8,
        opacity: 0.5,
        duration: 0.6,
        ease: "power4.in",
        pointerEvents: "none",
      });
    }
  }, [open]);

  // Scroll detection (still active for all pages)
  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.3);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header style change on scroll
  useEffect(() => {
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        maxWidth: scrolled ? "100vw" : "100%",
        marginLeft: scrolled ? 0 : "",
        marginRight: scrolled ? 0 : "",
        borderRadius: scrolled ? 0 : 24,
        left: scrolled ? 0 : "",
        right: scrolled ? 0 : "",
        backgroundColor: scrolled || !isHomePage ? "#fff" : "rgba(0,0,0,0.7)",
        color: scrolled || !isHomePage ? "#222" : "#fff",
        boxShadow: scrolled
          ? "0 8px 32px 0 rgba(31,38,135,0.25), 0 2px 16px 0 rgba(0,0,0,0.10)"
          : "0 4px 16px 0 rgba(31,38,135,0.10)",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [scrolled, isHomePage]);

  return (
    <div className="w-full bg-transparent">
      <div className="flex justify-center w-full">
        <header
          className={`fixed z-[9999] w-full flex justify-center transition-all duration-500 px-lg${
            isHomePage && !scrolled ? " container mx-auto" : ""
          }`}
          style={{
            top: isHomePage ? (scrolled ? 0 : "2rem") : 0,
            pointerEvents: "none",
            transition: "top 0.5s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div
            ref={headerRef}
            className="relative flex items-center justify-between w-full px-4 py-3 transition-all duration-500 shadow-lg pointer-events-auto rounded-xl sm:px-6"
            style={{
              boxShadow: scrolled
                ? "0 8px 32px 0 rgba(31,38,135,0.25), 0 2px 16px 0 rgba(0,0,0,0.10)"
                : "0 4px 16px 0 rgba(31,38,135,0.10)",
              color: scrolled || !isHomePage ? "#222" : "#fff",
              background: scrolled || !isHomePage ? "#fff" : "rgba(0,0,0,0.7)",
              borderColor: "#e5e7eb",
              marginLeft: 0,
              marginRight: 0,
              transition: "background 0.5s, color 0.5s",
            }}
          >
            {!scrolled && isHomePage ? (
              <Link to="/">
                {" "}
                <img
                  src={LogoBefore}
                  alt="Logo Before"
                  className="w-auto h-8 transition-all duration-500"
                />
              </Link>
            ) : (
              <Link to="/">
                <img
                  src={LogoAfter}
                  alt="Logo"
                  className="w-auto h-8 transition-all duration-500"
                />
              </Link>
            )}

            <nav
              className={`hidden space-x-4 text-md lg:flex ${
                scrolled || !isHomePage ? "text-black" : "text-white"
              } font-semibold`}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/bloglist"
                className={({ isActive }) =>
                  `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/hire-developers"
                className={({ isActive }) =>
                  `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`
                }
              >
                Hire Developers
              </NavLink>
              <NavLink
                to="/solutions"
                className={({ isActive }) =>
                  `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`
                }
              >
                Solutions
              </NavLink>
              <NavLink
                to="/technologies"
                className={({ isActive }) =>
                  `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`
                }
              >
                Technologies
              </NavLink>
              <NavLink
                to="/ourwork"
                className={({ isActive }) =>
                  `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`
                }
              >
                Our Work
              </NavLink>
            </nav>

            <div className="header-actions">
              <div className="wave-a">
                <span className="hover-span">Contact </span>
                <div className="wave"></div>
              </div>
              <button
                className="flex flex-col items-center justify-center w-8 h-8 ml-2 lg:hidden"
                onClick={() => setOpen(true)}
                aria-label="Open Menu"
              >
                {[...Array(3)].map((_, i) => (
                  <span
                    key={i}
                    className={`block h-0.5 w-6 mb-1 transition-all ${
                      scrolled || !isHomePage ? "bg-black" : "bg-white"
                    }`}
                  ></span>
                ))}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Overlay */}
          <div
            className={`fixed inset-0 z-50 bg-black/40 lg:hidden transition-opacity duration-300 ${
              open
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setOpen(false)}
          />

          {/* Mobile Drawer Content */}
          <div
            ref={drawerRef}
            className="fixed top-0 right-0 z-50 flex flex-col w-2/3 h-full max-w-xs overflow-hidden pointer-events-auto lg:hidden"
            style={{
              transform: "translateX(120%) rotate(17deg) scale(0.8)",
              opacity: 0.5,
              background: "#000000",
              boxShadow: "0 0 40px 0 rgba(0,0,0,0.2)",
              pointerEvents: "none",
            }}
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <img src={LogoBefore} alt="Logo" className="w-auto h-8" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close Menu"
                className="flex items-center justify-center w-8 h-8 text-xl text-black transition bg-white rounded-full hover:bg-blue-400 hover:text-white"
              >
                ×
              </button>
            </div>

         <nav className="flex flex-col flex-grow px-6 pt-10 space-y-6 font-medium text-white text-md">
  {[
    { to: "/", label: "Home", icon: "mdi:home" },
    { to: "/bloglist", label: "Blog", icon: "mdi:domain" },
    { to: "/services", label: "Services", icon: "mdi:tools" },
    { to: "/hire-developers", label: "Hire Developers", icon: "mdi:account-group" },
    { to: "/solutions", label: "Solutions", icon: "mdi:lightbulb-on" },
    { to: "/technologies", label: "Technologies", icon: "mdi:code-tags" },
    { to: "/ourwork", label: "Our Work", icon: "mdi:briefcase-check" },
  ].map(({ to, label, icon }) => (
    <NavLink
      key={to}
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `flex items-center justify-between w-full pb-3 text-left border-b border-gray-600 hover:text-blue-300 ${
          isActive ? "text-blue-400 font-bold" : ""
        }`
      }
    >
      <div className="flex items-center space-x-3">
        <Icon icon={icon} className="w-6 h-6" />
        <span>{label}</span>
      </div>
      <div className="h-6 border-r border-gray-400"></div>
    </NavLink>
  ))}
</nav>

            <div className="flex justify-center pt-4 pb-8 space-x-6 text-white">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-yellow-300"
              >
                <Icon icon="mdi:facebook" className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-yellow-300"
              >
                <Icon icon="mdi:twitter" className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-yellow-300"
              >
                <Icon icon="mdi:linkedin" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
