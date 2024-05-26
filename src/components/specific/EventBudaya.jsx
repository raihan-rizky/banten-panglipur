/* eslint-disable react/prop-types */
import { Carousel, IconButton } from "@material-tailwind/react";
const CardEventBudaya = ({ imageSrc, titleText, eventTime, mediaText, description, date }) =>{
    return(
        <>
                <div className="flex z-20 flex-col p-4 text-sm rounded bg-white max-w-[222px] text-slate-500">
        <div className="text-sm pr-16 text-[#5388AA]">{titleText}</div>
        <img
            loading="lazy"
            srcSet={imageSrc}
            className="self-center mt-1.5 w-full aspect-[1.52]"
        />
        <div className="mt-3 pr-[7rem]">{eventTime}</div>
        <p className="mt-1 max-w-[174px] min-h-[80px] text-justify pr-0 font-semibold text-zinc-900">
            {description}
        </p>
        <div className="flex pr-[3.25rem] pt-6 gap-2 mt-4">
            <div>{mediaText}</div>
            <div className="translate-y-1 w-px h-3 border-1 border-solid border-black" />
            <div className="flex-1">{date}</div>
        </div>
        </div>

        </>
    )
}

 

const dataCard = [
    { src: "./public/images/seba-baduy.png", description: "Seba Baduy", titleText: "Climate Change", eventTime: "9 minutes", mediaText: "VOX", date: "2 hours ago"  },
    { src: "./public/images/rampak-bedug.png", description: "Climate change is beginning to have a devastating impact on forests across the world", titleText: "Climate Change", eventTime: "9 minutes", mediaText: "VOX", date: "2 hours ago" },
    { src: "./public/images/silat.png", description: "Climate change is beginning to have a devastating impact on forests across the world", titleText: "Climate Change", eventTime: "9 minutes", mediaText: "VOX", date: "2 hours ago" },
    { src: "./public/images/budaya-suling.png", description: "Climate change is beginning to have a devastating impact on forests across the world", titleText: "Climate Change", eventTime: "9 minutes", mediaText: "VOX", date: "2 hours ago" },
  ];

const EventBudaya = () => {
    return (
        <>
            <div className="container relative overflow-hidden max-w-full min-h-[597px] bg-gradient-to-b from-white to-[#87C0CD] ">
                <div className="container w-full text-center">
                    <h1 className="font-extrabold">Event Budaya</h1>
                </div>
                <div className='absolute w-full justify-between xl-max:flex-col max-w-full min-h-[808px]'>
                    <div className='max-w-full'>
                        <img className='absolute -top-20 -translate-x-60' src='./public/images/ellipse-pattern.png'/>
                    </div>
                    <div className='overflow-auto'>
                        <img className='absolute max-w-full right-12 translate-x-40 bottom-1/4 ' src='./public/images/ellipse-pattern.png'/>
                    </div>
                </div>
                <Carousel transition={{ duration: 2 }} className="rounded-xl" prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
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
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg> </IconButton>
      )}>
                <div className="xl-max:grid-cols-2 xl-max:grid xl-max:gap-8 mb-20 xl-min:flex xl-min:p-40">
              
                    {dataCard.map((data, index) => (
            <CardEventBudaya key={index} titleText={data.titleText} imageSrc={data.src}
            eventTime={data.eventTime} mediaText={data.mediaText} date={data.date} description={data.description}></CardEventBudaya>
          ))}
      
                </div>
                <div className="xl-max:grid-cols-2 xl-max:grid xl-max:gap-8 mb-20 xl-min:flex xl-min:p-40">
              
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