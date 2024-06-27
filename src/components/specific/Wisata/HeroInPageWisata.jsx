const Hero = () => {
    return (
        <div className="overflow-hidden xl-max:flex-col xl-max:items-center -translate-y-20 relative flex max-w-full min-h-[400px] bg-gradient-to-b from-[#87C0CD] to-white">
            <img
                className="absolute inset-0 w-full h-full z-10 object-cover"
                src='/images/hero-pattern-isiBudaya.png'
                alt="Pattern"
            />
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                style={{ backgroundImage: 'url(/images/tanjung-lesung.png)' }}
            />
            <div className="relative z-20 text-center text-white flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">Selamat Datang di Wisata Banten</h1>
                <p className="mt-4 text-lg">Nikmati keindahan alam dan budaya yang memukau</p>
            </div>
        </div>
    );
}

export default Hero;