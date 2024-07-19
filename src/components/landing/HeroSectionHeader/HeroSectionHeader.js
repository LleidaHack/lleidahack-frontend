import React from "react";
import ButtonLleidahack from "src/components/buttons/ButtonLleidahack";
import logo from "src/assets/img/logo_text_llh.svg";
import image from "src/imgs/hackers_group.jpg"

const HeroSectionHeader = () => {
  return (
    <div className="hero-container flex flex-col w-full static min-h-0 bg-cover bg-no-repeat bg-center">
      <img className="absolute w-full brightness-50 w-full object-cover max-h-[55vh]" src={image}></img>
      <div className="hero-section-container z-20 pl-12 pr-12">
        <div className="logo flex-1 h-20 my-16">
          <img src={logo} alt="logo + text" />
        </div>
        <div className="hero-content flex-1 my-16 h-32 text-CTALanding text-xl">
          <p>
            Lleidahack és una associació d’estudiants de la Universitat de
            Lleida, que promou l’aprenentatge i l’ús de les noves tecnologies.
          </p>
          <br></br>
          <p>
            Impulsa i organitza, any rere any, l’esdeveniment informàtic més
            gran de les terres de ponent, la HackEPS. La HackEPS és un event que
            acull a més de 150 participants d’arreu del món, amb l’objectiu de
            desenvolupar solucions a problemes tecnològics reals.
          </p>
        </div>
        <div className="hero-buttons flex flex-1 h-16 mb-16 gap-4">
          <ButtonLleidahack primary white>
            Descobreix més
          </ButtonLleidahack>
          <ButtonLleidahack secondary orange>
            Uneix-te!
          </ButtonLleidahack>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHeader;
