import './App.css'
import { useState } from 'react'


function App() {
  const [counter, setCounter] = useState(5)
  //without using states, it will only update the js not the UI. With the help of hooks we can make changes in the UI.
  const addValue = () => {
    console.log("Before clicked:", counter);
    if (counter < 20) {
      setCounter(counter + 1);
    }

  }
  console.log("After click on Add Value:", counter);
  const removeValue = () => {
    console.log("Before clicked:", counter);
    if (counter > 0) {
      setCounter(counter - 1);
    }


  }
  return (
    <>
      <div>
        <h2>Count Value:{counter}</h2>
        <button
          onClick={addValue}
        >Add Value</button>
        <br />
        <button
          onClick={removeValue}>remove Value</button>
      </div>
    </>
  )
}

export default App
