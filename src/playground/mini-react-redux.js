import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider, connect } from "react-redux"

const countReducer = (state = 0,action) => {
  switch (action.type) {
    case "INC":
      return state + 1
    case "DEC":
      return state - 1
    case "RESET":
      return 0
    default:
      return state
  }
}

const store = createStore(countReducer)

const inc = () => ({
  type:"INC"
})
const dec = () => ({
  type:"DEC"
})
const reset = () => ({
  type:"RESET"
})

const onInc = () => {
  store.dispatch(inc())
}

const onDec = () => {
  store.dispatch(dec())
}

const onReset = () => {
  store.dispatch(reset())
}

store.subscribe(()=>{
  console.log(store.getState())
})

const Counter = (props) => {
  return (<div>
    <p>Count : {props.count}</p>
    <button onClick={onInc}>Inc</button>
    <button onClick={onDec}>Dec</button>
    <button onClick={onReset}>Reset</button>
  </div>)
}

const CounterConnect = connect((state)=>{
  return {
    count:state
  }
})(Counter)

const Info = () => (
  <Provider store={store}>
    <CounterConnect />
  </Provider>
)

ReactDOM.render(<Info info={store.getState()}/>,document.getElementById("app"))