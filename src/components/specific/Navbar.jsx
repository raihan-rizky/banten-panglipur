import { useState } from "react";
import PropTypes from 'prop-types';
const MobileMenu = ({ isOpen, toggleMenu, Links }) => {
  return (
    <div
      className={`sm:hidden fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute top-0 right-0 w-3/4 h-full bg-white p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="ml-12 min-w-[130px] min-h-[46px]">
            <img src="./public/images/logo-banten-panglipur.png" alt="logo" />
          </div>
          <div onClick={toggleMenu} className="cursor-pointer">
            <ion-icon name="close" aria-hidden="true" size="large"></ion-icon>
          </div>
        </div>
        <ul className="text-[#242424]">
          <li>Register</li>
          <li>Login</li>
          {Links.map((link) => (
            <li key={link.name} className="mb-4">
              <a href={link.link} className="">
                {link.name}
              </a>
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
    { name: "Profile", link: "/" },
    { name: "Wisata", link: "/" },
    { name: "Budaya", link: "/" },
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
        <div className="text-[#242424] hidden md-min:block xl:-translate-x-28">
          <ul className="h-6 w-6 flex gap-x-12 max-w-full items-center">
            {Links.map((link) => (
              <li key={link.name} className="">
                <a href={link.link} className="">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={toggleMenu} className="flex justify-self-end cursor-pointer md-min:hidden grow">
          <ion-icon name={isOpen ? "close" : "menu"} aria-hidden="true" size="large"></ion-icon>
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