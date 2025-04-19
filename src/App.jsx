import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/product-card'
import Header from './components/header'

function App() {

  return (
    <>
    <div>
    <Header/>
    <h1> This is my React App</h1>
    <div>
      <p> My name is Dinusha </p>
      <p> I am a web developer</p>
      <ProductCard name="iphone 16" description ="sfef efdeqfef efefef efefe" price= "1000"/>
      <ProductCard name="iphone 17" description ="sfef efdeqfef efefef efefe" price= "1500"/>  

    </div>
    </div>
 
    </>
  )
}

export default App
