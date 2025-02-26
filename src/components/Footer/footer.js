import React from "react";
import { useTranslation } from 'react-i18next';
import artysLogo from "../../assets/logos/artys_white_logo.svg";
import bpiLogo from "../../assets/images/partners/bpi.png";
import foundersLogo from "../../assets/images/partners/foundersVentures.png";
import frenchTechLogo from "../../assets/images/partners/laFrenchTech.png";

const Footer = () => {
      const { t } = useTranslation();
  
    return (
    <footer className="bg-dark-blue text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="md:flex items-start ml-10 md:ml-0">
          <div className="mr-10">
            <img src={artysLogo} alt="Logo" className="w-12 stroke-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{t('footer.title')}</h3>
            <p className="text-sm mb-4 w-[50%]">
              {t('footer.description')}
            </p>
            <a className="text-sm mb-3" href={`mailto:${t('footer.email')}`}>{t('footer.email')}</a>
          
            <h3 className="text-xl font-semibold mb-4">{t('footer.partners')}</h3>
            <div className="flex space-x-6 max-w-96">
              <img src={foundersLogo} alt="BPI France" className="h-10 md:h-24" />
              <img src={bpiLogo} alt="Founders Ventures" className="h-10 md:h-16 m-auto" />
              <img src={frenchTechLogo} alt="La French Tech" className="h-10 md:h-24" />
            </div>
        </div>
        </div>

        <div className="ml-10 md:ml-0">
          <h3 className="text-xl font-semibold mb-4">{t('footer.offices')}</h3>
          <p className="text-sm mb-2 font-semibold">{t('footer.localisation')}</p>
          <p className="text-sm max-w-[40%]">{t('footer.address')}</p>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400 p-2">
        <p>{t('footer.rights')}</p>
        <p>
          {t('footer.legalMentions')}
        </p>
      </div>
    </footer>
    );
}

export default Footer;