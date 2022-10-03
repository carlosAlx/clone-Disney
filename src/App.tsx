import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import styled from 'styled-components'
import { Banner } from './component/Banner'
import { Breve } from './component/Breve'
import { Planos } from './component/Planos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Banner />
      <Breve />
      <Planos />
 
    </div>
  )
}

export default App
