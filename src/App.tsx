import React, { useState } from 'react';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductList, { Product } from './components/ProductList';

const categories = [
  { id: 1, name: 'Café', icon: '☕' },
  { id: 2, name: 'Té', icon: '🍵' },
  { id: 3, name: 'Postres', icon: '🍰' },
  { id: 4, name: 'Sandwiches', icon: '🥪' },
  { id: 5, name: 'Snacks', icon: '🍟' },
  { id: 6, name: 'Bebidas', icon: '🥤' },
  { id: 7, name: 'Pizzas', icon: '🍕' },
];

const products: Product[] = [
  // Categoría: Café (ID: 1)
  { id: 1, name: 'Latte', categoryId: 1, price: '40 CUP' },
  { id: 2, name: 'Espresso', categoryId: 1, price: '30 CUP' },
  { id: 3, name: 'Capuchino', categoryId: 1, price: '45 CUP' },
  { id: 4, name: 'Americano', categoryId: 1, price: '35 CUP' },
  { id: 5, name: 'Café Mocha', categoryId: 1, price: '50 CUP' },
  { id: 6, name: 'Cortado', categoryId: 1, price: '25 CUP' },
  { id: 7, name: 'Flat White', categoryId: 1, price: '40 CUP' },
  { id: 8, name: 'Macchiato', categoryId: 1, price: '30 CUP' },
  { id: 9, name: 'Irish Coffee', categoryId: 1, price: '60 CUP' },
  { id: 10, name: 'Café Vienés', categoryId: 1, price: '55 CUP' },

  // Categoría: Té (ID: 2)
  { id: 11, name: 'Té Verde', categoryId: 2, price: '25 CUP' },
  { id: 12, name: 'Té Negro', categoryId: 2, price: '30 CUP' },
  { id: 13, name: 'Té de Manzanilla', categoryId: 2, price: '20 CUP' },
  { id: 14, name: 'Té Chai', categoryId: 2, price: '40 CUP' },
  { id: 15, name: 'Infusión de Frutas', categoryId: 2, price: '35 CUP' },
  { id: 16, name: 'Té Blanco', categoryId: 2, price: '30 CUP' },
  { id: 17, name: 'Té Rooibos', categoryId: 2, price: '25 CUP' },
  { id: 18, name: 'Té de Jengibre', categoryId: 2, price: '20 CUP' },
  { id: 19, name: 'Té Earl Grey', categoryId: 2, price: '30 CUP' },
  { id: 20, name: 'Té Matcha', categoryId: 2, price: '50 CUP' },

  // Categoría: Postres (ID: 3)
  { id: 21, name: 'Pastel de Chocolate', categoryId: 3, price: '60 CUP' },
  { id: 22, name: 'Brownie', categoryId: 3, price: '50 CUP' },
  { id: 23, name: 'Cheesecake', categoryId: 3, price: '70 CUP' },
  { id: 24, name: 'Tiramisú', categoryId: 3, price: '65 CUP' },
  { id: 25, name: 'Macarons', categoryId: 3, price: '80 CUP' },
  { id: 26, name: 'Eclair', categoryId: 3, price: '40 CUP' },
  { id: 27, name: 'Panna Cotta', categoryId: 3, price: '60 CUP' },
  { id: 28, name: 'Helado Artesanal', categoryId: 3, price: '45 CUP' },
  { id: 29, name: 'Pastel de Zanahoria', categoryId: 3, price: '70 CUP' },
  { id: 30, name: 'Tarta de Manzana', categoryId: 3, price: '65 CUP' },

  // Categoría: Sandwiches (ID: 4)
  { id: 31, name: 'Sándwich de Jamón y Queso', categoryId: 4, price: '50 CUP' },
  { id: 32, name: 'Sándwich Vegetariano', categoryId: 4, price: '55 CUP' },
  { id: 33, name: 'Sándwich de Pollo', categoryId: 4, price: '60 CUP' },
  { id: 34, name: 'Sándwich de Atún', categoryId: 4, price: '65 CUP' },
  { id: 35, name: 'Panini Italiano', categoryId: 4, price: '70 CUP' },
  { id: 36, name: 'Sándwich BLT', categoryId: 4, price: '50 CUP' },
  { id: 37, name: 'Sándwich de Pavo', categoryId: 4, price: '60 CUP' },
  { id: 38, name: 'Sándwich Cubano', categoryId: 4, price: '70 CUP' },
  { id: 39, name: 'Wrap de Pollo', categoryId: 4, price: '55 CUP' },
  { id: 40, name: 'Wrap Vegetariano', categoryId: 4, price: '50 CUP' },

  // Categoría: Snacks (ID: 5)
  { id: 41, name: 'Papas Fritas', categoryId: 5, price: '30 CUP' },
  { id: 42, name: 'Palomitas de Maíz', categoryId: 5, price: '25 CUP' },
  { id: 43, name: 'Nuggets de Pollo', categoryId: 5, price: '40 CUP' },
  { id: 44, name: 'Aros de Cebolla', categoryId: 5, price: '35 CUP' },
  { id: 45, name: 'Tostones', categoryId: 5, price: '20 CUP' },
  { id: 46, name: 'Nachos con Queso', categoryId: 5, price: '50 CUP' },
  { id: 47, name: 'Alitas Picantes', categoryId: 5, price: '60 CUP' },
  { id: 48, name: 'Churros', categoryId: 5, price: '30 CUP' },
  { id: 49, name: 'Croquetas', categoryId: 5, price: '35 CUP' },
  { id: 50, name: 'Patacones', categoryId: 5, price: '25 CUP' },

  // Categoría: Bebidas (ID: 6)
  { id: 51, name: 'Jugo de Naranja', categoryId: 6, price: '25 CUP' },
  { id: 52, name: 'Batido de Mango', categoryId: 6, price: '30 CUP' },
  { id: 53, name: 'Limonada', categoryId: 6, price: '20 CUP' },
  { id: 54, name: 'Agua Mineral', categoryId: 6, price: '15 CUP' },
  { id: 55, name: 'Coca-Cola', categoryId: 6, price: '35 CUP' },
  { id: 56, name: 'Batido de Fresa', categoryId: 6, price: '30 CUP' },
  { id: 57, name: 'Jugo de Piña', categoryId: 6, price: '25 CUP' },
  { id: 58, name: 'Cerveza Artesanal', categoryId: 6, price: '50 CUP' },
  { id: 59, name: 'Té Helado', categoryId: 6, price: '20 CUP' },
  { id: 60, name: 'Agua de Coco', categoryId: 6, price: '30 CUP' },

  // Categoría: Pizzas (ID: 7)
  { id: 61, name: 'Pizza Margarita', categoryId: 7, price: '120 CUP' },

 
];

const toppings = [
  { id: 1, name: 'Queso Extra', price: '10 CUP' },
  { id: 2, name: 'Pepperoni', price: '15 CUP' },
  { id: 3, name: 'Champiñones', price: '12 CUP' },
  { id: 4, name: 'Aceitunas', price: '10 CUP' },
  { id: 5, name: 'Jamón', price: '15 CUP' },
];

const App: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="w-full">
      <Hero />
      <Categories categories={categories} onCategorySelect={handleCategorySelect} />
      <ProductList
        products={products}
        selectedCategoryId={selectedCategoryId}
        defaultCategoryId={1}
        toppings={selectedCategoryId === 7 ? toppings : null}
      />
    </div>
  );
};

export default App;
