import React from 'react';

export default function Counter(props) {
  const { value } = props;
  return (
    <div className="counter">
      <b>{value}</b>
      <div className="counter-controls">
        <button className="button is-danger is-small">-</button>
        <button className="button is-success is-small">+</button>
      </div>
    </div>
  );
}
