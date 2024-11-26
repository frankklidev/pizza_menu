import React, { useRef, useState, useEffect } from "react";

export interface Product {
  id: number;
  name: string;
  categoryId: number; // Relaciona cada producto con una categoría
  price?: string; // Precio del producto
  available?:boolean;
}

export interface Topping {
  id: number;
  name: string;
  price: string;
}

interface ProductListProps {
  products: Product[];
  selectedCategoryId: number | null;
  defaultCategoryId: number;
  toppings?: Topping[] | null;
  takeawayProducts?: { id: number; name: string; price: string }[]; // Productos para llevar
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  selectedCategoryId,
  defaultCategoryId,
  toppings = null,
  takeawayProducts = [],
}) => {
  const currentCategoryId = selectedCategoryId ?? defaultCategoryId;

  // Filtrar los productos según la categoría seleccionada
  const filteredProducts = currentCategoryId
    ? products.filter((product) => product.categoryId === currentCategoryId)
    : [];

    console.log("products",filteredProducts)

  const [isScrollable, setIsScrollable] = useState(false); // Estado para indicar si hay más elementos desplazables
  const productsContainerRef = useRef<HTMLDivElement>(null); // Referencia al contenedor de productos

  // Detectar si el contenedor tiene scroll
  useEffect(() => {
    const container = productsContainerRef.current;
    if (container) {
      const hasScroll = container.scrollHeight > container.clientHeight;
      setIsScrollable(hasScroll);
    }
  }, [filteredProducts, toppings, takeawayProducts]);

  return (
    <div className="w-full py-4">
      {/* Lista de productos */}
      <div
        className="flex flex-col gap-4 px-4 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400"
        ref={productsContainerRef}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between text-lg font-medium p-4 bg-white rounded shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="line-clamp-3">{product.name}</span>
              <span className="font-bold">{product.price}</span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No hay productos disponibles.
          </p>
        )}
      </div>

      {/* Indicador de scroll para productos */}
      {isScrollable && (
        <div className="flex justify-center items-center mt-2">
          <span className="text-gray-500 text-sm animate-bounce">
            Desplázate para ver más
          </span>
        </div>
      )}

      {/* Mostrar toppings si existen */}
      {toppings && toppings.length > 0 && (
        <div className="mt-6 px-4">
          <h3 className="text-lg font-bold mb-2">Agregos Disponibles:</h3>
          <div className="flex flex-col gap-4 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
            {toppings.map((topping) => (
              <div
                key={topping.id}
                className="flex items-center justify-between text-lg font-medium p-4 bg-white rounded shadow-md hover:shadow-lg transition-shadow"
              >
                <span>{topping.name}</span>
                <span className="font-bold">{topping.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mostrar productos "Para Llevar" si es la categoría de Pizzas */}
      {currentCategoryId === 7 && takeawayProducts.length > 0 && (
        <div className="mt-6 px-4">
          <h3 className="text-lg font-bold mb-2">Para Llevar:</h3>
          <div className="flex flex-col gap-4 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
            {takeawayProducts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between text-lg font-medium p-4 bg-white rounded shadow-md hover:shadow-lg transition-shadow"
              >
                <span>{item.name}</span>
                <span className="font-bold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
