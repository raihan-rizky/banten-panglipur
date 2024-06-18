/* eslint-disable react/prop-types */
import ImageWithCaption2 from '../../../common/ImageWithCaption';
import { Carousel, IconButton } from "@material-tailwind/react";

const images = [
    { src: "../../public/images/pantai-anyer.png", caption: "Pantai Anyer" },
    { src: "../../public/images/tanjung-lesung.png", caption: "Tanjung Lesung" },
    { src: "../../public/images/puncak-gunung-karang.png", caption: "Puncak Gunung Karang" },
  ];
const images2 = [
    { src: "../../public/images/pantai-anyer.png", caption: "Pantai Anyer" },
    { src: "../../public/images/tanjung-lesung.png", caption: "Tanjung Lesung" },
    { src: "../../public/images/puncak-gunung-karang.png", caption: "Puncak Gunung Karang" },
  ];


const RekomenWisataIsiBudaya = () => {
    return (
        <>
            <div className='container relative max-w-full h-auto'>
                <h1 className='font-bold text-3xl text-center mb-20'>Rekomendasi Wisata</h1>
            <div className='container max-w-full h-auto px-40'>
            <Carousel transition={{ duration: 1 }} className="rounded-xl lg:min-h-[750px] container min-h-[228px] max-h-full" prevArrow={({ handlePrev }) => (
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
        <div className="absolute bottom-0 lg:translate-y-0 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
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
        <div className='flex mt-22 px-20 lg:flex-col  lg:gap-32 lg:translate-x-8 lg:transform'>
                    {images.map((image,index) => (
                         
                        <ImageWithCaption2 key={index} imageSrc={image.src} caption={image.caption} 
                        ></ImageWithCaption2>

                    ))}
             </div>
             <div className='flex lg:flex-col translate-x-6  lg:gap-32 lg:translate-x-8 lg:transform mt-22 px-20'>
                    {images2.map((image,index) => (
                        
                        <ImageWithCaption2 key={index} imageSrc={image.src} caption={image.caption} 
                        > </ImageWithCaption2>
                    
                    ))}
                </div>

                    
                </Carousel>
                </div>

            </div>
            <div className="relative my-20 h-1 mx-60 max-w-[1900px] bg-black border-1 border-solid border-black rounded-md" />
        </>
    )
}

export default RekomenWisataIsiBudaya;