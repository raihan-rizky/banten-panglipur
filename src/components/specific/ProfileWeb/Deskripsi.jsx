const Deskripsi = () => {
    return (
        <div className="overflow-hidden xl-max:flex-col xl-max:items-center -translate-y-20 relative flex max-w-full min-h-[808px] bg-gradient-to-b from-[#87C0CD] to-white">
            <div className="absolute inset-0 flex justify-center items-center mt-[200px]">
                <img className='w-auto h-auto max-w-full max-h-full' src='./public/images/backgound_logo.png' alt="Background Logo" />
            </div>
            <div className="relative z-10 flex flex-col items-center h-full text-justify text-black px-4 mt-[200px]">
                <h1 className="max-w-[392px] min-h-[68px] font-[700] text-[40px] text-center mb-5 font-extrabold tracking-[9.6px] sm:text-3xl md:text-4xl xl:text-5xl">BANTEN <br />PANGLIPUR</h1>
                <p className="max-w-[900px] min-h-[100px] font-[400] text-[20px] sm:text-base md:text-lg xl:text-xl">
                    <b>"Banten Panglipur"</b> adalah sebuah platform daring yang mempersembahkan kekayaan wisata dan budaya yang dimiliki oleh daerah Banten. Melalui situs ini, pengunjung dapat menjelajahi beragam destinasi wisata yang menakjubkan serta merasakan keindahan dan keunikannya. Dari pantai yang memikat hingga situs sejarah yang kaya akan cerita, Banten Panglipur menghadirkan pengalaman yang memukau bagi para pengunjung. <br /><br />
                    Selain itu, Banten Panglipur juga menampilkan keberagaman budaya yang menjadi ciri khas daerah Banten. Dari seni tradisional hingga destinasi wisata yang autentik, pengguna situs dapat memahami dan mengapresiasi warisan budaya yang kaya dan beragam. Dengan menggabungkan elemen wisata dan budaya, Banten Panglipur menjadi sumber informasi yang lengkap dan inspiratif bagi para wisatawan yang ingin menjelajahi keindahan dan kekayaan budaya Banten.
                </p>
            </div>
        </div>
    );
}

export default Deskripsi;
