import React from 'react';

export default function Instructions() {
  return (
    <React.Fragment>
      <p>
        We have two components already written, App and Counter. They don't
        really work just yet, but we're going to fix that!
      </p>

      <p>
        <strong>Now for the requirements:</strong>
      </p>

      <ul>
        <li>Move the initial data out of the global state</li>
        <li>
          Clicking the plus and minus buttons should increment and decrement
          each counter
        </li>
        <li>
          Create a `Total` component that keeps a running summary of all the
          counters
        </li>
        <li>
          Add a fourth counter and ensure its value remains independent from the
          others
        </li>
      </ul>
    </React.Fragment>
  );
}
