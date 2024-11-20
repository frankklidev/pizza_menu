import React, { useState } from 'react';

interface Topping {
  id: number;
  name: string;
  price: string;
}

interface ToppingsSelectorProps {
  toppings: Topping[];
  onSelectToppings: (selectedToppings: Topping[]) => void;
}

const ToppingsSelector: React.FC<ToppingsSelectorProps> = ({ toppings, onSelectToppings }) => {
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);

  const handleToggleTopping = (topping: Topping) => {
    const isSelected = selectedToppings.some((t) => t.id === topping.id);
    const newSelection = isSelected
      ? selectedToppings.filter((t) => t.id !== topping.id)
      : [...selectedToppings, topping];
    setSelectedToppings(newSelection);
    onSelectToppings(newSelection); // Notifica al padre los agregados seleccionados
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Selecciona Agregados</h2>
      <div className="flex flex-col gap-2">
        {toppings.map((topping) => (
          <label key={topping.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedToppings.some((t) => t.id === topping.id)}
              onChange={() => handleToggleTopping(topping)}
            />
            <span>{topping.name} (+{topping.price})</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ToppingsSelector;
