import React from 'react';
import portadaImage from '../assets/portada.webp'; // Ruta válida para la imagen

const Hero: React.FC = () => {
  return (
    <div
      className="hero h-[50vh] md:min-h-screen font-sans"
      style={{
        backgroundImage: `url(${portadaImage})`, // Usamos tu imagen local
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black"></div> {/* Fondo oscuro con transparencia */}
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl md:text-5xl font-bold">Bienvenido</h1>
          <p className="mb-5 text-sm md:text-base">
            Explora nuestro menú y descubre la experiencia única que ofrecemos.
            Productos de calidad y un servicio excepcional te esperan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
