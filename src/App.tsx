import React, { useState } from "react";
import useSWR from "swr";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductList, { Product } from "./components/ProductList";
import Loader from "./components/Loader";

const fetcher = (url: string) =>
  fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`).then((res) => res.json());

const App: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  // Fetch de categorías, productos y toppings
  const { data: categories, error: categoriesError } = useSWR(
    "/categories",
    fetcher
  );
  const { data: products, error: productsError } = useSWR("/products", fetcher);
  const { data: toppings, error: toppingsError } = useSWR("/toppings/all", fetcher);

  // Manejo de selección de categoría
  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  // Filtrar productos según la categoría seleccionada y la propiedad available
  const filteredProducts =
    products && selectedCategoryId
      ? products.filter(
          (product: Product) =>
            product.categoryId === selectedCategoryId && product.available
        )
      : products?.filter((product: Product) => product.available);

  // Determinar los toppings dinámicamente según la categoría seleccionada
  const currentToppings =
    selectedCategoryId === 7
      ? toppings?.toppings
      : selectedCategoryId === 2
      ? toppings?.spaghettiToppings
      : selectedCategoryId === 8
      ? toppings?.hamburgerToppings
      : [];

  // Manejo de errores y estado de carga
  if (categoriesError || productsError || toppingsError)
    return <div>Error al cargar datos del backend.</div>;
  if (!categories || !products || !toppings) return <Loader />;

  console.log("categories", categories);
  console.log("filteredProducts", filteredProducts);

  return (
    <div className="w-full min-h-screen flex flex-col gap-6 bg-gray-100">
      {/* Hero Section */}
      <header className="w-full bg-white shadow-md">
        <Hero />
      </header>

      {/* Categories Section */}
      <section className="w-full px-4 md:px-8 lg:px-12">
        <Categories
          categories={categories} // Usar las categorías del backend
          onCategorySelect={handleCategorySelect}
        />
      </section>

      {/* Product List Section */}
      <main className="w-full px-4 md:px-8 lg:px-12">
        <ProductList
          products={filteredProducts} // Productos filtrados por categoría y disponibilidad
          selectedCategoryId={selectedCategoryId}
          defaultCategoryId={9}
          toppings={currentToppings} // Pasar los toppings dinámicamente
        />
      </main>
    </div>
  );
};

export default App;
