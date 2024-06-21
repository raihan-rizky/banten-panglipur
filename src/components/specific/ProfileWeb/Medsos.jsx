import React from 'react';

const Medsos = () => {
    return (
        <div className="flex flex-col items-center mt-10 p-4">
            <h2 className="m-10 text-center font-bold text-[24px]" style={{ fontFamily: 'Poppins' }}>Hubungi Kami di :</h2>
            <div className="flex flex-wrap justify-center items-center m-4">
                <img className="mx-4 my-2 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-10 xl:h-10" src='../../public/medsos/facebook.png' alt="Facebook" />
                <img className="mx-4 my-2 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-10 xl:h-10" src='../../public/medsos/twitter.png' alt="Twitter" />
                <img className="mx-4 my-2 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-10 xl:h-10" src='../../public/medsos/instagram.png' alt="Instagram" />
                <img className="mx-4 my-2 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-10 xl:h-10" src='../../public/medsos/tiktok.png' alt="Tiktok" />
            </div>
        </div>
    );
}

export default Medsos;
