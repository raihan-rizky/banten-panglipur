import { useState } from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const MobileMenu = ({ isOpen, toggleMenu, Links }) => {
  return (
    <div
      className={`sm:hidden fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('./public/images/navbar-pattern.png')] bg-slate-50 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="ml-12 min-w-[100px] min-h-[46px]">
            <img src="./public/images/logo-banten-panglipur.png" alt="logo" />
          </div>
          <div onClick={toggleMenu} className="cursor-pointer">
            <ion-icon name="close" aria-hidden="true" size="large"></ion-icon>
          </div>
        </div>
        <ul className="flex flex-col gap-y-10 mt-12 text-3xl text-[#242424] font-bold">
          <li>Register</li>
          <li>Login</li>
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
        </ul>
      </div>
    </div>
  );
};

export default function NavBar() {
  let Links = [
    { name: "Beranda", link: "/" },
    { name: "Profile", link: "/profile" },
    { name: "Wisata", link: "/wisata" },
    { name: "Budaya", link: "/budaya" },
  ];
  let [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <nav className="relative z-10 flex font-sans max-w-full min-h-[76px] items-center justify-between bg-[#D9D9D9]/50 px-4 sm:px-12">
        <div className="ml-12 min-w-[130px] min-h-[46px]">
          <img src="./public/images/logo-banten-panglipur.png" alt="logo" />
        </div>
        <div className="text-[#242424] hidden md-min:block xl-max:-translate-x-28">
          <ul className="h-6 w-6 flex gap-x-12 max-w-full items-center">
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
          </ul>
        </div>
        <div onClick={toggleMenu} className="flex cursor-pointer md-min:hidden grow">
          <ion-icon className="self-end" name={isOpen ? "close" : "menu"} aria-hidden="true" size="large"></ion-icon>
        </div>
        <div className="flex items-center gap-x-6 max-h-full mr-24 md-min:mr-0">
          <button className="md-max:hidden lg:block rounded-[15px] border-1 bg-transparent border-solid border-black font-bold text-[15px] px-[30px] py-[7px]">
            Registrasi
          </button>
          <button className="md-max:hidden lg:block rounded-[15px] border-1 bg-[#226597] text-[#F3F9FB] font-bold text-[15px] px-[30px] py-[7px]">
            Masuk
          </button>
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} Links={Links} />
    </>
  );
}


MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  Links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};