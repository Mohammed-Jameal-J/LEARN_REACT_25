import React, { useState, useMemo } from "react";

const ExpensiveComputation = ({ number }) => {
  // Simulate an expensive operation
  const compute = (num) => {
    console.log("Computing...");
    return num * 1000; // A time-consuming calculation
  };

  const memoizedResult = useMemo(() => compute(number), [number]);

  return <h3>Computed Value: {memoizedResult}</h3>;
};

const Calculation = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <h1>Count: {count}</h1>
      <ExpensiveComputation number={number} />
    </div>
  );
};

export default Calculation;
