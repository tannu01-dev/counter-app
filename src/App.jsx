import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// // import Counter from './counter'
import './Counter.css'

function App() {
  const [val, setVal] = useState(0);
  let handleincrement=()=>{
    setVal(val+1)
    console.log("increment",val)

  }
  let handledecre=()=>{
    setVal(val-1);
    console.log("decrement ",val)
  }
  let handlereset=()=>{
    setVal(0);
    console.log(val)
  }
  return(
    <div>
      <div className='ctr1'>
        <h1>COUNTER APP</h1>
      </div>
      <div className='ctr2'>
        <p>
          {val}
        </p>
      </div>
      <div className='ctr3'>
        <button onClick={handleincrement} className='inc'>Increment</button>
        <button onClick={handledecre} className='dec'>Decrement</button>
        <button onClick={handlereset} className='res'>Reset</button>
      </div>
    </div>
  )
}

export default App
