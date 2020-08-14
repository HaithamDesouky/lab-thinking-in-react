import React from 'react';
import ProductRow from './ProductRow';
import './ProductTable.css';

function generateId() {
  return Math.random().toString();
}

export default function ProductTable(props) {
  return (
    <div>
      <div className="results-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody id="contacts-list">
            {props.products.map((individual) => (
              <ProductRow key={generateId()} products={individual}></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
