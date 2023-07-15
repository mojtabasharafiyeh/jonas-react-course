export default function TipCalculator({ text, select, onselectHandler }) {
  return (
    <div style={{ display: 'flex' }}>
      <p>{text}</p>
      <select value={select} onChange={onselectHandler}>
        <option type='dis' value={0}>
          dissatisfied(0%)
        </option>
        <option type='ok' value={5}>
          ok(5%)
        </option>
        <option type='good' value={10}>
          good(10%)
        </option>
        <option type='amaz' value={20}>
          amaz(20%)
        </option>
      </select>
    </div>
  )
}
