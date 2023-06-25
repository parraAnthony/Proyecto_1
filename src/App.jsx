import Component from '../components/Component'
import Background from '../components/Background'
import phrases from '../data/phrases.json'
import './App.css'
import { useState } from 'react'
function App() {
  const [index,setindex]=useState(0)
  const next =()=>{ 
    const num=parseInt(Math.random()*(1+(phrases.length-1)-0)+0)
    setindex(num)
  }
  return (
    <article className='container__components'>
      <h1>Galletas de la fortuna</h1>
      <button onClick={next}>Probar suerte</button>
      <Background/>
      <Component data={phrases[index]}/>
    </article>
  )
}

export default App
