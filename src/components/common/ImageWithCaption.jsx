/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImageWithCaption = ({ imageSrc, caption, imageId }) => {
  const navigate = useNavigate();

  const handleImageClick = (contentId, imageSource) => {
    navigate(`/wisata/${contentId}`, { state: { imageSource } });
  };

  return (
    <div className="relative text-center text-white max-w-[400px] max-h-auto ">
      <img
        loading="lazy"
        src={imageSrc}
        alt={caption}
        className="w-full h-auto rounded-lg cursor-pointer hover:saturate-200"
        onClick={() => handleImageClick(imageId, imageSrc)}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-2 rounded-b-lg">
        <p className="font-semibold text-xs md:text-sm">{caption}</p>
      </div>
    </div>
  );
};

export default ImageWithCaption;
