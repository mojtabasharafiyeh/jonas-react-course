import React, { useState } from 'react'
import './index.css'
const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
]

function Logo() {
  return <h1>🌴Far Away 💼</h1>
}
function Form() {
  const [description, setDescription] = useState('')
  const [select, setSelect] = useState(1)
  function submitHandler(e) {
    e.preventDefault()
    const newItem = { description, select, packed: false, id: Date.now() }
    console.log(newItem)
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
function PackingList() {
  return (
    <div className='list '>
      <ul className='con'>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>*</button>
    </li>
  )
}
function Stats() {
  return (
    <footer className='stats'>
      <em>you have x item</em>
    </footer>
  )
}

export default function App() {
  return (
    <div className='app'>
      <Logo></Logo>
      <Form></Form>
      <PackingList></PackingList>
      <Stats></Stats>
    </div>
  )
}
