import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'

function App() {
  return <h1>hello react</h1>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
