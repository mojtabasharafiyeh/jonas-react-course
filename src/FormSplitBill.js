import Button from './Button'

export function FormSplitBill({ selectedFriend }) {
  return (
    <form className='form-split-bill'>
      <h2>split a bill with {selectedFriend}</h2>
      <label>💲bill value</label>
      <input type='text'></input>
      <label> 👱🏽‍♂️your expense </label>
      <input type='text'></input>
      <label> 👫{selectedFriend}'s expence</label>
      <input type='text' disabled></input>
      <label>who is paying the bill?</label>
      <select>
        <option value='user'>you</option>
        <option value='friend'>{selectedFriend}</option>
      </select>
      <Button>split bill</Button>
    </form>
  )
}
