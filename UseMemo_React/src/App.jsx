import React, { use } from 'react'
import { useState , useMemo , useEffect } from 'react'
import Calculation from './Calculation'


const App = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles])


  return (
    <div>
      <input 
        type="number" 
        value={number} 
        onChange={e => setNumber(parseInt(e.target.value))} 
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle Theme
      </button>
      <div style={themeStyles}>
        <h1>Double: {doubleNumber}</h1>
      </div>
      <Calculation />
    </div>
  )
}

export default App

function slowFunction(num) {
  console.log('Calling Slow Function')
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2
} 