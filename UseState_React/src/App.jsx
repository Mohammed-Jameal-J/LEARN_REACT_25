import React from 'react'
import { useState } from 'react';
import NameForm from './NameForm';

const App = () => {

  const [num, setNum] = useState(10);

  const Increment = () => {
    setNum((PrevValue) => {
      return PrevValue + 1;
      
    });
    console.log("Incremented");
  }
  return (
    <div>
      <h1>Current Number: {num}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={() => setNum(num - 1)}>Decrement</button>
      <NameForm />
    </div>
  )
}

export default App