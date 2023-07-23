import React, { useState } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
// import App from './App'
// import './index.css'
import StarRating from './StarRating'
function PandStar() {
  const [state, setstate] = useState('')
  return (
    <>
      <StarRating onstate={setstate} />
      <p>you have{state}star </p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <StarRating maxRating={10} defaultRating={5} />
    <StarRating maxRating={10} color='red' defaultRating={10} />
    <StarRating maxRating={10} color='green' />
    <PandStar></PandStar>
  </>,
)







import "./styles.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander() {
  return <div>TODO</div>;
}



* {
  padding: 0;
  margin: 0;
}

body {
  font-family: sans-serif;
}

.box {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 7px;
  background-color: #f7f7f7;
}

