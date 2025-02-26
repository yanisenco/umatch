import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import greenLogo from "../../assets/logos/green_logo.svg";
import menuLines from "../../assets/icons/menu-lines.svg";
import LanguageDropdown from "../LanguageDropdown/languageDropdown";

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="sticky top-0 w-full z-50 md:backdrop-blur-lg ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="hidden md:block flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={greenLogo}
            alt="Logo UMatch"
            width={160}
            height={160}
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 ml-auto h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 bg-black"
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen}
        >
          <img
            src={menuLines}
            alt="Menu" 
          />
          MENU

        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col uppercase font-bold font-sm mt-4 text-black-60 md:space-x-2 md:flex-row ">
            <li>
              <Link
                href="/"
                className="block py-3 px-3 rounded"
              >
                {t('header.umatch')}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block py-3 px-3 rounded"
              >
                {t('header.artys')}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block py-3 px-3 rounded"
              >
                {t('header.subscription')}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex block py-3 px-5 rounded-xl bg-black text-white hover:bg-black-80 mb-5"
              >
                {t('header.connection')}
              </Link>
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