const Hero = () => {
    return (
        <div className="overflow-hidden flex flex-col xl:flex-row xl:items-center -translate-y-20 relative max-w-full min-h-[500px] bg-gradient-to-b from-[#87C0CD] to-white justify-center">
            {/* Gambar Pola */}
            <img
                className="absolute inset-0 w-full h-full z-10 object-cover"
                src='/images/hero-pattern-isiBudaya.png'
                alt="Pattern"
            />
            {/* Gambar Latar Belakang */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                style={{ backgroundImage: 'url(/images/banten-hero-bg3.webp)' }}
            />
            {/* Konten Teks */}
            <div className="relative z-20 text-center text-white flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12 xl:w-1/2">
                <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mx-4 sm:mx-6 md:mx-8 lg:mx-12">Selamat Datang di Wisata Banten</h1>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl mx-4 sm:mx-6 md:mx-8 lg:mx-12">Nikmati keindahan alam dan Wisata yang memukau</p>
            </div>
        </div>
    );
}

export default Hero;
