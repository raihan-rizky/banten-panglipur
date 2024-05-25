import PropTypes from 'prop-types';

const ImageWithCaption = ({ imageSrc, caption }) => {
  return (
    <>
    <div className="relative text-center text-white max-w-none min-w-[398px] min-h-[122px] ">
      <img loading="lazy" src={imageSrc} alt={caption} className="w-full h-auto rounded-lg " />
      <div className="container absolute min-h-14 font-[700] bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-black/60 to-transparent px-4 py-2 rounded-[20px]">
        {caption}
      </div>
    </div>
    </>
  );
};

ImageWithCaption.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};

export default ImageWithCaption;