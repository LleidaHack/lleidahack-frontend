import React from "react";
import hack from "src/components/event_cards/Hack2023.jpg";
import EvemtCardNewVersion from "src/components/event_cards/eventCard_three/eventCard_new_version";
import image1 from "src/assets/img/image-allt.png";
import image2 from "src/assets/img/image-esdeveniment.png";
import CardMembers from "src/components/landing/MemberCards/MemberCards";
import image3 from "src/assets/img/llhker.png";

const AboutUs = () => {
    const juntaMembers = [
        {name : "Òscar van de Crimmert Rodorera", image : image3, github: "https://hoogle.es", linkedIn: "https://hoogle.es", role: "President"},
        {name : "Naïm Saadi Gallego", image : image3, github: "https://hoogle.es", linkedIn: "https://hoogle.es", role: "Secretari"},
        {name : "Arnau Vernet Grifoll", image : image3, github: "https://hoogle.es", linkedIn: "https://hoogle.es", role: "Tresorer"},
    ]
    const CapsEquips = [
        {name : "Jordi", image : "src/components/event_cards/Hack2023.jpg", github: "https://hoogle.es", linkedIn: "https://hoogle.es"},
        {name : "Jordi", image : "src/components/event_cards/Hack2023.jpg", github: "https://hoogle.es", linkedIn: "https://hoogle.es"},
        {name : "Jordi", image : "src/components/event_cards/Hack2023.jpg", github: "https://hoogle.es", linkedIn: "https://hoogle.es"}
    ]
    const MemberCards = [
        {name : "Jordi", image : "src/components/event_cards/Hack2023.jpg", github: "https://hoogle.es", linkedIn: "https://hoogle.es"},
        {name : "Jordi", image : "src/components/event_cards/Hack2023.jpg", github: "https://hoogle.es", linkedIn: "https://hoogle.es"},
        {name : "Jordi", image : "src/components/event_cards/Hack2023.jpg", github: "https://hoogle.es", linkedIn: "https://hoogle.es"}
    ]


    return(
        <div>
            <div className="header-events bg-background-patron px-3 md:px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 ">
                <h1 className="header-events__title font-medium	text-4xl ">
                    Qui Som?
                </h1>                    
            </div>
            <div className="flex flex-col px-52 mt-20 ">
                <div className="Volem-aprendre">
                    <div className="Image-content">
                        <EvemtCardNewVersion image={hack}/>
                    </div>
                    <div className="Text-content my-3 text-justify	">
                        <h1 className="font-bold">Volem Aprendre</h1>
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
                <div className="Esdeveniments mt-20">
                    <div className="Image-content">
                        <EvemtCardNewVersion image={image1}/>
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
                <div className="Activitats mt-20">
                    <div className="Image-content">
                        <EvemtCardNewVersion image={image2}/>
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

            <div className="flex flex-col mt-10 w-full text-center justify-center">
                <div className=" center align-center flex justify-center">
                    <div className="w-6/12 border-2 border-primaryLanding rounded-lg" />
                </div>
                
                <div className="junta mt-10">
                    <h1 className="font-bold text-5xl">JUNTA </h1>
                    <div className="flex flex-row flex-wrap gap-4 justify-center mt-10 mb-10">
                        {juntaMembers.map((member) => (
                            <CardMembers key={member.name} image={member.image} name={member.name} github={member.github} linkedIn={member.linkedIn} role={member.role}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )};

export default AboutUs;