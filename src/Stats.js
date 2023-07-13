import React from 'react'

export function Stats({ length, packed }) {
  return (
    <footer className='stats'>
      <em>
        you have {length} item on your list and you already packed {packed}(
        {(packed / length) * 100}%)
      </em>
    </footer>
  )
}
