import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';

function App() {
  return (
    <div className="App">
      "hello"
      <FilterableProductTable products={data} />
    </div>
  );
}

export default App;
