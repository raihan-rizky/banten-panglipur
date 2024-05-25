export default function Hero(){
    return(
      <>
      <div className="relative -translate-y-[76px] max-w-full min-h-[714px]">
      <div className="absolute w-100 translate-y-20 z-10 min-h-[732px] bg-[url('./public/images/hero-pattern.png')]">
      </div>
      <div className="container flex flex-col min-h-[732px] ml-0 pt-[330px] pl-[143px]">
        <h1 className=" z-20 max-w-[442px] min-h-[144px] text-white text-[48px] font-bold">Menyatu Budaya Wisatawan Dunia</h1>
        <p className=" z-20 max-w-[553px] min-h-[116px] text-white text-[20px] font-[400]">
          “Seperti halaman-halaman yang belum terbuka dari buku bersejarah, setiap perjalanan wisata mengungkapkan lapisan-lapisan budaya yang kaya dan menakjubkan.”
        </p>
      </div>
      <div className="absolute inset-0 max-h-[732px]">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="fixed carousel-indicators -bottom-12 z-20">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./public/images/banten-hero-bg.jpg" className="d-block  object-cover min-h-[832px]" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="./public/images/banten-hero-bg2.png" className="d-block  object-cover min-h-[832px]" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src="./public/images/banten-hero-bg3.jpg" className="d-block  object-cover min-h-[832px]" alt="Slide 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
      
      </>
    )
  }