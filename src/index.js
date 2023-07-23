import React, { useState } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './index.css'
function TextExpander({
  children,
  className = 'box',
  collapsedNumWords = 10,
  collapseButtonText = 'Collapse text',
  buttonColor = '#ff6622',
  expandButtonText = 'Show text',
  expanded = false,
}) {
  console.log(children.length)
  const [expand, setexpand] = useState(expanded)
  function handleclick() {
    setexpand((pre) => !pre)
  }
  return (
    <div className={className}>
      {expand ? children : children.split(' ', collapsedNumWords).join(' ')}
      {expand ? (
        <span style={{ color: buttonColor }} onClick={handleclick}>
          {collapseButtonText}{' '}
        </span>
      ) : (
        <span onClick={handleclick} style={{ color: buttonColor }}>
          {expandButtonText}
        </span>
      )}
    </div>
  )
}
function App() {
  return (
    <div>
      <div>
        <TextExpander
          className='box'
          expandButtonText='Show more'
          buttonColor='blue'
          collapseButtonText='show less'
        >
          Space travel is the ultimate adventure! Imagine soaring past the stars
          and exploring new worlds. It's the stuff of dreams and science
          fiction, but believe it or not, space travel is a real thing. Humans
          and robots are constantly venturing out into the cosmos to uncover its
          secrets and push the boundaries of what's possible.
        </TextExpander>

        <TextExpander
          collapsedNumWords={20}
          expandButtonText='Show text'
          collapseButtonText='Collapse text'
          buttonColor='#ff6622'
        >
          Space travel requires some seriously amazing technology and
          collaboration between countries, private companies, and international
          space organizations. And while it's not always easy (or cheap), the
          results are out of this world. Think about the first time humans
          stepped foot on the moon or when rovers were sent to roam around on
          Mars.
        </TextExpander>

        <TextExpander expanded={true} className='box'>
          Space missions have given us incredible insights into our universe and
          have inspired future generations to keep reaching for the stars. Space
          travel is a pretty cool thing to think about. Who knows what we'll
          discover next!
        </TextExpander>
      </div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
