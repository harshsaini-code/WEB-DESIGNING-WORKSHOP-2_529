import React, {useState} from 'react'

const Counter = () => {
    const[count, setCount]=useState(0);

    function increment() {
        setCount(count+1)        
    }
    function decrement() {
        setCount(count-1)        
    }
  return (
    <div style={{border: '2px solid gray'}}>
        <h1 style={{ color: "brown"}}>Counter App</h1>
        <br />
        <button onClick={increment} style={{padding: '10px', margin: '20px'}}>Increment</button>
<span>{count}</span>
<button onClick={decrement} style={{padding: '10px', margin: '20px'}}>Decrement</button>
    </div>
  )
}

export default Counter