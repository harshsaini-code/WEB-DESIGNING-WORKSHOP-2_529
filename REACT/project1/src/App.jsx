import { useState } from 'react'
import './App.css';
import Card from './components/Card';
import img from './assets/PFP.jpg';
import Counter from './components/Counter'

const App = () => {
  
  const [count, setCount] = useState(0)
  return (
    <div className="main">
      <Card name="Ajyendra Singh Jadon" age="20" course="Computer Science" img={img} link="https://picsum.photos/200/300"/>
      {/* <Counter /> */}
    </div>
  )
}

export default App;