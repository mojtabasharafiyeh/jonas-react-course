import React, { useState } from 'react'
import './index.css'
const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
]
export default function App() {
  const [newItem, setNewItem] = useState([])
  function addNewItem(i) {
    setNewItem((item) => {
      return [...item, i]
    })
  }
  function deleteHandler(id) {
    setNewItem((i) => {
      return i.filter((x) => x.id !== id)
    })
  }
  return (
    <div className='app'>
      <Logo></Logo>
      <Form onaddNewItem={addNewItem}></Form>
      <PackingList deleteHandler={deleteHandler} item={newItem}></PackingList>
      <Stats></Stats>
    </div>
  )
}

function Logo() {
  return <h1>🌴Far Away 💼</h1>
}
function Form({ onaddNewItem }) {
  const [description, setDescription] = useState('')
  const [select, setSelect] = useState(1)
  function submitHandler(e) {
    e.preventDefault()
    const newItem = { description, select, packed: false, id: Date.now() }
    onaddNewItem(newItem)
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
function PackingList({ item, deleteHandler }) {
  return (
    <div className='list '>
      <ul className='con'>
        {item.map((item) => (
          <Item deleteHandler={deleteHandler} item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}
function Item({ item, deleteHandler }) {
  const [check, setcheck] = useState({})
  function checkboxHandler() {
    setcheck((item) =>
      item.hasOwnProperty('textDecoration')
        ? {}
        : { textDecoration: 'line-through' },
    )
  }
  return (
    <li>
      <input type='checkbox' onClick={checkboxHandler}></input>
      <span style={check}>{item.select}</span>
      <span style={check}>{item.description}</span>
      <button
        style={check}
        onClick={() => {
          return deleteHandler(item.id)
        }}
      >
        🔴
      </button>
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
