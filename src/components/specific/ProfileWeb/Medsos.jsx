import React from 'react';

const Medsos = () => {
    return (
        <div className="flex flex-col items-center mt-10 p-4">
            <h2 className="m-10 text-center font-bold text-[24px]" style={{ fontFamily: 'Poppins' }}>Hubungi Kami di :</h2>
            <div className="flex flex-wrap justify-center items-center m-4">
                <img className="mx-4 my-2 w-10 h-10 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" src='../../public/medsos/facebook.png' alt="Facebook" />
                <img className="mx-4 my-2 w-10 h-10 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" src='../../public/medsos/twitter.png' alt="Twitter" />
                <img className="mx-4 my-2 w-10 h-10 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" src='../../public/medsos/instagram.png' alt="Instagram" />
                <img className="mx-4 my-2 w-10 h-10 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" src='../../public/medsos/tiktok.png' alt="Tiktok" />
            </div>
        </div>
    );
}

export default Medsos;
