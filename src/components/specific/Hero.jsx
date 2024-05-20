export default function Hero(){
    return(
      <>
      <div className="relative -translate-y-[76px] max-w-full min-h-[732px]">
      <div className="absolute w-100 z-20 min-h-[732px] bg-[url('./public/images/hero-pattern.png')]">
      </div>
      <div className="inset-y-[259px] inset-x-[143px]">
        <h1 className="max-w-[442px] min-h-[144px] text-white text-[48px] font-bold">Menyatu Budaya Wisatawan Dunia</h1>
        <p className="max-w-[553px] min-h-[116px] text-white text-[20px] font-[400]">
          “Seperti halaman-halaman yang belum terbuka dari buku bersejarah, setiap perjalanan wisata mengungkapkan lapisan-lapisan budaya yang kaya dan menakjubkan.”
        </p>
      </div>
      <div className="absolute inset-0 max-h-[732px]">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./public/images/banten-hero-bg.png" className="d-block min-h-[732px]" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/800x400" className="d-block min-h-[732px]" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/800x400" className="d-block min-h-[732px]" alt="Slide 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
      
      </>
    )
  }