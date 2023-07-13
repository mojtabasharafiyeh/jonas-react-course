import React, { useState } from 'react'
import './index.css'
import { Logo } from './Logo'
import { Form } from './Form'
import { PackingList } from './PackingList'
import { Stats } from './Stats'
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
  function clearLisrHandler() {
    setNewItem([])
  }
  return (
    <div className='app'>
      <Logo></Logo>
      <Form onaddNewItem={addNewItem}></Form>
      <PackingList
        oncheckbox={checkboxHandler}
        deleteHandler={deleteHandler}
        item={newItem}
        onclearLisrHandler={clearLisrHandler}
      ></PackingList>
      <Stats length={length} packed={packed}></Stats>
    </div>
  )
}
