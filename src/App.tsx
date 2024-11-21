import React, { useState } from "react";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductList, { Product } from "./components/ProductList";

const categories = [
  { id: 1, name: "Café", icon: "☕" },
  { id: 2, name: "Espaguetis", icon: "🍝" },
  { id: 4, name: "Sandwiches", icon: "🥪" },
  { id: 6, name: "Bebidas", icon: "🥤" },
  { id: 7, name: "Pizzas", icon: "🍕" },
  { id: 8, name: "Hamburguesas", icon: "🍔" },
];

const products: Product[] = [
  // Categoría: Café (ID: 1)
  { id: 1, name: "Expresso", categoryId: 1, price: "60 CUP" },
  { id: 2, name: "Cortado", categoryId: 1, price: "100 CUP" },
  { id: 3, name: "Capuchino", categoryId: 1, price: "150 CUP" },
  { id: 4, name: "Bombón", categoryId: 1, price: "250 CUP" },

  // Categoría: Té (ID: 2)
  { id: 11, name: "Espaguetis", categoryId: 2 },

  // Categoría: Sandwiches (ID: 4)
  {
    id: 31,
    name: "Sándwich Clásico(jamón,queso gouda,mantequilla,vegetales y vianda frita)",
    categoryId: 4,
    price: "430 CUP",
  },
  { id: 32, name: "Sándwich de Atún", categoryId: 4, price: "390 CUP" },

  // Categoría: Bebidas (ID: 6)
  { id: 51, name: "Cerveza", categoryId: 6, price: "350 CUP" },
  { id: 52, name: "Energizante", categoryId: 6, price: "300 CUP" },
  { id: 53, name: "Malta", categoryId: 6, price: "280 CUP" },
  { id: 54, name: "Cerveza Importada", categoryId: 6, price: "250 CUP" },
  { id: 55, name: "Jugo Natural", categoryId: 6, price: "150 CUP" },
  { id: 56, name: "Malteada", categoryId: 6, price: "480 CUP" },
  { id: 57, name: "Limonada Frappe", categoryId: 6, price: "280 CUP" },
  {
    id: 58,
    name: "Limonada Frappe con Limón",
    categoryId: 6,
    price: "300 CUP",
  },

  // Categoría: Pizzas (ID: 7)
  { id: 61, name: "Pizza Margarita", categoryId: 7, price: "800 CUP" },

  { id: 101, name: "Hamburguesa de Pollo", categoryId: 8, price: "460 CUP" },
  { id: 102, name: "Hamburguesa de Cerdo", categoryId: 8, price: "570 CUP" },
  { id: 103, name: "Hamburguesa de Res", categoryId: 8, price: "570 CUP" },
  {
    id: 104,
    name: "Hamburguesa Mixta(Res/Cerdo)",
    categoryId: 8,
    price: "570 CUP",
  },
  {
    id: 105,
    name: "Hamburguesa Especial MG (doble hamburguesa,gouda,jamon,vegetales,papas fritas y jarra de jugo)",
    categoryId: 8,
    price: "570 CUP",
  },
];

const toppings = [
  { id: 1, name: "Piña(60g)", price: "140 CUP" },
  { id: 2, name: "Jamón(60g)", price: "180 CUP" },
  { id: 3, name: "Chorizo(60g)", price: "200 CUP" },
  { id: 4, name: "Atún(60g)", price: "280 CUP" },
  { id: 5, name: "Aceituna(50g)", price: "280 CUP" },
  { id: 6, name: "Queso Gouda(50g)", price: "280 CUP" },
  { id: 7, name: "Cebolla(40g)", price: "140 CUP" },
  { id: 8, name: "Bacon(60g)", price: "280 CUP" },
  { id: 9, name: "Pimiento(40g)", price: "120 CUP" },
];

const spaghettiToppings = [
  { id: 1, name: "Napolitano con Queso Gouda", price: "450 CUP" },
  { id: 2, name: "Jamón", price: "540 CUP" },
  { id: 3, name: "Atún", price: "620 CUP" },
  { id: 4, name: "Lasaña", price: "1200 CUP" },
];

const takeawayProducts = [
  { id: 201, name: "Caja de Pizza", price: "80 CUP" },
  { id: 202, name: "Cartuchos", price: "30 CUP" },
  { id: 203, name: "Termopack", price: "130 CUP" },
  { id: 204, name: "Vaso Desechable Grande", price: "15 CUP" },
  { id: 205, name: "Vaso Desechable Pequeño", price: "10 CUP" },
  { id: 206, name: "Jabas", price: "10 CUP" },
];

const App: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  // Determinar los toppings dinámicamente según la categoría seleccionada
  const currentToppings =
    selectedCategoryId === 7
      ? toppings // Toppings para pizzas
      : selectedCategoryId === 2
      ? spaghettiToppings // Toppings para espaguetis
      : null;

  const currentTakeawayProducts =
    selectedCategoryId === 7 ? takeawayProducts : [];

  // Mostrar pantalla de carga mientras los recursos no estén cargados

  return (
    <div className="w-full min-h-screen flex flex-col gap-6 bg-gray-100">
      {/* Hero Section */}
      <header className="w-full bg-white shadow-md">
        <Hero />
      </header>

      {/* Categories Section */}
      <section className="w-full px-4 md:px-8 lg:px-12">
        <Categories
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />
      </section>

      {/* Product List Section */}
      <main className="w-full px-4 md:px-8 lg:px-12">
        <ProductList
          products={products}
          selectedCategoryId={selectedCategoryId}
          defaultCategoryId={1}
          toppings={currentToppings} // Pasar los toppings dinámicamente
          takeawayProducts={currentTakeawayProducts}
        />
      </main>
    </div>
  );
};

export default App;
