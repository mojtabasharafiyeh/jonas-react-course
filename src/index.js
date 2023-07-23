import React, { useState } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './index.css'
const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
]
function Menu(props) {
  const numberPizza = pizzaData.length
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      {numberPizza > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. {numberPizza} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>

          <ul className='pizzas'>
            {pizzaData.map((pizzas) => (
              <Pizza obj={pizzas} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  )
}
function Pizza({ obj }) {
  // if (obj.soldOut) return null
  return (
    <li className={`pizza ${obj.soldOut ? 'sold-out' : ''}`}>
      <img src={obj.photoName} alt={obj.alt}></img>
      <div>
        <h3>{obj.name}</h3>
        <p>{obj.ingredients}</p>
        <span>{obj.soldOut ? 'sold out' : obj.price}</span>
      </div>
    </li>
  )
}
function Header() {
  // const style={ color: 'red', fontSize: '48px', textTransform: 'uppercase' }
  const style = {}
  return (
    <header className='header'>
      <h1 style={style}>fast react pizza .co</h1>
    </header>
  )
}
function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen)
  return (
    <div className='footer order'>
      {' '}
      {isOpen ? (
        <footer>
          We're open from {openHour}:00 to {closeHour}:00. Come visit us or
          order online.
        </footer>
      ) : (
        <p>we are closed</p>
      )}
      <button className='btn'>order now</button>
    </div>
  )
}
function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
