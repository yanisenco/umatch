import React from "react";
import artysLogo from "../../assets/logos/artys_logo.svg";
import bpiLogo from "../../assets/images/partners/bpi.png";
import foundersLogo from "../../assets/images/partners/foundersVentures.png";
import frenchTechLogo from "../../assets/images/partners/laFrenchTech.png";

const Footer = () => {
    return (
    <footer className="bg-dark-blue text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <div className="mb-4">
            <img src={artysLogo} alt="Logo" className="w-12 stroke-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Let's get in touch</h3>
          <p className="text-sm mb-4">
            (Label, record company, recording studio, brand & sponsor, investor...)
          </p>
          <p className="text-sm">partner@artysfactory.com</p>
        <div>
          <h3 className="text-xl font-semibold mb-4">Partners</h3>
          <div className="flex space-x-6 max-w-96">
            <img src={foundersLogo} alt="BPI France" className="h-10 md:h-24" />
            <img src={bpiLogo} alt="Founders Ventures" className="h-10 md:h-16 m-auto" />
            <img src={frenchTechLogo} alt="La French Tech" className="h-10 md:h-24" />
          </div>
        </div>
        </div>


        {/* Right Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Offices</h3>
          <p className="text-sm mb-2 font-semibold">EUROPE</p>
          <p className="text-sm">🇫🇷 ARTYS FACTORY SAS</p>
          <p className="text-sm">45 Avenue du Président J.F Kennedy</p>
          <p className="text-sm">64200 Biarritz, France</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-sm text-gray-400">
        <p>© Artys Factory 2020 - All Rights reserved</p>
        <p>
          Artys Factory - RCS 880 855 382 - SAS with capital of €199,800 - 280 rue James Watt, Tecnosud, 66100 Perpignan, France
        </p>
      </div>
    </footer>
    );
}

export default Footer;