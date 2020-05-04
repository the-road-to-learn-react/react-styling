import React from 'react';

import '../tailwind.generated.css';

function App() {
  const [fruits, setFruits] = React.useState([
    { id: '1', name: 'Apple', isFavorite: false },
    { id: '2', name: 'Peach', isFavorite: true },
    { id: '3', name: 'Strawberry', isFavorite: false },
  ]);

  function handleClick(item) {
    const newFruits = fruits.map((fruit) => {
      if (fruit.id === item.id) {
        return {
          id: fruit.id,
          name: fruit.name,
          isFavorite: !fruit.isFavorite,
        };
      } else {
        return fruit;
      }
    });

    setFruits(newFruits);
  }

  return (
    <div>
      <h3>with Tailwind CSS</h3>

      <Basket items={fruits} onClick={handleClick} />
    </div>
  );
}

function Basket({ items, onClick }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="flex justify-between py-2">
          {item.name}
          <button
            type="button"
            className="p-2 w-16 border border-solid border-gray-900 transition duration-100 ease-in hover:bg-gray-900 hover:text-white"
            onClick={() => onClick(item)}
          >
            {item.isFavorite ? 'Unlike' : 'Like'}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default App;
