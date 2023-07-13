import React, { useState } from 'react'

export function Form({ onaddNewItem }) {
  const [description, setDescription] = useState('')
  const [select, setSelect] = useState(1)
  function submitHandler(e) {
    e.preventDefault()
    const newItem = { description, select, packed: false, id: Date.now() }
    onaddNewItem(newItem)
    // console.log(newItem)
    setDescription('')
    setSelect(1)
  }
  return (
    <form className='add-form' onSubmit={submitHandler}>
      <h3>what do you need for your😍 trip</h3>
      <select
        value={select}
        onChange={(e) => {
          return setSelect(Number(e.target.value))
        }}
      >
        {Array.from({ length: 20 }, (_, i) => {
          return i + 1
        }).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='item....'
        value={description}
        onChange={(e) => {
          return setDescription(e.target.value)
        }}
      ></input>
      <button>add</button>
    </form>
  )
}
