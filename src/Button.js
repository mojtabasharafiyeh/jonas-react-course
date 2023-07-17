export default function Button({ children, onclickButtonHandler }) {
  return (
    <button onClick={onclickButtonHandler} className='button'>
      {children}
    </button>
  )
}
