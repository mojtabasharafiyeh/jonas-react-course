import { useState } from 'react'
import BillCalculator from './BillCalculator'
import TipCalculator from './TipCalculator'
import Reset from './Reset'
import Output from './Output'

export default function App() {
  const [bill, setbill] = useState('')
  const [select, setselect] = useState(0)
  const [select2, setselect2] = useState(0)
  const tip = (select * bill) / 100 + (select2 * bill) / 100
  function resetHandler() {
    setbill('')
    setselect(0)
    setselect2(0)
  }
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
      {bill > 0 && (
        <>
          {' '}
          <Output bill={bill} tip={tip} />
          <Reset onreset={resetHandler} />
        </>
      )}
    </>
  )
}
