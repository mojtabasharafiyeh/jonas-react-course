import { useState } from 'react'
import Button from './Button'

export default function App() {
  const [step, setstep] = useState(0)
  console.log(step)
  const [isOpen, setISoPEN] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const stepUpHandler = function () {
    step >= 3 || setstep(step + 1)
  }
  const stepDownHandler = function () {
    step <= 0 || setstep(step - 1)
  }
  const closeHandel = function () {
    setISoPEN(!isOpen)
    setIsActive((current) => !current)
  }
  const message = ['learn react', 'apply a job', 'earn some money']
  return (
    <>
      <button
        style={{
          backgroundColor: isActive ? '' : 'salmon',
          color: isActive ? 'blue' : '',
        }}
        className='close'
        onClick={closeHandel}
      >
        &times;
      </button>
      {isOpen ? (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className='message'>
            step {step}:{message[step - 1]}
          </p>
          <div className='buttons'>
            <Button
              onc={stepDownHandler}
              type='prevous'
              bgcolor='#7950f2'
              color='#fff'
              emoji='👈🏽'
            />
            <Button
              onc={stepUpHandler}
              type='next'
              bgcolor='#7950f2'
              color='#fff'
              emoji='👉🏽'
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}
