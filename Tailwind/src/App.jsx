import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-400 text-black p-4 rounded-xl mb-4">
      Hello world!
    </h1>
<Card username="Raya" btnText="click me"/>
<Card username="Ridhi" />


    </>
  )
}

export default App
