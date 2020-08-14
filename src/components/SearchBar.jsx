import React from 'react';

export default function SearchBar(props) {
  return (
    <div>
      <h1>Search for a item</h1>
      <input
        className="form-control col-9"
        type="text"
        onChange={(event) => props.handleInput(event)}
        name="searchQuery"
        value={props.query}
      />
      <p>
        only show products in stock{' '}
        <input
          type="checkbox"
          id="instock"
          name="instock"
          value="instock"
          onChange={props.inStock}
        />
      </p>{' '}
    </div>
  );
}
