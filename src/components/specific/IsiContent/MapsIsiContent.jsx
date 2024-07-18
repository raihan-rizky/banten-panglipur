import React from 'react';

const MapIsiBudaya = ({ place }) => {
    return (
        <>
            <div className="relative max-w-full h-auto mb-20">
                <div
                    className="absolute z-0 -translate-y-26 object-cover w-full h-full"
                    style={{
                        backgroundImage: `url('/images/pattern-destinasi-pilihan.png')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="gap-10 grid grid-cols-5 pl-56 items-center justify-center lg:grid-cols-1 lg:pl-0">
                    {place && ( // Tambahkan kondisi jika place tidak null
                        <div className="col-span-2 lg:col-span-1">
                            {/* Embed Google Maps dengan Google Maps Embed API */}
                            <iframe
                                className="relative col-span-2 z-10 w-full lg:w-auto"
                                height="350"
                                loading="lazy"
                                allowFullScreen
                                src={`https://www.google.com/maps/embed?pb=${encodeURIComponent(place.location_maps)}`}
                            ></iframe>
                        </div>
                    )}
                    <div className="container z-10 sm-max:max-w-[400px] min-w-[261px] min-h-[350px] bg-[#DBECF0] lg:px-12 lg:min-h-auto">
                        <h1 className="text-xl font-bold p-2">Informasi</h1>
                    </div>
                    <div className="pr-20 col-start-4 lg:pr-0 lg:col-start-1">
                        <picture className="flex flex-col gap-8 py-10 vs-max:gap-4 max-w-full w-1/4 h-auto lg:w-full lg:flex-row lg:justify-center">
                            <img className="max-w-[109px] max-h-[52px] aspect-video" src="/images/map-icon.png" alt="Map Icon" />
                            <img className="max-w-[109px] max-h-[52px] aspect-video" src="/images/share-icon.png" alt="Share Icon" />
                            <img className="max-w-[109px] max-h-[52px] aspect-video" src="/images/save-icon.png" alt="Save Icon" />
                        </picture>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MapIsiBudaya;
