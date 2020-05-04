import React from 'react';
import './style.scss';

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
      <h3>with Sass</h3>

      <Basket items={fruits} onClick={handleClick} />
    </div>
  );
}

function Basket({ items, onClick }) {
  return (
    <ul className="unordered-list">
      {items.map((item) => (
        <li key={item.id} className="list-item">
          {item.name}
          <button
            type="button"
            className="button"
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
