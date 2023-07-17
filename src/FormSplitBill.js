import Button from './Button'

export function FormSplitBill({
  selectedFriend,
  bill,
  billHandle,
  yourExpense,
  yourHandle,
  friendBill,
  submitHandle,
  pay,
  payHandle,
}) {
  return (
    <form className='form-split-bill' onSubmit={submitHandle}>
      <h2>split a bill with {selectedFriend}</h2>
      <label>💲bill value</label>
      <input
        type='text'
        value={bill}
        onChange={(e) => billHandle(+e.target.value)}
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
