import { ImageWithCaption } from "../../common/ImageWithCaption.jsx";
import { useRef } from "react";
import { Link } from "react-router-dom"
import Marquee from 'react-fast-marquee';

const images = [
  { src: "./public/images/pantai-anyer.png", caption: "Pantai Anyer", id: 1, },
  { src: "./public/images/tanjung-lesung.png", caption: "Tanjung Lesung", id: 2 },
  { src: "./public/images/puncak-gunung-karang.png", caption: "Puncak Gunung Karang", id: 3},
  { src: "./public/images/bentang-speelwijk.png", caption: "Bentang Speelwijk", id: 4 },
  { src: "./public/images/danau-biru.png", caption: "Danau Biru", id: 5 },
  { src: "./public/images/curug-cikotak.png", caption: "Curug Cikotak", id: 6 },
];


const duplicateImages = (images) => {
  const duplicatedImages = [...images, ...images, ...images];
  return duplicatedImages;
};

const DestinasiPilihan = () => {
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
        >
          <div className="flex items-center justify-center max-w-none">

          {infiniteImages.map((image, index) => (
            <div className="px-6">
              <Link to={`budaya/${index}`}>
              <ImageWithCaption key={index} imageSrc={image.src} caption={image.caption}  />
              </Link>
            </div>
            
          ))}
          </div>
        </Marquee>
      </div>
      <div data-aos='fade-zoom-in'
        className="mt-20 flex overflow-hidden space-x-6 w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-100px),transparent_100%)]"
      >
        <Marquee
          pauseOnHover
          autoFill
          direction="right"
        >
          <div className="flex items-center justify-center max-w-none">

          {infiniteImages.map((image, index) => (
            <div className="px-6">
            <Link to={`budaya/${index}`}>
              <ImageWithCaption key={index} imageSrc={image.src} caption={image.caption}  />
              </Link>
            </div>
          ))}
          </div>
        </Marquee>
      </div>

    </div>
  );
};

export default DestinasiPilihan;

