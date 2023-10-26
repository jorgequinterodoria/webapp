import { useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <>
    <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center',backgroundColor:'#000000', color:'white' }}>
      <h2>Sales Prediction App</h2>
      <img src='./logo.png' width={'80px'}/>
    </div>
      <Home/>
    </>
  )
}

export default App
