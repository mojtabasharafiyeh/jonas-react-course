export default function Button({ children, onclickButtonHandler }) {
  return (
    <button onClick={(e) => onclickButtonHandler(e)} className='button'>
      {children}
    </button>
  )
}
