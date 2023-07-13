import React from 'react'

export function Item({ item, deleteHandler, oncheckbox }) {
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
