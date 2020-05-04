import React from 'react';
import styles from './style.module.css';

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
      <h3>with CSS Modules</h3>

      <Basket items={fruits} onClick={handleClick} />
    </div>
  );
}

function Basket({ items, onClick }) {
  return (
    <ul className={styles['unordered-list']}>
      {items.map((item) => (
        <li key={item.id} className={styles['list-item']}>
          {item.name}
          <button
            type="button"
            className={styles.button}
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
