import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Marquee from 'react-fast-marquee';
import { ImageWithCaption } from "../../common/ImageWithCaption.jsx";

const duplicateImages = (images) => {
  return [...images, ...images, ...images];
};

const DestinasiPilihan = () => {
  const [images, setImages] = useState([]);
  const [keyValue, setKeyValue] = useState(1);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get('http://localhost:3000/places');
        const places = response.data.places;

        // Filter only places with category "Pariwisata"
        const wisataPlaces = places.filter(place => place.category === "Pariwisata");

        // Transform the places to match the structure needed for the component
        const transformedPlaces = wisataPlaces.map(place => ({
          src: place.image_place, // Assuming there's an image_url field
          caption: place.place_name,
          id: place.id_place
        }));

        setImages(transformedPlaces);
      } catch (error) {
        console.error("Error fetching places:", error);
      }
    };

    fetchPlaces();
  }, []);

  const infiniteImages = duplicateImages(images);

  return (
    <div className='flex flex-col text-center container max-w-full min-h-[808px] mb-12 md-max:min-h-[505px] [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-100px),transparent_100%)] bg-[url("./public/images/pattern-destinasi-pilihan.png")]'>
      <div className="container max-w-full mb-20">
        <h1 className="text-[#242424] text-[40] font-extrabold md-max:text-3xl">Destinasi Pilihan</h1>
      </div>
      <div data-aos='fade-zoom-in'
        className="mt-20 flex overflow-hidden space-x-6 w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-100px),transparent_100%)]"
      >
        <Marquee
          pauseOnHover
          autoFill
          direction="left"
          onCycleComplete={() => { setKeyValue(prevKey => prevKey + 1); }}
          key={`marquee-left-${keyValue}`}
        >
          {infiniteImages.map((image, index) => (
            <div className="px-6" key={index}>
              <Link to={`/wisata/${image.id}`}>
                <ImageWithCaption imageSrc={image.src} caption={image.caption} />
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
      <div data-aos='fade-zoom-in'
        className="mt-20 flex overflow-hidden space-x-6 w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-100px),transparent_100%)]"
      >
        <Marquee
          pauseOnHover
          autoFill
          direction="right"
          onCycleComplete={() => { setKeyValue(prevKey => prevKey + 1); }}
          key={`marquee-right-${keyValue}`}
        >
          {infiniteImages.map((image, index) => (
            <div className="px-6" key={index}>
              <Link to={`/wisata/${image.id}`}>
                <ImageWithCaption imageSrc={image.src} caption={image.caption} />
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default DestinasiPilihan;
