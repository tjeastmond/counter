import React from 'react';
import Instructions from './Instructions';
import Counter from './Counter';

// state data for 3 counters
const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

export default function App() {
  return (
    <div className="App">
      <section className="section">
        <h1 className="title">Counter Challenge</h1>
        <Instructions />
      </section>
      <section className="section">
        <div>
          {data.map((counter) => (
            <Counter key={counter.id} value={counter.value} />
          ))}
        </div>
      </section>
    </div>
  );
}
