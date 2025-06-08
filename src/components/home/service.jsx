import React, { useEffect, useRef, useState } from "react";


import { headings } from "../../styles/gradients";
const cardData = [
  {
    title: "Software Development",
    description:
      "Whether you intend to extend your in-house team or develop custom software, we can become your trusted tech partner.",
    isMain: true,
    services: [
      {
        title: "Custom Software Development",
        description:
          "Build tailored solutions that perfectly match your business requirements with cutting-edge technology.",
        icon: "💻",
      },
      {
        title: "Cloud Solutions",
        description:
          "Migrate and optimize your applications for cloud platforms with enhanced security and scalability.",
        icon: "☁️",
      },
      {
        title: "Mobile App Development",
        description:
          "Create engaging mobile experiences for iOS and Android platforms with native performance.",
        icon: "📱",
      },
      {
        title: "Microsoft SharePoint Customization",
        description:
          "Enhance your SharePoint environment with custom workflows, webparts, and business solutions.",
        icon: "🔧",
      },
      {
        title: "ERP Solutions",
        description:
          "Implement and customize enterprise resource planning systems to streamline your business operations.",
        icon: "🏢",
      },
      {
        title: "Offshore Software Development",
        description:
          "Access global talent pool with cost-effective offshore development services while maintaining quality standards.",
        icon: "🌍",
      },
    ],
  },
  {
    title: "Web Development",
    description:
      "Creating modern, responsive, and high-performance web applications.",
    isMain: false,
    services: [
      {
        title: "Frontend Development",
        description:
          "Modern React, Vue, and Angular applications with responsive design and optimal performance.",
        icon: "🎨",
      },
      {
        title: "Backend Development",
        description:
          "Robust server-side solutions using Node.js, Python, Java, and other cutting-edge technologies.",
        icon: "⚡",
      },
      {
        title: "Full-Stack Solutions",
        description:
          "End-to-end web application development with seamless frontend and backend integration.",
        icon: "🔄",
      },
      {
        title: "E-commerce Platforms",
        description:
          "Custom online stores with payment integration, inventory management, and user analytics.",
        icon: "🛒",
      },
      {
        title: "CMS Development",
        description:
          "Content management systems tailored to your business needs with intuitive admin panels.",
        icon: "📝",
      },
      {
        title: "Progressive Web Apps",
        description:
          "PWAs that combine the best of web and mobile apps with offline functionality.",
        icon: "📲",
      },
    ],
  },
  {
    title: "Mobile Solutions",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    isMain: false,
    services: [
      {
        title: "iOS Development",
        description:
          "Native iOS apps using Swift and Objective-C with App Store optimization and deployment.",
        icon: "🍎",
      },
      {
        title: "Android Development",
        description:
          "Native Android applications using Kotlin and Java with Google Play Store publishing.",
        icon: "🤖",
      },
      {
        title: "React Native",
        description:
          "Cross-platform mobile apps with native performance using React Native framework.",
        icon: "⚛️",
      },
      {
        title: "Flutter Development",
        description:
          "Beautiful, fast, and cross-platform mobile apps using Google's Flutter framework.",
        icon: "🦋",
      },
      {
        title: "App Store Optimization",
        description:
          "Maximize your app's visibility and downloads with strategic ASO techniques.",
        icon: "📈",
      },
      {
        title: "Mobile UI/UX Design",
        description:
          "Intuitive and engaging mobile interfaces designed for optimal user experience.",
        icon: "🎯",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure and automated deployment solutions.",
    isMain: false,
    services: [
      {
        title: "AWS Solutions",
        description:
          "Comprehensive Amazon Web Services implementation with security and cost optimization.",
        icon: "☁️",
      },
      {
        title: "Azure Integration",
        description:
          "Microsoft Azure cloud services with enterprise-grade security and compliance.",
        icon: "🔷",
      },
      {
        title: "Docker & Kubernetes",
        description:
          "Containerization and orchestration for scalable, portable application deployment.",
        icon: "🐳",
      },
      {
        title: "CI/CD Pipelines",
        description:
          "Automated testing, building, and deployment pipelines for faster time-to-market.",
        icon: "🔄",
      },
      {
        title: "Infrastructure as Code",
        description:
          "Terraform and CloudFormation templates for reproducible infrastructure management.",
        icon: "🏗️",
      },
      {
        title: "Monitoring & Analytics",
        description:
          "Real-time application monitoring, logging, and performance analytics solutions.",
        icon: "📊",
      },
    ],
  },
];

const aosAnimations = [
  "fade-up",
  "fade-down",
  "fade-left",
  "fade-right",
  "zoom-in",
  "flip-left",
  "flip-right",
  "slide-up",
  "slide-down",
];

const DesktopView = () => {
  const mainWrapperRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsapScript = document.createElement("script");
      gsapScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      document.head.appendChild(gsapScript);

      const scrollTriggerScript = document.createElement("script");
      scrollTriggerScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
      document.head.appendChild(scrollTriggerScript);

      return new Promise((resolve) => {
        scrollTriggerScript.onload = () => resolve();
      });
    };

    const loadAOS = async () => {
      const aosCSS = document.createElement("link");
      aosCSS.rel = "stylesheet";
      aosCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
      document.head.appendChild(aosCSS);

      const aosScript = document.createElement("script");
      aosScript.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js";
      document.head.appendChild(aosScript);

      return new Promise((resolve) => {
        aosScript.onload = () => resolve();
      });
    };

    Promise.all([loadGSAP(), loadAOS()]).then(() => {
      const { gsap } = window;
      const { ScrollTrigger } = window;
      const { AOS } = window;

      gsap.registerPlugin(ScrollTrigger);

      AOS.init({
        duration: 600,
        easing: "ease-out-cubic",
        once: false,
        mirror: true,
        offset: 120,
        delay: 0,
        disable: false,
        startEvent: "DOMContentLoaded",
        initClassName: "aos-init",
        animatedClassName: "aos-animate",
      });

      let cardElements = gsap.utils.toArray(".scroll-card");
      let horizontalTween = gsap.to(cardElements, {
        xPercent: (i) => -100 * i,
        duration: (i) => 0.5 * i,
        ease: "none",
        scrollTrigger: {
          trigger: ".scroll-container",
          pin: true,
          scrub: 0.1,
          snap: 1 / (cardElements.length - 1),
          end: () => "+=" + (cardElements.length - 1) * window.innerHeight,
        },
      });

      gsap.utils.toArray(".scroll-card").forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          containerAnimation: horizontalTween,
          start: "left 80%",
          end: "right 20%",
          toggleClass: "active-card",
          onEnter: () => {
            const serviceCards = card.querySelectorAll(
              ".service-card[data-aos]"
            );
            serviceCards.forEach((serviceCard, serviceIndex) => {
              setTimeout(() => {
                serviceCard.classList.add("aos-animate");
              }, serviceIndex * 100);
            });

            const cardTitle = card.querySelector(".card-title[data-aos]");
            const cardDesc = card.querySelector(".card-description[data-aos]");

            if (cardTitle) cardTitle.classList.add("aos-animate");
            if (cardDesc) {
              setTimeout(() => {
                cardDesc.classList.add("aos-animate");
              }, 200);
            }
          },
          onLeave: () => {
            const animatedElements = card.querySelectorAll("[data-aos]");
            animatedElements.forEach((el) => {
              el.classList.remove("aos-animate");
            });
          },
          onEnterBack: () => {
            const serviceCards = card.querySelectorAll(
              ".service-card[data-aos]"
            );
            serviceCards.forEach((serviceCard, serviceIndex) => {
              setTimeout(() => {
                serviceCard.classList.add("aos-animate");
              }, serviceIndex * 80);
            });

            const cardTitle = card.querySelector(".card-title[data-aos]");
            const cardDesc = card.querySelector(".card-description[data-aos]");

            if (cardTitle) cardTitle.classList.add("aos-animate");
            if (cardDesc) {
              setTimeout(() => {
                cardDesc.classList.add("aos-animate");
              }, 150);
            }
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });
  }, []);

  return (
    <div className="main-wrapper" ref={mainWrapperRef}>
      <div className="scroll-container" ref={scrollContainerRef}>
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`scroll-card ${card.isMain ? "main-card" : ""}`}
          >
            <div className="card-content ">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 ${headings} text-center sm:w-fit`}
                
                data-aos="fade-down"
                data-aos-duration="600"
              >
                {card.title}
              </h2>
              {/* <p
                className="card-description"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                {card.description}
              </p> */}

              <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
                {card.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="service-card"
                    data-aos={
                      aosAnimations[serviceIndex % aosAnimations.length]
                    }
                    data-aos-duration="500"
                  >
                    <div className="text-start">
                      <div className="service-image">{service.icon}</div>
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileSlider = () => {
  const mobileSliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cardData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mobile-slider-container">
      <div className="mobile-slider" ref={mobileSliderRef}>
        <div
          className="mobile-slides-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`mobile-slide ${
                index === currentSlide ? "mobile-slide-active" : ""
              }`}
            >
              <div className="mobile-card-content">
                <h2                 className={` text-3xl md:text-4xl font-bold mb-4 ${headings} text-center sm:w-fit`} >
                  {card.title}
                </h2>
                <p className="mobile-card-description">{card.description}</p> *
                <div className="mobile-services-grid">
                  {card.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="mobile-service-card">
                      <div className="mobile-service-content">
                        <div className="mobile-service-image">
                          {service.icon}
                        </div>
                        <h3 className="mobile-service-title">
                          {service.title}
                        </h3>
                        <p className="mobile-service-description">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-slider-nav">
        <button
          onClick={prevSlide}
          className="mobile-nav-btn mobile-nav-prev"
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="mobile-slider-dots">
          {cardData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mobile-dot ${
                index === currentSlide ? "mobile-dot-active" : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="mobile-nav-btn mobile-nav-next"
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const HorizontalScrollCards = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile === null) {
    return null; // Avoid rendering until screen size is determined
  }

  return (
    <div className="container mx-auto mt-14 px-lg">
   <div className="flex flex-col items-center px-4 text-center md:px-8">
  <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${headings}`}>
    
    What Can We Do For You
  </h2>
  <p className="max-w-4xl text-base leading-relaxed text-gray-700">
    Whether you intend to extend your in-house team or develop custom software, we can become your trusted tech partner. With us, you can easily access our pre-vetted talent as dedicated developers, augment your IT team, and outsource your complex software needs to scale your business.
  </p>
</div>
      {isMobile ? <MobileSlider /> : <DesktopView />}
    </div>
  );
};

export default HorizontalScrollCards;
