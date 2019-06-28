import React, { useState } from 'react';
import Form from './Form';
import Filters from './Filters';
import List from './List';
import { format } from 'url';
import { throwStatement } from '@babel/types';

const App = () => {
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Meat', value: 'meat' },
    { name: 'Produce', value: 'prod' },
    { name: 'Dairy', value: 'dairy' },
    { name: 'Bakery', value: 'bakery' },
  ];

  const initialItems = {
    items: [
    { name: 'Steak', type: 'meat', quantity: 3 },
    { name: 'Apples', type: 'prod', quantity: 4 },
    { name: 'Milk (1L, 2%)', type: 'dairy', quantity: 1 },
    { name: 'Baguettes', type: 'bakery', quantity: 2 },
  ],
  filter: 'all',
}
  const [state, setItems] = useState(initialItems);

  const incrementItemQuantity = (index) => {
    const updatedItems = state.items.map((item, i) => {
      if (i === index) {
        item.quantity++;
      }

      return item;
    });

    setItems(updatedItems);
  };

  const decrementItemQuantity = (index) => {
    const updatedItems = state.items.map((item, i) => {
      if (i === index && item.quantity > 0) {
        item.quantity--;
      }

      return item;
    });

    setItems(updatedItems);
  };

  const addItem = (newItem) => {
    console.log({newItem})
    setItems({ ...state, items: [...state.items, newItem]})
    // stateitems.push(newItem);
  };

  const filterItems = (selectedFilter) => {
    console.log('setting selected filter', selectedFilter)
    setItems({...state, filter: selectedFilter});
  }

  return (
    <main className="layout" id="app">
      <header className="header">
        <h1>Grocery List</h1>
      </header>
      <Form onSubmit={addItem}/>
      <Filters filters={filters} onSelection={filterItems} />
      <List
        items={state.items.filter((item) => state.filter === 'all' || item.type === state.filter)}
        incrementItem={incrementItemQuantity}
        decrementItem={decrementItemQuantity}
      />
    </main>
  );
};

export default App;
