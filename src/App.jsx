
import { useReducer } from 'react';
import './App.css'


function reducer(state, action) {
    switch(action.type){
      case "INCREMENT":
        return { 
          ...state, 
          history: [...state.history, state.count],
          count: state.count + state.step };
      
      case "DECREMENT":
        return {
          ...state,
          history: [...state.history, state.count],
          count: Math.max(0, state.count - state.step)
        };

      case "SET_STEP":
        return { ...state, step: action.payload }

      case "RESET":
        return { count: 0, step: 1, history: [] };

      case "UNDO":
        if (state.history.length === 0) return state;

        const lastValue = state.history[state.history.length - 1];

        return {
          ...state,
          count: lastValue,
          history: state.history.slice(0, -1)
        }

      default:
        return { state };
    }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0, 
    step: 1,
    history: []
  })
  
  return (
    <div className="container">
    <div className="card">

      <h1 className="count">{state.count}</h1>

      <input 
        type="number" 
        value={state.step}
        onChange={(e) => dispatch({ type: "SET_STEP", payload: Number(e.target.value)})}
      />

      <div className="buttons">
        <button className="inc" onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button 
          className="dec" 
          onClick={() => dispatch({ type: "DECREMENT" })}
          disabled={state.count === 0}
        >
          -
        </button>
        <button className="reset" onClick={() => dispatch({ type: "RESET" })}>Reset</button>

        <button 
          onClick={() => dispatch({ type: "UNDO" })}
          disabled={state.history.length === 0}
        >
          UNDO
        </button>
      </div>
    </div>
  </div>
  )
}

export default App
