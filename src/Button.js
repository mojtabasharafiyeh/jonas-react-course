export default function Button({ bgcolor, color, type, onc, emoji }) {
  return (
    <button onClick={onc} style={{ backgroundColor: bgcolor, color: color }}>
      <span>{emoji}</span>
      {type}
    </button>
  )
}
