/* eslint-disable react/prop-types */
import { useRef } from "react";

const reviewData = [
  {
    name: "Jenny Wilson",
    company: "Grower.io",
    imgSrc: "./public/images/female-person.png",
  },
  {
    name: "Devon Lane",
    company: "DLDesign.co",
    imgSrc: "./public/images/male-person.png",
  },
  // Add more review data objects here
];

const duplicateData = (Data) => {
  const duplicatedData = [...Data, ...Data, ...Data];
  return duplicatedData;
};

const ReviewCard = ({ name, company, imgSrc }) => {
  return (
    <div className="flex gap-5 w-full md:grid-cols-2 md:gap-0">
      <div className="flex flex-col min-w-[216px] min-h-[239px]">
        <img loading="lazy" srcSet={imgSrc} className="aspect-[0.9] w-[215px]" />
      </div>
      <div className="flex flex-col ml-5 min-w-[312px] md:ml-0 md:w-full">
        <div className="flex flex-col grow mt-4 md:mt-10">
          <img
            loading="lazy"
            src="./public/review-stars.svg"
            className="-translate-x-[6rem] aspect-[5.88] w-[109px]"
          />
          <div className="mt-8 text-lg font-medium leading-7 text-gray-950">
            &quot;We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.&quot;
          </div>
          <div className="flex justify-center gap-2.5 mt-5 text-base">
            <div className="font-semibold -translate-x-[4rem] tracking-normal leading-7 text-gray-950">
              {name}
            </div>
            <div className="font-medium leading-6 self-center text-slate-500">
              {company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewWebsite = () => {
  const infiniteData = duplicateData(reviewData);
  const carouselRef = useRef(null);

  const handleHoverStart = (ref) => {
    if (ref.current) {
      ref.current.style.animationPlayState = "paused";
    }
  };

  const handleHoverEnd = (ref) => {
    if (ref.current) {
      ref.current.style.animationPlayState = "running";
    }
  };

  return (
    <>
      <div className='container w-full bg-white min-h-[641px] bg-[url("./public/images/pattern-destinasi-pilihan.png")]'>
        <div className="flex flex-col">
          <div className="text-3xl font-bold text-center mt-20 mb-20 text-black md:max-w-full">
            Apa yang Orang Pikirkan Tentang Kami ?
          </div>
          <div
            onMouseEnter={() => handleHoverStart(carouselRef)}
            onMouseLeave={() => handleHoverEnd(carouselRef)}
            className="flex lg:grid-cols-2 lg:grid no-scrollbar overflow-x-auto mt-40 w-full md:flex-wrap md:mt-10 md:max-w-full relative"
          >
            <div
              ref={carouselRef}
              className="flex gap-5 justify-between animate-infinite-scroll-fast"
            >
              {infiniteData.map((review, index) => (
                <div key={index} className="md:max-w-full">
                  <ReviewCard
                    name={review.name}
                    company={review.company}
                    imgSrc={review.imgSrc}
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/75 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/75 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewWebsite;