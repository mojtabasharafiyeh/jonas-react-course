import React, { useState } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './index.css'

function Step() {
  const [step, setstep] = useState(1)
  function upStepHandler() {
    setstep((cur) => cur + 1)
  }
  function downStepHandler() {
    step > 1 && setstep((cur) => cur - 1)
  }
  const [count, setcount] = useState(0)
  function upHandler() {
    setcount((cur) => cur + step)
  }
  function downHandler() {
    setcount((cur) => cur - step)
  }
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={downStepHandler}>-</button>
        <p> step:{step}</p>
        <button onClick={upStepHandler}>+</button>
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={downHandler}>-</button>
          <p> count:{count}</p>
          <button onClick={upHandler}>+</button>
        </div>
      </div>
      <div>
        {count < 0 && <span>{-count} dayes ago was </span>}
        {count > 0 && <span>{count} dayes from today </span>}{' '}
        {count === 0 && 'today'} {count > 0 && 'is'}{' '}
        {new Date(1993, 11, 1 + count).toDateString()}
      </div>
    </>
  )
}
function App() {
  return (
    <div style={{ alignItems: 'center', width: '400px' }}>
      <Step />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
