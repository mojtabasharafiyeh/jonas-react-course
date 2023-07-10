import React, { useState } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'

function Step() {
  const [step, setstep] = useState(1)
  // function upStepHandler() {
  //   setstep((cur) => cur + 1)
  // }
  // function downStepHandler() {
  //   setstep((cur) => cur - 1)
  // }
  const [count, setcount] = useState(0)
  function upHandler(e) {
    setcount((e) => e + step)
  }
  function downHandler(c) {
    setcount((c) => c - step)
  }
  function rangeHandler(e) {
    setstep(+e.target.value)
  }
  function resetHandler() {
    setstep(1)
    setcount(0)
  }
  function inputHandler(e) {
    setcount(+e.target.value)
  }
  return (
    <>
      <input
        type='range'
        min='0'
        max='10'
        value={step}
        onChange={rangeHandler}
      ></input>
      <span>{step}</span>
      {/* <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={downStepHandler}>-</button>
        <p> step:{step}</p>
        <button onClick={upStepHandler}>+</button>
      </div> */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={() => downHandler(count)}>-</button>
          <input type='number' value={count} onChange={inputHandler}></input>
          <button onClick={() => upHandler(count)}>+</button>
        </div>
      </div>
      <button onClick={resetHandler}>reset</button>
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
