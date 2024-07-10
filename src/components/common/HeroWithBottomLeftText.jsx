import PropTypes from 'prop-types';

const HeroWithBottomLeftText = ({ imageSrc, address, title }) => {
  console.log(imageSrc)
  return (
    <>
    <div className="relative z-0 w-full h-auto mb-10 -translate-y-2">
    <img className="absolute w-full bottom-0 z-1 h-auto pb-[64px]" src='../../../public/images/hero-pattern-isiBudaya.png'/>
      <img loading="lazy" src={imageSrc} alt={title} className="-translate-y-16 object-cover w-full min-h-[400px] aspect-auto" />
      <div className="container text-left z-2 text-white absolute min-h-14 bottom-4 p-10 pb-[74px] ">
        <h1 className='font-[700] text-4xl md-max:text-xl pb-1'>{title}</h1>
        <p className='font-[500] text-lg md-max:text-xs'>{address}</p>
        </div>
    </div>
    </>
  );
};

HeroWithBottomLeftText.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
};

export default HeroWithBottomLeftText;