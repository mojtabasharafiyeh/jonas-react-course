import { useState } from 'react'

export function AccordianItem({ title, text, index }) {
  const [isOpen, setIsopen] = useState(false)
  console.log(index)
  function toggleHandler() {
    setIsopen((isOpen) => !isOpen)
  }
  return (
    <>
      <div className={`item ${isOpen ? 'open' : ''}`} onClick={toggleHandler}>
        <p className='number'>{index < 9 ? `0${index + 1}` : index + 1}</p>
        <p className='text'>{title}</p>
        <p className='icon'>{isOpen ? '-' : '+'}</p>
        {isOpen && <div className='content-box'>{text}</div>}
      </div>
    </>
  )
}
