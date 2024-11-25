import React, { useRef, useState, useEffect } from "react";

interface Category {
  id: number;
  name: string;
  icon: string;
}

interface CategoriesProps {
  categories: Category[];
  onCategorySelect: (categoryId: number) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  categories,
  onCategorySelect,
}) => {
  const [isScrollableLeft, setIsScrollableLeft] = useState(false);
  const [isScrollableRight, setIsScrollableRight] = useState(false);
  const categoriesContainerRef = useRef<HTMLDivElement>(null);

  // Verificar si hay scroll disponible a la izquierda y derecha
  const updateScrollIndicators = () => {
    const container = categoriesContainerRef.current;
    if (container) {
      setIsScrollableLeft(container.scrollLeft > 0);
      setIsScrollableRight(
        container.scrollWidth > container.clientWidth + container.scrollLeft
      );
    }
  };

  useEffect(() => {
    updateScrollIndicators(); // Verificar scroll inicial
  }, []);

  // Función para desplazar el contenedor horizontalmente
  const scroll = (direction: "left" | "right") => {
    const container = categoriesContainerRef.current;
    if (container) {
      const scrollAmount = 200; // Cantidad de desplazamiento
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full py-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Categorías</h2>

      {/* Flecha izquierda (visible solo en pantallas pequeñas) */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition-all lg:hidden ${
          isScrollableLeft ? "block" : "hidden"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Contenedor horizontal con desplazamiento */}
      <div
        className="flex gap-4 overflow-x-auto px-4 scrollbar-hide justify-start lg:justify-center"
        ref={categoriesContainerRef}
        onScroll={updateScrollIndicators} // Actualizar las flechas dinámicamente
      >
        <div className="flex gap-4 pl-1">
          {" "}
          {/* Espacio inicial en pantallas pequeñas */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className="flex-shrink-0 flex flex-col items-center min-w-[100px] bg-base-200 rounded-lg p-4 shadow-md hover:bg-primary hover:text-white transition-all"
            >
              <div className="text-4xl mb-2">
                {category.icon || "❓"} {/* Icono predeterminado si falta */}
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Flecha derecha (visible solo en pantallas pequeñas) */}
      <button
        onClick={() => scroll("right")}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition-all lg:hidden ${
          isScrollableRight ? "block" : "hidden"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Categories;
