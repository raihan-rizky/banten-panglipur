import { NavLink } from "react-router-dom";

function Footer() {
  let Links = [
    { name: "Beranda", link: "/" },
    { name: "Profile", link: "/profile" },
    { name: "Wisata", link: "/wisata" },
    { name: "Budaya", link: "/budaya" },
  ];
  return (
    <footer className="flex flex-col mt-0 items-center px-20 vs-max:px-8 pt-10 pb-8 bg-[#5388AA] max-md:px-5">
      <header className="flex gap-5 justify-between items-center w-full text-base font-medium leading-6 max-w-[1166px] text-zinc-100 max-md:flex-wrap max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7477276369ec6f3262942f32bbf6e00762c43cc2fe8dc2d6dacd445535c0acd?apiKey=086f9e918f6c40cfbf2a7915a1bfe439&" alt="Logo" className="shrink-0 aspect-[2.86] max-w-[129px] -translate-y-3" />
        <nav className="flex lg:grid-cols-2 md-max:font-bold md-max:text-xs lg:grid lg:gap-10 gap-20 self-stretch my-auto list-none" >
          {Links.map((link) => (
            <li key={link.name} className="text-[#242424]">
              <NavLink to={link.link}
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "extra-bold" : "",
                    color: isActive ? "white" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
                className="text-[#242424]">
                {link.name}
              </NavLink>
            </li>
          ))}
          <ul className="container flex lg:grid-cols-2 lg:grid lg:col-span-2">
            <li className="aspect-square min-w-[44px]"><img src="/images/twitter-icon.png"></img></li>
            <li className="aspect-square min-w-[44px]"><img src="/images/facebook-icon.png"></img></li>
            <li className="aspect-square min-w-[44px]"><img src="/images/instagram-icon.png"></img></li>
            <li className="aspect-square min-w-[44px]"><img src="/images/github-icon.png"></img></li>
          </ul>
        </nav>


      </header>
      <div className="translate-y-1 w-full h-1 bg-black m-2 border-1 border-solid border-black rounded-md" />
      <div className="mt-8 text-sm leading-6 text-center text-slate-300 max-w-[309px]">
        © Copyright 2022, All Rights Reserved by Banten Panglipur
      </div>
    </footer>
  );
}

export default Footer;