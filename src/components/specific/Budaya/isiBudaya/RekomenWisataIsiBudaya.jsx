/* eslint-disable react/prop-types */
import ImageWithCaption from '../../../common/ImageWithCaption';
import { Carousel, IconButton } from "@material-tailwind/react";

const images = [
    { src: "./public/images/pantai-anyer.png", caption: "Pantai Anyer" },
    { src: "./public/images/tanjung-lesung.png", caption: "Tanjung Lesung" },
    { src: "./public/images/puncak-gunung-karang.png", caption: "Puncak Gunung Karang" },
  ];
const images2 = [
    { src: "./public/images/pantai-anyer.png", caption: "Pantai Anyer" },
    { src: "./public/images/tanjung-lesung.png", caption: "Tanjung Lesung" },
    { src: "./public/images/puncak-gunung-karang.png", caption: "Puncak Gunung Karang" },
  ];


const RekomenWisataIsiBudaya = () => {
    return (
        <>
            <div className='container relative max-w-full h-auto'>
                <h1 className='font-bold text-3xl text-center'>Rekomendasi Wisata</h1>
            <div className='container max-w-full h-auto px-20'>
            <Carousel transition={{ duration: 1 }} className="rounded-xl min-h-[478px]" prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#5388AA"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#5388AA"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg> </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2 mb-20">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-[#5388AA]" : "w-4 bg-[#242424]"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      >
        <div className='flex mt-20 px-20'>
                    {images.map((image,index) => (
                         
                        <ImageWithCaption key={index} imageSrc={image.src} caption={image.caption} 
                        ></ImageWithCaption>

                    ))}
             </div>
             <div className='flex mt-20 px-20'>
                    {images2.map((image,index) => (
                        
                        <ImageWithCaption key={index} imageSrc={image.src} caption={image.caption} 
                        > </ImageWithCaption>
                    
                    ))}
                </div>

                    
                </Carousel>
                </div>

            </div>
        </>
    )
}

export default RekomenWisataIsiBudaya;