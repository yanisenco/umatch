import React, {  useState, useRef, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from 'react-i18next';
import greenLogo from "../../assets/logos/green_logo.svg";
import menuLines from "../../assets/icons/menu-lines.svg";
import LanguageDropdown from "../LanguageDropdown/languageDropdown";

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);
  
  return (
    <nav ref={headerRef} className="sticky top-0 w-full z-50 md:backdrop-blur-lg ">
      <div className={`max-w-screen-xl flex flex-wrap md:items-center justify-between mx-auto p-4 md:relative w-full md:h-auto top-0 left-0 ${isOpen ? "h-screen backdrop-blur-lg" : ""}`}>
        <RouterLink
          to="/"
          className="hidden md:block flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={greenLogo}
            alt="Logo UMatch"
            width={160}
            height={160}
          />
        </RouterLink>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex  p-2 ml-auto h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 bg-black"
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen}
        >
          {!isOpen ? 
          <>
            <img
              src={menuLines}
              alt="Menu" 
            />
            MENU
          </>:
          <p className="w-6 h-6">X</p>
          }
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col uppercase font-bold font-sm mt-4 text-black-60 md:space-x-2 md:flex-row ">
            <li>
              <RouterLink
                to="/"
                className="block py-3 px-3 rounded"
              >
                {t('header.umatch')}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/"
                className="block py-3 px-3 rounded"
              >
                {t('header.artys')}
              </RouterLink>
            </li>
            <li>
             <ScrollLink
                to="subscription"
                smooth={true}
                duration={500}
                offset={-headerHeight}
                className="block py-3 px-3 rounded cursor-pointer"
              >
                {t('header.subscription')}
              </ScrollLink>
            </li>
            <li>
              <RouterLink
                to="/"
                className="flex block py-3 px-5 rounded-xl bg-black text-white hover:bg-black-80 mb-5"
              >
                {t('header.connection')}
              </RouterLink>
            </li>
            <li>
              <LanguageDropdown />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;