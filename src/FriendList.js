import { FriendItem } from './FriendItem'

export function FriendList({ data, onclickButtonHandler }) {
  return (
    <>
      <ul>
        {' '}
        {data.map((item) => (
          <FriendItem
            onclickButtonHandler={(id) => onclickButtonHandler(id)}
            item={item}
          />
        ))}
      </ul>
    </>
  )
}
