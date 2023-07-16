export default function Output({ bill, tip }) {
  return (
    <div>
      <p>
        you pay ${bill + tip} (${bill}+$
        {tip}tip)
      </p>
    </div>
  )
}
