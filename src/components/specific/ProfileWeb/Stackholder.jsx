const Stackholder = () => {
    return (
        <div className="flex flex-col items-center mt-10 p-4" style={{ backgroundColor: '#C1DFE6' }}>
            <h2 className="m-10 text-center font-bold text-[24px]" style={{ fontFamily: 'Poppins' }}>STACKHOLDER</h2>
            <div className="flex flex-wrap justify-center items-center m-4 md:flex-row">
                <img className="mx-10 my-2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-32 xl:h-32" src='/stackholder/pesonaIndonesia.png' alt="Pesona Indonesia" />
                <img className="mx-10 my-2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-32 xl:h-32" src='/stackholder/banten.png' alt="Provinsi Banten" />
                <img className="mx-10 my-2 w-28 h-24 sm:w-32 sm:h-28 md:w-36 md:h-32 lg:w-40 lg:h-32 xl:w-40 xl:h-32" src='/stackholder/ExcitingBanten.png' alt="Banten Exciting" />
                <img className="mx-10 my-2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-32 xl:h-32" src='/stackholder/baparekraf.png' alt="Baparekraf" />
            </div>
        </div>
    );
}

export default Stackholder;