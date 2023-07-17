import { FriendList } from './FriendList'
import { AddFriend } from './AddFriend'
import Button from './Button'
import { useState } from 'react'

export const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
]
export default function App() {
  const [data, setData] = useState(initialFriends)
  function setdataHandler(dataPassed) {
    setData((data) => [...data, dataPassed])
  }
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList data={data} />
        <AddFriend data={data} onsetdata={setdataHandler}></AddFriend>
        <Button>Add friend</Button>
      </div>
      <FormSplitBill></FormSplitBill>
    </div>
  )
}
function FormSplitBill() {
  return (
    <form className='form-split-bill'>
      <h2>split a bill with x</h2>
      <label>💲bill value</label>
      <input type='text'></input>
      <label> 👱🏽‍♂️your expense </label>
      <input type='text'></input>
      <label> 👫x's expence</label>
      <input type='text' disabled></input>
      <label>who is paying the bill?</label>
      <select>
        <option value='user'>you</option>
        <option value='friend'>x</option>
      </select>
      <Button>split bill</Button>
    </form>
  )
}
