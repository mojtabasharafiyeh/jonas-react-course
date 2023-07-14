import { AccordianItem } from './AccordianItem'
export function Accordion({ data }) {
  return (
    <div className='accordion'>
      {data.map((item, index) => (
        <AccordianItem
          title={item.title}
          text={item.text}
          index={index}
        ></AccordianItem>
      ))}
    </div>
  )
}
