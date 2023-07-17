import { useState } from 'react'
import Button from './Button'

export function AddFriend({ data, onsetdata }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')
  function handlesubmit(e) {
    e.preventDefault()
    const id = crypto.randomUUID()
    if (!name || !image) return
    const NewFriend = {
      name,
      image,
      id,
      balance: 0,
    }
    console.log(NewFriend)
    setName('')
    setImage('https://i.pravatar.cc/48')
    const dataChandge = data.slice()
    const dataChange2 = [...dataChandge, NewFriend]
    onsetdata(dataChange2)
  }
  return (
    <form className='form-add-friend' onSubmit={handlesubmit}>
      <label>❤ friend name</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>👩🏽‍🦰 image url</label>
      <input
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <Button>Add</Button>
    </form>
  )
}
