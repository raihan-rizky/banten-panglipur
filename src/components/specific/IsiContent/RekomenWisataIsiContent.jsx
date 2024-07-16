/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import ImageWithCaption2 from '../../common/ImageWithCaption';
import { Carousel, IconButton } from "@material-tailwind/react";

const RekomenWisataIsiBudaya = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get('https://backend-api-capstone-bdt-deploy.vercel.app/places');
        console.log(response.data); // Debugging: Check the structure of response.data
        if (!response.data || !Array.isArray(response.data.places)) {
          throw new Error('Invalid data format from API');
        }
        const filteredPlaces = response.data.places.filter(place => place.category === 'Pariwisata');
        setPlaces(filteredPlaces);
      } catch (error) {
        console.error('Error fetching places:', error);
      }
    };

    fetchPlaces();
  }, []);

  // Function to get 3 random unique places for each slide
  const getRandomPlaces = () => {
    const uniquePlaces = [...new Set(places.map(place => place.id_place))]; // Get unique IDs
    const randomIds = [];
    while (randomIds.length < 3 && uniquePlaces.length > 0) {
      const randomIndex = Math.floor(Math.random() * uniquePlaces.length);
      randomIds.push(uniquePlaces.splice(randomIndex, 1)[0]);
    }
    return places.filter(place => randomIds.includes(place.id_place));
  };

  return (
    <>
      <div className='container relative max-w-full h-auto'>
        <h1 className='font-bold text-3xl text-center mb-10'>Rekomendasi Wisata</h1>
        <div className='container max-w-auto h-auto px-4 lg:px-20 md-max:px-0 px-10'>
          <Carousel transition={{ duration: 1 }} className="rounded-xl lg:min-h-[750px] vs-max:min-h-[510px] container min-h-[228px]" prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 vs-max:w-8 vs-max:h-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#5388AA"
                className="h-6 w-6 vs-max:w-5"
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
                className="!absolute top-2/4 !right-4 -translate-y-2/4 vs-max:w-8 vs-max:h-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#5388AA"
                  className="h-6 w-6 vs-max:w-5"
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
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-[#5388AA]" : "w-4 bg-[#242424]"
                      }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {/* Render each slide */}
            {Array.from({ length: 2 }).map((_, slideIndex) => (
              <div key={slideIndex} className='flex lg:flex-col sm-max:pr-20 lg:gap-32 sm-max:px-10 sm-max:gap-22 vs-max:gap-12 lg:translate-x-8 lg:transform mt-22 px-20'>
                {getRandomPlaces().map((place, index) => (
                  <ImageWithCaption2
                    key={index}
                    imageSrc={place.image_place}
                    caption={place.place_name}
                    imageId={place.id_place} // Assuming you have an id_place field
                  />
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="relative my-20 h-1 mx-60 max-w-[1900px] bg-black border-1 border-solid border-black rounded-md" />
    </>
  )
}

export default RekomenWisataIsiBudaya;
