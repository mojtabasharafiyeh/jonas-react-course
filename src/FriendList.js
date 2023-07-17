import { FriendItem } from './FriendItem'

export function FriendList({ data, onclickButtonHandler }) {
  return (
    <>
      <ul>
        {' '}
        {data.map((item) => (
          <FriendItem
            onclickButtonHandler={onclickButtonHandler}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </>
  )
}
