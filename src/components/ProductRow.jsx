import React from 'react';

export default function ProductRow(props) {
  return (
    <tr style={{ color: props.products.stocked ? 'white' : 'red' }}>
      <td>{props.products.name}</td>
      <td>{props.products.price}</td>
    </tr>
  );
}
