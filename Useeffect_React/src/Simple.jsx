import React from 'react'
import { useEffect, useState} from 'react'

const Simple = () => {
    const [num, setNum] = useState(1);
    useEffect(() => {
        console.log("Use Effect Called");
    }, [num]);
  return (
    <>
    <h1>Simple</h1>
    <h2>Current Number: {num}</h2>
    <button onClick={() => setNum(num + 1)}>Increment</button>
    <button onClick={() => setNum(num - 1)}>Decrement</button>
    </>
  )
}

export default Simple