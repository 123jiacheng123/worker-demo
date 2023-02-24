import { useState } from 'react'
import './App.css'

import FibonacciUi from './components/FibonacciUi'

function App() {

  return (
    <div className='App'>
      <h1>Vite + React</h1>
      <div>
        <FibonacciUi />
      </div>
    </div>
  )
}

export default App
