import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { NavLink, useLocation } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";

const MobileMenu = ({ isOpen, toggleMenu, Links }) => {
    return (
        <div
            className={`md:hidden fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-white bg-[url('./public/images/navbar-pattern.png')] bg-slate-50 p-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="ml-12 min-w-[100px] min-h-[46px]">
                        <img src="./public/images/logo-banten-panglipur.png" alt="logo" />
                    </div>
                    <div onClick={toggleMenu} className="cursor-pointer">
                        <ion-icon name="close" aria-hidden="true" size="large"></ion-icon>
                    </div>
                </div>
                <ul className="flex flex-col gap-y-10 mt-12 text-2xl text-[#242424] font-bold">
                    {Links.map((link) => (
                        <li key={link.name} className="text-[#242424]" >
                            <NavLink to={link.link}
                                style={({ isActive, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "extra-bold" : "",
                                        color: isActive ? "gray" : "black",
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

const NavBar = () => {
    let Links = [
        { name: "Beranda", link: "/" },
        { name: "Profile", link: "/profile" },
        { name: "Wisata", link: "/wisata" },
        { name: "Budaya", link: "/budaya" },
        { name: "Favorite", link: "/Favorite" },
    ];
    let [isOpen, setOpen] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Scrolls to the top when location (route) changes
        window.scrollTo(0, 0);
    }, [location]);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    const handleLogout = () => {
        // Implement logout functionality here
        console.log("Logout clicked");
    };

    return (
        <>
            <nav className="fixed z-10 top-0 left-0 right-0 flex font-sans min-h-[76px] items-center justify-between bg-[#D9D9D9]/50 px-4 sm:px-12">
                <div className="ml-12 min-w-[130px] min-h-[46px]">
                    <img src="./public/images/logo-banten-panglipur.png" alt="logo" />
                </div>
                <div className="text-[#242424] hidden md:flex xl:max:-translate-x-28">
                    <ul className="h-6 w-6 flex gap-x-12 max-w-full items-center">
                        {Links.map((link) => (
                            <li key={link.name} className="text-[#242424]">
                                <NavLink to={link.link}
                                    style={({ isActive, isTransitioning }) => {
                                        return {
                                            fontWeight: isActive ? "extra-bold" : "",
                                            color: isActive ? "#226597" : "black",
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
                <div onClick={toggleMenu} className="container position-relative flex cursor-pointer md:hidden grow">
                    <ion-icon className="" name={isOpen ? "close" : "menu"} aria-hidden="true" size="large"></ion-icon>
                </div>
                <div className="flex items-center gap-x-6 max-h-full mr-4 md:mr-24">
                    <div className="relative md:ml-6">
                        <button className="md:max:hidden lg:block rounded-full bg-transparent focus:outline-none"
                            onClick={() => setOpen(!isOpen)}>
                            <ion-icon name="person-circle-outline" aria-hidden="true" size="large"></ion-icon>
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <p className="block px-4 py-2 text-sm text-gray-700">User Name</p>
                                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} Links={Links} />
            <RegistrationForm isVisible={showRegisterForm} onClose={() => setShowRegisterForm(false)} />
            <LoginForm isVisible={showLoginForm} onClose={() => setShowLoginForm(false)} />
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

export default NavBar;
