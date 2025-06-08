import React from "react";

const logos = [
  "https://www.nextwebi.com/assets/images/home/client-logo/Leadsguru.webp",
  "https://www.nextwebi.com/assets/images/home/client-logo/Benchmark.webp",
  "https://www.nextwebi.com/assets/images/home/client-logo/Dynamatics.webp",
  "https://www.nextwebi.com/assets/images/home/client-logo/Archidply.webp",
  "https://www.nextwebi.com/assets/images/home/client-logo/Swiggy.webp",
  "https://www.nextwebi.com/assets/images/home/client-logo/AI-Travels.webp",
  "https://www.nextwebi.com/assets/images/home/client-logo/IFB.webp",
  "https://www.nextwebi.com/assets/images/home/client-logo/Book-My-Wed.webp",
  "https://www.nextwebi.com/assets/images/home/client-logo/Online-instruments-(Logic).webp",
  "https://www.nextwebi.com/assets/images/home/client-logo/Novartis.webp",
  "https://www.nextwebi.com/assets/images/home/client-logo/SoWerent.webp",
  "https://www.nextwebi.com/assets/images/home/client-logo/SaiLakshmi.webp",
];

// Split logos into two rows roughly evenly
const row1 = logos.filter((_, i) => i % 2 === 0);
const row2 = logos.filter((_, i) => i % 2 !== 0);

const HorizontalMarquee = () => {
  return (
    <>
 
<div className="flex justify-center w-full">
  <div className=" marquee-wrapper">
        <div className="marquee-row scroll-left" style={{gap: '2rem'}}>
          {[...row1, ...row1].map((src, idx) => (
            <div key={`row1-${idx}`} className="marquee-item">
              <img src={src} alt={`Client logo row1 ${idx + 1}`} />
            </div>
          ))}
        </div>

        <div className="marquee-row scroll-right" style={{marginTop: "1rem", gap: '2rem'}}>
          {[...row2, ...row2].map((src, idx) => (
            <div key={`row2-${idx}`} className="marquee-item">
              <img src={src} alt={`Client logo row2 ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
</div>
      
    </>
  );
};

export default HorizontalMarquee;
