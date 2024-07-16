/* eslint-disable react/prop-types */
import { Carousel, IconButton } from "@material-tailwind/react";
const CardEventBudaya = ({ imageSrc, titleText, eventTime, mediaText, description, date }) => {
  return (
    <>
      <div className="container vs-max:max-w-[122px] sm-max:max-w-[172px] flex z-20 flex-col p-4 text-sm rounded-[10px] bg-white hover:saturate-150 focus:border-blue-400 max-w-[222px] text-slate-500" data-aos='zoom-in'>
        <div className="text-sm pr-16 vs-max:text-xs vs-max:pr-0 text-[#5388AA]">{titleText}</div>
        <img
          loading="lazy"
          srcSet={imageSrc}
          className="self-center mt-1.5 w-full aspect-[1.52]"
        />
        <div className="mt-3 pr-[7rem] vs-max:text-xs">{eventTime}</div>
        <p className="mt-1 max-w-[174px] vs-max:text-xs min-h-[80px] text-left pr-0 font-semibold text-zinc-900">
          {description}
        </p>
        <div className="flex pr-[3.25rem] sm-max:pr-[0rem] vs-max:text-xs pt-6 gap-2 mt-4">
          <div>{mediaText}</div>
          <div className="translate-y-1 h-3 border-1 border-solid sm-max:border-0 border-black" />
          <div className="text-balance">{date}</div>
        </div>
      </div>

    </>
  )
}



const dataCard = [
  { src: "./public/images/seba-baduy.png", description: "Seba Baduy", titleText: "Climate Change", eventTime: "9 minutes", mediaText: "VOX", date: "2 hours ago" },
  { src: "./public/images/rampak-bedug.png", description: "Climate change is beginning to have a devastating impact on forests across the world", titleText: "Climate Change", eventTime: "9 minutes", mediaText: "VOX", date: "2 hours ago" },
  { src: "./public/images/silat.png", description: "Climate change is beginning to have a devastating impact on forests across the world", titleText: "Climate Change", eventTime: "9 minutes", mediaText: "VOX", date: "2 hours ago" },
  { src: "./public/images/budaya-suling.png", description: "Climate change is beginning to have a devastating impact on forests across the world", titleText: "Climate Change", eventTime: "9 minutes", mediaText: "VOX", date: "2 hours ago" },
];

const EventBudaya = () => {
  return (
    <>
      <div className="container relative overflow-hidden max-w-full min-h-[597px] bg-gradient-to-b from-white to-[#87C0CD] ">
        <div className="container w-full text-center mb-12">
          <h1 className="font-extrabold md-max:text-3xl">Event Budaya</h1>
        </div>
        <div className='absolute w-full justify-between xl-max:flex-col max-w-full min-h-[808px]'>
          <div className='max-w-full'>
            <img className='relative -top-20 -left-[45rem] -translate-x-60 animate-spin-slow' data-aos='fade-down-right' src='./public/images/ellipse-pattern.png' />
          </div>
          <div className='max-w-full'>
            <img className='relative -right-[45rem] bottom-56 animate-spin-slow ' data-aos='fade-up-left' src='./public/images/ellipse-pattern.png' />
          </div>
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
              </svg> </IconButton>
          )}>
          <div className="xl-max:grid-cols-2 sm-min:px-40 mb-20 vs-max:px-8 sm-max:px-24 xl-max:grid xl-max:gap-y-8 xl-min:flex xl-min:p-40">

            {dataCard.map((data, index) => (
              <CardEventBudaya key={index} titleText={data.titleText} imageSrc={data.src}
                eventTime={data.eventTime} mediaText={data.mediaText} date={data.date} description={data.description}></CardEventBudaya>
            ))}

          </div>
          <div className="xl-max:grid-cols-2 sm-min:px-40 mb-20 vs-max:px-8 sm-max:px-24 xl-max:grid xl-max:gap-y-8 xl-min:flex xl-min:p-40">

            {dataCard.map((data, index) => (
              <CardEventBudaya key={index} titleText={data.titleText} imageSrc={data.src}
                eventTime={data.eventTime} mediaText={data.mediaText} date={data.date} description={data.description}></CardEventBudaya>
            ))}

          </div>
        </Carousel>
      </div>
    </>
  )
}

export default EventBudaya;