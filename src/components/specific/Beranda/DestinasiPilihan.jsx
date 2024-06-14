import { ImageWithCaption } from "../../common/ImageWithCaption.jsx";
import { useRef } from "react";
import { Link } from "react-router-dom"

const images = [
  { src: "./public/images/pantai-anyer.png", caption: "Pantai Anyer", id: 1, },
  { src: "./public/images/tanjung-lesung.png", caption: "Tanjung Lesung", id: 2 },
  { src: "./public/images/puncak-gunung-karang.png", caption: "Puncak Gunung Karang", id: 3},
  { src: "./public/images/bentang-speelwijk.png", caption: "Bentang Speelwijk", id: 4 },
  { src: "./public/images/danau-biru.png", caption: "Danau Biru", id: 5 },
  { src: "./public/images/curug-cikotak.png", caption: "Curug Cikotak", id: 6 },
];
const images2 = [
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
  const infiniteImages2 = duplicateImages(images2);
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);


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
    <div className='flex flex-col text-center container max-w-full min-h-[808px] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] bg-[url("./public/images/pattern-destinasi-pilihan.png")]'>
      <div className="container max-w-full mb-20">
        <h1 className="text-[#242424] text-[40] font-extrabold">Destinasi Pilihan</h1>
      </div>
      <div
        className="flex overflow-hidden space-x-6 w-full "
        onMouseEnter={() => handleHoverStart(carouselRef)}
        onMouseLeave={() => handleHoverEnd(carouselRef)}
      >
        <div
          ref={carouselRef}
          className="flex gap-12 items-center justify-center animate-infinite-scroll max-w-full "
        >
          {infiniteImages.map((image, index) => (
            <Link key={index} to={`/budaya/${image.id}`}>
            <ImageWithCaption key={index} imageSrc={image.src} caption={image.caption} imageId= {image.id} />
            </Link>
          ))}
        </div>
      </div>
      <div
        className="mt-20 flex overflow-hidden space-x-6 w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        onMouseEnter={() => handleHoverStart(carouselRef2)}
        onMouseLeave={() => handleHoverEnd(carouselRef2)}
      >
        <div
          ref={carouselRef2}
          className="flex gap-12 items-center justify-center animate-infinite-scroll-reverse max-w-none "
        >
          {infiniteImages2.map((image, index) => (
            <ImageWithCaption key={index} imageSrc={image.src} caption={image.caption} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default DestinasiPilihan;

