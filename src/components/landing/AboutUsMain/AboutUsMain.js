import React from 'react';
import hack from "src/components/event_cards/Hack2023.jpg";
import image1 from "src/assets/img/image-allt.png";
import image2 from "src/assets/img/image-esdeveniment.png";

const AboutUsMain = () => {
    return(
        <div>
            <div className="header-events bg-background-patron px-3 md:px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 ">
                <h1 className="header-events__title font-medium	text-4xl ">
                    Qui som?
                </h1>                    
            </div>
            <div className="flex flex-col px-52 mt-20 ">
                <div className="Volem-aprendre">
                    <div className="Image-content">
                        <img src={hack} alt="volem-aprendre" />
                    </div>
                    <div className="Text-content my-3 text-justify	">
                        <h1 className="font-bold">Volem aprendre</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean libero turpis, varius a neque eget, ornare iaculis ligula. 
                            Donec in convallis lacus. Mauris tincidunt, justo eu mattis congue, velit dolor mollis orci, eget mollis orci mi sagittis sem. 
                            Etiam a purus ut est placerat ullamcorper ac at nulla. Duis eu dolor in lacus auctor congue id eget mauris. 
                            Nullam eros tortor, euismod et metus a, consequat rutrum orci. Proin ante ante, viverra in dictum sed, convallis ac neque. 
                            Nulla et augue luctus, tincidunt metus vitae, rhoncus mauris. Phasellus mollis blandit est at finibus. Nullam nisi turpis, accumsan eget sapien ut, 
                            mollis sodales nulla. Curabitur est felis, accumsan non ipsum feugiat, ullamcorper tempus dui. Donec sit amet neque at magna euismod blandit id id lectus. 
                            Integer pellentesque dolor eget orci suscipit aliquam. Donec at maximus ligula, ut vehicula orci. Aliquam aliquet interdum libero, 
                            ut interdum massa laoreet a.
                        </p>
                    </div>
                </div>
                <div className="Activitats mt-20">
                    <div className="Image-content">
                        <img src={image1} alt="activitats"/>
                    </div>
                    <div className="Text-content my-3 text-justify	">
                        <h1 className="font-bold">Activitats</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean libero turpis, varius a neque eget, ornare iaculis ligula. 
                        Donec in convallis lacus. Mauris tincidunt, justo eu mattis congue, velit dolor mollis orci, eget mollis orci mi sagittis sem. 
                        Etiam a purus ut est placerat ullamcorper ac at nulla. Duis eu dolor in lacus auctor congue id eget mauris. 
                        Nullam eros tortor, euismod et metus a, consequat rutrum orci. Proin ante ante, viverra in dictum sed, convallis ac neque.
                        </p>
                    </div>
                </div>
                <div className="Esdeveniments mt-20">
                    <div className="Image-content">
                        <img src={image2} alt="esdeveniments"/>
                    </div>
                    <div className="Text-content my-3 text-justify	">
                        <h1 className="font-bold">Esdeveniments</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean libero turpis, varius a neque eget, ornare iaculis ligula. 
                        Donec in convallis lacus. Mauris tincidunt, justo eu mattis congue, velit dolor mollis orci, eget mollis orci mi sagittis sem. 
                        Etiam a purus ut est placerat ullamcorper ac at nulla. Duis eu dolor in lacus auctor congue id eget mauris. 
                        Nullam eros tortor, euismod et metus a, consequat rutrum orci. Proin ante ante, viverra in dictum sed, convallis ac neque.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsMain;