import React from 'react';

interface Category {
  id: number;
  name: string;
  icon: string;
}

interface CategoriesProps {
  categories: Category[];
  onCategorySelect: (categoryId: number) => void;
}

const Categories: React.FC<CategoriesProps> = ({ categories, onCategorySelect }) => {
  return (
    <div className="w-full py-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Categorías</h2>
      {/* Contenedor horizontal con desplazamiento y centrado en pantallas grandes */}
      <div className="flex gap-4 overflow-x-auto px-4 scrollbar-hide justify-start lg:justify-center">
        <div className="flex gap-4 pl-1"> {/* Espacio inicial en pantallas pequeñas */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className="flex-shrink-0 flex flex-col items-center min-w-[100px] bg-base-200 rounded-lg p-4 shadow-md hover:bg-primary hover:text-white transition-all"
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
