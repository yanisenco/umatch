import React, { useState, useRef, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from 'react-i18next';
import purpleLogo from "../../assets/logos/purple_logo.svg";
import menuLines from "../../assets/icons/menu-lines.svg";
import LanguageDropdown from "../LanguageDropdown/languageDropdown";
import Button from "../Button/button";

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

  const handleScroll = (target) => {
    const element = document.getElementById(target);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      scroll.scrollTo(offsetTop, {
        duration: 500,
        smooth: true,
      });
    }
  };

  return (
    <nav ref={headerRef} className="sticky top-0 w-full z-[100] md:backdrop-blur-lg md:bg-white md:bg-opacity-50 md:p-4 ">
      <div className={`max-w-screen-xl flex flex-wrap md:items-center justify-between mx-auto p-4 md:relative w-full absolute md:h-auto top-0 left-0 ${isOpen ? "h-screen backdrop-blur-lg bg-white bg-opacity-60" : ""}`}>
        <RouterLink
          to="/"
          className="hidden md:block flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={purpleLogo}
            alt="Logo UMatch"
            width={160}
            height={160}
          />
        </RouterLink>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 ml-auto h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 bg-black"
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen}
        >
          {!isOpen ? 
          <>
            <img
              src={menuLines}
              alt="Open navigation menu" 
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
          <ul className="flex flex-col uppercase font-bold font-sm text-dark-blue md:space-x-2 md:flex-row">
            <li >
              <RouterLink
                to={'/#'+ process.env.REACT_APP_DISCOVER_UMATCH}
                className="block py-3 px-3 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(process.env.REACT_APP_DISCOVER_UMATCH);
                }}
              >
                {t('header.umatch')}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to={'/#'+ process.env.REACT_APP_DISCOVER_ARTYS}
                className="block py-3 px-3 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(process.env.REACT_APP_DISCOVER_ARTYS);
                }}
              >
                {t('header.artys')}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to={'/#'+ process.env.REACT_APP_SUBSCRIPTION_LINK}
                className="block py-3 px-3 rounded cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(process.env.REACT_APP_SUBSCRIPTION_LINK);
                }}
              >
                {t('header.subscription')}
              </RouterLink>
            </li>
            <li>
              <Button text={t('header.connection')} width={"w-fit"}/>
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