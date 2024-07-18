import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let [counter, setCounter] = useState(0)
  // Function to increment the counter value
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }
  // Function to decrement the counter value
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>02 Counter</h1>
      <h3>Counter Value: {counter}</h3>

      <button onClick={removeValue}>Remove value</button>
      {/* <br /> */}
      <button  onClick={addValue}>Add value</button>
      <p>Footer: {counter}</p>
    </>
  )
}
export default App
