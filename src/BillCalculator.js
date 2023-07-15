export default function BillCalculator({ text, bill, onchangeHandler }) {
  return (
    <div style={{ display: 'flex' }}>
      <p>{text}</p>
      <input onChange={onchangeHandler} value={bill} type='number'></input>
    </div>
  )
}
