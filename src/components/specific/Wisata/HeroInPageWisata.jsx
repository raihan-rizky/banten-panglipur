const Hero = () => {
    return (
        <div className="overflow-hidden flex flex-col xl:flex-row xl:items-center -translate-y-20 relative max-w-full min-h-[500px] bg-gradient-to-b from-[#87C0CD] to-white">
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
            <div className="relative z-20 text-center text-white flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Selamat Datang di Wisata Banten</h1>
                <p className="mt-4 text-base md:text-lg lg:text-xl">Nikmati keindahan alam dan Wisata yang memukau</p>
            </div>
        </div>
    );
}

export default Hero;
