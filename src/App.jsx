import './App.css'
import Character from './Character/Character'
import React from 'react'

function App() {
  return (
    <div>
      <Character filter='Fulgora' />
      <Character filter='Voltematron' />
      <Character filter='Crossy' />
    </div>
  )
}

export default App
