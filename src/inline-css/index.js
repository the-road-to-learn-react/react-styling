import React from 'react';

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
      <h3>with Inline CSS</h3>

      <Basket items={fruits} onClick={handleClick} />
    </div>
  );
}

function Basket({ items, onClick }) {
  return (
    <ul
      style={{
        margin: '0',
        padding: '0',
        listStyleType: 'none',
      }}
    >
      {items.map((item) => (
        <li
          key={item.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 0',
          }}
        >
          {item.name}
          <button
            type="button"
            onClick={() => onClick(item)}
            style={{
              cursor: 'pointer',
              border: '1px solid #1a202c',
              padding: '8px',
              minWidth: '64px',

              background: 'transparent',

              transition: 'all 0.1s ease-in',
            }}
          >
            {item.isFavorite ? 'Unlike' : 'Like'}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default App;
