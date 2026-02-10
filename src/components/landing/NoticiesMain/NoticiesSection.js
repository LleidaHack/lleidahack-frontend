import React from "react";
import { Link } from "react-router-dom";
import EventCard1 from "../ImageCards/EventCard1.js";

const NoticiesSection = () => {
  // 1. Datos hardcodeados
  const noticiasMock = [
    {
      id: 1,
      title: "Innovación en el Diseño 2026",
      content: "Exploramos cómo las nuevas IA están redefiniendo el minimalismo en las interfaces modernas...",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
      creation_date: "2026-02-06",
      edition_date: "2026-02-06",
      owner_id: 10
    },
    {
      id: 2,
      title: "El Futuro del Desarrollo Web",
      content: "React y los Server Components están cambiando la forma en que pensamos la hidratación del cliente...",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      creation_date: "2026-02-05",
      edition_date: "2026-02-05",
      owner_id: 12
    },
    {
      id: 3,
      title: "Sustentabilidad Digital",
      content: "¿Cuánto CO2 genera tu página web? Consejos para optimizar el rendimiento y reducir la huella de carbono...",
      image: "https://images.unsplash.com/photo-1470252649358-969623d756f6?auto=format&fit=crop&w=600&q=80",
      creation_date: "2026-02-04",
      edition_date: "2026-02-04",
      owner_id: 5
    },
  ];

  const fullNoticias = [...noticiasMock, ...noticiasMock, ...noticiasMock].slice(0, 16);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-10 my-10">
      {fullNoticias.map((noticia, idx) => {
        return (
          <Link 
            key={idx} 
            to={`/noticia/${noticia.id}`}
            className="no-underline text-inherit block" 
          >
            <EventCard1
              title={noticia.title}
              description={noticia.content.substring(0, 80) + "..."}
              date={new Date(noticia.creation_date).toLocaleDateString('es-ES')}
              imageSrc={noticia.image}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default NoticiesSection;