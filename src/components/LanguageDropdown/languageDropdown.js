import React, { useState, useRef, useEffect } from "react";
import i18n from 'i18next';

const LanguageDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref pour l'encart dropdown

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        closeDropdown();
    };

    useEffect(() => {
        // Fonction pour fermer la dropdown si l'on clique en dehors
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        // Fonction pour fermer la dropdown si l'on appuie sur Échap
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsDropdownOpen(false);
            }
        };

        // Ajouter les écouteurs d'événements
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);

        // Nettoyer les écouteurs lorsque le composant est démonté
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="relative w-fit text-black" ref={dropdownRef}>
            <button
                onClick={() => toggleDropdown()}
                className="flex block py-3 px-5 rounded-xl bg-input-color font-bold"
            >
                {i18n.language.toUpperCase()}
                <svg
                    className={`ml-1 -mr-1 h-5 w-5 md:text-[#ff6e40] ${
                        isDropdownOpen ? "duration-100 rotate-180" : "duration-100"
                    }`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_7069_360)">
                        <path d="M12 16L6 10H18L12 16Z" fill="#101010" />
                    </g>
                    <defs>
                        <clipPath id="clip0_7069_360">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
            {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-input-color rounded-lg shadow-lg w-full ">
                    <li>
                        <button
                            onClick={() => changeLanguage('fr')}
                            className="block px-4 py-2 m-auto"
                        >
                            FR
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => changeLanguage('en')}
                            className="block px-4 py-2 m-auto"
                        >
                            EN
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default LanguageDropdown;