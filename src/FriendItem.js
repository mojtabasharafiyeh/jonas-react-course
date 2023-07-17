import Button from './Button'
export function FriendItem({ item }) {
  return (
    <li>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      {item.balance > 0 && (
        <p className='red'>
          you owe {item.name} {item.balance}
        </p>
      )}
      {item.balance < 0 && (
        <p className='green'>
          {item.name} owes you {item.balance}
        </p>
      )}
      {item.balance === 0 && <p>you and {item.name} are even</p>}
      <Button>select</Button>
    </li>
  )
}
