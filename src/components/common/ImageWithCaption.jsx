/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
//buat destinasi pilihan
const ImageWithCaption = ({ imageSrc, caption, imageId }) => {
  const navigate = useNavigate();
  const handleImageClick = (contentId, imageSource) => {
    navigate(`/budaya/${contentId}`, { state: { imageSource } });
  };
  return (
    <>
    <div className="relative md-max:min-w-[298px] vs-max:min-w-[198px] text-center text-white min-w-[398px] min-h-[122px] ">
      <img loading="lazy" src={imageSrc} alt={caption} 
      className="w-full h-auto rounded-lg hover:saturate-200" 
      onClick = {() => handleImageClick({imageId}, {imageSrc})}/>
      <div className="container md-max:text-xs md-max:font-medium md-max:min-h-10 absolute min-h-14 font-[700] bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-black/60 to-transparent px-4 py-2 rounded-[20px]">
        {caption}
      </div> 
    </div>
    </>
  );
};

// buat rekomenWisataIsiBudaya
const ImageWithCaption2 = ({ imageSrc, caption }) => {
  return (
    <>
    <div className="relative text-center text-white max-w-[398px] max-h-[122px] ">
      <img loading="lazy" src={imageSrc} alt={caption} className="w-[90%] h-auto rounded-lg " />
      <div className="container w-[90%] text-xs absolute font-[700] -translate-y-[100%] left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-black/60 to-transparent px-4 py-2 rounded-[20px]">
        {caption}
      </div>
    </div>
    </>
  );
};

export {
  ImageWithCaption,
  ImageWithCaption2
  as default
}