import { createElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  
  // let counter = 15
  const addValue = () => {
    // this is not how we update a counter
   // counter = counter + 1
   if(counter < 20){

   setCounter(counter + 1)
  }
}
  const removeValue = () => {
    if(counter > 0){
    setCounter(counter - 1)
  }
}
  return (
   <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>
   </>
  )
}

export default App
