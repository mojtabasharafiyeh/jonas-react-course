import { FriendList } from './FriendList'
import { AddFriend } from './AddFriend'
import Button from './Button'
import { useState } from 'react'
import { FormSplitBill } from './FormSplitBill'

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
  const [showForm, setShowform] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)
  const [yourExpense, setyourExpense] = useState(null)
  const [pay, setPay] = useState('user')
  function setdataHandler(dataPassed) {
    setData((data) => [...data, dataPassed])
  }
  function showFormHandler() {
    setShowform(true)
  }
  function hideFormHandler() {
    setShowform(false)
  }
  function clickButtonHandler(item) {
    console.log(item)
    setSelectedFriend(() => item)
  }

  function yourHandler(your) {
    setyourExpense(your)
  }
  function submitHandler(e) {
    e.preventDefault()
    // setData((pdata) => {
    //   if (pay === 'user') {
    //     let element = pdata.find((x) => x.name === selectedFriend)
    //     element.balance = friendBill
    //     return { ...pdata, element }
    //   }
    //   if (pay === 'friend') {
    //     let element = pdata.find((x) => x.name === selectedFriend)
    //     element.balance = yourExpense
    //     return { ...pdata, element }
    //   }
    // })
  }
  function payHandler(e) {
    console.log(e)
    setPay(e)
  }
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList data={data} onclickButtonHandler={clickButtonHandler} />
        {showForm ? (
          <>
            {' '}
            <AddFriend data={data} onsetdata={setdataHandler}></AddFriend>
            <Button onClick={hideFormHandler}>close</Button>
          </>
        ) : (
          <Button onClick={showFormHandler}>Add friend</Button>
        )}
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend.name}
          yourExpense={yourExpense}
          yourHandle={yourHandler}
          submitHandle={submitHandler}
          pay={pay}
          payHandle={payHandler}
          key={selectedFriend.id}
        ></FormSplitBill>
      )}
    </div>
  )
}
