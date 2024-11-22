import React, { useState, useEffect, useRef } from 'react';
import { getAllCompanies } from '../../../services/CompanyService';

const CarruselLogos = () => {
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
    const [logos, setLogos] = useState([]);
    const logoRef = useRef(null);

    // Cargar los logos al montar el componente
    useEffect(() => {
        async function fetchCompanies() {
            const companies = await getAllCompanies();
            const images = companies
                .filter((company) => company.image !== 'string' && company.image.trim() !== '')
                .map((company) => company.image);
            setLogos(images);
            console.log(images);
        }
        fetchCompanies();
    }, []);

    // Configurar el carrusel
    useEffect(() => {
        if (logos.length === 0) return; // No hacer nada si no hay logos

        let currentIndex = currentLogoIndex; // Variable local para manejar el índice

        const fadeIn = (element) => {
            let opacity = 0;
            const interval = setInterval(() => {
                opacity += 0.05; // Incrementar opacidad gradualmente
                element.style.opacity = opacity;
                if (opacity >= 1) clearInterval(interval); // Parar al alcanzar opacidad completa
            }, 50); // Intervalo de actualización
        };

        const fadeOut = (element, callback) => {
            let opacity = 1;
            const interval = setInterval(() => {
                opacity -= 0.05; // Reducir opacidad gradualmente
                element.style.opacity = opacity;
                if (opacity <= 0) {

                    clearInterval(interval); // Parar al alcanzar opacidad mínima
                    callback(); // Llamar al callback para cambiar el logo
                }
            }, 50); // Intervalo de actualización
        };

        const interval = setInterval(() => {
            const logoElement = logoRef.current;

            if (logoElement) {
                fadeOut(logoElement, () => {
                    // Actualizar el índice después de que el logo actual se desvanezca
                    currentIndex = (currentIndex + 1) % logos.length;
                    setCurrentLogoIndex(currentIndex);
                    setTimeout(() => {
                        
                    }, 100);
                    fadeIn(logoElement); // Volver a hacer visible el logo
                });
            }
        }, 4000); // Intervalo entre cambios

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, [logos]);

    return (
        <img
            ref={logoRef}
            src={logos[currentLogoIndex] || ''} // Mostrar un logo vacío mientras se cargan los datos
            alt="Logo"
            style={{ opacity: 1 }} 
            className='object-center object-contain'
        />
    );
};

export default CarruselLogos;