import React from 'react';
import portadaImage from '../assets/portada1.jpeg'; // Ruta válida para la imagen

const Hero: React.FC = () => {
  return (
    <div
      className="hero h-[50vh] md:min-h-screen font-sans relative"
      style={{
        backgroundImage: `url(${portadaImage})`, // Usamos tu imagen local
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Fondo oscuro con transparencia */}
      <div className="hero-overlay bg-opacity-60 bg-black absolute inset-0"></div>

      {/* Contenido del Hero */}
      <div className="hero-content relative z-10 text-neutral-content text-center px-4">
        <div className="max-w-lg mx-auto">
          {/* Título */}
          <h1 className="mb-5 text-4xl md:text-6xl font-extrabold text-white tracking-wide">
            <span className="block text-yellow-400 drop-shadow-lg">Bienvenido</span>
            <span className="block">a MG</span>
          </h1>

          {/* Descripción */}
          <p className="mb-8 text-lg md:text-xl text-gray-300 drop-shadow-lg">
            Explora nuestro menú y descubre los sabores que tenemos para ti. 
            Productos de calidad, preparados con pasión y dedicación.
          </p>

          {/* Línea decorativa */}
          <div className="w-16 h-1 mx-auto bg-yellow-400 rounded-full mb-6"></div>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;


