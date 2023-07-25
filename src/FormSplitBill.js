import { useState } from 'react'
import Button from './Button'

export function FormSplitBill({
  selectedFriend,
  yourExpense,
  yourHandle,
  friendBill,
  submitHandle,
  pay,
  payHandle,
}) {
  const [bill, setbill] = useState(null)
  function onBill(b) {
    setbill(b)
  }

  return (
    <form className='form-split-bill' onSubmit={submitHandle}>
      <h2>split a bill with {selectedFriend}</h2>
      <label>💲bill value</label>
      <input
        type='text'
        value={bill}
        onChange={(e) => onBill(+e.target.value)}
      ></input>
      <label> 👱🏽‍♂️your expense </label>
      <input
        type='text'
        value={yourExpense}
        onChange={(e) => yourHandle(+e.target.value)}
      ></input>
      <label> 👫{selectedFriend}'s expence</label>
      <input type='text' disabled value={friendBill}></input>
      <label>who is paying the bill?</label>
      <select value={pay} onChange={(e) => payHandle(e.target.value)}>
        <option value='user'>you</option>
        <option value='friend'>{selectedFriend}</option>
      </select>
      <Button>split bill</Button>
    </form>
  )
}
