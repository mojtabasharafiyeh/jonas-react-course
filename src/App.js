import React, { useState } from 'react'
import './index.css'
// const initialItems = [
//   { id: 1, description: 'Passports', quantity: 2, packed: false },
//   { id: 2, description: 'Socks', quantity: 12, packed: true },
// ]
export default function App() {
  const [newItem, setNewItem] = useState([])
  function addNewItem(i) {
    setNewItem((item) => {
      return [...item, i]
    })
  }
  const length = newItem.length
  const packed = newItem.filter((item) => item.packed === true).length
  function deleteHandler(id) {
    setNewItem((i) => {
      return i.filter((x) => x.id !== id)
    })
  }
  function checkboxHandler(id) {
    setNewItem((x) =>
      x.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    )
  }
  return (
    <div className='app'>
      <Logo></Logo>
      <Form onaddNewItem={addNewItem}></Form>
      <PackingList
        oncheckbox={checkboxHandler}
        deleteHandler={deleteHandler}
        item={newItem}
      ></PackingList>
      <Stats length={length} packed={packed}></Stats>
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
function PackingList({ item, deleteHandler, oncheckbox }) {
  const [select, setselect] = useState('input')
  let sorted
  if (select === 'input') sorted = item
  if (select === 'description')
    sorted = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))
  if (select === 'packed')
    sorted = item.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
  // console.log(sorted)
  function selectHandler(e) {
    setselect(e.target.value)
  }
  return (
    <div className='list '>
      <ul className='con'>
        {sorted.map((item) => (
          <Item
            oncheckbox={oncheckbox}
            deleteHandler={() => deleteHandler(item.id)}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
      <select className='actions' value={select} onChange={selectHandler}>
        <option value='input'>ordered by input</option>
        <option value='description'>ordered by description</option>
        <option value='packed'>ordered by packed</option>
      </select>
    </div>
  )
}
function Item({ item, deleteHandler, oncheckbox }) {
  return (
    <li>
      <input
        type='checkbox'
        onChange={() => oncheckbox(item.id)}
        value={item.packed}
      ></input>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.select}
      </span>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.description}
      </span>
      <button
        onClick={() => {
          return deleteHandler(item.id)
        }}
      >
        🔴
      </button>
    </li>
  )
}
function Stats({ length, packed }) {
  return (
    <footer className='stats'>
      <em>
        you have {length} item on your list and you already packed {packed}(
        {(packed / length) * 100}%)
      </em>
    </footer>
  )
}
