import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, IconButton } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom"; // tambahkan ini

const CardEventBudaya = ({ imageSrc, titleText, description, placeId }) => {
  const navigate = useNavigate(); // tambahkan ini

  const handleClick = () => {
    navigate(`/budaya/${placeId}`); // navigasi ke halaman TemplateCreator dengan ID tempat wisata
  };

  const getFirstTenWords = (text) => {
    return text.split(" ").slice(0, 10).join(" ") + (text.split(" ").length > 10 ? "..." : "");
  };

  return (
    <div className="container vs-max:max-w-[122px] sm-max:max-w-[172px] flex z-20 flex-col p-4 text-sm rounded-[10px] bg-white hover:saturate-150 focus:border-blue-400 max-w-[222px] text-slate-500" data-aos='zoom-in' onClick={handleClick}> {/* tambahkan onClick */}
      <div className="text-sm pr-16 vs-max:text-xs vs-max:pr-0 text-[#5388AA]">{titleText}</div>
      <img
        loading="lazy"
        srcSet={imageSrc}
        className="self-center mt-1.5 w-full aspect-[1.52]"
      />
      <p className="mt-1 max-w-[174px] vs-max:text-xs min-h-[80px] text-left pr-0 font-semibold text-zinc-900">
        {getFirstTenWords(description)}
      </p>
    </div>
  );
};

const EventBudaya = () => {
  const [dataCard, setDataCard] = useState([]);

  useEffect(() => {
    axios.get("https://backend-api-capstone-bdt-deploy.vercel.app/places")
      .then((response) => {
        const places = response.data.places
          .filter(place => place.category.toLowerCase() === "budaya")
          .map(place => ({
            src: place.image_place,
            description: place.description,
            titleText: place.place_name,
            placeId: place.id_place // tambahkan ID tempat wisata
          }));
        setDataCard(places);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const chunkedData = chunkArray(dataCard, 4);

  return (
    <div className="container relative overflow-hidden max-w-full min-h-[597px] bg-gradient-to-b from-white to-[#87C0CD] ">
      <div className="container w-full text-center">
        <h1 className="font-extrabold md-max:text-3xl mt-20">Event Budaya</h1>
      </div>
      <Carousel transition={{ duration: 2 }} className="rounded-xl mb-10" prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute sm-max:-translate-y-10 vs-max:-translate-y-22 sm-max:-translate-x-4 top-2/4 left-4 -translate-y-2/4 sm-max:w-8 sm-max:h-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 sm-max:w-5"
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
            className="!absolute sm-max:-translate-y-10 vs-max:-translate-y-22 sm-max:translate-x-4 top-2/4 !right-4 -translate-y-2/4 sm-max:w-8 sm-max:h-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 sm-max:w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}>
        {chunkedData.map((chunk, index) => (
          <div key={index} className="xl-max:grid-cols-2 sm-min:px-40 mb-20 vs-max:px-8 sm-max:px-24 xl-max:grid xl-max:gap-y-8 xl-min:flex xl-min:p-40">
            {chunk.map((data, idx) => (
              <CardEventBudaya key={idx} titleText={data.titleText} imageSrc={data.src} description={data.description} placeId={data.placeId} />
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default EventBudaya;
