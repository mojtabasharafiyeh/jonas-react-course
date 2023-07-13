import React, { useState } from 'react'
import { Item } from './Item'

export function PackingList({
  item,
  deleteHandler,
  oncheckbox,
  onclearLisrHandler,
}) {
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
      <div className='actions'>
        <select value={select} onChange={selectHandler}>
          <option value='input'>ordered by input</option>
          <option value='description'>ordered by description</option>
          <option value='packed'>ordered by packed</option>
        </select>
        <button onClick={onclearLisrHandler}>clear list </button>
      </div>
    </div>
  )
}
