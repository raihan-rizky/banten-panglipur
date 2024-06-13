const MapIsiBudaya = () => {
    return (
        <>
            <div className="container gap-10 p-20 translate-x-24 grid grid-cols-3 w-full h-auto mb-20">
                <picture>
                    <img src="../../public/images/map-template.png"/>
                </picture>
                <div className="container min-w-[261px] min-h-[350px] bg-[#DBECF0]">
                    <h1 className="text-xl font-bold p-2">Informasi</h1>

                </div>
                <div className="pr-52">
                <picture className="flex flex-col gap-8 py-10 max-w-full h-auto">
                    <img className="max-w-[109px] max-h-[52px] aspect-video" src='./public/images/map-icon.png'/>
                    <img className="max-w-[109px] max-h-[52px] aspect-video" src='./public/images/share-icon.png'/>
                    <img className="max-w-[109px] max-h-[52px] aspect-video" src='./public/images/save-icon.png'/>

                </picture>
                </div>

            </div>
        </>
    )
}

export default MapIsiBudaya;