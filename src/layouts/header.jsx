import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import LogoBefore from "../assets/images/logos/logo-white.png";
import LogoAfter from "../assets/images/logos/nextwebi-logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);
  const headerRef = useRef(null);

  // Initial header entrance animation (pop effect, hide content while shrinking)
  useEffect(() => {
    if (headerRef.current) {
      // Find all direct children (logo, nav, button)
      const children = Array.from(headerRef.current.children);
      // Hide all content initially
      children.forEach((child) => {
        child.style.opacity = "0";
      });

      gsap.set(headerRef.current, { clearProps: "all", overflow: "hidden", opacity: 1 });
      gsap.fromTo(
        headerRef.current,
        { scale: 0.7, filter: "blur(8px)" },
        {
          scale: 1.08,
          filter: "blur(0px)",
          duration: 0.45,
          ease: "power3.out",
          overflow: "hidden",
          onStart: () => {
            // Keep content hidden while shrinking
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
                // Reveal content as pop finishes
                children.forEach((child) => {
                  child.style.opacity = "1";
                });
              },
              onComplete: () => {
                // Remove overflow after animation
                if (headerRef.current) headerRef.current.style.overflow = "";
              }
            });
          },
        }
      );
    }
  }, []);

  // Drawer animation (unchanged)
  useEffect(() => {
    if (open) {
      gsap.fromTo(
        drawerRef.current,
        { x: "100%", rotate: 30, scale: 0.8, opacity: 0.5, pointerEvents: "none" },
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

  // Detect scroll past hero (90vh)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate header to full width on scroll and add strong shadow
  useEffect(() => {
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        maxWidth: scrolled ? "100vw" : "100%",
        marginLeft: scrolled ? 0 : "",
        marginRight: scrolled ? 0 : "",
        borderRadius: scrolled ? 0 : 24,
        left: scrolled ? 0 : "",
        right: scrolled ? 0 : "",
        boxShadow: scrolled
          ? "0 8px 32px 0 rgba(31,38,135,0.25), 0 2px 16px 0 rgba(0,0,0,0.10)"
          : "",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [scrolled]);

  return (
    <div className="w-full bg-transparent ">
      <div className="flex justify-center w-full ">
        <header
          className={`fixed z-[9999] w-full flex justify-center transition-all duration-500 container mx-auto px-lg` }
          style={{
            top: scrolled ? 0 : "2rem",
            transition: "top 0.5s cubic-bezier(0.4,0,0.2,1)",
            pointerEvents: "none",
          }}
        >
          <div
            ref={headerRef}
            className="relative flex items-center justify-between w-full px-4 py-3 transition-all duration-500 shadow-lg pointer-events-auto rounded-xl sm:px-6"
            style={{
              boxShadow: scrolled
                ? "0 8px 32px 0 rgba(31,38,135,0.25), 0 2px 16px 0 rgba(0,0,0,0.10)"
                : "0 4px 16px 0 rgba(31,38,135,0.10)",
              color: "#222", // Ensures text is dark
              borderColor: "#e5e7eb",
              marginLeft: 0,
              marginRight: 0,
            }}
          >
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-purple-300 rounded-xl bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-3xl -z-10" />
            {/* Always show logo in header */}
            {!scrolled ? (
              <img
                src={LogoBefore}
                alt="Logo Before"
                className="w-auto h-8 transition-all duration-500"
              />
            ) : (
              <img
                src={LogoAfter}
                alt="Logo"
                className="w-auto h-8 transition-all duration-500"
              />
            )}
            {/* Desktop Nav - hidden on screens <= 1024px */}
            <nav className="hidden space-x-4 text-white text-md lg:flex">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <Link to="/company" className="hover:text-blue-600">Company</Link>
              <Link to="/services" className="hover:text-blue-600">Services</Link>
              <Link to="/hire-developers" className="hover:text-blue-600">Hire Developers</Link>
              <Link to="/solutions" className="hover:text-blue-600">Solutions</Link>
              <Link to="/technologies" className="hover:text-blue-600">Technologies</Link>
              <Link to="/ourwork" className="hover:text-blue-600">Our Work</Link>
            </nav>
            {/* Hamburger Icon - visible on screens <= 1024px */}
            <button
              className="flex flex-col items-center justify-center w-8 h-8 ml-2 lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open Menu"
            >
              <span className="block h-0.5 w-6 bg-gray-800 mb-1 transition-all"></span>
              <span className="block h-0.5 w-6 bg-gray-800 mb-1 transition-all"></span>
              <span className="block h-0.5 w-6 bg-gray-800 transition-all"></span>
            </button>
          </div>
          {/* Overlay */}
          <div
            className={`fixed inset-0 z-50 bg-black/40 md:hidden transition-opacity duration-300 ${
              open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setOpen(false)}
          />
          {/* Drawer with GSAP */}
          <div
            ref={drawerRef}
            className="fixed top-0 right-0 z-50 w-2/3 h-full max-w-xs overflow-hidden pointer-events-auto md:hidden"
            style={{
              transform: "translateX(120%) rotate(17deg) scale(0.8)",
              opacity: 0.5,
              background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
              boxShadow: "0 0 40px 0 rgba(0,0,0,0.2)",
              pointerEvents: "none",
            }}
          >
            {/* Animated Blobs */}
            <div className="absolute w-40 h-40 bg-pink-400 rounded-full pointer-events-none -top-10 -left-10 opacity-30 blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 w-32 h-32 bg-blue-400 rounded-full pointer-events-none -right-15 opacity-30 blur-2xl animate-pulse"></div>
            <button
              className="absolute z-20 text-2xl text-white transition top-4 right-4 hover:text-yellow-300"
              onClick={() => setOpen(false)}
              aria-label="Close Menu"
            >×</button>
            <nav className="relative z-10 flex flex-col items-center justify-center h-full pt-32 space-y-8 text-lg font-semibold">
              <Link
                to="/"
                className="text-white transition-all duration-200 hover:text-yellow-300"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white transition-all duration-200 hover:text-yellow-300"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white transition-all duration-200 hover:text-yellow-300"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;

