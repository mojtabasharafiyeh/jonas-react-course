import { useState } from 'react'
import BillCalculator from './BillCalculator'
import TipCalculator from './TipCalculator'

export default function App() {
  const [bill, setbill] = useState(null)
  const [select, setselect] = useState(0)
  const [select2, setselect2] = useState(0)
  const tip = (select * bill) / 100 + (select2 * bill) / 100
  function changeHandler(e) {
    setbill(+e.target.value)
  }
  function selectHandler(e) {
    setselect(+e.target.value)
  }
  function selectHandler2(e) {
    setselect2(+e.target.value)
  }

  return (
    <>
      <BillCalculator
        text='how much was the bill?'
        bill={bill}
        onchangeHandler={changeHandler}
      />
      <TipCalculator
        onselectHandler={selectHandler}
        select={select}
        text='how did you like the service?'
      />
      <TipCalculator
        onselectHandler={selectHandler2}
        select={select2}
        text='how did your friend like the service?'
      />
      <p>
        you pay ${bill + tip} (${bill}+$
        {tip}tip)
      </p>
    </>
  )
}
