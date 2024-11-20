import React, { useEffect, useState } from 'react';

export interface Product {
  id: number;
  name: string;
  categoryId: number; // Relaciona cada producto con una categoría
  price: string; // Precio del producto
}

export interface Topping {
  id: number;
  name: string;
  price: string;
}

interface ProductListProps {
  products: Product[];
  selectedCategoryId: number | null;
  defaultCategoryId: number; // Nueva prop: ID de la primera categoría
  toppings?: Topping[] | null; // Nueva prop: lista de toppings opcional
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  selectedCategoryId,
  defaultCategoryId,
  toppings = null, // Valor por defecto si no se pasa esta prop
}) => {
  const [currentCategoryId, setCurrentCategoryId] = useState<number | null>(null);

  useEffect(() => {
    // Si no hay una categoría seleccionada, usar la categoría por defecto
    if (selectedCategoryId === null) {
      setCurrentCategoryId(defaultCategoryId);
    } else {
      setCurrentCategoryId(selectedCategoryId);
    }
  }, [selectedCategoryId, defaultCategoryId]);

  const filteredProducts = currentCategoryId
    ? products.filter((product) => product.categoryId === currentCategoryId)
    : [];

  return (
    <div className="w-full py-4">
      {/* <h2 className="text-2xl font-bold mb-4 text-center">Productos</h2> */}
      <div className="flex flex-col gap-2 px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center text-lg font-medium"
            >
              {/* Nombre del producto */}
              <span className="">{product.name}</span>
              {/* Separador dinámico */}
              <span className="flex-grow mx-2 border-t border-dashed border-gray-400"></span>
              {/* Precio del producto */}
              <span>{product.price}</span>
              {/* Mostrar toppings si el producto es Pizza */}
              {product.categoryId === 7 && toppings && (
                <div className="mt-4">
                  <h3 className="text-lg font-bold mb-2">Agregados Disponibles:</h3>
                  <ul className="flex flex-col gap-2">
                    {toppings.map((topping) => (
                      <li
                        key={topping.id}
                        className="flex justify-between items-center bg-gray-50 p-2 rounded-lg shadow-sm"
                      >
                        <span>{topping.name}</span>
                        <span className="text-gray-600">{topping.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
