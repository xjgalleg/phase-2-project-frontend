import { useState } from 'react'

//main components
//header
import Header from './components/header'
//main component
//footer component

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    </>
  )
}

export default App
