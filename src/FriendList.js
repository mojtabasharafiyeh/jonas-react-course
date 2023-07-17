import { initialFriends } from './App'
import { FriendItem } from './FriendItem'

export function FriendList({ data }) {
  return (
    <>
      <ul>
        {' '}
        {data.map((item) => (
          <FriendItem item={item} />
        ))}
      </ul>
    </>
  )
}
