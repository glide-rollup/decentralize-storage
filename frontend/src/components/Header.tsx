import logo from "../assets/img/logo.png";
import CustomConnect from "../ui/CustomConnect";
import { useAccount } from "wagmi";
import { Link, useLocation } from "react-router-dom";
import { NavLink, ScrollLink, TopLink } from "../assets/css/common.style";
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";

const Header = () => {
  const {isConnected} = useAccount();
  const location = useLocation();
  const [scroll, setScroll] = useState(false);
  const [isHomepage, setIsHomepage] = useState(true);

  useEffect(() => {
    setIsHomepage(location.pathname === "/");
  }, [location]);

  useEffect(() => {
    // Change header bg on scroll
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 40);
    });
  }, []);

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <header className={`z-50 w-full h-24 fixed ${scroll ? "bg-white/90 shadow-md" : "bg-transparent"}`}>
      <div
        className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">

        <Link to={"/"} className="relative flex items-center inline-block h-5 h-full font-black leading-none">
          <img src={logo} alt="logo" className="w-auto h-14 text-indigo-600 fill-current" />
          <span className="ml-3 text-2xl text-gray-800">
              vStorage
            </span>
        </Link>

        <nav id="nav"
             className="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm
             text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent
             md:mt-0 md:border-none md:py-0 md:flex md:relative">
          {isHomepage ? (
            <>
              <ScrollLink to={"/"} onClick={scrollTop}>Home</ScrollLink>
              <ScrollLink to={"features"} smooth={true}>Features</ScrollLink>
              <ScrollLink to={"partners"} smooth={true}>Partners</ScrollLink>
              <ScrollLink to={"faq"} smooth={true}>FAQ</ScrollLink>
            </>
          ) : (
            <>
              <NavLink to={"/my"} end>My Files</NavLink>
              <NavLink to={"/my/favorite"}>Favorite</NavLink>
              <NavLink to={"/my/settings"}>Settings</NavLink>
              <NavLink to={"/my/faq"}>FAQ</NavLink>
            </>
          )}
        </nav>

        <div className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48
          border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row
          md:p-0 md:items-end md:flex md:justify-between">
          <div className={"z-40 flex flex-row"}>
            {isConnected && isHomepage && (
              <div className={"pt-2.5"}>
                <TopLink to={"/my"} onClick={scrollTop}>My Files</TopLink>
              </div>
            )}
            <CustomConnect isHeader={true} />
          </div>
        </div>

        <div id="nav-mobile-btn"
             className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10">
          <span className="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1"></span>
          <span className="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full"></span>
        </div>

      </div>
    </header>
  );
};

export default Header