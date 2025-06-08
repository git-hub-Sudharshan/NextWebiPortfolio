import React, { useState } from "react";

const ReviewSection = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 p-4 mx-auto rounded-lg md:grid-cols-3 max-w-7xl bg-gray-50">
      <ReviewCard
        platform="Google"
        logo="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        rating="4.7"
        reviews="13,839"
        interest="Most searched platform"
        isGoogle
      />
      <ReviewCard
        platform="GoodFirms"
        logo="https://www.nextwebi.com/assets/images/icons/goodfirms.webp"
        rating="4.8"
        reviews="2,342"
        interest="Trusted by tech experts"
      />
      <ReviewCard
        platform="Clutch"
        logo="https://www.nextwebi.com/assets/images/icons/clutch.webp"
        rating="4.9"
        reviews="1,027"
        interest="Professional B2B Reviews"
        isClutch
      />
    </div>
  );
};

const ReviewCard = ({
  platform,
  logo,
  rating,
  reviews,
  interest,
  isGoogle,
  isClutch,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col justify-between w-full h-full p-6 text-center text-white bg-black rounded-lg shadow-sm">
      <div className="flex flex-col items-center justify-center space-y-2">
        {!imgError ? (
          <div className={`${isClutch ? "bg-black p-2 rounded" : ""}`} style={{ width: isGoogle ? "100px" : "auto" }}>
            <img
              src={logo}
              alt={`${platform} Logo`}
              className="h-8 mx-auto"
              onError={() => setImgError(true)}
              style={{ objectFit: "contain" }}
            />
          </div>
        ) : (
          <span className="text-xl font-bold text-gray-300">{platform}</span>
        )}
        <div>
          <h3 className="text-lg font-semibold">{platform} Reviews</h3>
          {interest && <p className="text-xs mt-0.5">{interest}</p>}
        </div>
      </div>

      <div className="flex items-center justify-center mt-4 space-x-2">
        <span className="text-xl font-bold">{rating}</span>
        <div className="flex space-x-0.5 text-yellow-400">
          <Star />
          <Star />
          <Star />
          <Star />
          <HalfStar />
        </div>
        <span className="text-sm text-gray-400">({reviews})</span>
      </div>
    </div>
  );
};

const Star = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
    <polygon points="9.9,1.1 7.5,6.6 1.4,7.3 6.3,11.6 4.9,17.6 9.9,14.3 14.9,17.6 13.5,11.6 18.4,7.3 12.3,6.6" />
  </svg>
);

const HalfStar = () => (
  <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
    <defs>
      <linearGradient id="half">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <polygon
      fill="url(#half)"
      points="9.9,1.1 7.5,6.6 1.4,7.3 6.3,11.6 4.9,17.6 9.9,14.3 14.9,17.6 13.5,11.6 18.4,7.3 12.3,6.6"
    />
  </svg>
);

export default ReviewSection;
