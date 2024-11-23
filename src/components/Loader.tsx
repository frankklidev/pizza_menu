import React from "react";
import Hero from "./Hero";

const Loader: React.FC = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* Fondo Hero */}
      <Hero />

      {/* Overlay con el Loader */}
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="flex space-x-4">
          <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-6 h-6 bg-green-500 rounded-full animate-bounce delay-200"></div>
          <div className="w-6 h-6 bg-red-500 rounded-full animate-bounce delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
