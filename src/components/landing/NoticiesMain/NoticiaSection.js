import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const NoticiaSection = () => {
  const { id } = useParams();

  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    const mockData = {
      id: id,
      title: "El impacto de la tecnología en el diseño moderno",
      content:
        "El diseño web ha evolucionado drásticamente en la última década. Lo que antes eran estructuras rígidas y basadas en tablas, hoy son experiencias fluidas y dinámicas. Esta transformación no solo afecta a la estética, sino a cómo los usuarios interactúan con la información.\n\nLa adopción de principios minimalistas y la prioridad en la tipografía han permitido que el contenido vuelva a ser el rey, dejando atrás los elementos decorativos innecesarios que saturaban las pantallas de principios de los 2000. Hoy en día, el espacio en blanco es tan importante como el contenido mismo.",
      image:
        "https://www.psoe.es/media-content/2019/10/AAFF_CORTE_FOTOS-WEB_SIN_VOTA_600x332-582x322.png",
      creation_date: "2026-02-06",
      edition_date: "2026-02-06",
      owner_id: 123, // Esto representaría al autor
    };

    setNoticia(mockData);
  }, [id]);

  // Si aún no hay datos, podrías mostrar un loader
  if (!noticia)
    return <div className="text-center py-20">Cargando noticia...</div>;

  return (
    <div className="bg-white w-full min-h-screen pb-20">
      {/* --- SECCIÓN 1: IMAGEN HERO --- */}
      <div className="w-full md:h-128 relative">
        <img
          src={noticia.image}
          alt={noticia.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* --- SECCIÓN 2: CONTENIDO --- */}
      <main className="max-w-7xl mx-auto px-5 md:px-10 py-12">
        {/* Cabecera del artículo */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-6 mb-8">
          <Link
            to="/noticies"
            className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors mb-4 md:mb-0"
          >
            &larr; Volver
          </Link>

          <div className="flex items-center space-x-4 text-sm md:text-base text-gray-500 font-medium uppercase tracking-widest">
            {/* Formateamos la fecha del JSON */}
            <span>
              {new Date(noticia.creation_date).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="text-gray-300">|</span>
            <span>Autor: {noticia.owner_id}</span>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight mb-12 tracking-tight">
          {noticia.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Columna Lateral (Editorial) */}
          <div className="hidden lg:block lg:col-span-2 border-t-4 border-black pt-4">
            <p className="text-sm text-gray-400 mt-2">
              Editado: {noticia.edition_date}
            </p>
          </div>

          {/* Texto principal */}
          <div className="lg:col-span-10">
            <div className="text-xl md:text-2xl text-gray-800 leading-relaxed space-y-8 font-serif whitespace-pre-line">
              <p
                className="
                first-letter:text-7xl 
                first-letter:font-black 
                first-letter:text-black 
                first-letter:mr-4 
                first-letter:float-left
                first-letter:leading-[0.8]
              "
              >
                {noticia.content}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NoticiaSection;
