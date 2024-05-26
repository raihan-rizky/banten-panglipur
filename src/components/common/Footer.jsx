
  
  function Footer() {
    return (
      <footer className="flex flex-col mt-20 items-center px-20 pt-14 pb-8 bg-[#5388AA] max-md:px-5">
        <header className="flex gap-5 justify-between items-center w-full text-base font-medium leading-6 max-w-[1166px] text-zinc-100 max-md:flex-wrap max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7477276369ec6f3262942f32bbf6e00762c43cc2fe8dc2d6dacd445535c0acd?apiKey=086f9e918f6c40cfbf2a7915a1bfe439&" alt="Logo" className="shrink-0 max-w-full aspect-[2.86] w-[129px]" />
        <nav className="flex lg:grid-cols-2 lg:grid lg:gap-10 gap-20 self-stretch my-auto">
          <a href="#product" className="text-zinc-100">Product</a>{" "}
          <a href="#features" className="text-zinc-100">Features</a>{" "}
          <a href="#pricing" className="text-zinc-100">Pricing</a>{" "}
          <a href="#resources" className="text-zinc-100">Resources</a>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/97552ecda60340fd942dd3dfcbd3f652ede36c26588527d0bfb5289fc9486c6c?apiKey=086f9e918f6c40cfbf2a7915a1bfe439&" alt="Company Info" className="self-stretch my-auto max-w-full aspect-[4.76] w-[134px]" />
        </nav>
        
      </header>
      <div className="mt-8 text-sm leading-6 text-center text-slate-300 w-[309px]">
        © Copyright 2022, All Rights Reserved by ClarityUI
      </div>
      </footer>
    );
  }
  
  export default Footer;