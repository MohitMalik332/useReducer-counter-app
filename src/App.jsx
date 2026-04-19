
import { useReducer } from 'react';
import './App.css'


function reducer(state, action) {
    switch(action.type){
      case "INCREMENT":
        return { count: state.count + 1 };
      
      case "DECREMENT":
        return { count: state.count - 1 };

      case "RESET":
        return { count: 0 };

      default:
        return { state };
    }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  
  return (
    <div className="container">
    <div className="card">
      <h1 className="count">{state.count}</h1>

      <div className="buttons">
        <button className="inc" onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button className="dec" onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <button className="reset" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  </div>
  )
}

export default App
