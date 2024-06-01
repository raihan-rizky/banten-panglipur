
  
  function Footer() {
    return (
      <footer className="flex flex-col mt-0 items-center px-20 pt-10 pb-8 bg-[#5388AA] max-md:px-5">
        <header className="flex gap-5 justify-between items-center w-full text-base font-medium leading-6 max-w-[1166px] text-zinc-100 max-md:flex-wrap max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7477276369ec6f3262942f32bbf6e00762c43cc2fe8dc2d6dacd445535c0acd?apiKey=086f9e918f6c40cfbf2a7915a1bfe439&" alt="Logo" className="shrink-0 max-w-full aspect-[2.86] w-[129px]" />
        <nav className="flex lg:grid-cols-2 lg:grid lg:gap-10 gap-20 self-stretch my-auto">
          <a href="#product" className="text-black">Product</a>{" "}
          <a href="#features" className="text-black">Features</a>{" "}
          <a href="#pricing" className="text-black">Pricing</a>{" "}
          <a href="#resources" className="text-black">Resources</a>
          <ul className="container flex w-full lg:grid-cols-2 lg:grid lg:col-span-2">
            <li className="aspect-square min-w-[44px]"><img src="./public/images/twitter-icon.png"></img></li>
            <li className="aspect-square min-w-[44px]"><img src="./public/images/facebook-icon.png"></img></li>
            <li className="aspect-square min-w-[44px]"><img src="./public/images/instagram-icon.png"></img></li>
            <li className="aspect-square min-w-[44px]"><img src="./public/images/github-icon.png"></img></li>
          </ul>
        </nav>
        
        
      </header>
      <div className="translate-y-1 w-full h-1 bg-black m-2 border-1 border-solid border-black rounded-md" />
      <div className="mt-8 text-sm leading-6 text-center text-slate-300 w-[309px]">
        © Copyright 2022, All Rights Reserved by ClarityUI
      </div>
      </footer>
    );
  }
  
  export default Footer;